document.getElementById("formulario").addEventListener("submit", guardarTarea);
let contadorId = 0;

function guardarTarea(evento) {
    contadorId++;
    let tarea = {
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        id: contadorId
    };
    if(localStorage.getItem("tareas") === null) {
        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    } else {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        tareas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }
    mostrarTareas();
    document.getElementById("formulario").reset();
    evento.preventDefault();
}

function mostrarTareas() {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    let $tareas = document.getElementById("tareas");
    $tareas.innerHTML = " ";
    for(let i = 0; i < tareas.length; i++) {
        let titulo = tareas[i].titulo;
        let descripcion = tareas[i].descripcion;
        let id = tareas[i].id;
        $tareas.innerHTML +=`<div class="mostrarTarea">
                                <p class="mostrarTituloTarea">${titulo}</p>
                                <p class="mostrarDescripcionTarea">${descripcion}</p>
                                <a class="borrarTareaBoton" href="#" onclick="borrarTarea('${id}')">Borrar</a>
                            </div>`;
    }
}

function borrarTarea(id) {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    for(let i = 0; i < tareas.length; i++) {
        if(tareas[i].id == id) {
            tareas.splice(i, 1);
        }
    }
    localStorage.setItem('tareas', JSON.stringify(tareas));
    mostrarTareas();
}