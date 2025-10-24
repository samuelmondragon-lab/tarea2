function contarPalabras(frase) {
    // Eliminar espacios en blanco al inicio y al final de la frase
    frase = frase.trim();
    
    // Si la frase está vacía, retornar 0
    if (frase === "") {
        return 0;
    }
    
    // Dividir la frase en palabras usando espacios como delimitador
    const palabras = frase.split(/\s+/);
    
    // Retornar el número de palabras
    return palabras.length;
}

// Ejemplo de uso
// const resultado = contarPalabras("Hola mundo, esto es una prueba.");
// console.log(resultado); // Debería mostrar 7