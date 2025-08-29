// Desafio 1: Fibonacci

// Função linear
const fibLinear = (n) => {
    // Valida o input
    if (n < 0) {
        return "Número deve ser >= 0";
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
};

// Função recursiva
const fibRecursivo = (n) => {
    // Valida o input
    if (n < 0) {
        return "Número deve ser >= 0";
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibRecursivo(n - 1) + fibRecursivo(n - 2);
};

// Desafio 2: Números Primos

// Função linear
const primosLinear = (n) => {
    // Valida o input
    if (n <= 1) {
        return "Número deve ser > 1";
    }

    const primos = [];
    for (let num = 2; num <= n; num++) {
        let ehPrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            primos.push(num);
        }
    }
    return primos;
};


// Exemplo de uso das funções
console.log(`Fibonacci linear de 6: ${fibLinear(6)}`);
console.log(`Fibonacci recursivo de 6: ${fibRecursivo(6)}`);
console.log(`Números primos até 10 (linear): ${primosLinear(10)}`);