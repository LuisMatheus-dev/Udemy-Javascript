<p align="center">
  <img alt="nodeFarm" src="https://i.imgur.com/2UekWyp.png" width="600px">
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/forkify-js-course/deploys">
    <img src='https://api.netlify.com/api/v1/badges/9846ebee-9948-49bf-ad2c-a33e1f8aa838/deploy-status'/>
  </a>
</p>  
 
 
<h1>📖 O Projeto</h1> 
<p>Este projeto foi desenvolvido no ultimo módulo do curso de Javascript.
A proposta é um webapp para pesquisa e criação de receitas culinárias.

<h2>🔍 A API</h2>
<p>A curadoria das receitas são provenientes da API, (não desenvolvida durante o curso). 
Demais informações podem ser encontradas em sua documentação <a href="https://forkify-api.herokuapp.com/v2">aqui</a></p>

<h2> 🤔 Como Utilizar este Repositório ?</h2>
<p>Este projeto utiliza a versão mais <code>5.37.0</code> do webpack.
</p>

<h3>◾️ Clonando o projeto</h3>
<p>Antes de qualquer coisa, deve-se clonar este repositório, da forma descrita abaixo em seu terminal:</p>
<code>git clone 'https://github.com/LuisMatheus-dev/Udemy-Javascript/tree/master/Projects/Forkify'</code>

<h3>◾️ Dependências</h3>
<p>Entre no diretório raiz, onde se encontra o arquivo <code>package.json</code>, e novamente em seu terminal, execute os passos abaixo, para cada situação:
</p>
 
<strong>🔴 Caso tenha o NPM:</strong> <code>npm install</code>
<br><strong>🔵 Caso tenha o yarn:</strong> <code>yarn add</code>

<h3> Iniciado o Webpack Server</h3>
<p>O Webpack prove para nós um server próprio para automatizar o processo de building, para inicia-lo , eu seu terminal execute o comando:
<code>yarn build-dev</code></p>

<p>Por padrão a porta para o server será a 9000, caso o webpack não abra o projeto automaticamente, podemos simplismente acessa-lo no navegador pelo endereço:
<code>localhost:9000</code></p>
<p>

<p>❗️O webpack server <strong>não</strong> cria o build no diretório local, ao invés disso ele é acessado em memória.Caso queira o build local, no terminal digite:
<code>yarn build</code><p>
  
<h3>🐛 O Bug</h3>
<p>Neste momento (04/06/2021), o projeto contem um bug. Quando adicionado a receita, a mensagem de sucesso faz com o que o form desapareça , impossibilitando adcionar mais receitas
isto já esta sendo trabalhado para sua correção 😃. 
