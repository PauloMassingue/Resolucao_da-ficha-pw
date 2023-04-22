const input = document.querySelectorAll("input");
const output = document.querySelector("h1");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", () => {
    let v1 = input[0].value;
    let v2 = input[1].value;

    output.innerHTML = (v1 * v2) / 2;
  });
}
