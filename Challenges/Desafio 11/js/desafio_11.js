/*
! DESAFIO 11 - Seção 9
* Vamos continuar com nosso aplicativo de apostas em futebol! 
* Continue usando a variável 'jogo' de antes. 

? Suas tarefas: 
 *** # [ X ] 1. Faça um loop sobre o array game.scored e imprima o nome de cada jogador no console, junto com o número do objetivo 
 *** # (Exemplo: "Objetivo 1: Lewandowski") 

 *** # [ X ] 2. Use um loop para calcular a média ímpar e registrá-lo o console (Já estudamos como calcular as médias, você pode verificar se não se lembra) 

 *** # [ X ] 3. Imprima as 3 probabilidades no console, mas de uma forma formatada bacana, exatamente assim: 
 *** #Probabilidade de vitória Bayern de Munique: 1,33 Probabilidade de empate: 3,25 Probabilidade de vitória Borrussia Dortmund: 6.5 
 *** # Obtenha os nomes dos times diretamente do objeto do jogo, não os codifique (exceto para "empate").
 *** # Dica: Observe como as probabilidades e os objetos do jogo têm os mesmos nomes de propriedades 
 
 # [ ] 4. Bônus: Crie um objeto chamado 'marcadores' que contém os nomes dos jogadores que marcaram como propriedades 
 # e o número de gols como o valor. Neste jogo, será semelhante a: {Gnarby: 1, Hummels: 1, Lewandowski: 2}
*/

// ------ Ignorar ------
console.log('%c Desafio %c 11 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 
// --------------------
let sum = 0;
let averageOdd = 0;
const scorers = {}

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

console.log("-=-=-=-=-=- ⚽ Game Statistics -=-=-=-=-=-")

for (const [goal, player] of game.scored.entries()) {
  
  console.log(`👨 ${player} made a : ⚽ ${goal + 1}° goal`)
  scorers[player] = goal;

}

const odds = Object.entries(game.odds);

console.log("\n🧮 Odds:")

for (const [odd, value] of odds) {
  team = game[odd] ? `${game[odd] + " vitory"}` : "embate";
  sum += value;

  console.log(`-The winning chance of ${team} is: ${value} `)
}

averageOdd = Math.trunc(sum / odds.length);

console.log(`The average of the odds is approximately: ${averageOdd}`);

console.log("\nPlayer Summary:")

console.log(scorers);

