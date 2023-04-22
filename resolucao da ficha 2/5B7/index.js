const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const email = "teste@email.com";
const notEmail = "testefalse";

console.log(email.match(regex));
console.log(notEmail.match(regex));