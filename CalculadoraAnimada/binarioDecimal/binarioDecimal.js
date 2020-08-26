var numero = "0";
var opcion = "";
var aDecim;

function inicio() {
    // Resultado
    var result = document.getElementById("result");

    // Numeros
    var cero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");

    // Letras
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    var e = document.getElementById("e");
    var f = document.getElementById("f");

    // Opciones
    var b_d = document.getElementById("bd");
    var b_h = document.getElementById("bh");
    var b_o = document.getElementById("bo");
    var d_b = document.getElementById("db");
    var d_h = document.getElementById("dh");
    var d_o = document.getElementById("do");
    var h_b = document.getElementById("hb");
    var h_d = document.getElementById("hd");
    var h_o = document.getElementById("ho");
    var o_b = document.getElementById("ob");
    var o_d = document.getElementById("od");
    var o_h = document.getElementById("oh");


    // Reset
    var borrar = document.getElementById("borrar");

    // Mostrar en pantalla el boton que pulses
    cero.onclick = function (e) {
        result.textContent = result.textContent + "0";
    }

    uno.onclick = function (e) {
        result.textContent = result.textContent + "1";
    }

    dos.onclick = function (e) {
        result.textContent = result.textContent + "2";
    }

    tres.onclick = function (e) {
        result.textContent = result.textContent + "3";
    }

    cuatro.onclick = function (e) {
        result.textContent = result.textContent + "4";
    }

    cinco.onclick = function (e) {
        result.textContent = result.textContent + "5";
    }

    seis.onclick = function (e) {
        result.textContent = result.textContent + "6";
    }

    siete.onclick = function (e) {
        result.textContent = result.textContent + "7";
    }

    ocho.onclick = function (e) {
        result.textContent = result.textContent + "8";
    }

    nueve.onclick = function (e) {
        result.textContent = result.textContent + "9";
    }

    a.onclick = function (e) {
        result.textContent = result.textContent + "A";
    }

    b.onclick = function (e) {
        result.textContent = result.textContent + "B";
    }

    c.onclick = function (e) {
        result.textContent = result.textContent + "C";
    }

    d.onclick = function (e) {
        result.textContent = result.textContent + "D";
    }

    e.onclick = function (e) {
        result.textContent = result.textContent + "E";
    }

    f.onclick = function (e) {
        result.textContent = result.textContent + "F";
    }

    borrar.onclick = function (e) {
        resetearValores();
    }

    // Soluciones
    d_b.onclick = function (e) {
        numero = result.textContent;
        opcion = "db";
        resolver();
    }

    d_h.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "dh";
        resolver();
    }

    d_o.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "do";
        resolver();
    }

    b_d.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "bd";
        resolver();
    }

    b_h.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "bh";
        resolver();
    }

    b_o.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "bo";
        resolver();
    }

    h_b.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "hb";
        resolver();
    }

    h_d.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "hd";
        resolver();
    }

    h_o.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "ho";
        resolver();
    }

    o_d.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "od";
        resolver();
    }

    o_b.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "ob";
        resolver();
    }

    o_h.onclick = function (e) {
        numero = result.textContent;
        limpiar();
        opcion = "oh";
        resolver();
    }
}

function limpiar() {
    result.textContent = "";
}

function resetearValores() {
    result.textContent = "";
    numero = 0;
    opcion = "";
}

function resolver() {
    var fin = 0;

    switch (opcion) {
        case "db":
            fin = (+numero).toString(2)
            break;

        case "dh":
            fin = (+numero).toString(16);
            fin = fin.toUpperCase();
            break;

        case "do":
            fin = (+numero).toString(8);
            break;

        case "bd":
            fin = parseInt(numero, 2);
            break;

        case "bh":
            aDecim = parseInt(numero, 2);
            fin = (+aDecim).toString(16);
            fin = fin.toUpperCase();
            break;

        case "bo":
            aDecim = parseInt(numero, 2);
            fin = (+aDecim).toString(8);
            break;

        case "hd":
            fin = parseInt(`0x${numero}`, 16);
            break;

        case "hb":
            aDecim = parseInt(`0x${numero}`, 16);
            fin = (+aDecim).toString(2);
            break;

        case "ho":
            aDecim = parseInt(`0x${numero}`, 16);
            fin = (+aDecim).toString(8);
            break;

        case "od":
            fin = parseInt(numero, 8);
            break;

        case "ob":
            aDecim = parseInt(numero, 8);
            fin = (+aDecim).toString(2);
            break;

        case "oh":
            aDecim = parseInt(numero, 8);
            fin = (+aDecim).toString(16);
            fin = fin.toUpperCase();
            break;

        default:
            break;
    }
    resetearValores();
    result.textContent = fin;
}


var numero = 111;
var posicion = 0;
var sumaTotal;
for (numero.length(); posicion <= numero.length; posicion++) {
    if (numero.charAt(0) == 1) {
        var pos = numero.charAt(0) * 2 ^ posicion;
        sumaTotal += pos;
        posicion++;
    } else {
        posicion++;
    }
}
alert(sumaTotal);