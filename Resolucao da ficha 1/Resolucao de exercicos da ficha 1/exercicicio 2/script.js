const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const btnOk = document.querySelector('button');
const operacao = document.querySelector('Select');
const resultado = document.querySelector('span');



btnOk.addEventListener('click', () => {
    switch (operacao.value) {
        case 'somar':
            resultado.innerText = Number.parseFloat(valor1.value) + Number.parseFloat(valor2.value);
            break;
        case 'subtrair':
            resultado.innerText = Number.parseFloat(valor1.value) - Number.parseFloat(valor2.value);
            break;
        case 'dividir':
            if (valor2.value != 0) {
                resultado.innerText = Number.parseFloat(valor1.value) / Number.parseFloat(valor2.value);
            } else {
                resultado.innerText = 'Divisor deve ser diferente de zero';
            }
            break;
        case 'multiplicar':
            resultado.innerText = Number.parseFloat(valor1.value) * Number.parseFloat(valor2.value);
            break;
        
    }
});


