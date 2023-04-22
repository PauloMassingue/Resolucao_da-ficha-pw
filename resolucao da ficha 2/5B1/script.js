const nome = document.querySelector(".nome");
const cor = document.querySelector(".cor");
const saida = document.querySelector(".saida");
const button = document.querySelector("button");

const adicionar = () => {
  const iniciais = nome.value[0] + nome.value[1];

  saida.innerHTML += `<div  style="background-color: ${cor.value};" > ${iniciais} </div>`;
};

button.addEventListener("click", adicionar);
