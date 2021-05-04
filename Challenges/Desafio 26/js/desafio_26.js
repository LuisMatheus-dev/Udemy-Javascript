'use strict'

/*
! DESAFIO 25 - Seção 16

? Suas tarefas:

? Parte 1
# [ X ] 1. Escreva uma função assíncrona 'loadNPause' que recria o Desafio # 2, desta vez usando async / await 
# (apenas a parte onde a promessa é consumida, reutilize a função 'createImage' anterior)

#[ X ] 2. Compare as duas versões, pense sobre as grandes diferenças e veja qual você gosta mais 

#[ X ] 3. Não se esqueça de testar o gerenciador de erros e de definir a velocidade da rede para “Fast 3G” 
# na guia Rede das ferramentas de desenvolvimento.

? Parte 2
#[ X ] 1. Crie uma função assíncrona 'loadAll' que recebe uma matriz de caminhos de imagem 'imgArr'

#[ X ] 2.Use .map para fazer um loop sobre a matriz, para carregar todas as imagens com a função' createImage '(chame a matriz resultante' imgs ') 

#[ X ] 3. Verifique a matriz' imgs 'no console! Está como você esperava? 

#[ X ] 4. Use uma função combinadora de promessa para realmente obter as imagens do array 

#[ X ] 5.Adicione a classe 'paralela' a todas as imagens (tem alguns estilos CSS) 

? Testar dados Parte 2: 
* ['img / img -1.jpg ',' img / img-2.jpg ',' img / img-3.jpg '].
* Para testar, desligue a função 'loadNPause'
*/


// ------ Ignorar ------
console.log('%c Desafio %c 26 ','font-family: "Arial";font-weight: 700; font-size: 30px; color:rgb(125, 213, 111);','font-family: "Arial";font-weight: 700; margin: 5px 10px; color: white; font-size: 25px;background: linear-gradient(200deg, rgb(40, 180, 135) 0%, rgb(125, 213, 111) 100%); padding: 10px 8px;  border-radius: 50%;') 

const container = document.querySelector('.container')
let image;

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

//!Parte 1
const loadNPause  = async function() {

  try {
    for( let i = 1; i <= 3 ; i++) {
      image = await createImage(`./img/img-${i}.jpg`);
      await wait()
    }
  } catch(error) {
    console.error(`%c❌ ${error}`,'font-size: 20px; color: white;')
  }
}

//!Parte 2
loadNPause()

const loadAll = async function(paths) {

  const images = paths.map(imgPath => createImage(imgPath));
  
  Promise.all(images)
    .then(imagesList => {
      imagesList.forEach(img => img.classList.add('parallel'))
    });
}

loadAll(['./img/img-1.jpg','./img/img-2.jpg','./img/img-3.jpg'])


//! Promisses Encadeadas (EX: 25)
//   // createImage('./img/img-1.jpg')
//   //   .then(img => {
//   //     image = img;
//   //     return wait();
//   //   })
//   //   .then(() => {
//   //     return createImage('./img/img-2.jpg')
//   //   })
//   //   .then(img => {
//   //     image = img;
//   //     return wait();
//   //   })
//   //   .then(img => {
//   //     return createImage('./img/img-3.jpg')
//   //   })
//   //   .then( img => {
//   //     image = img;
//   //     return wait();
//   //   })
//   //   .catch(error => console.error(`%c❌ ${error}`,'font-size: 20px; color: white;'));
  
// }

/*


*/


