const nome = document.querySelector("#nome");
const apelido = document.querySelector("#apelido");
const observacao = document.querySelector("#observacao");
const button = document.querySelector("button");
const alerta = document.querySelector('p');
const sexo = document.querySelector('Select');

observacao.innerHTML = "";

const validar = () => {
    if (nome.value == ""){
      nome.style.borderColor = 'red';
      alerta.innerHTML = "Por favor preencha devidamente os campos!!"
    }
    if (apelido.value == ""){
      apelido.style.borderColor = 'red';
    }
    if (observacao.value == ""){
      observacao.style.borderColor = 'red';
    }
    if(sexo.value != 'Masculino' && sexo.value != 'Feminino' ){
      sexo.style.borderColor = 'red';
    }
}

button.addEventListener("click", validar);

nome.addEventListener('focusout', () => {
  if(nome.value != ""){
    nome.style.borderColor = 'green';
  }
});

apelido.addEventListener('focusout', () => {
  if(apelido.value != ""){
    apelido.style.borderColor = 'green';
  }
});

sexo.addEventListener('focusout', () => {
  if(sexo.value == 'Masculino' || sexo.value == 'Feminino' ){
    sexo.style.borderColor = 'green';
  }
});

observacao.addEventListener('focusout', () => {
  if(observacao.value != ""){
    observacao.style.borderColor = 'green';
  }
});
