//  variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const buttonCalculate = document.querySelector('.calculate')
const buttonClose = document.querySelector('.close')

const resultScreen = document.querySelector('.modal-wrapper')
const alertScreen = document.querySelector('.alert-error')
const titleIMC = document.querySelector('.title')

const Modal = {
    open() {
        resultScreen.classList.add('open')
    },
    close() {
        resultScreen.classList.remove('open')
    }
}

buttonCalculate.addEventListener('click', calculateClick)
function calculateClick(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    const imc = weight / ((height/100) * (height/100))

    const menssage = `Seu IMC é de: ${imc.toFixed(2)}`
    titleIMC.innerText = menssage

    if (weight == '' || height == '') {
        alertScreen.classList.add('open')
    } else {
        alertScreen.classList.remove('open')
        Modal.open()
    }
}

buttonClose.addEventListener('click', closeClick)
function closeClick() {
    Modal.close()
}

inputWeight.oninput = () => alertScreen.classList.remove('open')
inputHeight.oninput = () => alertScreen.classList.remove('open')