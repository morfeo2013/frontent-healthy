import Axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"; /* IMPORTAR PARA PODER ACCEDER AL PA PROPIEDAD LINK Y ACCEDER
A LA PAGINA DONDE ESTA CREADO LA OPCION DE  CREAR USUARIOS EN EL RETUR DE CREACION DE PAGINAS */

export default function RecuperarContrasena() {
  const [correo, setCorreo] = useState("");

  const login = async (e) => {
    e.preventDefault();

    /* este recivira los datos desda la pagina para ser comparados con los del backend */
    const RecuperarContrasena = {
      correo,
    };
    const respuesta = await Axios.post(
      "https://ganohealthy.herokuapp.com/Recuperar",
      RecuperarContrasena
      /* "http://localhost:4000/Recuperar",
      RecuperarContrasena */
    ); /* 
        enviara los datos json de la onstante usuario al backend */

    const mensaje =
      respuesta.data
        .mensage; /* extraemos el mensaje desde el backen creado para mostrarlo en el sweetalert2 */

    if (mensaje === "Correo incorecto o No existe") {
      Swal.fire({
        icon: "error",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="container p-5 "></div>
     
      <div className="row pt-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <div className="card">
            <div className="container text-center fa-4x">
            
            <i class="fab fa-expeditedssl"></i>
            </div>
            <div className="card-header text-center">
             <h4>¿Tienes problemas para entrar?</h4> 
            </div>
            <p className="text-center m-3">
            Introduce tu correo electrónico y te enviaremos un enlace para que vuelvas a entrar en tu cuenta.

            </p>
            <div className="card-boddy m-2">
              <form onSubmit={login}>
                <div className="form-group mt-2">
                  <input
                    type="email"
                    name="correo"
                    className="form-control"
                    /* autofocus inicia el cursor en este lugar del form */
                    placeholder="Ingresa tu Correo"
                    required
                    autoFocus
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}
                  />
                </div>

                <div className="d-grid gap-2 m-2">
                  <button
                    type="submit"
                    className=" btn btn-warning mt-3 btn-block"
                  >
                    Enviar enlace de acceso
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
