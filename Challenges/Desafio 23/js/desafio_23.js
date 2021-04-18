'use strict'

/*
! DESAFIO 23 - Seção 13

? Suas tarefas:
#[ ] Recrie o Desafio nº 3, mas desta vez usando classes ES6: crie um 'EVCl' classe filha da classe 'CarCl'

#[ ] Tornar a propriedade 'charge' privada

#[ ] Implementar a capacidade de encadear o 'accelerate' e 'chargeBattery'
#métodos desta classe, e também atualizar o método 'freio' no 'CarCl' aula. Em seguida, experimente o encadeamento!

? Dados de teste:
* Carro de dados 1: 'Tesla' indo a 120 km / h, com carga de 23%
*/

// ------ Ignorar ------
console.log('%c Desafio %c 23 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 
console.log("\n--.--          |         ,-.-.         |     |\n  |  ,---.,---.|    ,---.| | |,---.,---|,---.|\n  |  |---'`---.|    ,---|| | ||   ||   ||---'|\n  `  `---'`---'`---'`---^` ' '`---'`---'`---'`---'")
console.log("Current State:")
console.log("--------------------------------------------------")

class CarCl { 
  
  #charge
  constructor(make, velocity) {
    this.make = make;
    this.velocity = velocity;
  }

  accelerate() {
    this.velocity += 20;
    this.charge = this.charge <= 0 ? 0 : this.charge - 1 ;

    if (this.charge) {
      console.log(`⭕ Car accelering into ${this.velocity} km/h | With Charge in 🔋 ${this.charge}%`)

    } else {
      console.log(`🔌 Car without charging, please connect power in the closest recharger-point`);
    }
    return this;
  };

  brake() {
    this.velocity -= 10;

    if (this.charge) {
      console.log(`🔴 Car slowing down to ${this.velocity} km/h | With Charge in 🔋 ${this.charge}%`);

    } else {
      console.log(`🔌 Car without charging, please connect power in the closest recharger-point`);  
    }
    return this;
  };
};

class EVCl extends CarCl {

  constructor(make, velocity, charge) {
    super(make,velocity)
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }

}

const Tesla = new EVCl("Tesla",120,23);

Tesla.accelerate().accelerate().brake();
