/* eslint-disable react-hooks/rules-of-hooks */
import Axios from "axios";
import React, { useState } from "react";

/* exportarlo como componente para inyectar en public.routes.js*/
export default function cambiarpassword(props) {
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
  const tokenTiempo = props.match.params.id1; /* SE TOMA DERECTO DE LOS PROPS */
  const idUsuario =
    params.id2; /* SE DESTRUCTURA CON   const  { match: { params } } = props; */

  console.log(tokenTiempo); // mostraria el token

  /* ENVIOS DE LA INFORMACIOIN AL BACKEND PARA LA MODIFICACION DE LA CONTRASEÑA */

  const envioNuevoPasswors = async () => {
    const respuesta = await Axios.get(
      /*  "https://ganohealthy.herokuapp.com/cambio_password/",
      tokenTiempo,infoPassword */

      'http://localhost:4000/cambio_password/' + idUsuario + '/' + newPassword , { headers: { autorizacion: "bearer " + tokenTiempo } }
     
    );

    const mensaje =
      respuesta.data
        .mensage;
        
    console.log(respuesta.data
        .mensage);
  };

  return (
    <div>
      <p>Pagina para cambiar contraseña</p>

      <div className="form-group  mt-3">
        <input
          type="text"
          className="form-control"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value.toLowerCase())}
          placeholder="codigo"
          required
        />
      </div>
      <button
        className="btn btn-danger mr-2"
        id="desactivar"
        onClick={() => envioNuevoPasswors()}
      >
        <i className="far fa-trash-alt"> </i>{" "}
        {/* agregar el onClick para ejecutaar la funcion eliminar APROVECHA Y SACA EL ._ID Y LO ENVIA A LA FUNCION ELIMINAR(_ID)*/}
        Eliminar
      </button>
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
