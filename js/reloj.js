function actualizarHora() {
    let fecha = new Date(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        anio = fecha.getFullYear(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        ampm;

    let $diaSemana = document.getElementById("diaSemana"),
        $dia = document.getElementById("dia"),
        $mes = document.getElementById("mes"),
        $anio = document.getElementById("anio"),
        $horas = document.getElementById("horas"),
        $minutos = document.getElementById("minutos"),
        $segundos = document.getElementById("segundos"),
        $ampm = document.getElementById("ampm");

    let semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    $diaSemana.textContent = semana[diaSemana];

    $dia.textContent = dia;

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    $mes.textContent = meses[mes];

    $anio.textContent = anio;

    if(horas == 0) {
        horas = 12;
    }
    $horas.textContent = horas;

    if(minutos < 10) {
        minutos = "0" + minutos;
    }
    $minutos.textContent = minutos;

    if(segundos < 10) {
        segundos = "0" + segundos;
    }
    $segundos.textContent = segundos;

    if(horas >= 12) {
        horas = horas - 12;
        ampm = "PM";
    }
    else {
        ampm = "AM";
    }
    $ampm.textContent = ampm;
}

actualizarHora();
let intervalo = setInterval(actualizarHora, 1000);