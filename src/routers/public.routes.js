/* creamos las rutas publicas*/
import React from 'react';
import { Redirect, Switch } from 'react-router';


import cambiarpassword from '../views/cambiarpassword';
import { PublicRoute } from './helperRoutes';

const PublicRoutes =()=>{
    return(
    
        // eslint-disable-next-line react/jsx-no-undef
        <Switch>
             <PublicRoute exact path = "/cambiopassword/:id1/:id2" component={cambiarpassword} /> {/* inyecta la pagina creada  */}
            {/*  <PublicRoute exact path = "/inicio" component={inicio} /> */}
            
            <Redirect to='/inicio'/>
    
        </Switch>
    
    
    

    )
    

}


/* PARA SER LLAMADAS TODAS LA PUBLICAS AL APP.JS */
export default PublicRoutes;