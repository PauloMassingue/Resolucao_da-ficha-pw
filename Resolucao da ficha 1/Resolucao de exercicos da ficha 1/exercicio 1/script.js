const div = document.querySelector('div');
const cores = ["red", "green", "black", "blue"];
let index = 0;

const mudarCor = () => {
  div.style.background = cores[index++]

  if (index == cores.length) index = 0
};

div.addEventListener("mouseover", mudarCor);
