/*
! DESAFIO 10 - Seção 9

* Estamos construindo um aplicativo de apostas em futebol (futebol para meus amigos americanos)!
* Suponha que recebamos dados de um serviço da web sobre um certo jogo (variável 'jogo' em
* próxima página). Neste desafio vamos trabalhar com esses dados.

? Suas tarefas:
*** TODO | [ X ] 1. Crie uma matriz de jogadores para cada equipe (variáveis ​​'player1' e 'player2')

*** TODO | [ X ] 2. O primeiro jogador em qualquer matriz de jogadores é o goleiro e os outros são o campo
*** TODO | jogadoras. Para o Bayern de Munique (equipe 1), crie uma variável ('gk') com o
*** TODO | nome do goleiro e um array ('fieldPlayers') com todos os 10 restantes jogadores de campo

*** TODO | [ X ] 3. Crie uma matriz 'allPlayers' contendo todos os jogadores de ambas as equipes (22 jogadoras)

*** TODO | [ X ] 4. Durante o jogo, o Bayern de Munique (equipe 1) usou 3 jogadores substitutos.
*** TODO | Então crie um nova matriz ('player1Final') contendo todos os jogadores originais da equipe1 mais 'Thiago', 'Coutinho' e 'Perisic'

*** TODO | [ X ] 5. Com base no objeto game.odds, crie uma variável para cada ímpar (chamada 'equipe1', 'empate' e 'equipe2')

*** TODO | [ X ] 6. Escreva uma função ('printGoals') que recebe um número arbitrário de jogadores nomes (não uma matriz)
*** TODO | e imprime cada um deles no console, junto com o número de gols marcados no total (número de nomes de jogadores passados)

*** TODO | [ X ] 7. A equipe com menor odd tem maior probabilidade de vencer. Imprima para o console que
*** TODO | a equipe tem mais chances de vencer, sem usar uma instrução if / else ou o ternário operador.

? Dados de teste para 6: 
* Primeiro, use os jogadores 'Davies', 'Muller', 'Lewandowski' e 'Kimmich'.
* Em seguida, chame a função novamente com jogadores de game.scored
*/

// ------ Ignorar ------
console.log('%c Desafio %c 10 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 
// --------------------

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski'],
  ['Burki','Schulz','Hummels',  'Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho','Gotze'],],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 }
};

//Teans
const players1 = game.players[0];
const players2 = game.players[1];

const [gk,...fieldPlayers] = players1;
const allPlayers = [...players1,...players2];

const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x:draw, team2 } = game.odds;

const possibleWinner = team1 < team2 && '\nTeam 1, more likely to win 🏆 ';

const printGoals = function(...players) {

  let str = "";
  console.log("=-=-=-=-=-= ⚽🌫️🦵 Players Goals =-=-=-=-=-=")
 
  for (let player = 0; player < players.length; player++) {
    str += ` 👨 ${players[player]}`;
  }

  console.log(str);
  console.log(`Scored together: ${players.length} goals!`)
}

printGoals(...game.scored);
console.log(possibleWinner);
