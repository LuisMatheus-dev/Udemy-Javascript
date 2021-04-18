'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');



/*
!Features a serem construidas

#[ ] Opção para deletar todos pontos do mapa 
#[ ] Pop-Up Customizados
#[ ] Ponto de inicio e fim de corrida
#[ ] Montrar no pop-up a localização exata (bairro,cidade)
*/

let map, mapEvent, temporaryPin, work_por_classes, work_por_database;
class App {
  workouts = [];
  mapZoomLevel = 13;

  constructor() {

    //Get user's position
    this._getPosition();

    //Get data from local storage
    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField)
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  };

  _getPosition() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => alert("Could not get your position 😢"));
    };

  };

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    let workout;
    
    map = L.map('map').setView(coords, this.mapZoomLevel);
  
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //Handling clicks on map
    map.on('click', this._showForm);

    this.workouts.forEach(work => this.newWorkoutMarker(work.workout));

   
  };

  _showForm(mapE) {
    mapEvent = mapE
    const { lat, lng } = mapEvent.latlng;
   
    let temporary = L.icon({
      iconUrl: `./point-temporary.svg`,
      iconSize: [38, 38],
      iconAnchor: [20, 20],
      popupAnchor: [-3, -20],
      shadowUrl: '',
      shadowSize: [75, 50],
      shadowAnchor: [27, 80],
    })
    temporaryPin = L.marker([lat, lng], { icon: temporary}).addTo(map);

    form.classList.remove('hidden');
    inputDistance.focus();
  };

  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  };

  _hideForm() {
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = inputType.value = ''
    
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => form.style.display = 'grid', 1000);
  };
  
  _newWorkout(e) {
    e.preventDefault();

    const { lat, lng } = mapEvent.latlng;
    const type = inputType.value;
    let workout, isValid;

    let distance = +inputDistance.value;
    let duration = +inputDuration.value;

    const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    switch (type) {
      
      case 'running':
        let cadence = +inputCadence.value;
        isValid = !validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)
     
        if(isValid) {
          return alert('Inputs have to be positive numbers');
        
        } else {
          workout = new Running([lat, lng], distance ,duration, cadence);
        }
        break
    
      case 'cycling': 
        let elevation = +inputElevation.value;
        isValid = !validInputs(distance, duration, elevation) || !allPositive(distance, duration)

        if(isValid) {
          return alert('Inputs have to be positive numbers');
        
        } else {
          workout = new Cycling([lat, lng], distance ,duration, elevation);
        }
        break 

      default: alert('Inexpected error');
    }
    //Ensures that the last scan is erased
    isValid = ''
    
    //Add new object to workout array
    this.workouts.push({ id:workout.id ,'workout':workout });
  
    //Add Pin on map
    this.newWorkoutMarker(workout);
   
    //Render workout on list
    this._renderWorkout(workout);

    //Clear fields
    this._hideForm();

    //set local storage to all workouts
    this._setLocalStorage(workout);

    temporaryPin.remove(); 
  };
  
  _getPin(type) {
    if(type === 'running') {
      
      return L.icon({
        iconUrl: `./point-running.svg`,
        iconSize: [38, 95],
        iconAnchor: [20, 80],
        popupAnchor: [-3, -50],
        shadowUrl: './icon-shadow.png',
        shadowSize: [75, 50],
        shadowAnchor: [28, 49],
      });
    
    } else if (type === 'cycling') {
  
      return L.icon({
        iconUrl: `./point-cycling.svg`,
        iconSize: [38, 95],
        iconAnchor: [20, 80],
        popupAnchor: [-3, -50],
        shadowUrl: './icon-shadow.png',
        shadowSize: [75, 50],
        shadowAnchor: [28, 49],
      });
    }
  }

  newWorkoutMarker(workout) {

      L.marker(workout.coords,{ icon: this._getPin(workout.type)})
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
          })
        )
        .setPopupContent(`${workout.type === 'running' ? '🏃' : '🚴' } ${workout.description}`)
        .openPopup();
      
  };
  
  _deleteBtn() {
    const btn = document.querySelector('.far');

    btn.addEventListener('mouseover', (e) => { 
      e.target.classList.add('hover')  
    })

    btn.addEventListener('mouseleave', (e) => { 
      e.target.classList.remove('hover')  
    })

    btn.addEventListener('click', () => { 
      let index = this.workouts.findIndex( work => work.id === btn.dataset.id)
      console.log(index);
      this.workouts.splice(index,1);
      this._setLocalStorage();
      
      location.reload();

    })
  }

  _renderWorkout(workout) {
    let html = 
    `<li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}<i class="far fa-times-circle" data-id="${workout.id}"></i></h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃' : '🚴' }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱️</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>`;

    if(workout.type === 'running') {
      html += 
        `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`
    
      } else if (workout.type === 'cycling') {
          html += 
          `<div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed.toFixed(1)}</span>
                <span class="workout__unit">km/h</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⛰️</span>
                <span class="workout__value">${workout.elevationGain}</span>
                <span class="workout__unit">m</span>
              </div>
            </li>`
    } 

    form.insertAdjacentHTML('afterend', html);
    this._deleteBtn()
   
  };

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) {
      return
    
    } else {
      const {workout} = this.workouts.find(work => work.id === workoutEl.dataset.id);
      
      //Focus in pin
      map.setView(workout.coords, this.mapZoomLevel, {
        animate: true,
        pan: {
          duration: 1
        }
      });
    } 
  };

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  };

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    
    if(!data) {
      return 
   
    } else {
      this.workouts = data;
      this.workouts.forEach(work => this._renderWorkout(work.workout));
    }

  };
};


class Workout {
  date = new Date();s
  id = Date.now().toString().slice(-10);
  
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running'

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace
  }
}

class Cycling extends Workout {
  type = 'cycling'

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
              
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.pace;
  }
}

const app = new App();
