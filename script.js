// =====================================================
// RULETA EDUCATIVA - ESCENA VIVA
// Laboratorio de Aplicaciones II
// =====================================================


// -----------------------------------------------------
// 1. BANCO DE PREGUNTAS
// -----------------------------------------------------

const preguntas = [

    {
        categoria: "Arte",
        tema: "Pintura",
        pregunta: "¿Qué artista pintó la famosa obra La noche estrellada?",
        opciones: ["Vincent van Gogh", "Pablo Picasso", "Frida Kahlo", "Claude Monet"],
        correcta: 0
    },
    {
        categoria: "Arte",
        tema: "Colores",
        pregunta: "¿Qué colores se consideran primarios en la pintura tradicional?",
        opciones: ["Rojo, amarillo y azul", "Verde, violeta y naranja", "Negro, blanco y gris", "Rosa, marrón y celeste"],
        correcta: 0
    },
    {
        categoria: "Música",
        tema: "Instrumentos",
        pregunta: "¿Cuál de estos instrumentos pertenece a la familia de las cuerdas?",
        opciones: ["Violín", "Trompeta", "Flauta", "Bombo"],
        correcta: 0
    },
    {
        categoria: "Música",
        tema: "Ritmo",
        pregunta: "¿Qué elemento musical organiza los sonidos en el tiempo?",
        opciones: ["El ritmo", "El escenario", "El vestuario", "La escenografía"],
        correcta: 0
    },
    {
        categoria: "Baile",
        tema: "Danzas argentinas",
        pregunta: "¿Cuál de estas danzas es una expresión tradicional del folklore argentino?",
        opciones: ["Chacarera", "Vals vienés", "Flamenco", "Salsa cubana"],
        correcta: 0
    },
    {
        categoria: "Baile",
        tema: "Expresión corporal",
        pregunta: "¿Qué permite comunicar la expresión corporal en la danza?",
        opciones: ["Emociones e ideas mediante movimientos", "Solo información escrita", "Únicamente sonidos", "Operaciones matemáticas"],
        correcta: 0
    },
    {
        categoria: "Teatro",
        tema: "Elementos teatrales",
        pregunta: "¿Cómo se llama el texto que contiene los diálogos de una obra teatral?",
        opciones: ["Guion", "Partitura", "Lienzo", "Coreografía"],
        correcta: 0
    },
    {
        categoria: "Teatro",
        tema: "Escenario",
        pregunta: "¿Qué tarea cumple la escenografía en una obra?",
        opciones: ["Crear el espacio visual donde ocurre la acción", "Componer la melodía", "Pintar un cuadro", "Marcar los pasos de baile"],
        correcta: 0
    },
    {
        categoria: "Arte",
        tema: "Escultura",
        pregunta: "¿Qué característica distingue principalmente a una escultura?",
        opciones: ["Tiene volumen y ocupa espacio", "Siempre está hecha solo con palabras", "Solo se escucha", "Necesita una coreografía"],
        correcta: 0
    },
    {
        categoria: "Música",
        tema: "Voz",
        pregunta: "¿Qué se recomienda hacer antes de cantar para cuidar la voz?",
        opciones: ["Realizar un calentamiento vocal suave", "Gritar lo más fuerte posible", "No tomar agua nunca", "Forzar las notas agudas"],
        correcta: 0
    },
    {
        categoria: "Baile",
        tema: "Coreografía",
        pregunta: "¿Qué es una coreografía?",
        opciones: ["Una secuencia organizada de movimientos", "Un conjunto de pinceles", "Un texto dramático", "Una familia de instrumentos"],
        correcta: 0
    },
    {
        categoria: "Teatro",
        tema: "Actuación",
        pregunta: "¿Qué utiliza un actor o actriz para dar vida a un personaje?",
        opciones: ["Voz, gestos y movimientos", "Solo colores primarios", "Únicamente instrumentos musicales", "Pinceles y arcilla"],
        correcta: 0
    }
];


