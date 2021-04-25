/* 
* The pig game
* Os jogadores jogam em turnos, rolando o dado , os pontos são relacionados ao valor dos dados
* se o valor caido for igual a 1 todos os pontos são perdidos, cada jogador tem a opção de segurar 
* os dados ou rolar mais uma vez 
*/
let scores ,activePlayer, roundScore ,gamePlaying, winnerPoints, lastDice

init()

document.querySelector('#btn-roll').addEventListener('click', function(){ 
    if (gamePlaying) {
        /* 
        * Quando o botão 'roll' é acionado (click) é gerado um valor aleatorio para dice no intervalo entre 1 a 6
        * o dado passa a se tornar visivel, sendo sua imagem variando conforme o valor 'dice' 
        * caso o numero girado for igual a 1, o valor do turno é zerado e o turno é passado ao proximo jogador
        */

        let dice = Math.floor(Math.random() * 6) + 1 // Gera um numero aleatório entre 1 e 6
        let diceDOM = document.querySelector('#dice') // Seleciona a imagem 'dice' 

        document.querySelector('#view').style.visibility = 'visible' //Revela o dado 
        diceDOM.src = 'CSS/img/dice-' + dice + '.png' //Imagam do dado é alterada EX: (CSS/img/dice-1.png)
        
        if (dice === 6 && lastDice === 6) {
            scores[activePlayer] = 0
            document.querySelector('#points-player-' + activePlayer).textContent = scores[activePlayer]
            nextPlayer()
        }
        else if (dice !== 1 ) { //Se o valor gerado for diferente de 1
            roundScore += dice  // Valor é armazenado ao pontos da radada
            document.querySelector('#score-player-' + activePlayer).textContent = roundScore //Jogador ativo recebe os pontos
        } else { nextPlayer() }
        
        lastDice = dice
    }
}
)
document.querySelector('#btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore
        document.querySelector('#points-player-' + activePlayer).textContent = scores[activePlayer]

        if (scores[activePlayer] >= winnerPoints) {
            document.querySelector('.player-' + activePlayer).classList.remove('active')
            document.querySelector('#player-name-' + activePlayer).textContent = 'WINNER!'
            document.querySelector('#points-player-' + activePlayer).style.color = 'red'
            document.querySelector('.player-' + activePlayer).classList.add('winner')
            gamePlaying = false
            document.getElementById('btn-roll').disabled = true
            document.getElementById('btn-hold').disabled = true
           
        } else {
        nextPlayer()
        }

    }
}
)

document.querySelector('#btn-configs').addEventListener('click', function() { //Abre o painel de configurações
    
    if (document.getElementById('view-board').style.display === 'block') {

        document.getElementById('view-board').style.display = 'none'
        document.getElementById('config').style.display = 'block'

    } else {
    
        document.getElementById('view-board').style.display = 'block'
        document.getElementById('config').style.display = 'none'
    }

})

document.querySelector('#btn-apply').addEventListener('click', function() { //Aplica as configurações
    
    nameChange()
    scoreChange()
    gamePlaying = false
    document.getElementById('btn-roll').disabled = true
    document.getElementById('btn-hold').disabled = true
    document.getElementById('config').style.display = 'none'
    document.getElementById('view-board').style.display = 'block'
})



document.querySelector('#btn-new').addEventListener('click', init) // Inicia o jogo 

function scoreChange() {
    
    iptScore = document.getElementById('ipt-score').value // Condição paa o vencedor

    if(iptScore === '') {
        winnerPoints = 100
    } else if(iptScore < 10 || iptScore > 300) { //Verifica se o valor digitado atende aos requisitos
        document.querySelector('.msg').classList.add('warning')
        document.getElementById('warning-msg').textContent = 'Condition to win cannot be greater than 300 and less than 10'
    } else {
        winnerPoints = iptScore // Valor digitado do input é armazenado a condição
    }
    
}
function nameChange() {
      
    inputNamePlayer0 = document.querySelector('#ipt-player-0').value // Nome a ser alterado
    inputNamePlayer1 = document.querySelector('#ipt-player-1').value 
    namePlayer0 = document.querySelector('#player-name-0').textContent //Nome atual do jogador 1
    namePlayer1 = document.querySelector('#player-name-1').textContent
    
    if(inputNamePlayer0 === '') { //Verifica se os inputs estão vazios
        document.querySelector('#player-name-0').textContent = 'Player 1' // Nome do jogador 1 
    
    } else if (inputNamePlayer1 === '') {
        document.querySelector('#player-name-1').textContent = 'Player 2'

    } else { 
        document.querySelector('.msg').classList.add('sucess')
        document.getElementById('warning-msg').textContent = 'Values have been successfully changed'
        namePlayer0 = inputNamePlayer0 // O nome do jogador são alterados pelo valor do input 
        namePlayer1 = inputNamePlayer1
    }
    document.querySelector('#player-name-0').innerHTML = namePlayer0;
    document.querySelector('#player-name-1').innerHTML = namePlayer1;

}

function nextPlayer () {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 //Passa a vez ao proximo jogador
    roundScore = 0

    document.getElementById('score-player-0').textContent = '0'  //Zera os pontos de rodada
    document.getElementById('score-player-1').textContent = '0'

    document.querySelector('.player-0').classList.toggle('active') //Alterna entre turnos
    document.querySelector('.player-1').classList.toggle('active')

    document.querySelector('#view').style.visibility = 'hidden' //Dado fica oculto até o proximo jogador roda-lo    

}


function init() {
    
    scores = [0,0] //Armazena os pontos de cada de jogador (score[0] ==> Jodador 1,score[1] ==> Jogador 2)
    activePlayer = 0   //Jogador ativo (turno)
    roundScore = 0 //Pontos do turno
    gamePlaying = true // O jogo foi iniciado
    
    nameChange()
    scoreChange()

 
    document.querySelector('#view').style.visibility = 'hidden' // Oculta o dado enquanto a partida não é iniciada
    
    document.getElementById('score-player-0').textContent = '0' // Pontos totais Jogador 1
    document.getElementById('score-player-1').textContent = '0' 
    
    document.getElementById('points-player-0').textContent = '0' // Pontos da rodada Jogador 1
    document.getElementById('points-player-1').textContent = '0'
    
    document.querySelector('#points-player-0').style.color = '#0c794f' // Reseta o jogador ativo
    document.querySelector('#points-player-1').style.color = '#0c794f' 
    
    document.getElementById('btn-roll').disabled = false // Habilita os botões
    document.getElementById('btn-hold').disabled = false 
    
    document.querySelector('.msg').classList.remove('warning')
    document.querySelector('.msg').classList.remove('warning')
    document.querySelector('#ipt-player-0').value = '' // Nome a ser alterado
    document.querySelector('#ipt-player-1').value = ''
    document.getElementById('ipt-score').value = ''

    document.querySelector('.player-0').classList.remove('winner') //Reseta o estilo
    document.querySelector('.player-1').classList.remove('winner') 
    document.querySelector('.player-0').classList.remove('active') //Desabilita o Jogador 1
    document.querySelector('.player-1').classList.remove('active') //Desabilita o Jogador 1

    document.querySelector('.player-0').classList.add('active') //Habilita o jogador 1

}