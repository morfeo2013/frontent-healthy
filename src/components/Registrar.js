import Axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Registrar() {
  const [nombre, setNombre] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [cedula, setCedula] = useState("");
  const [contacto, setContacto] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const registrar = async (e) => {
    const contadorFavoritos = 0;
    e.preventDefault();

    /* este recivira los datos desda la pagina para ser comparados con los del backend */
    const usuario = {
      correo,
      contrasena,
      cedula,
      contacto,
      direccion,
      ciudad,
      nombre,
      contadorFavoritos,
    };
    const respuesta = await Axios.post(
      "https://ganohealthy.herokuapp.com/registrar",
      usuario
    ); /* 
        enviara los datos json de la onstante usuario al backend */

    const mensaje =
      respuesta.data
        .mensage; /* extraemos el mensaje desde el backen creado para mostrarlo en el sweetalert2 */

    if (mensaje === "Ingresate login valido desde el backend") {
      /* esto como una parte de validacion adicional */ const nombre =
        respuesta.data
          .nombre; /* se agrega el nombre para el encabezado como en el registro directamente */
      const admin = respuesta.data.admin;
      const token = respuesta.data.token;
      const contadorFavoritos = respuesta.data.contadorFavoritos;

      const id = respuesta.data.id;
      /* const nombre=respuesta.data.nombre */
      sessionStorage.setItem("token", token);

      sessionStorage.setItem("id", id);
      sessionStorage.setItem("admin", admin);
      sessionStorage.setItem("nombre", nombre);
      sessionStorage.setItem("contadorFavoritos", contadorFavoritos);
      Swal.fire({
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
      });
      /* lo direcciona a la pagina seleccionada despues de tener el login correcto */
      setTimeout(() => {
        window.location.href = "/VistaProductosUsuario";
      }, 1500);
      /* si no le envia un mensage al frontend de que hay un error */
    } else {
      Swal.fire({
        icon: "error",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="row pt-4">
        <div className="col-lg-6 col-md-8 mx-auto">
          <div className="card">
            <div className="container text-center fa-5x">
              <i className="fas fa-user"></i>
            </div>
            <div className="card-header text-center">Registrarse</div>

            <div className="card-boddy m-2">
              <form onSubmit={registrar}>
                <div className="form-group mt-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="nombre"
                    required
                    autoFocus
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                {/* <div className="form-group mt-2">
                                    <input className="form-control" type="text" placeholder="Cedula" required onChange={e => setCedula(e.target.value)}/>

                                </div> */}

                <div className="form-group mt-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Contacto"
                    required
                    onChange={(e) => setContacto(e.target.value)}
                  />
                </div>

                <div className="form-group mt-2">
                  <input
                    type="text"
                    name="contrasena"
                    className="form-control"
                    placeholder="Direccion"
                    required
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    type="text"
                    name="contrasena"
                    className="form-control"
                    placeholder="Ciudad"
                    required
                    onChange={(e) => setCiudad(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    type="email"
                    name="correo"
                    className="form-control"
                    /* autofocus inicia el cursor en este lugar del form */
                    placeholder="Correo"
                    required
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}
                  />
                </div>

                <div className="form-group mt-2">
                  <input
                    type="password"
                    name="contrasena"
                    className="form-control"
                    placeholder="contraseña"
                    required
                    onChange={(e) => setContrasena(e.target.value)}
                    value={contrasena}
                  />
                </div>
                <div className="d-grid gap-2 m-2">
                  <button
                    type="submit"
                    className=" btn btn-success  mt-3 btn-block"
                  >
                    Aceptar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
