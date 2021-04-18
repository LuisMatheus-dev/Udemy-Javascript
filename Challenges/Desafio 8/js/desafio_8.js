'use strict'
/*

! DESAFIO 8 - Seção 2

*Vamos melhorar ainda mais a calculadora de dicas de Steven, desta vez usando loops!

?Suas tarefas:
TODO | [ X ] Crie uma matriz de 'contas' contendo todos os 10 valores de contas de teste
TODO | [ X ] Crie matrizes vazias para as dicas e os totais ('dicas' e 'totais')
TODO | [ X ] Use a função 'calcTip' que escrevemos antes (não há necessidade de repetir) para calcular gorjetas e valores totais (fatura + gorjeta) para cada valor de fatura na matriz de contas. 
TODO | [ X ] Use um para loop para realizar os 10 cálculos!

?Dados de teste: 
*22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52

?Bônus:
TODO | [ X ] Bônus: Escreva uma função 'calcAwhile' que leva uma matriz chamada 'arr' como um argumento. Esta função calcula a média de todos os números no dado
TODO | Primeiro, você precisará adicionar todos os valores na matriz. Para fazer a adição, comece criando uma variável 'soma' que começa em 0. Em seguida, faça um loop sobre o array usando um loop for.
TODO | Em cada iteração, adicione o valor atual ao variável 'sum'. Assim, ao final do loop, você tem todos os valores somados
TODO | Para calcular a média, divida a soma que você calculou antes pelo comprimento da matriz (porque esse é o número de elementos)
TODO | Chame a função com a matriz 'totais'
*/

// ------ Ignorar ------
console.log('%c Desafio %c 8 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 8px 10px;  border-radius: 50%;') 
// --------------------

const tips = [], accounts = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52], totals = [];
const calcTip = account => account >= 50 && account <= 300 ? account * 0.15 : account * 0.2;

function closeAccount() {
  
  for(let account = 0; account < accounts.length; account++) {
    
    let accountValue = accounts[account]
    let tip = calcTip(accountValue);
    let total  = accountValue + tip;
      
    tips.unshift(tip);
    totals.unshift(total);

    console.log(`\nACCOUNT-${account}`)
    console.log(`🔸 The account valor, is: 💵 R$: ${accountValue},00`);
    console.log(`🔸 Therefore tip is:      💵 R$: ${tip},00`);
    console.log(`🔸 Total:                 💰 R$: ${total},00`);

  }
}

function calcAverage(arr) {
  
  let average, sum = 0;

  for(let i = 0; i < arr.length;i++) {
    sum += arr[i];
  }

  average = Math.trunc(sum / arr.length);
  console.log(`\nThe average of all values is: ${average}`)
}

console.log("\n\n------------- 🛒 RECEIPT -------------");

closeAccount();
calcAverage((totals));