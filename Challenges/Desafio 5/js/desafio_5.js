/*

! DESAFIO 5 - Seção 2

*De volta às duas equipes de ginástica, os Golfinhos e os Coalas! 
*Existe uma nova disciplina de ginástica, que funciona de forma diferente.
*Cada equipe compete 3 vezes e, em seguida, a média das 3 pontuações é calculada (portanto, uma pontuação média por equipe). 
*Uma equipe só vence se tiver pelo menos o dobro da pontuação média da outra equipe. Caso contrário, nenhuma equipe ganha!

?Suas tarefas:

TODO| [ ]  Crie uma função de seta 'calcAometric' para calcular a média de 3 pontuações 
TODO| [ ]  Use a função para calcular a média para ambas as equipes 
TODO| [ ]  Crie uma função 'checkWinner' que leva a pontuação média de cada equipe como parâmetros ( 'avgDolhins' e 'avgKoalas'),
TODO| [ ]  então registra o vencedor no console, junto com os pontos de vitória, de acordo com a regra acima. Exemplo: "Coalas ganham (30 vs. 13)" 
TODO| [ ]  Use a função 'checkWinner' para determinar o vencedor para os Dados 1 e 2 5. 


*Dados 1: Os golfinhos pontuam 44, 23 e 71. Coalas pontuam 65, 54 e 49 
*Dados 2: Os golfinhos pontuam 85, 54 e 41. Koalas pontuaram 23, 34 e 27 

*/

// ------ Ignorar ------
console.log('%c Desafio %c 5 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 8px 10px;  border-radius: 50%;') 
// --------------------

let partida1Golfinhos, partida2Golfinhos, partida3Golfinhos;

let partida1Koalas, partida2Koalas, partida3Koalas;

//Partidas Golfinhos
partida1Golfinhos = 85;
partida2Golfinhos = 54;
partida3Golfinhos = 41;

//Partidas Koalas
partida1Koalas = 23;
partida2Koalas = 34;
partida3Koalas = 27;

console.log("----------- RESULTADO -----------")

const calcAverage = (valor1, valor2, valor3) => (valor1 + valor2 + valor3) / 3;

const winner = function (avgDolhins, avgKoalas) {
  
  console.log(`🐬 Golfinhos (${avgDolhins}) ✖️ 🐻 Koalas (${avgKoalas})`)  

  if (avgKoalas >= (avgDolhins * 2)) {
    console.log(`\nPortanto... 🐻 Koalas VENCEM! \nCom uma média de: ${avgDolhins} Pontos`);

  } else if (avgDolhins >= (avgKoalas * 2)) {
    console.log(`\nPortanto... 🐬 Golfinhos VENCEM! \nCom uma média de: ${avgDolhins} Pontos`);
  
  } else {
    console.log(`Infelizemente não há vencedores 😕`)
  }
}

const mediaGolfinhos = calcAverage(partida1Golfinhos,partida2Golfinhos, partida3Golfinhos);
const mediaKoalas = calcAverage(partida1Koalas, partida2Koalas, partida3Koalas)

winner(mediaGolfinhos, mediaKoalas);

