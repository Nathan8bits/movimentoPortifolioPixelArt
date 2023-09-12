let tela = document.querySelector('#game')
let personagem = document.querySelector('#personagem')
let btnDireita = document.querySelector('#btnDireita')
let btnEsquerda = document.querySelector('#btnEsquerda')
let btnCima = document.querySelector('#btnCima')
let btnBaixo = document.querySelector('#btnBaixo')

btnDireita.addEventListener('click', direita)
btnEsquerda.addEventListener('click', esquerda)
btnCima.addEventListener('click', cima)
btnBaixo.addEventListener('click', baixo)

let valorX = 0
let valorY = 169

function direita() {
  var px
  valorX += 20

  if(valorX >= 369) {
    valorX = 369
  }

  px = valorX + 'px'
  personagem.style.left = px
}

function esquerda() {
  var px
  valorX -= 20

  if(valorX < 0) {
    valorX = 0
  }

  px = valorX + 'px'
  personagem.style.left = px
}

function cima() {
  var px
  valorY -= 20

  if(valorY < 0) {
    valorY = 0
  }

  px = valorY + 'px'
  personagem.style.top = px

}

function baixo() {
  var px
  valorY += 20

  if(valorY >= 169) {
    valorY = 169
  }

  px = valorY + 'px'
  personagem.style.top = px
}