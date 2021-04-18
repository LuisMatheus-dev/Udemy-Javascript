/*

! DESAFIO 3 - Seção 1 

*Existem duas equipes de ginástica, Golfinhos e Coalas. Eles competem contra cada
*outras 3 vezes. O vencedor com a pontuação média mais alta ganha um troféu!


? Suas tarefas:
TODO [ X ] Calcule a pontuação média de cada equipe, usando os dados de teste abaixo

TODO [ X ] Compare as pontuações médias da equipe para determinar o vencedor da competição, e imprima no console.

TODO [ X ] Bônus 1: Inclui um requisito para uma pontuação mínima de 100. Com esta regra, um
todo Ta equipe só vence se tiver uma pontuação maior que a outra equipe, e ao mesmo tempo um pontuação de pelo menos 100 pontos. 

TODO [ X ] Bônus 2: a pontuação mínima também se aplica a um empate! Então, um empate só acontece quando
todo ambas as equipes têm a mesma pontuação e ambas têm uma pontuação maior ou igual a 100 pontos. Caso contrário, nenhuma equipe ganha o troféu

? Dados de teste:
* Dados 1: Os golfinhos pontuam 96, 108 e 89. Os Koalas pontuaram 88, 91 e 110
* Bônus de dados 1: Os golfinhos pontuam 97, 112 e 101. Koalas pontuam 109, 95 e 123
* Bônus de dados 2: Os golfinhos pontuam 97, 112 e 101. Os Koalas pontuaram 109, 95 e 106

*/

// ------ Ignorar ------
console.log('%c Desafio %c 3 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 8px 10px;  border-radius: 50%;') 
// --------------------

let partida1Golfinhos, partida2Golfinhos, partida3Golfinhos, mediaGolfinhos;

let partida1Coalas, partida2Coalas, partida3Coalas, mediaCoalas;

//Partidas Golfinhos
partida1Golfinhos = 97
partida2Golfinhos = 112
partida3Golfinhos = 101

//Partidas Coalas
partida1Coalas = 109
partida2Coalas = 95
partida3Coalas = 106

//Media de Ambos
mediaGolfinhos = (partida1Golfinhos + partida2Golfinhos + partida3Golfinhos) / 3;
mediaCoalas = (partida1Coalas + partida2Coalas + partida3Coalas) / 3;

console.log("---------- RESULTADO ----------");
console.log(`Golfinhos 🐬 \n◾ Partida 1: ${partida1Golfinhos} \n◾ Partida 2: ${partida2Golfinhos} \n◾ Partida 2: ${partida3Golfinhos}`);
console.log(`Coalas 🐻 \n◾ Partida 1: ${partida1Coalas} \n◾ Partida 2: ${partida2Coalas} \n◾ Partida 2: ${partida3Coalas}`);

let golfinhosVencedores = mediaGolfinhos > mediaCoalas 
let coalasVencedores = mediaCoalas > mediaGolfinhos

if ( golfinhosVencedores && mediaGolfinhos >= 100) {
  console.log(`Portanto... Golfinhos 🐬 VENCEM!`);
} else if ( coalasVencedores && mediaCoalas >= 100) {
  console.log(`Portanto... Coalas 🐻 VENCEM!`);
} else if (mediaCoalas >= 100) {
  console.log(`Ouve Empate ⚖️ `);
} else {
  console.log(`As medias não foram suficientes`)
}
