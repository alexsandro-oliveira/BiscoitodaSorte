const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const openCookie = document.querySelector("#img1")
const btnReset = document.querySelector("#btnReset")


//Eventos
openCookie.addEventListener('click', messageClick)
btnReset.addEventListener('click', messageClick)
document.addEventListener('keydown', clickEnter)


// funções
function messageClick() {
  toggleScreen()
  let randomNumber = Math.round(Math.random() * 10)

  switch(randomNumber) {
    case 0: screen2.querySelector("p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    break
    case 1: screen2.querySelector("p").innerText = "Se você ver uma pessoa que acabou de acordar, sentada, quietinha olhando pro nada, respeite. É ela esperando a alma voltar pro corpo."
    break
    case 2: screen2.querySelector("p").innerText = "Se eu soubesse que tinha que estudar, trabalhar e levantar cedo, tinha dado meu lugar pra outro espermatozóide."
    break 
    case 3: screen2.querySelector("p").innerText = "Será que você realmente gosta do bolo de cenoura ou só come ele por causa da cobertura de chocolate?"
    break
    case 4: screen2.querySelector("p").innerText = "Tão íntimo da ressaca que já estou chamando ela de Rê."
    break
    case 5: screen2.querySelector("p").innerText = "Se você não fica feio quando abre a câmera frontal do celular você é privilegiado sim!"
    break
    default:
      break
  }  
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function clickEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    messageClick()
  }
}