// Constructor de Alumno
class Alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}

// Lista de alumnos
const alumnos = [
    new Alumno("Enrique Díaz", 29, "DAW"),
    new Alumno("Javier Ortega", 18, "DAW"),
    new Alumno("Jose Perez", 19, "DAW"),
    new Alumno("Alejandro Diaz", 22, "DAW"),
    new Alumno("Alicia Roldan", 23, "DAW"),
    new Alumno("David Cuevas", 19, "DAW"),
    new Alumno("Diana Pascual", 30, "DAW"),
    new Alumno("Fernando Vaquero", 21, "DAW"),
    new Alumno("Fernando Vadillo", 22, "DAW"),
    new Alumno("Hugo Serrano", 20, "DAW"),
    new Alumno("Jose Maria Silva", 19, "DAW"),
    new Alumno("Jose Vazquez", 22, "DAW"),
    new Alumno("Jose Antonio", 21, "DAW"),
    new Alumno("Juan Antonio", 23, "DAW"),
    new Alumno("Laura", 20, "DAW"),
    new Alumno("Luna Merino", 18, "DAW"),
    new Alumno("Miguel Angel Reyes", 19, "DAW"),
    new Alumno("Javier Polo", 22, "DAW"),
    new Alumno("Samuel", 21, "DAW"),
    new Alumno("Santiago Perez", 23, "DAW"),
    new Alumno("Sergio Velasco", 20, "DAW"),
    new Alumno("Ivan Sanchez", 19, "DAW"),
];

// Array para llevar el control de los alumnos ya generados
let alumnosGenerados = [];

// Función para generar un alumno aleatorio
function generarAlumno() {
    if (alumnosGenerados.length === alumnos.length) {
        alert("No se pueden generar más alumnos. Ya has generado los 22.");
        return;
    }

    let alumnoAleatorio;
    do {
        let indiceAleatorio = Math.floor(Math.random() * alumnos.length);
        alumnoAleatorio = alumnos[indiceAleatorio];
    } while (alumnosGenerados.includes(alumnoAleatorio));

    alumnosGenerados.push(alumnoAleatorio);
    mostrarAlumno(alumnoAleatorio);
}

// Función para mostrar un alumno en el DOM
function mostrarAlumno(alumno) {
    const container = document.getElementById("container");

    const card = document.createElement("div");
    card.classList.add("card");

    const nombre = document.createElement("h3");
    nombre.textContent = alumno.nombre;

    const edad = document.createElement("p");
    edad.textContent = `Edad: ${alumno.edad}`;

    const curso = document.createElement("p");
    curso.textContent = `Curso: ${alumno.curso}`;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => card.remove();

    card.appendChild(nombre);
    card.appendChild(edad);
    card.appendChild(curso);
    card.appendChild(botonEliminar);

    container.appendChild(card);
}

// Añadir evento al botón de generar
document.getElementById("generateButton").addEventListener("click", generarAlumno);
