let $map = document.getElementById("mapa");
const ANCHO = $map.clientHeight;
const ALTO = $map.clientWidth;

function obtenerNumeroAleatorio(tamanio) {
    return Math.floor(Math.random() * tamanio);
}

let objetivo = {
    x: obtenerNumeroAleatorio(ANCHO),
    y: obtenerNumeroAleatorio(ALTO),
};

let $pista = document.getElementById("pista");
let clicks = 0;

function obtenerDistancia(evento, objetivo) {
    let difX = evento.offsetX - objetivo.x;
    let difY = evento.offsetY - objetivo.y;
    return Math.sqrt((difX * difX) + (difY + difY));
}

function darPista(distancia) {
    if(distancia >= 0 && distancia < 40) {
        return "Hirviendo";
    }
    else if(distancia < 60) {
        return "Muy caliente";
    }
    else if(distancia < 80) {
        return "Caliente";
    }
    else if(distancia < 100) {
        return "Tibio"
    }
    else if(distancia < 150) {
        return "Frío";
    }
    else if(distancia <= 200) {
        return "Muy frío";
    }
    else if(distancia > 200) {
        return "Congelado";
    }
    return "Hirviendo";
}

$map.addEventListener("click", function (evento) {
    clicks++;
    let distancia = obtenerDistancia(evento, objetivo);
    let pista = (darPista(distancia));
    $pista.innerHTML = pista;
    $pista.style.fontWeight = "bold";
    if(pista == "Congelado" || pista == "Muy frío" || pista == "Frío") {
        $pista.style.color = "black";
    } else if(pista == "Tibio" || pista == "Caliente") {
        $pista.style.color = "orange";
    } else {
        $pista.style.color = "red";
    }
    if(distancia <= 20) {
        alert("Has encontrado el tesoro en " + clicks + " clicks");
        location.reload();
    }
});