// main.js

import { sumar, restar, multiplicar, dividir } from './calculator.js';
import { contarPalabras } from './word-counter.js';
import { filtrarPares } from './even-filter.js';
import { calcularPromedio } from './average.js';
import { verificar } from './guess-game.js';
import { promedioEstudiante } from './object-manipulation.js';
import { tablaMultiplicar } from './multiplication-table.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar calculadora
    const calcForm = document.getElementById('calc-form');
    calcForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const a = parseFloat(calcForm.elements['num1'].value);
        const b = parseFloat(calcForm.elements['num2'].value);
        const operation = calcForm.elements['operation'].value;
        let result;
        switch (operation) {
            case 'sumar':
                result = sumar(a, b);
                break;
            case 'restar':
                result = restar(a, b);
                break;
            case 'multiplicar':
                result = multiplicar(a, b);
                break;
            case 'dividir':
                result = dividir(a, b);
                break;
        }
        document.getElementById('calc-result').textContent = `Resultado: ${result}`;
    });

    // Contador de palabras
    const wordCounterForm = document.getElementById('word-counter-form');
    wordCounterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const phrase = wordCounterForm.elements['phrase'].value;
        const count = contarPalabras(phrase);
        document.getElementById('word-count-result').textContent = `Número de palabras: ${count}`;
    });

    // Filtro de números pares
    const evenFilterButton = document.getElementById('even-filter-button');
    evenFilterButton.addEventListener('click', () => {
        const evenNumbers = filtrarPares();
        const resultList = document.getElementById('even-numbers-list');
        resultList.innerHTML = '';
        evenNumbers.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            resultList.appendChild(li);
        });
    });

    // Calculadora de promedio
    const averageButton = document.getElementById('average-button');
    averageButton.addEventListener('click', () => {
        const grades = [10, 8, 6, 9]; // Ejemplo de calificaciones
        const average = calcularPromedio(grades);
        document.getElementById('average-result').textContent = average;
    });

    // Juego de adivinanza
    const guessGameForm = document.getElementById('guess-game-form');
    guessGameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userGuess = parseInt(guessGameForm.elements['guess'].value);
        const secretNumber = Math.floor(Math.random() * 100) + 1; // Número secreto
        const message = verificar(userGuess, secretNumber);
        document.getElementById('guess-result').textContent = message;
    });

    // Manipulación de objetos
    const objectManipulationButton = document.getElementById('object-manipulation-button');
    objectManipulationButton.addEventListener('click', () => {
        const student = { nombre: 'Juan', edad: 20, calificaciones: [10, 9, 8] };
        const average = promedioEstudiante(student);
        document.getElementById('object-result').textContent = `Nombre: ${student.nombre}, Promedio: ${average}`;
    });

    // Tabla de multiplicar
    const multiplicationTableForm = document.getElementById('multiplication-table-form');
    multiplicationTableForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const number = parseInt(multiplicationTableForm.elements['number'].value);
        const table = tablaMultiplicar(number);
        const tableResult = document.getElementById('multiplication-table-result');
        tableResult.innerHTML = table;
    });
});