/*
! DESAFIO 21 - Seção 13

#[ X ]  Recrie o Desafio nº 1, mas desta vez usando uma classe ES6 (chame de 'CarCl') 
#[ X]  Adicione um getter chamado 'speedUS' que retorna a velocidade atual em mi / h (dividido por 1,6) 
#[ X]  Adicione um setter chamado 'speedUS' que define a velocidade atual em mi / h (mas converte para km / h antes de armazenar o valor, multiplicando a entrada por 1,6) 
#[ ]  Crie um carro novo e experimente o 'acelerar' e métodos de 'freio' e com o getter e setter. 

? Dados de teste: 
*Data car1: 'Ford' indo a 120 km / h
*/

// ------ Ignorar ------
console.log('%c Desafio %c 21 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 

class CarCl {

  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {

    if (this.speed <= 0) {
      console.log(`The car is the stopped 🚗`);

    } else {
      console.log(`the Car speed is: ${this._speedUS / 1.6} km/h 🚗💨`);
    } 

  }

  set speedUS() {

    this._speedUS = this.speed * 1.6;
    console.log(`The Car speed is: ${this._speedUS} km/h 🚗💨`);
  }

  accelerate() { this.speed += 10 };

  brake() { this.speed -= 5 ? this.speed += 10 : this.speed = 0 };
}

const ford = new CarCl('ford',120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUs = 10;
ford.speedUS;