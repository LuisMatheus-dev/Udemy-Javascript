/*
! DESAFIO 13 - Seção 9

* Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
* The input will come from a textarea inserted into the DOM (see code below to
* insert the elements), and conversion will happen when the button is pressed.

? Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

? Should produce this output (5 separate console.log outputs):
#[ ] underscoreCase   ✔️
#[ ] firstName        ✔️✔️ 
#[ ] someVariable     ✔️✔️✔️
#[ ] calculateAge     ✔️✔️✔️✔️
#[ ] delayedDeparture ✔️✔️✔️✔️✔️

* Escreva um programa que receba uma lista de 
* nomes de variáveis escritos em underscore_case 
* e converta-os para camelCase.
* A entrada virá de uma área de texto inserida 
* no DOM (veja o código abaixo para insira os elementos), e a conversão acontecerá
* quando o botão for pressionado.
*/


// ------ Ignorar ------
console.log('%c Desafio %c 13 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 

document.querySelector("body").append(document.createElement('textarea'));
document.querySelector("body").append(document.createElement('button'));
document.querySelector("body").append(document.createElement('span'));

const textArea = document.querySelector("textarea");
const btn = document.querySelector("button");
const span = document.querySelector("span");

btn.textContent = "Formalize In camelCase";
btn.style = `background-color: rgb(125, 213, 111);text-decoration: none;border: none;color: white;width: 200px;border-radius: 20px;font-size: 15px;margin: 10px; padding: 10px;`
textArea.style = `width: 200px;height: 150px;`
span.style = `width: 200px;height: 100px;display: none;background-color: #abf0a1;font-family: "Arial";font-size: 15px;padding: 5px;`


// --------------------

const showOutput = function(value) {
  span.style.display = "block";
  span.textContent = value;
}

const findBiggest = function([...list]) {
  let biggest = 0

  for(let [i, item] of list.entries()) {

      if(item.length > biggest)  {
        biggest = item.length;
      } 
  }
  return biggest;
}


const formalize = function() {
  const names = textArea.value;
  let str = names.toLowerCase().trim().split("\n");
  let output = "";
  const strFormalized = [];

  console.log(`Before Formalize:\n --------------\n ${names}`);
  console.log(str);

  let biggestLength = findBiggest(str);

  for(let [index, word] of str.entries()) {
   
    const [frist, words] = word.split("_");
    let icon = "✔️".repeat(index + 1);
    output = frist + words.replace(words[0],words[0].toUpperCase());
    strFormalized.push(output.padEnd(biggestLength + 1) + icon + "\n");

  }
  console.log(strFormalized.join(""));
  showOutput(strFormalized.join(""));
}

btn.addEventListener('click', formalize);
