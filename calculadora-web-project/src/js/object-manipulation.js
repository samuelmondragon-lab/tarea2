// Este archivo crea un objeto estudiante con propiedades nombre, edad y calificaciones.
// Define la función promedioEstudiante(estudiante) para calcular el promedio y muestra el nombre y promedio en la página.

const estudiante = {
    nombre: "Juan Pérez",
    edad: 20,
    calificaciones: [85, 90, 78, 92, 88]
};

function promedioEstudiante(estudiante) {
    const total = estudiante.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    const promedio = total / estudiante.calificaciones.length;
    return promedio;
}

// Ejemplo de uso
const promedio = promedioEstudiante(estudiante);
console.log(`El estudiante ${estudiante.nombre} tiene un promedio de ${promedio.toFixed(2)}`);