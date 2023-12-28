// Registrar la entrada por parte del usuario

let busquedaUsuario = prompt("¿Qué quieres buscar?");

// Crear el array con los objetos de personas

const resultadosDeBusqueda = [
    {
        nombre: "Yessica", apellido: "Gonzalez", edad: 20
    },
    {
        nombre: "Haider", apellido: "Pereira", edad: 25
    },
    {
        nombre: "Andres", apellido: "Muñoz", edad: 29
    },
    {
        nombre: "Yessica", apellido: "Ordoñez", edad: 50
    },
    {
        nombre: "Javier", apellido: "Perez", edad: 25
    },
    {
        nombre: "Yesenia", apellido: "Munevar", edad: 29
    },
    {
        nombre: "Andrea", apellido: "Ortiz", edad: 15
    }
];


// Función para buscar el objeto que necesita el usuario

const busquedaArray = () => {
    return resultadosDeBusqueda.filter(persona => {
        const nombreMinuscula = persona.nombre.toLowerCase();
        const apellidoMinuscula = persona.apellido.toLowerCase();
        const busquedaResultadoMinuscula = busquedaUsuario.toLowerCase();
        // Relacionar la búsqueda de los usuarios con los nombres de los objetos
        return nombreMinuscula.includes(busquedaResultadoMinuscula) || apellidoMinuscula.includes(busquedaResultadoMinuscula);
    }
    );
}

// Resultado del Array filtrado
let resultado = busquedaArray();

// Validar la existencia del objeto en el array y que no escriba vacío
while (resultado.length === 0 || busquedaUsuario.trim() === "") {
    busquedaUsuario = prompt("La persona no existe, Escribe otro nombre");

    resultado = busquedaArray();
}

const mostrarResultado = () => {
    // Con map, crear nuevo array de los resultados y unificarlos con join

    const nombresArray = resultado.map((persona, indice) => {
        return `${indice + 1}. ${persona.nombre} ${persona.apellido}`
    });

    // Seleccionar el usuario que busca
    const seleccionUsuario = parseInt(prompt("Los resultados son: \n" + nombresArray.join("\n") + "\n ¿De que persona quieres conocer más?"));

    // Retorno del objeto seleccionado por el usuario 
    return resultado[seleccionUsuario - 1];

};


const personaSeleccionada = mostrarResultado();

// Definir el año actual
const anio = new Date().getFullYear();

// Finaliza el proceso mostrandole al usuario el usuario selecionado
alert(`La persona seleccionada es ${personaSeleccionada.nombre} ${personaSeleccionada.apellido} tiene ${personaSeleccionada.edad} años y nació el ${anio - personaSeleccionada.edad}`);




