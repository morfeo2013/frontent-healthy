/* SE CREA PARA CONTROLAR LAS PUBLICAS Y LAS PRIVADAS  */

/* se importan los componentes necesarios */
import React from 'react';
import { Redirect, Route } from 'react-router';


/* se crea la condicion si la pagina es publica */
/* el expot permitira llamarla desde otro componente */
export const PublicRoute = ({component, ...options})=> {
    const isAuth = false;  /* SE CONDICIONA QUE NO TIENE AUTENTICACION */
    if (!isAuth) return <Route {...options} component={component}/> /* si esta la pagina que ingrese */
    return <Redirect to ="/inicio1"/> /* si la pagina no existe la redireccione al inicio */

    
}
