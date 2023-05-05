var contadorVenta = 1;
var contadorPelicula = 1;
var contadorCliente = 1;

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
    peliculas.innerHTML+=newPelicula;
    contadorPelicula++;
    document.getElementById('crea_pelicula').style.display = 'none'
}

/*********************************************************************************************/
function agregarCliente(){
    let clientes = document.getElementById("cliente");
    let newCliente = `
    <tr>
        <td>
            <label>
                <input id="cliente${contadorCliente}" type="checkbox">
            </label>
        </td>
        <td>${contadorCliente}</td>
        <td>Matias</td>
        <td>Lagos</td>
    </tr>
    `
    clientes.innerHTML+=newCliente;
    contadorCliente++;
    document.getElementById('crea_cliente').style.display = 'none'
}

function validarCnombre(){
    if($("#cliente_nombre").length <= 2){
        $("#helpNombreCliente").text("⛔ El nombre debe tener minimo 2 letras");
    } else {
        $("#helpNombreCliente").fadeOut();
    }
}
function validarCapellido(){
    if($("#cliente_apellido").length < 3){
        
    }
}