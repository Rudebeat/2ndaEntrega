alert("Eres capaz de adivinar el número secreto ¡vamos a ver si lo logras!");

let numeroIngresado = parseInt(prompt("ingresa un número entre 1 y 100"));

const numeroMenorMayor = (a, b) => numeroIngresado <= a && numeroIngresado >= b;

const filtroNumero = (a, b, c, d, e, f, g, h, i, j) => {

    if (numeroMenorMayor(a, b) || numeroMenorMayor(c, d)) {
        alert(`¡CALIENTE! estas muy cerca, pero, ese aun no es el número`);
    } else if (numeroMenorMayor(e, f) || numeroMenorMayor(g, h)) {
        alert(`¡TIBIO! estas algo lejos, pero no tanto para encontrarlo`);
    } else if (numeroMenorMayor(i, j)) {
        alert(`¡FRÍO! te estas congelando de lo lejos que estas del número secreto`);
    } else {
        alert(`¡CONGELADO! ese número esta fuera del rango del número secreto`);
    }

}

while (numeroIngresado !== null && numeroIngresado !== NaN) {

    if (numeroIngresado === 72) {

        alert(`¡EXCELENTE! ${numeroIngresado} era el número secreto`);
        break;

    } else {

        filtroNumero(71, 66, 77, 73, 65, 56, 87, 74, 100, 1);

    }

    numeroIngresado = parseInt(prompt("Intenta con otro número"));

}