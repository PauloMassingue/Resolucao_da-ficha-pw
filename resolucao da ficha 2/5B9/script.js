const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const observacao = document.querySelector("#observacao");
const button = document.querySelector("button");
const msgCompleto = document.querySelector(".msgCompleto");
const inputsText = document.querySelectorAll("input[type=text]");

const verificarVazio = () => {
  let completo = true;

  for (const i of inputsText) {
    if (i.value.trim() == "") {
      i.style.borderColor = "red";
      completo = false;
      document.querySelector(`#s-${i.id}`).style.display = "initial";
    } else {
      document.querySelector(`#s-${i.id}`).style.display = "none";
    }
  }

  if (completo) {
    msgCompleto.style.display = "initial";
  } else {
    msgCompleto.style.display = "none";
  }
};

for (let i = 0; i < inputsText.length; i++) {
  let e = inputsText[i];

  e.addEventListener("keyup", () => {
    if (e.style.borderColor == "red" && e.value.trim() != "") {
      e.style.borderColor = "green";
    } else if (e.style.borderColor == "green" && e.value.trim() == "") {
      e.style.borderColor = "red";
    }
  });
}

button.addEventListener("click", verificarVazio);
