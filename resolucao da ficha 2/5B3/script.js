const input = document.querySelector("input");
const resultados = document.querySelectorAll(".saida div");

const analisar = () => {
  const valor = input.value;

  resultados[0].innerHTML = reverter(valor);
  resultados[1].innerHTML = contarVogais(valor);
  resultados[2].innerHTML = converter(valor);
};

const reverter = (str) => {
  let reverso = "";

  str = str.trim();

  if (str != "") {
    for (let i = str.length; i > 0; i--) {
      reverso += str[i - 1];
    }
  }

  return reverso;
};

const contarVogais = (str) => {
  const vogais = ["a", "e", "i", "o", "u"];
  let nr = 0;

  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i].toLowerCase())) {
      nr++;
    }
  }

  return nr;
};

const converter = (str) => {
  let stringFinal = "";
  str = str.trim().split(" ");

  if (str != "") {
    for (let i = 0; i < str.length; i++) {
      stringFinal += str[i][0].toUpperCase() + str[i].slice(1) + " ";
    }
  }
  return stringFinal;
};

input.addEventListener("keyup", analisar);
