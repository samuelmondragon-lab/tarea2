// Genera un array de 10 números aleatorios y filtra los números pares
const generarNumerosAleatorios = (cantidad) => {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        numeros.push(Math.floor(Math.random() * 100)); // Números aleatorios entre 0 y 99
    }
    return numeros;
};

const filtrarPares = (array) => {
    return array.filter(numero => numero % 2 === 0);
};

// Ejemplo de uso
const numerosAleatorios = generarNumerosAleatorios(10);
const numerosPares = filtrarPares(numerosAleatorios);

// Mostrar resultados en la página
const mostrarResultados = () => {
    const ul = document.createElement('ul');
    numerosPares.forEach(numero => {
        const li = document.createElement('li');
        li.textContent = numero;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
};

mostrarResultados();