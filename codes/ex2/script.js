var lampada = document.querySelector('img')

function funcoes(id) {
    switch (id >= 0 && id < 4) {
        case id == 0:
            lampada.setAttribute('src', '../ex2/images/lampada-acesa.png')
            break
        case id == 1:
            lampada.setAttribute('src', '../ex2/images/lampada-apagada.png')
            break
        case id == 2:
            lampada.style.display = 'none'
            break
        default:
            lampada.style.display = 'flex'

    }
}