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
    
}
const renderError = message => {
    countriesContainer.insertAdjacentText('beforeend',`Error: ${message}`)
}


//! Lendo dados atravez e callbacks
// const getJSON = function(url, errorMessage="Ops! Something went wrong") {
    
//     return fetch(url)
//     .then(response => { 
        
//         if(!response.ok) {
//             throw new Error(`${errorMessage},\n ${response.status}`)
//         } else {
//             return response.json()
//         }
//     })
// }

// const getCountriesAndNeighbour = function(country) {

//     getJSON(`https://restcountries.eu/rest/v2/name/${country}`,"❌ Country not found")
//         .then(data => {
//             const neighbour = data[0].borders[0]

//             renderCountry(data[0])
//             console.log(data[0])
//             if(neighbour) {
//                 return  getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, "❌ Country not found");
//             } else {
//                 throw new Error('❌ No Neighbour found')
//             }
//         })
//         .then(data => renderCountry(data, "neighbour"))
//         .catch(error => { 
//             renderError(error.message)
//              console.log(error.message)
//         })
//         .finally(() => countriesContainer.style.opacity = 1)
// }

// getCountriesAndNeighbour('brazil')

//! Lendo dados atravez de async, await

const getCountriesAndNeighbour = async function(country) {

    const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const [ data ] = await response.json();
    
    if(!response.ok) {
       throw new Error('❌ Country not found')
    
    } else {
        renderCountry(data)
    }

    const neighbour = data.borders[0]
    
    if(!neighbour) {
        throw new Error("❌ No Neighbour found")
    
    } else {
        const resNeighbour = await fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        const dataNeigbour = await resNeighbour.json();
        renderCountry(dataNeigbour,'neighbour');
    }

    countriesContainer.style.opacity = 1;
}

getCountriesAndNeighbour('brazil');