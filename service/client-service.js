const listaClientes = async () => {
    /* const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest(); //inicializa las de http
        //abre http recibe(metodo, url) los metodos get put etc
        http.open("GET", "http://localhost:3000/perfil");

        http.send(); //llamada

        http.onload = () => {
            const response = JSON.parse(http.response); //obtiene datos del back en string y transforma en objeto
            if (http.status >= 400) {
                reject(response)
            } else {
                resolve(response)
            }
        }
    }); 
    return promise; //al salir es solo data*/

    const respuesta = await fetch("http://localhost:3000/perfil");

    return respuesta.json();
};

const crearCliente = async (nombre, email) => {
    const respuesta = await fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() })
    })
    return respuesta;
}

const eliminarCliente = async (id) => {
    const respuesta = await fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    })
    return respuesta;
}

const detalleCLiente = async (id) => {
    const respuesta = await fetch(`http://localhost:3000/perfil/${id}`);
    return respuesta.json();
}

const actualizarCliente = async (nombre, email, id) => {
    const respuesta = await fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email })
    });
    return respuesta;
}

// service hace comunicacion

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCLiente,
    actualizarCliente
};


