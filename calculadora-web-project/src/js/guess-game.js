// Archivo: guess-game.js

let numeroSecreto = Math.floor(Math.random() * 100) + 1;

function verificar(numeroUsuario) {
    if (numeroUsuario < 1 || numeroUsuario > 100) {
        return "Por favor, ingresa un número entre 1 y 100.";
    }
    if (numeroUsuario < numeroSecreto) {
        return "El número es mayor. Intenta de nuevo.";
    } else if (numeroUsuario > numeroSecreto) {
        return "El número es menor. Intenta de nuevo.";
    } else {
        return "¡Felicidades! Has adivinado el número secreto.";
    }
}

// Exportar la función para que pueda ser utilizada en otros archivos
export { verificar };