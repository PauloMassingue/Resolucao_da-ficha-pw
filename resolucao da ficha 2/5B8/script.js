const input = document.querySelector("input");
const output = document.querySelector("h5");

input.addEventListener("keyup", () => {
  if (input.value % 2 == 0) {
    output.innerHTML = "par";
  } else {
    output.innerHTML = "impar";
  }
});
