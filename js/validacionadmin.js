var contadorVenta = 1;
var contadorPelicula = 1;
var contadorCliente = 1;
var cliente_nombre;
var cliente_apellido;
var pelicula_nombre;
var pelicula_genero;
var pelicula_anno;
var pelicula_precio;
var venta_pelicula;
var venta_cliente;
var venta_fecha;
var venta_hora;
var venta_precio;

function agregarVenta() {
    let ventas = document.getElementById("ventas");
    if (validarVentaPelicula() && validarVentaCliente() && validarVentaFecha() && validarVentaHora() && validarVentaPrecio()) {
        let newVenta = `
        <tr>
            <td>
                <label>
                    <input id="s${contadorVenta}" type="checkbox">
                </label>
            </td>
            <td>${contadorVenta}</td>
            <td>${venta_pelicula}</td>
            <td>${venta_cliente}</td>
            <td>${venta_fecha}</td>
            <td>${venta_hora}</td>
            <td>${venta_precio}</td>
        </tr>
        `
        ventas.innerHTML += newVenta;
        contadorVenta++;
        document.getElementById('crea_venta').style.display = 'none';
    }
}

function validarVentaPelicula() {
    $("#helpVentaPelicula").show();
    if ($("#ventaPelicula").val().length == 0) {
        $("#helpVentaPelicula").text("⛔ Debe ingresar el nombre a la pelicula");
    } else {
        $("#helpVentaPelicula").hide();
        venta_pelicula = $("#ventaPelicula").val();
        return true;
    }
}
function validarVentaCliente(){
    $("#helpVentaCliente").show();
    if ($("#venta_cliente").val().length <= 2) {
        $("#helpVentaCliente").text("⛔ Debe ingresar un Cliente válido, minimo 3 caracteres");
    } else {
        $("#helpVentaCliente").hide();
        venta_cliente = $("#venta_cliente").val();
        return true;
    }
}

function validarVentaFecha() {
    $("#helpVentaFecha").show();
    if ($("#venta_fecha").val() == "") {
        $("#helpVentaFecha").text("⛔ Debe ingresar una fecha");
    } else {
        $("#helpVentaFecha").hide();
        venta_fecha = $("#venta_fecha").val();
        return true;
    }
}

function validarVentaHora() {
    $("#helpVentaHora").show();
    if ($("#venta_hora").val() == "") {
        $("#helpVentaHora").text("⛔ Debe ingresar una Hora");
    } else {
        $("#helpVentaHora").hide();
        venta_hora = $("#venta_hora").val();
        return true;
    }
}

function validarVentaPrecio() {
    $("#helpVentaPrecio").show();
    if ($("#venta_precio").val() <= 0) {
        $("#helpVentaPrecio").text("⛔ Debe ingresar un precio válido")
    } else {
        $("#helpVentaPrecio").hide();
        venta_precio = $("#venta_precio").val();
        return true;
    }
}

function vaciar_crea_venta() {
    $("#helpVentaPelicula").hide();
    $("#helpVentaCliente").hide();
    $("#helpVentaFecha").hide();
    $("#helpVentaHora").hide();
    $("#helpVentaPrecio").hide();
}

/*******************************************************************************/

function agregarPelicula() {
    let peliculas = document.getElementById("pelicula");
    if (validarPeliculaNombre() && validarGenero() && validarAnno() && validarPrecio()) {
        let newPelicula = `
        <tr>
            <td>
                <label>
                    <input id="pelicula${contadorPelicula}" type="checkbox">
                </label>
            </td>
            <td>${contadorPelicula}</td>
            <td id= "peli${contadorPelicula}">${pelicula_nombre}</td>
            <td>${pelicula_genero}</td>
            <th>${pelicula_anno}</th>
            <th>${pelicula_precio}</th>
        </tr>
        `
        peliculas.innerHTML += newPelicula;
        contadorPelicula++;
        vaciar_crea_pelicula();
        document.getElementById('crea_pelicula').style.display = 'none';
    }
}

function validarPeliculaNombre() {
    $("#helpPeliculaNombre").show();
    if ($("#pelicula_nombre").val().length == 0) {
        $("#helpPeliculaNombre").text("⛔ Debe ingresar el nombre a la pelicula");
    } else {
        $("#helpPeliculaNombre").hide();
        pelicula_nombre = $("#pelicula_nombre").val();
        return true;
    }
}
function validarGenero() {
    $("#helpPeliculaGenero").show();
    if ($("#genero").val() == "") {
        $("#helpPeliculaGenero").text("⛔ Debe ingresar un Género")
    } else {
        $("#helpPeliculaGenero").hide();
        pelicula_genero = $("#genero").val();
        return true;
    }
}
function validarAnno() {
    $("#helpPeliculaAnno").show();
    if ($("#pelicula_anno").val() < 1950) {
        $("#helpPeliculaAnno").text("⛔ Ingrese un año válido (Superior a 1950)");
    } else {
        $("#helpPeliculaAnno").hide();
        pelicula_anno = $("#pelicula_anno").val();
        return true;
    }
}
function validarPrecio() {
    $("#helpPeliculaPrecio").show();
    if ($("#pelicula_precio").val() <= 0) {
        $("#helpPeliculaPrecio").text("⛔ Debe ingresar un precio válido")
    } else {
        $("#helpPeliculaPrecio").hide();
        pelicula_precio = $("#pelicula_precio").val();
        return true;
    }
}

function vaciar_crea_pelicula() {
    $("#pelicula_nombre").val("");
    $("#genero").val("");
    $("#pelicula_anno").val("");
    $("#pelicula_precio").val("");
    $("#helpPeliculaNombre").hide();
    $("#helpPeliculaGenero").hide();
    $("#helpPeliculaAnno").hide();
    $("#helpPeliculaPrecio").hide();
}

/*********************************************************************************************/
function agregarCliente() {
    let clientes = document.getElementById("cliente");

    if (validarCnombre() && validarCapellido()) {
        let newCliente = `
        <tr>
            <td>
                <label>
                    <input id="cliente${contadorCliente}" type="checkbox">
                </label>
            </td>
            <td>${contadorCliente}</td>
            <td>${cliente_nombre}</td>
            <td>${cliente_apellido}</td>
        </tr>
        `
        clientes.innerHTML += newCliente;
        contadorCliente++;
        document.getElementById('crea_cliente').style.display = 'none';
        vaciar_crea_cliente();
    }
}


function validarCnombre() {
    $("#helpNombreCliente").show();
    if ($("#cliente_nombre").val().length < 1) {
        $("#helpNombreCliente").text("⛔ El nombre debe tener minimo 2 letras");
    } else {
        $("#helpNombreCliente").hide();
        cliente_nombre = $("#cliente_nombre").val();
        return true;
    }
}

function validarCapellido() {
    $("#helpApellidoCliente").show();
    if ($("#cliente_apellido").val().length < 2) {
        $("#helpApellidoCliente").text("⛔ El apellido debe tener minimo 3 letras");
    } else {
        $("#helpApellidoCliente").hide();
        cliente_apellido = $("#cliente_apellido").val();
        return true;
    }
}
function vaciar_crea_cliente() {
    $("#cliente_nombre").val("");
    $("#cliente_apellido").val("");
    $("#helpNombreCliente").hide();
    $("#helpApellidoCliente").hide();
}
