/* creamos las rutas publicas*/
import React from 'react';
import { Redirect, Switch } from 'react-router';
import Login from '../components/Login';
import RecuperarContrasena from "../components/RecuperarContrasena";
import Registrar from "../components/Registrar";
import cambiarpassword from '../views/cambiarpassword';
import { PublicRoute } from './helperRoutes';
import carro from "../components/carrito"
const PublicRoutes =()=>{
    return(
    
        // eslint-disable-next-line react/jsx-no-undef
/* ACA SE COLOCAN LAS PAGINAS QUE PUEDEN ENTRAR SIN CONTROL */
        
        <Switch>
             <PublicRoute exact path = "/cambiopassword/:id1/:id2" component={cambiarpassword} />
             <PublicRoute exact path = "/usuarioPublico" component={Login} />
             <PublicRoute exact path="/Recuperar_Contrasena" component={RecuperarContrasena} />
             <PublicRoute path="/registrar" component={Registrar} />
             <PublicRoute exact path="/comprarNR-modal" component={carro} />
              {/* inyecta la pagina creada  */}
            {/*  <PublicRoute exact path = "/inicio" component={inicio} /> */}
            
            <Redirect to='/inicio'/>
    
        </Switch>
    
   
    

    )
    

}


/* PARA SER LLAMADAS TODAS LA PUBLICAS AL APP.JS */
export default PublicRoutes;