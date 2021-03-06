/* eslint-disable react/jsx-no-undef */
import React from "react";
/* ESTE ARCHIVO ES EL ENCARGADO DE ACTIVAR LOS DIFERENTES ARCHIVOS.JS SEGUN EL LINK INGRESADO */

/* IMPORTAR LOS ELEMENTOS NECESARIOS  Y LAS RUTAS */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
/* IMPORTA LOS CUATRO ELEMENTOS CREADOS EN JS */
import IngresarLibro from "./components/IngresarLibro";
import RedesSociales from "./components/RedesSociales"
import ListarLibro from "./components/ListarLibro";
import Autor from "./components/Autor";
import carro from "./components/carrito"

import ListarUsuarios from "./components/ListarUsuarios";
import Favoritos from "./components/Favoritos";
import Administrador from "./components/Administrador";
import inicio from "./components/inicio";

import VistaUsuario from "./components/VistaUsuario";
import VistaProductos from "./components/VistaProductos";
/* const { default: Autor } = require("./components/Autor");  otra opcion*/

/* importal los publicos */
import PublicRoutes from "./routers/public.routes";

/* importar el usecontext */
import  TemaContext  from "./context/Usecontext";

const { default: Nav } = require("./components/Nav");

const { default: PiedePagina } = require("./components/PiedePagina");

/* PARA PEDIR SI SI EN sessionStorage.getItem ESTA GENERADO CORRECTAMENTE EL TOQUE Y CREA LA CONDICION
PARA ACCEDER O DEVOVER AL INICIO */
/* const validar=()=>{
  if(sessionStorage.getItem('token')){  return true}
  



else{return false}


} */

/* ESTO PARA DARLE MAS SEGURIDAD ALA ENTRADA DEL USUARIO Y NO PERMITIR EL ACCESO A LOS COMPONENTES */
/* const MyRoute=(props)=>{
 
  return validar()?<Route {...props}/>

  :
  
  <Redirect to='/inicio'/>
  
} */

/* las props son para recivir todo lo que venga desde las rutas */






function App(props) {
  return (
 
    <div className="">
      <TemaContext>

      
      <Router>
      <Route path="/" component={RedesSociales}/>
        <Nav />
       
        <PublicRoutes />
        
        {/* AL INGRESAR  A DETERMINADA DIRECCION SE ACTIVA UN ARCHIVO JSX QUE REDERIZARA LA PAGINA CON EL CONTENIDO DESIGNADO */}
      
        <Route path="/inicio" component={inicio}/>
      
         
      
        <Route exact path='/VistaProductosUsuario' component={VistaUsuario} />
        <Route exact path = "/usuarioApp" component={Login} />


        <Route path="/autor" component={Autor} />

        <Route path="/comprar" component={carro} />
        {/* PARA CREAR O EDITAR USUARIOS */}
        {/* <Route path='/ingresar' component ={IngresarLibro}/> */}
       
        {/*  <Route path='/editar/:id' component ={IngresarLibro}/> */}
        <Route path="/listar" component={ListarLibro} />
        
        <Route path="/favoritos/:id" component={Favoritos} />
        <Route path="/listarUsuarios" component={ListarUsuarios} />
        <Route path="/comprar/:id" component={IngresarLibro} />
        <Route path="/administrador" component={Administrador} />

        <Route path="/VistaProductos" component={VistaProductos} />

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        {/*PARA LA CONSOLA DEL ADMINSTRADOR */}

        {
          <div className="">
             
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <Route path="/administrador1" component={Administrador} />
              </div>

              <div className=" col-sm-12 col-md-9">
                <Route path="/administrador1" component={ListarLibro} />
              </div>
            </div>
          </div>
        }
        {
          <div className="row ">
            <div className="col-sm-12 col-md-3">
              <Route path="/administrador2" component={Administrador} />
            </div>

            <div className=" col-sm-12 col-md-9">
              <Route path="/administrador2" component={ListarUsuarios} />
            </div>
          </div>
        }

        {
          <div className="row ">
            <div className="col-sm-12 col-md-3">
              <Route path="/editar/:id" component={Administrador} />
            </div>
            <div className=" col-sm-12 col-md-9">
              <Route path="/editar/:id" component={IngresarLibro} />
            </div>
          </div>
        }
        {
          <div className="row ">
            <div className="col-sm-12 col-md-3">
              <Route path="/ingresar" component={Administrador} />
            </div>
            <div className=" col-sm-12 col-md-9">
              <Route path="/ingresar" component={IngresarLibro} />
            </div>
          </div>
        }
        {
          
           
            <div className="row">
            <div className="col-sm-12 col-md-3">
              
              <Route path="/visualAdmin" component={Administrador} />
            </div>
            <div className=" col-sm-12 col-md-9">
            
              <Route path="/visualAdmin" component={VistaUsuario} />
            </div>
          </div>
        
          
        }
        <PiedePagina />
        {/*  <Redirect to='/inicio'/> */}
      </Router>
      </TemaContext>
    </div>
  );
}

export default App;
