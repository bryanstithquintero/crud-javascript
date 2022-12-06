import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");//crea el tipo de etiqueta
    const contenido = //pone el contenido, si tiene variables intercambiables se pone variable
        `<td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit">Editar</a>
                </li>
                <li>
                    <button class="simple-button simple-button--delete" type="button">
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`;
    linea.innerHTML = contenido; //se mezcla se agrega el contenido
    return linea
}

const table = document.querySelector("[data-table]") //obtiene el data

clientServices.listaClientes().then((data) => {
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("UN ERROR"))

