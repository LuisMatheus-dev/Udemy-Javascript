/*

! DESAFIO 4 - Seção 1 

*Steven quer construir uma calculadora de gorjetas muito simples para quando ele for comer em um
*restaurante. No país dele, costuma dar gorjeta de 15% se o valor da conta estiver entre 50 e
*300. Se o valor for diferente, a gorjeta é 20%.
*Suas tarefas:

TODO| [ x ] Calcule a gorjeta, dependendo do valor da conta. Crie uma variável chamada 'dica' para isto.
TODO| [ x ] Imprima uma string no console contendo o valor da conta, a gorjeta e o valor final (conta + gorjeta). 

?Dados de teste:
* Dados 1: Teste para os valores de fatura 275, 40 e 430
* Dicas:
* Para calcular 20% de um valor, basta multiplicar por 20/100 = 0,2
* O valor X está entre 50 e 300, se for> = 50 && <= 300 
*/

// ------ Ignorar ------
console.log('%c Desafio %c 4 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 8px 10px;  border-radius: 50%;') 
// --------------------

let gorjeta;

const valorComanda = parseInt(prompt("Por favor digite o valor total da compra:"));

gorjeta = valorComanda <= 300 && valorComanda >= 50 ? valorComanda * 0.15 : valorComanda * 0.2;

console.log("---------- GORJETA ----------");
console.log(`O valor da gorgeta é 💵 R$: ${gorjeta}`)

