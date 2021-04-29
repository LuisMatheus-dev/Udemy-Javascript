'use strict'
/*
! DESAFIO 24 - Seção 16
#[ ] 1. Crie uma função 'whereAmI' que leva como entrada um valor de latitude ('lat')
# e um valor de longitude ('lng') (são coordenadas GPS, exemplos estão em teste
# dados abaixo).

#[ ] 2. Faça a “geocodificação reversa” das coordenadas fornecidas. Meios de geocodificação reversa
# para converter coordenadas em um local significativo, como um nome de cidade e país.
# Use esta API para fazer geocodificação reversa: https://geocode.xyz/api. A chamada AJAX
# será feito para um URL com este formato:
# https://geocode.xyz/52.508,13.381?geoit=json. Use a API fetch e
# promete obter os dados. Não use a função 'getJSON' que criamos, que
# está trapaceando 

#[ ] 3. Assim que tiver os dados, dê uma olhada neles no console para ver todos os atributos
# que você recebeu sobre o local fornecido. Então, usando esses dados, registre um
# mensagem como esta para o console: “You are in Berlin, Germany”

# [ ] 4. Encadeie um método .catch ao final da cadeia de promessa e registre os erros no console

# [ ] 5. Esta API permite que você faça apenas 3 solicitações por segundo. Se você recarregar rápido, você
# obterá este erro com o código 403. Este é um erro com a solicitação. Lembrar,
# fetch () não rejeita a promessa neste caso. Portanto, crie um erro para rejeitar
# a promessa você mesmo, com uma mensagem de erro significativa

# [ ] 6. Agora é hora de usar os dados recebidos para renderizar um país. Então pegue o relevante
# atributo do resultado da API de geocodificação e conecte-o à API de países que temos usado.

# [ ] 7. Renderize o país e detecte quaisquer erros, assim como fizemos no último
# palestra (você pode até copiar este código, não há necessidade de digitar o mesmo código)

? Dados:
* Coordenadas 1: 52.508, 13.381 (Latitude, Longitude)
* Coordenadas 2: 19.037, 72.873
* Coordenadas 3: -33.933, 18.474
*/


// ------ Ignorar ------
console.log('%c Desafio %c 24 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 
