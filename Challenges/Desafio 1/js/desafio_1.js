/*

! DESAFIO 1 - Seção 1 

* Mark e John, estão tentando comparar seu IMC
* com a formula Massa / Altura ^ 2, sendo,
* a massa em Quilos e a Altura em Metros
* O Script deverá:
 
TODO [ X ] Armazenar a passa de Mark e John em variavéis  
TODO [ X ] Calcular ambos IMC's 
TODO [ X ] Criar uma variavel "markIMCMaior", que retorna verdadeiro ou falso se Mark possuir IMC maior

? Dados:
 * Primeiro Teste: Marks com massa de: 78 Kg e 1.69M
* e John com 92 Kg e 1.95M

* Segundo Teste: Marks com massa de: 95 Kg e 1.88M
* e John com 85 Kg e 1.76M
*/

//Ignorar
console.log('%c Desafio %c 1 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 8px 10px;  border-radius: 50%;') 


let massaUser1, massaUser2, alturaUser1, alturaUser2, imcUser1, imcUser2,user1IMCMaior;


nomeUser1 =  window.prompt("Digite o nome do(a) usuario(a): ");
nomeUser2 =  window.prompt("Digite o nome do(a) segundo(a) usuario(a): ");

//Captura a massa (kg)
massaUser1 =  parseInt(window.prompt("Digite a massa de " +  nomeUser1));
massaUser2 =  parseInt(window.prompt("Agora a massa de " + nomeUser2));

//Captura a altura (m)
alturaUser1 =  parseFloat(window.prompt("Digite a altura de " + nomeUser1));
alturaUser2 = parseFloat(window.prompt("Agora a altura de " + nomeUser2));

// IMC = Massa / Altura ^ 2, sendo,

imcUser1 = massaUser1 / (alturaUser1 ** 2)
imcUser2 = massaUser2 / (alturaUser2 ** 2)

user1IMCMaior = imcUser1 > imcUser2
console.log("---------[ RESULTADO ]--------")
console.log("O IMC de < " + nomeUser1 + " > é igual: " + imcUser1);
console.log("O IMC de < " + nomeUser2 + " > é igual: " + imcUser2);
console.log(user1IMCMaior)