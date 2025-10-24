function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return 'Error: División por cero';
    }
    return a / b;
}

function mostrarResultado(operacion, a, b) {
    let resultado;
    switch (operacion) {
        case 'suma':
            resultado = sumar(a, b);
            break;
        case 'resta':
            resultado = restar(a, b);
            break;
        case 'multiplicacion':
            resultado = multiplicar(a, b);
            break;
        case 'division':
            resultado = dividir(a, b);
            break;
        default:
            resultado = 'Operación no válida';
    }
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

// Event listeners para los botones de la calculadora
document.getElementById('btn-sumar').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('input-a').value);
    const b = parseFloat(document.getElementById('input-b').value);
    mostrarResultado('suma', a, b);
});

document.getElementById('btn-restar').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('input-a').value);
    const b = parseFloat(document.getElementById('input-b').value);
    mostrarResultado('resta', a, b);
});

document.getElementById('btn-multiplicar').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('input-a').value);
    const b = parseFloat(document.getElementById('input-b').value);
    mostrarResultado('multiplicacion', a, b);
});

document.getElementById('btn-dividir').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('input-a').value);
    const b = parseFloat(document.getElementById('input-b').value);
    mostrarResultado('division', a, b);
});