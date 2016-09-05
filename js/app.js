function miReloj(){
    var fecha = new Date();
    var hora = fecha.getHours();
    if (hora < 12) {
        meridiano = "am";
    } else {
        meridiano = "pm";
    }
    hora = hora % 12;
    if (hora === 0) {
        hora = 12;
    }
    var minuto = fecha.getMinutes();
    if (minuto < 10) {
        minuto = "0" + minuto;
    }
    var segundo = fecha.getSeconds();
    if (segundo < 10) {
        segundo = "0" + segundo;
    }
    var horaImprimible = hora + " : " + minuto + " : " + segundo + " " + meridiano;
    document.getElementById('reloj').innerHTML= horaImprimible;
    document.getElementById('italia').innerHTML= calcTime("+12"); 
    document.getElementById('china').innerHTML= calcTime("+18");
    document.getElementById('australia').innerHTML= calcTime("+20");
    setTimeout('miReloj()',1000);
}

function calcTime(offset) {
    var d = new Date();
    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    return nd.toLocaleString();
}

