const inputValue = document.querySelector(".input_user")
const buttonSave = document.querySelector(".btn_save")
const textArea = document.querySelector("#text_area")
const buttonGenerate = document.querySelector(".generate")
const result = document.querySelector(".res")
const btnClear = document.querySelector(".clear")

let save = []

buttonSave.addEventListener("click", () => {
  const userInput = Number(inputValue.value)

  if (userInput === 0 || userInput < 0 || userInput > 100) {
    alert("Campo está vazio ou inválido")
    return
  } else {
    save.push(userInput)
    textArea.innerHTML += userInput + "\n"
    inputValue.value = ""
    inputValue.focus()
  }
})

function sum() {
  let sum = 0

  for (let i = 0; i < save.length; i++) {
    sum += save[i]
  }
  return sum
}

buttonGenerate.addEventListener("click", () => {
  if (save.length === 0) {
    alert("Não há valores na lista")
  } else {
    renderResult()
  }
})

function renderResult() {
  result.innerHTML = `
    A lista tem ${save.length} itens <br>
    O resultado da soma de todos é ${sum()}
  `
}

btnClear.addEventListener("click", () => {
  result.innerHTML = "Resultado aqui"
  textArea.innerHTML = ""
  save = []
})