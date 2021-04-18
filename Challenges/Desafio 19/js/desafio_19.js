/*
! DESAFIO 19 - Seção 11
* Julia e Kate ainda estão estudando cachorros, e desta vez estão estudando se cachorros estão comer muito ou pouco.
* Comer demais significa que a porção atual de comida do cão é maior do que o porção recomendada, e comer muito pouco é o oposto.
* Comer uma boa quantidade significa que a porção atual de comida do cão está dentro de um intervalo de 10%
* acima e 10% abaixo da porção recomendada.

? Your tasks:
#[ X ]  1. Faça um loop sobre a matriz de 'cachorros' contendo objetos de cachorro e, para cada cachorro, calcule
#     a porção de comida recomendada e adicione-a ao objeto como uma nova propriedade. Fazer
#     não crie um novo array, simplesmente faça um loop sobre o array. Forumla: recommendedFood = weight ** 0,75 * 28. 
#     (O resultado é em gramas de alimento e o peso deve ser em kg).

# [ X ]  2. Encontre o cachorro de Sarah e registre-se no console se ele está comendo muito ou pouco.
#     o array owners, e este é um pouco complicado (propositalmente)

#[ X ]  3.Crie uma matriz contendo todos os proprietários de cães que comem muito ('ownersEatTooMuch') e uma matriz
# com todos os donos de cães que comem muito pouco ('ownersEatTooLittle').

#[ X ]  4. Registre uma string no console para cada array criado em 3., assim: "Matilda and Alice and Bob's dogs eat too much!" 
#     e "Sarah and John and Michael's dogs eat too little!"

#[ X ]  5. Registre no console se há algum cachorro comendo exatamente a quantidade de comida recomendada (apenas verdadeiro ou falso)

#[ X ]  6. Registre no console se há algum cachorro comendo uma boa quantidade de comida (apenas verdadeiro ou falso)

#[ X ]  7. Crie uma matriz contendo os cães que estão comendo uma boa quantidade de comida (tente reutilizar a condição usada em 6.)

#[ X ]  8. Crie uma cópia superficial da matriz "cães" e classifique-a pela porção de comida recomendada em ordem crescente
# (tenha em mente que as porções estão dentro dos objetos do array
*/

// ------ Ignorar ------
console.log('%c Desafio %c 19 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//----------------- Task 1 ------------------------
dogs.forEach(dog => { 
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
//-------------------------------------------------


//----------------- Task 2 ------------------------
const sarahDog = dogs.find(dogs => dogs.owners.includes("Sarah"));

console.log('Sarah dog eating recommended food')
console.log(`Sarah's dog is eating to ${sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'litte'}`);
//-------------------------------------------------

//----------------- Task 3 ------------------------
const ownersEatTooMuch = dogs
  .filter(dog => dog.recommendedFood < dog.curFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.recommendedFood > dog.curFood)
  .flatMap(dog => dog.owners);

console.log("\n🔺 Owners with dog that eat too much:");
console.log(...ownersEatTooMuch);

console.log("\n🔻 Owners with dog that eat too little");
console.log(...ownersEatTooLittle);
//-------------------------------------------------

//----------------- Task 4 ------------------------
console.log(`\n🔺 ${ ownersEatTooMuch.join(" and ") } eating too much`);
console.log(`🔻 ${ownersEatTooLittle.join(" and ") } eating too little`);

//-------------------------------------------------

//----------------- Task 5 ------------------------
const eatingProperly = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`\nSome eating Properly ? ${eatingProperly}`);

//-------------------------------------------------

//----------------- Task 6 ------------------------
const eatingOkay = dogs.some(dog => {
  dog.curFood > (dog.recommendedFood * 0.9) && (dog.recommendedFood) * 1.10 < dog.curFood
});
console.log(`Some eating Okay ? ${eatingProperly}`);
//-------------------------------------------------

//----------------- Task 7 ------------------------
const eatingOkayList = dogs.filter(dog => {
  return dog.curFood > (dog.recommendedFood * 0.9) && (dog.recommendedFood) * 1.10 > dog.curFood
})

console.log('\nDogs that eat within the limit:');
console.log(eatingOkayList);
//-------------------------------------------------

//----------------- Task 7 ------------------------
const sortByRecommended = dogs
  .slice()
  .sort((dogFrist,dogSecond) => dogFrist.recommendedFood - dogSecond.recommendedFood)

console.log('Sorting by recommended food:');
console.log(sortByRecommended);
//-------------------------------------------------