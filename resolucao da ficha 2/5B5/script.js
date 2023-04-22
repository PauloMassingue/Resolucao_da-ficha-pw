const input = document.querySelectorAll("input");
const output = document.querySelector("h1");
const estado = ["Magreza", " Normal", "Sobrepeso", "Obesidade"];

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", () => {
    let v1 = input[0].value;
    let v2 = input[1].value;

    const resultado = (Number(v1) / Number(v2)) * 2;
    let saida = "";

    if (typeof resultado == "number") {
      if (resultado < 18.5) {
        saida = estado[0];
      } else if (resultado < 24.9) {
        saida = estado[1];
      } else if (resultado < 30) {
        saida = estado[2];
      } else {
        saida = estado[3];
      }
    }

    output.innerHTML = saida;
  });
}
