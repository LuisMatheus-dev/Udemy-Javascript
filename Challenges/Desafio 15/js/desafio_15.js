/*
! DESAFIO 15 - Seção 10
* Isso é mais um desafio de raciocínio do que de codificação

? Suas tarefas:
#[ ]  1. Faça o IIFE abaixo e no final da função, anexe um ouvinte de evento que muda a cor do elemento 
#     h1 selecionado ('cabeçalho') para azul, a cada vez o elemento do corpo é clicado. Não selecione o elemento h1 novamente!
#[ ]  2. E agora explique a si mesmo (ou a alguém ao seu redor) por que isso funcionou! Leve tudo o tempo que você precisa. 
#     Pense em quando exatamente a função de retorno de chamada é executada, e o que isso significa para as variáveis 
#     envolvidas neste exemplo.
*/

// ------ Ignorar ------
//console.log('%c Desafio %c 15 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 

(function () {
  const header = document.querySelector ('h1');
  header.style.color = 'red';
  
})();

document.body.addEventListener('click', function() {
  header.style.color = 'blue';
})

const temperos = ["pimenta-do-reino","mostarda em grãos","sal"]
const incrementos = ["azeite extra-virgem","mel"]

const saladaDeMostarda = temperos.concat(incrementos);
console.log(saladaDeMostarda);
//Retorna: ["pimenta-do-reino","mostarda em grãos","sal","azeite extra-virgem","mel"]; 