class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Estudiante extends Persona{
    constructor(nombre,edad,calificaciones){
        super(nombre,edad)
        this.calificaciones = calificaciones
    }

    calcularPromedio() {
        let suma = 0;
        for (let i = 0; i < this.calificaciones.length; i++) {
            suma += this.calificaciones[i];
        }
        return suma / this.calificaciones.length;
    }
}

const estudiantes = [];

function añadirEstudiante() {
    const nombre = prompt("Ingrese el nombre del estudiante:");
    const edad = prompt("Ingrese la edad del estudiante:");
    const calificaciones = prompt("Ingrese las calificaciones del estudiante (separadas por comas):").split(',').map(Number);
    const nuevoEstudiante = new Estudiante(nombre, edad, calificaciones);
    estudiantes.push(nuevoEstudiante);
}

function mostrarEstudiantes() {
    if (estudiantes.length === 0) {
        console.log("No hay estudiantes registrados.");
    } else {
        estudiantes.forEach((estudiante, index) => {
            console.log(`Estudiante ${index + 1}:`);
            console.log(`Nombre: ${estudiante.nombre}`);
            console.log(`Edad: ${estudiante.edad}`);
            console.log(`Calificaciones: ${estudiante.calificaciones.join(', ')}`);
            console.log("\n");
        });
    }
}

function calcularPromedioEstudiante() {
    const nombre = prompt("Ingrese el nombre del estudiante para calcular el promedio:");
    const estudiante = estudiantes.find(est => est.nombre === nombre);
    if (estudiante) {
        const promedio = estudiante.calcularPromedio();
        console.log(`El promedio de ${nombre} es: ${promedio}`);
    } else {
        console.log(`Estudiante con nombre ${nombre} no encontrado.`);
    }
}

function iniciarMenu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción: \n1. Añadir nuevo estudiante \n2. Mostrar todos los estudiantes\n3. Calcular promedio de un estudiante\n4. Salir" );
        switch (opcion) {
            case '1':
                añadirEstudiante();
                break;
            case '2':
                mostrarEstudiantes();
                break;
            case '3':
                calcularPromedioEstudiante();
                break;
            case '4':
                console.log("Saliendo del menú.");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== '4');
}

// Iniciar el menú
iniciarMenu();