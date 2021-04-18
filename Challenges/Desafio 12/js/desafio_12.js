/*
! DESAFIO 12 - Seção 9

* Vamos continuar com nosso aplicativo de apostas em futebol! Desta vez, temos um mapa chamado
* 'gameEvents' (veja abaixo) com um registro dos eventos que aconteceram durante o
* jogos. Os valores são os próprios eventos e as chaves são os minutos em que
* cada evento aconteceu (um jogo de futebol tem 90 minutos mais algum tempo extra).

? Suas tarefas:
*** # [ X ] 1. Crie uma matriz de 'eventos' dos diferentes eventos do jogo que aconteceram (não duplicatas)

*** # [ X ] 2. Após o término do jogo, foi constatado o cartão amarelo a partir do minuto 64 foi injusto. 
*** # Portanto, remova este evento do registro de eventos do jogo.

*** # [ X ] 3. Calcule e registre a seguinte string no console: "Ocorreu um evento, em
*** # média, a cada 9 minutos "(lembre-se de que um jogo tem 90 minutos)"

*** # [ X ] 4. Faça um loop em 'gameEvents' e registre cada elemento no console, marcando
*** # seja no primeiro ou segundo tempo (após 45 min) do jogo, assim: [PRIMEIRA METADE] 17: ⚽ META
*/


// ------ Ignorar ------
console.log('%c Desafio %c 12 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 
// --------------------

console.log("-=-=-=-=-=- ⚽ Game Events -=-=-=-=-=-")

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔄 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔄 Substitution'],
  [64, '🟡 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔄 Substitution'],
  [72, '🔄 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟡 Yellow card'],
 ]);

const events = [...new Set(gameEvents.values())]
console.log(`In this game we had: \n`)

for(event of events) {
  console.log(event);
}

let average = 0;
let sum = 0;
let half = "";
console.log('\nUnfortunately, it was found that the yellow card was given unfairly.');
gameEvents.delete(64);

let gameDuration = [...gameEvents.keys()].pop(); 
average = gameDuration / gameEvents.size;

console.log(`\nThe average of events in the game is: ${average}`)

console.log(`\n-Full Registry:`)
for(let [minutes, eventPerHalf] of gameEvents) {
  half = minutes <= 45 ? `[ 🏳️ Frist half] ${minutes} min` : `[ 🏴 Second half] ${minutes} min`;
  console.log(`${half} ▶️ ${eventPerHalf}`)
}

const nome = "Maria Luiza";
let nomeComTratamento = nome.padStart(nome.length + 20,"*");
console.log(nomeComTratamento);

