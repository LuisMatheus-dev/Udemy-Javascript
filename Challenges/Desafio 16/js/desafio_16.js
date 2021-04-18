/*
! DESAFIO 16 - Seção 11

* Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
* about their dog's age, and stored the data into an array (one array for each). For
* now, they are just interested in knowing whether a dog is an adult or a puppy.
* A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
* old.

Julia e Kate estão fazendo um estudo sobre cachorros. Então, cada um deles perguntou a 5 donos de cães
sobre a idade do cachorro e armazenou os dados em uma matriz (uma matriz para cada). Pra
agora, eles estão apenas interessados em saber se um cachorro é adulto ou filhote.
Um cão é um adulto se tiver pelo menos 3 anos e é um cachorro se tiver menos de 3 anos
velho.

? Your tasks:
* Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

#[ X ] 1. Julia found out that the owners of the first and the last two dogs actually have
#   cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
#   (because it's a bad practice to mutate function parameters)

Julia descobriu que os donos do primeiro e dos dois últimos cachorros na verdade tinham gatos, não cachorros!
Portanto, crie uma cópia superficial da matriz de Julia e remova as idades do gato dessa matriz copiada
(porque é uma prática ruim alterar os parâmetros de função)

#[ X ] 2. Create an array with both Julia's (corrected) and Kate's data

#[ X ] 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
#   is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")

#[] 4. Run the function for both test datasets

? Test data:
* Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
* Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

// ------ Ignorar ------
console.log('%c Desafio %c 16 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 

const Julia = [9, 16, 6, 8, 3];
const Kates = [10, 5, 6, 1, 4];

const checkDogs = function(dogsJulia,dogsKate) {

  const onlyDogsJulia = dogsJulia.slice(1,-2);
  const bothDogs = onlyDogsJulia.concat(dogsKate);

  bothDogs.forEach((dogAge, number) => {
      let output = dogAge >= 3 ? `Dog number ${number+1} is an 🐕 adult, and is ${dogAge} years old` : `Dog number ${number+1} is still a 🐶 puppy`
      console.log(output)
    }); 
  
  
  
}

checkDogs(Julia, Kates);