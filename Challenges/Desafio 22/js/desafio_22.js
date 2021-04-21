'use strict'

/*
! DESAFIO 22 - Seção 13

? Suas tarefas:
*** #[ X ] Use uma função de construtor para implementar um ElectricCar (chamado 'EV') como uma "classe" filha de 'Carro'. 
*** #     Além de uma marca e velocidade atual, o 'EV' também tem a carga atual da bateria em% (propriedade 'charge') 

*** #[ X ]  Implemente um método 'chargeBattery' que leva um argumento 'chargeTo' e define a carga da bateria para 'chargeTo'

#[ ]  Implemente um método de 'aceleração' que aumente a velocidade do carro em 20 e diminua a carga em 1%. 
#Em seguida, registre uma mensagem como esta: 'Tesla indo a 140 km / h, com uma carga de 22%' 

#[ ]  Crie um objeto de carro elétrico e experimente chamar 'acelerar', 'frear' e 'carregar a bateria' (carga de 90% ) 
#Observe o que acontece quando você 'acelera'! Dica: Reveja a definição de polimorfismo.

? Dados de teste: 
* Data car1: 'Tesla' indo a 120 km / h, com carga de 23% 
*/

// ------ Ignorar ------
console.log('%c Desafio %c 22 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 
console.log("\n--.--          |         ,-.-.         |     |\n  |  ,---.,---.|    ,---.| | |,---.,---|,---.|\n  |  |---'`---.|    ,---|| | ||   ||   ||---'|\n  `  `---'`---'`---'`---^` ' '`---'`---'`---'`---'")
console.log("Current State:")
console.log("--------------------------------------------------");
const Car = function(make, velocity) {
  this.make = make;
  this.velocity = velocity;
}

Car.prototype.accelerate = function() {

  this.velocity += 20;

  this.charge = this.charge <= 0 ? 0 : this.charge - 1 ;

  if (this.charge) {
    console.log(`⭕ Car accelering into ${this.velocity} km/h | With Charge in 🔋 ${this.charge}%`)

  } else {
    console.log(`🔌 Car without charging, please connect power in the closest recharger-point`)
  }
}

Car.prototype.brake = function() {
  this.velocity -= 10;

  if (this.charge) {
    console.log(`🔴 Car slowing down to ${this.velocity} km/h | With Charge in 🔋 ${this.charge}%`);
  } else {
    console.log(`🔌 Car without charging, please connect power in the closest recharger-point`);
  }
};

const EV = function(make, velocity, charge) {
  
  Car.call(this, make, velocity);
  this.charge = charge;
}

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
}

EV.prototype = Object.create(Car.prototype);

const Tesla = new EV("Tesla",120,2);

Tesla.accelerate();
Tesla.accelerate();
Tesla.brake();
