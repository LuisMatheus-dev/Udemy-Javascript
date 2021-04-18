/*
! DESAFIO 17 - Seção 11

* Voltemos ao estudo de Julia e Kate sobre cachorros. Desta vez, eles querem converter
* a idade dos cães para as idades humanas e calcular a idade média dos cães em seu estudo.

? Suas tarefas:
* Crie uma função 'calcAffetHumanAge', que aceita uma matriz de idades ('idades') e faz o seguinte em ordem:

#[ X ] 1. Calcule a idade do cão em anos humanos usando a seguinte fórmula: se o cão é <= 2 anos, humanAge = 2 * dogAge.
#    Se o cachorro tiver > 2 anos, humanAge = 16 + dogAge * 4
#[ X ] 2. Exclua todos os cães com menos de 18 anos humanos (que é o mesmo que manter cães com pelo menos 18 anos);
#[ X ] 3. Calcule a idade humana média de todos os cães adultos (você já deve saber de outros desafios, como calculamos as médias)
#[ X ] 4. Execute a função para ambos os conjuntos de dados de teste.

? Dados de teste:
* Dados 1: [5, 2, 4, 1, 15, 8, 3];
* Dados 2: [16, 6, 10, 5, 6, 1, 4];

! DESAFIO 18 - Seção 11

* Reescreva a função 'calcAffetHumanAge' do Desafio nº 2, mas desta vez
* como uma função de seta, e usando o encadeamento!
*/

// ------ Ignorar ------
console.log('%c Desafio %c 17-18 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 10px;') 

const Kate = [5, 2, 4, 1, 15, 8, 3];
const Julia = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function(dogAges) {

  const agesHuman = dogAges.map(age =>  age <= 2 ? 2 * age : 16 + age * 4 );
  const adults = agesHuman.filter(age => age >= 18)
  const average = adults.reduce((acm, age) => acm + age ,0) / adults.length

  return average
}

const calcAverageHumanAge2 = function(dogAges2) {

  const average2 = dogAges2
    .map(age =>  age <= 2 ? 2 * age : 16 + age * 4 )
    .filter(age => age >= 18)
    .reduce((acm, age, _, arr) => (acm + age) / arr.length,0) 

  return average2
}

const avg1 = calcAverageHumanAge(Kate);
const avg2 = calcAverageHumanAge(Julia);

const avg1a = calcAverageHumanAge2(Kate);
const avg2b = calcAverageHumanAge2(Julia);

console.log('Without chaining')
console.log(avg1, avg2);

console.log('🔗 With chaining')
console.log(avg1a, avg2b);