const button = document.querySelectorAll('button')
const response = document.querySelector('.res')

var data = new Date()

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


function clique(id) {

    response.innerHTML = ``

    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    
    switch (id >= 0 && id < 4) {
        case id == 0:
            response.innerHTML = Date()
            break
        case id == 1:
            response.innerHTML = `${addZero(hora)} ${checkSingularHora()}.`
            break
        case id == 2:
            response.innerHTML = `${addZero(minutos)} ${checkSingularMin()}.`
            break
        default:
            response.innerHTML = `${addZero(segundos)} ${checkSingularSec()}.`
    }
    
    return response
    
}


function checkSingularSec() {
    if (data.getSeconds() == 1) {
        return 'Segundo'
    }
    else {
        return 'Segundos'
    }
}
function checkSingularMin() {
    if (data.getMinutes() == 1) {
        return 'Minuto'
    }
    else {
        return 'Minutos'
    }
}
function checkSingularHora() {
    if (data.getHours() == 1) {
        return 'Hora'
    }
    else {
        return 'Horas'
    }
}