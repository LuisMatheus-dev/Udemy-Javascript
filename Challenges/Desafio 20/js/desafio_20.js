/*
! DESAFIO 20 - Seção 13

*** #[X] Use uma função construtora para implementar um 'Carro'. Um carro tem uma 'marca' e uma
*** #propriedade 'speed'. A propriedade 'velocidade' é a velocidade atual do carro em km / h.

*** #[] Implemente um método de 'aceleração' que aumentará a velocidade do carro em 10, e registre a nova velocidade no console

*** #[] Implemente um método de 'freio' que diminuirá a velocidade do carro em 5, e registre a nova velocidade para o console

*** #[] Crie 2 objetos 'Carro' e experimente chamar 'acelerar' e 'freio' várias vezes em cada um deles

? Dados de teste:
* Carro de dados 1: 'BMW' indo a 120 km / h
* Carro de dados 2: 'Mercedes' indo a 95 km / h 
*/

// ------ Ignorar ------
console.log('%c Desafio %c 20 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 


const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function() {
  this.speed += 10;

  console.log(`The Car speed is: ${this.speed} km/h 🚗💨`);
  
}

Car.prototype.brake = function() {
  this.speed -= 5;
  
  let curSpeed = this.speed <= 0 ? `The car is the stopped 🚗` : `The Car speed is: ${this.speed} km/h 🚗💨`;
  console.log(curSpeed);

}; 

const ferrari = new Car('Ferrari',5);
const fusca = new Car('Ferrari',100);

ferrari.accelerate();
fusca.accelerate();

ferrari.brake();
ferrari.brake();
ferrari.brake();
