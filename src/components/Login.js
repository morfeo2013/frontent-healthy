/* eslint-disable no-unused-vars */
import Axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"; /* IMPORTAR PARA PODER ACCEDER AL PA PROPIEDAD LINK Y ACCEDER
A LA PAGINA DONDE ESTA CREADO LA OPCION DE  CREAR USUARIOS EN EL RETUR DE CREACION DE PAGINAS */

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const login = async (e) => {
    e.preventDefault();

    /* este recivira los datos desda la pagina para ser comparados con los del backend */
    const usuario = {
      correo,
      contrasena,
    };
    const respuesta = await Axios.post(
      "https://ganohealthy.herokuapp.com/ingresar",
      usuario
    ); /* 
        enviara los datos json de la onstante usuario al backend */

    const mensaje =
      respuesta.data
        .mensage; /* extraemos el mensaje desde el backen creado para mostrarlo en el sweetalert2 */

    if (mensaje === "Ingresate login valido desde el backend") {
      const contadorFavoritos = respuesta.data.contadorFavoritos;
      const user2 = respuesta.data.user2;
      const admin = respuesta.data.admin;
      const token = respuesta.data.token;
      const nombre =
        respuesta.data
          .nombre; /* despuesde recibir el nombre para mostrarl oen el navvar */
      const id = respuesta.data.id;

      /* const nombre=respuesta.data.nombre */
      sessionStorage.setItem("token", token);
      sessionStorage.setItem(
        "nombre",
        nombre
      ); /* llevo el nombre al secion estorange que se hace publica en cualquier momento para ser usada */
      sessionStorage.setItem("id", id);
      sessionStorage.setItem("admin", admin);
      /* sessionStorage.setItem('nombre', nombre) */
      sessionStorage.setItem("user2", user2);
      sessionStorage.setItem("contadorFavoritos", contadorFavoritos);
      Swal.fire({
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
      });
      /* lo direcciona a la pagina seleccionada despues de tener el login correcto */
      setTimeout(() => {
        if (admin === id) {
          window.location.href = "/visualAdmin";
        } /*vista para el admin */ else {
          window.location.href = "/VistaProductosUsuario";
        } /*vista para el ususario */
      }, 1500);
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
    <div className="row ">
      <div className="container p-5 mt-4">
        
      </div>
      <div className="col-lg-6 col-md-8 mx-auto">
        <div className="card">
          <div className="container text-center fa-4x">
           
            <i class="fas fa-user-lock"></i>
          </div>
          <div className="card-header text-center">Iniciar Sesion</div>

          <div className="card-boddy m-2">
            <form onSubmit={login}>
              <div className="form-group mt-2">
                <input
                  type="email"
                  name="correo"
                  className="form-control"
                  /* autofocus inicia el cursor en este lugar del form */
                  placeholder="Correo"
                  required
                  autoFocus
                  onChange={(e) => setCorreo(e.target.value)}
                  value={correo}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="password"
                  name="contrasena"
                  className="form-control"
                  placeholder="contrasena"
                  required
                  onChange={(e) => setContrasena(e.target.value)}
                  value={contrasena}
                />
              </div>
              <div className="d-grid gap-2 m-2">
                <button
                  type="submit"
                  className=" btn btn-success mt-3 btn-block"
                >
                  Aceptar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-primary text-center">
          <Link to="/registrar">
            {" "}
            <h6>¿Eres Nuevo? Registrarme</h6>
           
            
           
          </Link>
        </div>
        <div className="text-primary text-center">
          <Link to="/Recuperar_Contrasena/">
            {" "}
            
            <h6>Olvide mi contraseña?</h6>
            
           
          </Link>
        </div>
      </div>
    </div>
  );
}
