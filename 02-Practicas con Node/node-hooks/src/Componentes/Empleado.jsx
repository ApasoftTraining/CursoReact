import React from 'react'
import { useState } from 'react'

function Empleado() {

    //Declaramos las variables con estado
    //Nombre de la variables y método que la modifica
    const [nombre, setnombre] = useState("");
    const [apellido1, setape1] = useState("");
    const [apellido2, setape2] = useState("");
    const [iniciales, setiniciales] = useState("");

    //Vuisualizamos las iniciales
    //Preventdefault impode que el formulario se renderize de nuevo
    const pintarIniciales = (e) => {
        e.preventDefault();
        setiniciales(`${nombre[0]}.${apellido1[0]}.${apellido2[0]}`.toUpperCase());
    }

    return (
        <form onSubmit={pintarIniciales}>
            <p> nombre</p>
            {/*En cada evento llamamos a la funcion que cambia el estado de la variable */}
            <input name="nombre" type="text" value={nombre} onChange={(e) => setnombre(e.target.value)}></input>
            <br />
            <p>Apellido 1 </p>
            <input name="apellido1" type="text" value={apellido1} onChange={(e) => setape1(e.target.value)}></input>
            <br />
            <p>Apellido 1 </p>
            <input name="apellido2" type="text" value={apellido2} onChange={(e) => setape2(e.target.value)}></input>
            <br />
            <p>Iniciales  {iniciales}</p>
            <button type="submit"> Aceptar</button>
        </form>
    )
}

export default Empleado