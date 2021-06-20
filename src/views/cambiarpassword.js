/* eslint-disable react-hooks/rules-of-hooks */
import Axios from "axios";
import React, { useState } from "react";

/* exportarlo como componente para inyectar en public.routes.js*/
export default function cambiarpassword(props) {
  /* se crea el stado cuando el usuario ingrese la neuva contraseña para ser enviada al backen */
  var [newPassword, setNewPassword] = useState("");

  /* se toman las PROPS para sacar el valor del la URL */

  /* tomamos el valor que envia el baken por la url y la destructuramos */
  const {
    match: { params },
  } = props;

  /* props.match.path === "/comprar/:id" EL .PACH ES PARA IDENTIFICAR SI TIENE DETERMINADA INFORMACION LA URL */
  /*  props.match.params.id  EL .PARMAS ES PARA SACAR LA INFORMACION DE ESA HUBICACION EN LA URL ATRAVEX DE LOS PROPS QUE LLEGAN DESDE PUBLIC.ROUTE*/

  /* se toma el valor establecido en  el archivo de public.route
    <PublicRoute exact path = "/cambiopassword/:id1/:id2" component={cambiarpassword} */

  /* DOS MANERAS ES LO MISMO */
  const tokenTiempo =
    props.match.params
      .id1; /* SE TOMA DERECTO DE LOS PROPS PARA SACAR EL TOKEN GENERADO DESDE EL BACKE*/
  const idUsuario =
    params.id2; /* SE DESTRUCTURA CON   const  { match: { params } } = props;  PARA SACAR EL USUARIIO ID*/

  /*  console.log(tokenTiempo); */ // mostraria el token

  /* ENVIOS DE LA INFORMACIOIN AL BACKEND PARA LA MODIFICACION DE LA CONTRASEÑA */

  const envioNuevoPasswors = async () => {
    const respuesta = await Axios.get(
      "https://ganohealthy.herokuapp.com/cambio_password/" /* direccion para capeta ruter del backen */ +
        idUsuario /* el id del usuario para que el backend sepa cual contraseña va a cambiar */ +
        "/" +
        newPassword /* tomade del estado useState para enviar la nueva contraseña */,
      {
        headers: { autorizacion: "bearer " + tokenTiempo },
      } /* clave acceso para ingresar ala carpeta token y revisar la validad del token y el tiempo */

      /*  'http://localhost:4000/cambio_password/' + idUsuario + '/' + newPassword , { headers: { autorizacion: "bearer " + tokenTiempo } } */
    );

    /* PENDIENTE CONFIGURAR AL CINFIRMACION DEL BACKEND DE QUE SE REALIZO EL CAMBIODE CONTRASEÑA */
    const mensaje = respuesta.data.mensage;

    /* console.log(respuesta.data.mensage); */
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
              <form >
                <div className="form-group mt-2">
                <input
          type="text"
          className="form-control"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value.toLowerCase())}
          placeholder="codigo"
          required
        />
                </div>

                <div className="d-grid gap-2 m-2">
                  <button 
                   className="btn btn-warning mt-3 btn-block"
                   id="desactivar"
                   onClick={() => envioNuevoPasswors()}
                   /*  agregar el onClick para ejecutaar la funcion eliminar APROVECHA Y SACA EL ._ID Y LO ENVIA A LA FUNCION ELIMINAR(_ID) */
                  
                  >
                     Cambiar contraseña
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

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* otra manera de hacerlo */
/* const  cambiarpassword = (props)=>{
   return(
   <div>
   <p>Pagina para cambiar contraseña</p>
   </div>
   )
} */

/* export default cambiarpassword;  */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
