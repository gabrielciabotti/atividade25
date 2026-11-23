let numero = Number(prompt("Digite um número para verificar se é primo"));
let ehPrimo = true;

if (numero < 2) {
    ehPrimo = false;
}
if (numero === 1) {
    ehPrimo = false;
}

for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
        ehPrimo = false;
        break;
    }
}

if (ehPrimo) {
    console.log(numero + " é um número primo. ");
} else {
    console.log(numero + " não é um número primo. ");

}