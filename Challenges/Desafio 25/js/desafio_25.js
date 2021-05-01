'use strict'

/*
! DESAFIO 25 - Seção 16

? Suas tarefas:

#[ X ] 1. Crie uma função 'createImage' que recebe 'imgPath' como entrada.
# Esta função retorna uma promessa que cria uma nova imagem (use
# document.createElement ('img')) e define o atributo .src para o
# caminho de imagem fornecido.

#[ X] 2. Quando a imagem terminar de carregar, anexe-a ao elemento DOM com o
# classe 'imagens' e resolver a promessa. O valor preenchido deve ser o
# elemento de imagem em si. Caso haja um erro ao carregar a imagem (ouvir
# o evento 'erro'), rejeitar a promessa

#[ X ] 4. Consumir a promessa usando. Então e também adicionar um gerenciador de erros

#[ X ] 5. Depois que a imagem for carregada, pause a execução por 2 segundos usando o 'esperar'
# função que criamos anteriormente

#[ X ] 6. Após 2 segundos, oculte a imagem atual (defina o CSS de exibição para 'nenhum') 
# e carregue uma segunda imagem (Dica: use o elemento de imagem
# retornado pela promessa 'createImage' de ocultar a imagem atual. Você irá
# precisa de uma variável global para isso)

#[ X ] 7. Depois que a segunda imagem for carregada, pause a execução por 2 segundos novamente
#[ X ] 8. Após 2 segundos, oculte a imagem atual

? Dados de teste: 
* Imagens na pasta img. Teste o gerenciador de erros passando um erro
* caminho da imagem. Defina a velocidade da rede como “Fast 3G” na guia Rede das ferramentas de desenvolvimento,
* caso contrário, as imagens carregam muito rápido
*/

// ------ Ignorar ------
console.log('%c Desafio %c 25 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 

const container = document.querySelector('.container')

const createImage = function(imgPath) {

  return new Promise((resolve, reject) => {
    
    const imageEl = document.createElement('img');
    imageEl.src = imgPath;

    imageEl.addEventListener('load', () =>{
      container.appendChild(imageEl);      
      resolve(imageEl)
    })

    imageEl.addEventListener('error',() => reject(new Error('Ops! Invalid path or format')))
    
  })
}

const wait = function() {

  return new Promise((resolve) => {

    setTimeout(() => {
      resolve(image.style.display = 'none')
    },2000)
  });
}

let image;

createImage('./img/img-1.jpg')
  .then(img => {
    image = img;
    return wait();
  })
  .then(() => {
    return createImage('./img/img-2.jpg')
  })
  .then(img => {
    image = img;
    return wait();
  })
  .then(img => {
    return createImage('./img/img-3.jpg')
  })
  .then( img => {
    image = img;
    return wait();
  })
  .catch(error => console.error(`%c❌ ${error}`,'font-size: 20px; color: white;'));
