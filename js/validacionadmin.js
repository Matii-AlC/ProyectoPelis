var contadorVenta = 1;
var contadorPelicula = 1;
var contadorCliente = 1;
var cliente_nombre;
var cliente_apellido;

function agregarVenta() {
    let ventas = document.getElementById("ventas");
    let newVenta = `
    <tr>
        <td>
            <label>
                <input id="s${contadorVenta}" type="checkbox">
            </label>
        </td>
        <td>${contadorVenta}</td>
        <td>La Ballena</td>
        <td>Raul Gonzalez</td>
        <td>17/04/23</td>
        <td>20:00</td>
        <td>$3.500</td>
    </tr>
    `
    ventas.innerHTML += newVenta;
    contadorVenta++;
    document.getElementById('crea_venta').style.display = 'none'
}

/*******************************************************************************/

function agregarPelicula() {
    let peliculas = document.getElementById("pelicula");
    let newPelicula = `
    <tr>
        <td>
            <label>
                <input id="pelicula${contadorPelicula}" type="checkbox">
            </label>
        </td>
        <td>${contadorPelicula}</td>
        <td>La Ballena</td>
        <td>Drama/Ficción</td>
        <th>2022</th>
        <th>$3.500</th>
    </tr>
    `
    peliculas.innerHTML += newPelicula;
    contadorPelicula++;
    document.getElementById('crea_pelicula').style.display = 'none';
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
    } else {
        $("#helpCliente").text("⛔Hay nformación mal ingresada")
    }
}


function validarCnombre() {
    $("#helpNombreCliente").show();
    if ($("#cliente_nombre").val().length < 1) {
        $("#helpNombreCliente").text("⛔ El nombre debe tener minimo 2 letras");
    } else {
        $("#helpNombreCliente").text("✔");
        cliente_nombre = $("#cliente_nombre").val();
        return true;
    }
}

function validarCapellido() {
    $("#helpApellidoCliente").show();
    if ($("#cliente_apellido").val().length < 2) {
        $("#helpApellidoCliente").text("⛔ El apellido debe tener minimo 3 letras");
    } else {
        $("#helpApellidoCliente").text("✔");
        cliente_apellido = $("#cliente_apellido").val();
        return true;
    }
}
function vaciar_crea_cliente(){
    $("#cliente_nombre").val("");
    $("#cliente_apellido").val("");
    $("#helpNombreCliente").hide();
    $("#helpApellidoCliente").hide();
}