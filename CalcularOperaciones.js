const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt('Ingresa el primer dato: '));
const num2 = parseFloat(prompt('Ingresa el primer dato: '));

const suma = num1 + num2;
const resta = num1 + num2;

console.log(`la suma de ${num1}+${num2} es: ${suma}`);
console.log(`la resta de ${num1}-${num2} es: ${resta}`);