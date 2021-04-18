'use strict'
/*

! DESAFIO 6 - Seção 2

*Steven ainda está construindo sua calculadora de gorjetas, usando as mesmas regras de antes: 
*gorjeta 15% da conta se o valor da conta estiver entre 50 e 300, e se o valor for diferente, a gorjeta é 20%.

?Suas tarefas:
TODO| [ X ] Escreva uma função 'calcTip' que recebe qualquer valor de fatura como entrada e retorna calculada com base nas regras acima (você pode conferir
TODO| [ X ] E agora vamos usar arrays! Portanto, crie uma matriz de 'contas' contendo os dados de teste abaixo
TODO| [ X ] Crie uma matriz de 'gorjetas' contendo o valor da gorjeta para cada conta, calculado a partir de a função que você criou antes
TODO| [ X ] Bônus: Crie uma matriz 'total' contendo os valores totais, então a conta + gorjeta

? Dados de teste: 125, 555 e 44

*/

// ------ Ignorar ------
console.log('%c Desafio %c 6 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 8px 10px;  border-radius: 50%;') 
// --------------------
const accounts = [], tips = [], totals = [];

const calcTip = receipt => receipt >= 50 && receipt <= 300 ? receipt * 0.15 : receipt * 0.2;

function closeAccount(account) {

  let tip = calcTip(account)
  let total = account + tip;

  accounts.unshift(account);
  tips.unshift(tip);
  totals.unshift(total);

  console.log("\n\n------------- 🛒 RECEIPT -------------");
  console.log(`🔸 The account valor, is: 💵 R$: ${account},00`);
  console.log(`🔸 Therefore tip is:      💵 R$: ${tip},00`);
  console.log(`🔸 Total:                 💰 R$: ${total},00`);
};

closeAccount(122);
closeAccount(555);
closeAccount(44);


