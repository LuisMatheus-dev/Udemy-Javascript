'use strict'
/*
! DESAFIO 24 - Seção 16
#[ X ] 1. Crie uma função 'whereAmI' que leva como entrada um valor de latitude ('lat')
# e um valor de longitude ('lng') (são coordenadas GPS, exemplos estão em teste
# dados abaixo).

#[ X ] 2. Faça a “geocodificação reversa” das coordenadas fornecidas. Meios de geocodificação reversa
# para converter coordenadas em um local significativo, como um nome de cidade e país.
# Use esta API para fazer geocodificação reversa: https://geocode.xyz/api. A chamada AJAX
# será feito para um URL com este formato:
# https://geocode.xyz/52.508,13.381?geoit=json. Use a API fetch e
# promisses obter os dados. Não use a função 'getJSON' que criamos, que
# estará trapaceando 

#[ X ] 3. Assim que tiver os dados, dê uma olhada neles no console para ver todos os atributos
# que você recebeu sobre o local fornecido. Então, usando esses dados, registre um
# mensagem como esta para o console: “You are in Berlin, Germany”

# [ X ] 4. Encadeie um método .catch ao final da cadeia de promessa e registre os erros no console

# [ X ] 5. Esta API permite que você faça apenas 3 solicitações por segundo. Se você recarregar rápido, você
# obterá este erro com o código 403. Este é um erro com a solicitação. Lembrar,
# fetch () não rejeita a promessa neste caso. Portanto, crie um erro para rejeitar
# a promessa você mesmo, com uma mensagem de erro significativa

# [ X ] 6. Agora é hora de usar os dados recebidos para renderizar um país. Então pegue o relevante
# atributo do resultado da API de geocodificação e conecte-o à API de países que temos usado.

# [ X ] 7. Renderize o país e detecte quaisquer erros, assim como fizemos no último
# palestra (você pode até copiar este código, não há necessidade de digitar o mesmo código)

? Dados:
* Coordenadas 1: 52.508, 13.381 (Latitude, Longitude)
* Coordenadas 2: 19.037, 72.873
* Coordenadas 3: -33.933, 18.474
*/


// ------ Ignorar ------
console.log('%c Desafio %c 24 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 

const countriesContainer = document.querySelector('.countries');

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

const getCountriesAndNeighbour = function(country) {

    getJSON(`https://restcountries.eu/rest/v2/name/${country}`,"❌ Country not found")
        .then(data => {
            const neighbour = data[0].borders[0]

            renderCountry(data[0])

            if(neighbour) {
                return  getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, "❌ Country not found");
            } else {
                throw new Error('❌ No Neighbour found')
            }
        })
        .then(data => renderCountry(data, "neighbour"))
        .catch(error => { 
            console.log(error.message)
        })
        .finally(() => countriesContainer.style.opacity = 1)
}


const getJSON = function(url) {
    return fetch(url)
        .then(response => {
            if(response.status === 200) {
                return response.json()  
            
            } else if (response.status === 403) {
                throw new Error ('Multiple requests please wait a few seconds for a new search')    
            
            } else {
                throw new Error ('Ops! Something went wrong')
            }
        })
}

const whereAmI = function(lat,lng) {
    getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(data => {
            const { city, country } = data;
            
            if (!city) {
                throw new Error ('❌ City and Country not found')
            } else {
                getCountriesAndNeighbour(country)
                console.log(`%c🔻 You are in %c ${city} in ${country}`,`font-size:15px;`,`font-size:15px; color:rgb(125, 213, 111); `)
            }
        }).catch(error => {
            console.error(error)
        })
        
    
}

whereAmI(52.508, 13.381);



