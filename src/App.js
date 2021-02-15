
/* ESTE ARCHIVO ES EL ENCARGADO DE ACTIVAR LOS DIFERENTES ARCHIVOS.JS SEGUN EL LINK INGRESADO */


/* IMPORTAR LOS ELEMENTOS NECESARIOS  Y LAS RUTAS */
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

/* IMPORTA LOS CUATRO ELEMENTOS CREADOS EN JS */
import IngresarLibro from './components/IngresarLibro';

import ListarLibro from './components/ListarLibro';
import Autor from './components/Autor';
import Login from './components/Login';
import Registrar from './components/Registrar';
import ListarUsuarios from './components/ListarUsuarios';
import Favoritos from './components/Favoritos';
import Administrador from './components/Administrador';
import inicio from './components/inicio';

import VistaUsuario from './components/VistaUsuario';
import VistaProductos from './components/VistaProductos';
/* const { default: Autor } = require("./components/Autor");  otra opcion*/
const { default: Nav } = require("./components/Nav");
const { default: PiedePagina } = require("./components/PiedePagina");

const validar=()=>{
if(sessionStorage.getItem('token')){  return true}
else{return false}


}

const MyRoute=(props)=>{
  return validar()?<Route {...props}/>
  :
  <Redirect to='/inicio'/>
}



function App() {
  return (
    <div className="fluid">

   
    <Router>

  <Nav/> 
  
  

  <Route path='/VistaProductosUsuario' component ={VistaUsuario}/> 


<Route path='/inicio' component ={inicio}/> 


 <Route path='/usuario' component ={Login}/>
 
  
  {/* AL INGRESAR  A DETERMINADA DIRECCION SE ACTIVA UN ARCHIVO JS QUE REDERIZARA LA PAGINA CON EL CONTENIDO DESIGNADO */}
  <Route path='/autor' component ={Autor}/>
  {/* PARA CREAR O EDITAR USUARIOS */}
  {/* <Route path='/ingresar' component ={IngresarLibro}/> */}
  <Route path='/registrar' component ={Registrar} />
 {/*  <Route path='/editar/:id' component ={IngresarLibro}/> */}
  <Route path='/listar' component ={ListarLibro} />
  <Route path='/favoritos/:id' component ={Favoritos}/>
  <MyRoute path='/listarUsuarios' component ={ListarUsuarios} />
  <Route path='/comprar/:id' component ={IngresarLibro}/>
  <Route path='/administrador' component ={Administrador}/>

  <Route path='/VistaProductos' component ={VistaProductos}/>


 
  

{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
{/*PARA LA CONSOLA DEL ADMINSTRADOR */}

{<div className="fluid">

<div className="row pt-4">
<div className="col-sm-12 col-md-3 mx-auto">
<Route path='/administrador1' component ={Administrador}/>
</div>

<div className=" col-sm-12 col-md-9">
<Route path='/administrador1' component ={ListarLibro} />
</div>
</div>
</div>
 
}
{
  <div className="row ">
  <div className="col-sm-12 col-md-3">
  <Route path='/administrador2' component ={Administrador}/>
  </div>

  <div className=" col-sm-12 col-md-9">
  <Route path='/administrador2' component ={ListarUsuarios} />
  </div>
  </div>


}


{
  <div className="row ">
  <div className="col-sm-12 col-md-3">
  <Route path='/editar/:id' component ={Administrador}/>
  </div>

  <div className=" col-sm-12 col-md-9">
  <Route path='/editar/:id' component ={IngresarLibro} />
  </div>
  </div>


}

{
  <div className="row ">
  <div className="col-sm-12 col-md-3">
  <Route path='/ingresar' component ={Administrador}/>
  </div>

  <div className=" col-sm-12 col-md-9">
  <Route path='/ingresar' component ={IngresarLibro} />
  </div>
  </div>


}


{
  <div className="row ">
  <div className="col-sm-12 col-md-3">
  <Route path='/visualAdmin' component ={Administrador}/>
  </div>

  <div className=" col-sm-12 col-md-9">
  <Route path='/visualAdmin' component ={VistaUsuario} />
  </div>
  </div>


}
     <PiedePagina/>
    </Router>
  
    </div>
  );
}

export default App;
