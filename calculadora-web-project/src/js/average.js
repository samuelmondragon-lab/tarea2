// average.js

function calcularPromedio(array) {
    if (array.length === 0) return 0;

    const suma = array.reduce((acc, curr) => acc + curr, 0);
    const promedio = suma / array.length;

    const mensaje = promedio >= 6 ? "Aprobado" : "Reprobado";
    document.getElementById("resultadoPromedio").innerText = `Promedio: ${promedio.toFixed(2)} - ${mensaje}`;
}

// Ejemplo de uso
const calificaciones = [7, 8, 5, 6, 9];
calcularPromedio(calificaciones);