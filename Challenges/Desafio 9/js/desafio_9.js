'use strict'
/*
! DESAFIO 9 - Seção 3

*Dada uma série de temperaturas máximas previstas, o termômetro exibe um
*string com as temperaturas fornecidas. 
*Exemplo: [17, 21, 23] irá imprimir "... 17ºC em 1 dias ... 21ºC em 2 dias ... 23ºC em 3 dias ... "

?Your tasks:
* 1. Crie uma função 'printForecast' que leva em uma matriz 'arr' e registra um
* string como a acima no console. Experimente com os dois conjuntos de dados de teste.
* 2. Use a estrutura de solução de problemas: entenda o problema e divida-o
* em subproblemas!

?Test data:
* Data 1: [17, 21, 23]
* Data 2: [12, 5, -5, 0, 4]
*/

// ------ Ignorar ------
console.log('%c Desafio %c 9 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 8px 10px;  border-radius: 50%;') 
// --------------------

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {

  let forecast = "";
  console.log("\n---------[ Temperature on days ]----------")

  for(let temp = 0; temp < arr.length;temp++) {
    let tempIcon = arr[temp] <= 17 ? "❄️" : "🌤️"

    forecast += `${tempIcon} ${arr[temp]}°C em ${temp+1} dia(s)... `;
  }
  console.log(forecast);
}

printForecast(data1);
printForecast(data2);
