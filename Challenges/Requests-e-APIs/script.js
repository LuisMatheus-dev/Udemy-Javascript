'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function(data, className = '') {

    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
            </div>
        </article>`;
    
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
    
}

const getCountriesAndNeighbour = function(country) {
    
    const request = new XMLHttpRequest();
    request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`);
    request.send()

    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);

        //Render country (1)
        renderCountry(data);
        console.log(data)
        //Get neighbour country (2)
        const [neighbour] = data.borders;

        if( neighbour ) {

            //AJAX call country 2
            const requestNeighbour = new XMLHttpRequest();
            
            requestNeighbour.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`)
            requestNeighbour.send();

            requestNeighbour.addEventListener('load', function() {
                const neighbourData = JSON.parse(this.responseText);
                console.log(neighbourData);

                renderCountry(neighbourData, 'neighbour')
            })
        }
    })
   
}

getCountriesAndNeighbour('brazil')