// -----------------------------------------------------
// 2. VARIABLES
// -----------------------------------------------------

let puntaje = 0;

let cantidadPreguntas = 0;

let preguntaActual = null;

let rotacionActual = 0;


// -----------------------------------------------------
// 3. OBTENER ELEMENTOS DEL HTML
// -----------------------------------------------------

const ruleta =
    document.getElementById("ruleta");

const botonGirar =
    document.getElementById("botonGirar");

const tarjetaPregunta =
    document.getElementById("tarjetaPregunta");

const categoria =
    document.getElementById("categoria");

const tema =
    document.getElementById("tema");

const pregunta =
    document.getElementById("pregunta");

const opciones =
    document.getElementById("opciones");

const resultado =
    document.getElementById("resultado");

const marcadorPuntaje =
    document.getElementById("puntaje");

const contador =
    document.getElementById("contador");


// -----------------------------------------------------
// 4. EVENTO DEL BOTÓN
// -----------------------------------------------------

botonGirar.addEventListener("click", girarRuleta);


// -----------------------------------------------------
// 5. FUNCIÓN GIRAR RULETA
// -----------------------------------------------------

function girarRuleta() {

    botonGirar.disabled = true;

    tarjetaPregunta.classList.add("oculto");

    resultado.textContent = "";


    // Generamos grados aleatorios

    const gradosAleatorios =
        Math.floor(Math.random() * 360);


    // Agregamos varias vueltas completas

    rotacionActual +=
        1440 + gradosAleatorios;


    // Giramos la ruleta

    ruleta.style.transform =
        `rotate(${rotacionActual}deg)`;


    // Esperamos que termine la animación

    setTimeout(function() {

        seleccionarPregunta();

        botonGirar.disabled = false;

    }, 4000);

}


// -----------------------------------------------------
// 6. SELECCIONAR PREGUNTA ALEATORIA
// -----------------------------------------------------

function seleccionarPregunta() {

    const numeroAleatorio =
        Math.floor(Math.random() * preguntas.length);


    preguntaActual =
        preguntas[numeroAleatorio];


    mostrarPregunta();

}


// -----------------------------------------------------
// 7. MOSTRAR LA PREGUNTA
// -----------------------------------------------------

function mostrarPregunta() {

    tarjetaPregunta.classList.remove("oculto");


    categoria.textContent =
        preguntaActual.categoria;


    tema.textContent =
        preguntaActual.tema;


    pregunta.textContent =
        preguntaActual.pregunta;


    // Limpiamos opciones anteriores

    opciones.innerHTML = "";


    // Creamos los botones

    preguntaActual.opciones.forEach(
        function(opcion, indice) {

            const boton =
                document.createElement("button");


            boton.textContent =
                opcion;


            boton.classList.add("opcion");


            boton.addEventListener(
                "click",
                function() {

                    comprobarRespuesta(indice);

                }
            );


            opciones.appendChild(boton);

        }
    );

}


// -----------------------------------------------------
// 8. COMPROBAR RESPUESTA
// -----------------------------------------------------

function comprobarRespuesta(indiceSeleccionado) {

    cantidadPreguntas++;


    if (
        indiceSeleccionado ===
        preguntaActual.correcta
    ) {

        resultado.textContent =
            "✅ ¡Respuesta correcta! +100 puntos";

        puntaje += 100;

    }

    else {

        resultado.textContent =
            "❌ Respuesta incorrecta";

    }


    actualizarMarcador();


    // Evitamos responder varias veces

    const botones =
        document.querySelectorAll(".opcion");


    botones.forEach(
        function(boton) {

            boton.disabled = true;

        }
    );

}


// -----------------------------------------------------
// 9. ACTUALIZAR MARCADOR
// -----------------------------------------------------

function actualizarMarcador() {

    marcadorPuntaje.textContent =
        puntaje;


    contador.textContent =
        cantidadPreguntas;

}