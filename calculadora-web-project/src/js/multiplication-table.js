function tablaMultiplicar(numero) {
    const resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(`${numero} x ${i} = ${numero * i}`);
    }
    return resultados;
}

function mostrarTablaMultiplicar() {
    const numeroInput = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
        const tabla = tablaMultiplicar(numero);
        resultadoDiv.innerHTML = '<ul>' + tabla.map(linea => `<li>${linea}</li>`).join('') + '</ul>';
    } else {
        resultadoDiv.innerHTML = '<p>Por favor, ingresa un número válido.</p>';
    }
}

document.getElementById('calcular').addEventListener('click', mostrarTablaMultiplicar);