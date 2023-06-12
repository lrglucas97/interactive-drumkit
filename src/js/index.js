window.addEventListener("keydown", playSound)
//Toca bateria ao teclar a letra correspondente

const keys = document.querySelectorAll(".key")
//Seleciona todas as teclas (divs com classe "key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
//Para cada tecla, executar a função removeTransition quando a transição terminar

function playSound(e) { //Função responsável por executar o áudio
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    //Seleciona os elementos com a tag "audio" que possuem o atributo "data-key" igual ao código da tecla que foi pressionada
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    //Seleciona os elementos com a classe "key" que possuem o atributo "data-key" igual ao código da tecla que foi pressionada
    if(!audio) return
    //Se o atributo "data-key" do elemento com tag audio conter um valor diferente de algum código de tecla determinado, ignorar
    audio.currentTime = 0
    //Determina que o áudio inicie em 0 segundos
    audio.play()
    //Toca o áudio
    key.classList.add("playing")
    //Adiciona a classe com transições
}

function removeTransition(e) {
    if(e.propertyName !== "transform") return
    this.classList.remove("playing")
}