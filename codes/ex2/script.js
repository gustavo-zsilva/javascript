var lampada = document.querySelector('img')

function ligar() {
    lampada.setAttribute('src', '../ex2/images/lampada-acesa.png')
}

function desligar() {
    lampada.setAttribute('src', '../ex2/images/lampada-apagada.png')
}