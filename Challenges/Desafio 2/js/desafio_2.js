/*

! DESAFIO 2 - Seção 1 

* Usando o calculo do IMC do desafio 1, faça:
 
TODO [ X ] Exibe no console qual IMC é maior  
TODO [ X ] Utilize de template literals para exibir a saída 
*/

//Ignorar
console.log('%c Desafio %c 2 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 8px 10px;  border-radius: 50%;') 


let massaUser1, massaUser2, alturaUser1, alturaUser2, imcUser1, imcUser2,user1IMCMaior;


nomeUser1 =  window.prompt("Digite o nome do(a) usuario(a): ");
nomeUser2 =  window.prompt("Digite o nome do(a) segundo(a) usuario(a): ");

//Captura a massa (kg)
massaUser1 =  parseInt(window.prompt(`Digite a massa de ${nomeUser1}`));
massaUser2 =  parseInt(window.prompt(`Agora a massa de ${nomeUser1}`));

//Captura a altura (m)
alturaUser1 =  parseFloat(window.prompt(`Digite a altura de ${nomeUser1}`));
alturaUser2 = parseFloat(window.prompt(`Agora a altura de ${nomeUser2} `));

// IMC = Massa / Altura ^ 2, sendo,

imcUser1 = massaUser1 / (alturaUser1 ** 2)
imcUser2 = massaUser2 / (alturaUser2 ** 2)

user1IMCMaior = imcUser1 > imcUser2

console.log("---------[ RESULTADO ]--------")

if (user1IMCMaior)  {
  console.log(`O IMC de < ${nomeUser1}> é: ${imcUser1} \nPortanto é maior que o IMC de ${nomeUser2}(${imcUser2})`);
} else {
  console.log(`O IMC de < ${nomeUser2}> é: ${imcUser2} \nPortanto é maior que o IMC de ${nomeUser1}(${imcUser1})`);
}