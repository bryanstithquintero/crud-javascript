const listaClientes = () => {
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

    return fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json()); //es mas rapido esto que promesa;
};

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() })
    })
}

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    })
}

const detalleCLiente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json())
}

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email })
    }).then((respuesta) => respuesta).catch()
}

// service hace comunicacion

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCLiente,
    actualizarCliente
};


