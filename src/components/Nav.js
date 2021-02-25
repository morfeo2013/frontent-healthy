/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
/* import ReactDOM from 'react-dom'; */
import { Link } from 'react-router-dom'
/* import AlbumOfTheWeek from './estadoGlobal'
import Axios from 'axios'/* PARA PODER HACER LAS PETICIONES GET,PUT,POS,DELETE EN EL BACKEND */ 
const fredy= (sessionStorage.getItem('contadorFavoritos'))
const fredy2= (sessionStorage.getItem('contProductos'))

export default function Nav() {



   

 
  /* para crear el ingreso inicial usuario o ya logeado */
  /* se crea el estado para evaluar que menu muestra */
  const [menu, setMenu] = useState(false)
  const [fav, setFav] = useState()
  const [fav2, setFav2] = useState()
  /* creamos un ussefect para que cuando se ingrese el token se active le menu a true*/
 
 
 

  useEffect(() => {
   
     
      setFav(fredy)
     
      
   
  }, [])
  useEffect(() => {
   
     
    setFav2(fredy2)
   
    
 
}, [])

 
  

  useEffect(() => {
    if (sessionStorage.getItem('token')) { setMenu(true) }
   
   
  }, [])
 

  const [admin, setAdmin] = useState(false)
  
 

 /*  var contFav =(sessionStorage.getItem('contadorFavoritos')) */
   // eslint-disable-next-line no-const-assign
  
  const id = (sessionStorage.getItem('id'))
  const id2 = (sessionStorage.getItem('admin'))
  useEffect(() => {
    if ((id === id2)) { setAdmin(true) }

  }, [id, id2])


  const salir = () => {
    sessionStorage.clear()
    setMenu(false)
  }

 
  

  return (


    <div className='navbarGeneral  sticky-top '>  {/* PARA QUEQUEDE SIEMPRE VSIBLE EL PIE DE PAGINA'sticky-top' */}
{/*  /* NAVRGADOR USANDO BOOSTRAP 5.0 */

/* ULILIZACION DE UN NAV RESPONSIVE */ }


<nav className="navbar navbar-expand-lg  navbar-light  fondo-nav  " id='Menu-navegacion'>
   <div className="imagenLogo">
   <img src ="https://morfeo12345678.s3-sa-east-1.amazonaws.com/fotos+ganoderma/LOGOS+PARA+ANGELA+GANO+HEALTHY-03.jpg" alt="" className="img-fluid" id='logo'/>
   </div>
   

  <div className="container">

  

   
   
    <ul className="navbar-nav">
  
  <li className="nav-item" >
    
    <Link id="listar1" className="nav-link nav-success" to="/inicio"><i className="fas fa-mug-hot"></i>
   
      Inicio</Link>
     {/*  <Link className="nav-link nav-success" to="/visual"><i className="fas fa-mug-hot"></i>
   
      Inicio</Link> */}
  </li>
</ul>
{!menu ?
  <ul className="navbar-nav">
  
  <li className="nav-item" >
    
    <Link id="listar1" className="nav-link nav-success text-justify ml-2" to="/VistaProductos"><i className="fas fa-journal-whills m-1"></i>
   
      Nuestros Productos</Link>
     {/*  <Link className="nav-link nav-success" to="/visual"><i className="fas fa-mug-hot"></i>
   
      Inicio</Link> */}
  </li>
</ul>
:
null
}



    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  

    {menu ?

<div className="collapse navbar-collapse " id="navbarNavDropdown">



<div className="">



<ul className="navbar-nav">
{admin ?
null:
<li className="nav-item text-success">
    <Link id="listar1" className="nav-link" to="/VistaProductosUsuario">Listado de Productos
    
    </Link>
   {/*  <div className="text-center">
      <span className="badge badge-danger ">
    {fav2}
        
        </span> 
    </div> */}
    
  </li>
}


  {admin ?
   
     



    <li className="nav-item text-success">
      <Link className="nav-link" to="/listarUsuarios">{/* Listar usuarios */}</Link> 


    </li>

    /*  /listarusuarios */
    :
    // eslint-disable-next-line no-undef
    <li className="nav-item">
      <Link className="nav-link position-relative" to={"/favoritos/"+id}>lista Mis favoritos
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{fav}<span class="visually-hidden"></span></span>
      
      </Link>
    
     
       
    </li>

  }
  {admin ?
    <li className="nav-item ">
      <Link className="nav-link" to="/ingresar">{/* Ingrasar nuevo producto */}</Link> {/* colcar el ink "/ingresar" igual a el del acceso en aap.js */}


    </li>

    :
    <li className="nav-item">
      <Link className="nav-link" to="/autor">Contactanos</Link>
    </li>
  }
</ul>
</div>




<div className=" d-flex justify-content-between">

<ul className="navbar-nav ">

    {
               (id === id2)?
               <li className="nav-item">
               <Link  className="nav-link " to="/visualAdmin/">Administrador: Bienvenida {sessionStorage.getItem('nombre')} </Link>{/* obtiiene el nombre y lo muestra */}
             </li>
       :
       <li className="nav-item">
       <Link id="listar2" className="nav-link " to="/">Usuario: Bienvenido {sessionStorage.getItem('nombre')} </Link>{/* obtiiene el nombre y lo muestra */}
     </li>


    }
 


  <li className="nav-item">
    <Link id="listar3" className="nav-link" to="/inicio" onClick={() => salir()}>salir</Link>
  </li>
</ul>
</div>


</div>




:
<div className="collapse navbar-collapse  ml-2 d-fluxer" id="navbarNavDropdown">

<ul className="navbar-nav ">


<li className="nav-item">
      <Link className="nav-link " to="/autor">Contactanos</Link>
    </li>
    


<li className="nav-item">
  <Link id="ingresar" className="nav-link " to="/usuario">Inicio Sesion</Link>
</li>
<li className="nav-item">
  <Link id="crear" className="nav-link" to="/registrar">Registrarse</Link> {/* colcar el ink "/ingresar" igual a el del acceso en aap.js */}
  
</li>


</ul>

</div>
}

      
    </div>
    
  


  
  
</nav>
    </div>
   
  )
  
}
