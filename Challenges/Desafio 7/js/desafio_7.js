'use strict'
/*

! DESAFIO 7 - Seção 2

*Vamos voltar a Mark e John comparando seus IMCs! Desta vez, vamos usar objetos para
*implemente os cálculos! Lembre-se: IMC = massa / altura ** 2 

?Suas tarefas:
TODO | [ X ] Para cada um, crie um objeto com propriedades para seu nome completo, massa e altura (Mark Miller e John Smith)
TODO | [ X ] Crie um método 'calcBMI' em cada objeto para calcular o IMC (o mesmo método em ambos os objetos). 
TODO | [ X ] Armazene o valor do IMC em uma propriedade e também o devolva do método
TODO | [ X ] Exiba console de quem tem o IMC mais alto, junto com o nome completo e o respectivo IMC. 

*/

// ------ Ignorar ------
console.log('%c Desafio %c 7 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 8px 10px;  border-radius: 50%;') 
// --------------------

const MarkMiller = {
  fullName: "Mark Miller", 
  weight: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.weight / (this.height ** 2);
    return this.BMI; 
  }
}; 

const JohnSmith = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.weight / (this.height ** 2);
    return this.BMI;
  }
};

const BMIBigger = (BMIJohn, BMIMark) => { 
 
  if(BMIJohn > BMIMark) {
    console.log(`${JohnSmith.fullName} it has bigger BMI!`);
 
  } else if (BMIMark > BMIJohn) {
    console.log(`${JohnSmith.fullName} it has bigger BMI!`);
 
  } else {
    console.log(`The two it has BMI equals`);
  }
}


console.log("------------ RESULTADO -----------")
console.log(`${JohnSmith.fullName} have BMI, equal the: ⚖️  ${JohnSmith.calcBMI()}`);
console.log(`${MarkMiller.fullName} have BMI, equal the: ⚖️   ${MarkMiller.calcBMI()}`);

BMIBigger(JohnSmith.BMI, MarkMiller.BMI);