/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */

/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useState, useEffect,useContext } from "react";
import { TemaContext } from "../context/Usecontext";



import { Link } from "react-router-dom";
$(".droptown-toggle").on("click", function (e) {
  $(".dropdown-submenu .dropdown-menu").hide();
});

/* import AlbumOfTheWeek from './estadoGlobal'
import Axios from 'axios'/* PARA PODER HACER LAS PETICIONES GET,PUT,POS,DELETE EN EL BACKEND */
const fredy = sessionStorage.getItem("contadorFavoritos");
const fredy2 = sessionStorage.getItem("contProductos");


export default function Nav() {

  const {contCarritoGeneral} = useContext(TemaContext)
  
  const {contFavoritos} = useContext(TemaContext)


  /* para crear el ingreso inicial usuario o ya logeado */
  /* se crea el estado para evaluar que menu muestra */
  const [menu, setMenu] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [, setFav] = useState();
  const [, setFav2] = useState();
  /* creamos un ussefect para que cuando se ingrese el token se active le menu a true*/

  useEffect(() => {
    setFav(fredy);
  }, []);
  useEffect(() => {
    setFav2(fredy2);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setMenu(true);
    }
  }, []);

  const [admin, setAdmin] = useState(false);

  /*  var contFav =(sessionStorage.getItem('contadorFavoritos')) */
  // eslint-disable-next-line no-const-assign

  const id = sessionStorage.getItem("id");
  const id2 = sessionStorage.getItem("admin");
  useEffect(() => {
    if (id === id2) {
      setAdmin(true);
    }
  }, [id, id2]);

  const salir = () => {
    sessionStorage.clear();
    setMenu(false);
  };

  return (
    /* para que el navbar este sin el espaciado blanco de arriba "style={{height:0}}" */
    <div className="" /* className="sticky-top "  */ style={{ height: 0 }}>

      
      <div className=" imagenLogo1 ">
        <img
          className=""
          
          src="https://res.cloudinary.com/dhiasghho/image/upload/v1623350102/logos%20base/logo2_dja3q6.png"
          alt=""
          
        />
      </div>
      <div className="navprincipal navbarGeneral rounded col-auto">
        {" "}
        {/* "VOLVER FIJO LA PARTE SUPERIOR" sticky-top  */}{" "}
        {/* PARA QUEQUEDE SIEMPRE VSIBLE EL PIE DE PAGINA'sticky-top' */}
        {/*  /* NAVRGADOR USANDO BOOSTRAP 5.0 */
        /* ULILIZACION DE UN NAV RESPONSIVE */}
        <nav
          className="navbar navbar-expand-lg   navbar-dark  fondo-nav  " /* expande a partr de lg */
          id="Menu-navegacion"
        >
          <button
            className="navbar-toggler col-xs-3 col-sm-12 col-md-12"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="">
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className=" navbar-nav ml-auto">
                {!menu ? null : <div class="col-12"></div>}
              </ul>
              {menu ? (
                <div className="">
                  <ul className="navbar-nav ml-auto">
                    {admin ? null : (
                      <li className="nav-item text-success">
                        <Link
                          id="listar1"
                          className="nav-link"
                          to="/VistaProductosUsuario"
                        >
                          PRODUCTOS
                        </Link>
                        {/*  <div className="text-center">
      <span className="badge badge-danger ">
    {fav2}
        
        </span> 
    </div> */}
                      </li>
                    )}
                    {admin ? null : (
                      /*  /listarusuarios */
                      // eslint-disable-next-line no-undef
                      <li className="nav-item col-4">
                        <Link
                          className="nav-link position-relative"
                          to={"/favoritos/" + id}
                        >
                          FAVORITOS
                          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {contFavoritos}
                            <span class="visually-hidden"></span>
                          </span>
                        </Link>
                      </li>
                    )}
                    {admin ? (
                      <li className="nav-item col-6">
                        <Link className="nav-link" to="/ingresar">
                          {/* Ingrasar nuevo producto */}
                        </Link>{" "}
                        {/* colcar el ink "/ingresar" igual a el del acceso en aap.js */}
                      </li>
                    ) : null}
                    {id === id2 ? (
                      <div class="col-12">
                        <ul className="navbar-nav ml-auto ">
                          
                        </ul>
                      </div>
                    ) : (
                      <div className="ml-auto">
                        <li className="nav-item col-md-6 col-lg-3 col-xl-4">
                          <Link id="listar2" className="nav-link " to="/perfil">
                            Bienvenido:{" "}
                            {sessionStorage.getItem("nombre")}{" "}
                          </Link>
                          {/* obtiiene el nombre y lo muestra */}
                        </li>
                        
                      </div>
                      
                    )}
                  </ul>
                  <div class="col-md-2"></div>
                  <div className=" d-flex justify-content-between">
                    <ul className="navbar-nav "></ul>
                  </div>
                </div>
              ) : (
                <div className="container d-flex ">
                  <div class="col-md-5"></div>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item col-auto d-flex">
                      <Link
                        id="listar1"
                        className="nav-link nav-success"
                        to="/inicio"
                      ></Link>
                      {/*  <Link className="nav-link nav-success" to="/visual"><i className="fas fa-mug-hot"></i>
      Inicio</Link> */}
                    </li>
                    <li className="nav-item col-md-5 col-lg-3 col-xl-4">
                      <Link
                        id="listar1"
                        className="nav-link nav-success"
                        to="/inicio"
                      ><i class="fas fa-globe-americas"></i> INICIO
                      </Link>
                      {/*  <Link className="nav-link nav-success" to="/visual"><i className="fas fa-mug-hot"></i>
      Inicio</Link> */}
                    </li>
                    <li className="nav-item col-md-5 col-lg-3 col-xl-5">
                      <Link
                        id="listar1"
                        className="nav-link nav-success text-justify "
                        to="/VistaProductos"
                      ><i class="fas fa-store"></i> PRODUCTOS
                      </Link>
                      {/*  <Link className="nav-link nav-success" to="/visual"><i className="fas fa-mug-hot"></i>
      Inicio</Link> */}
                    </li>
                    <li className="nav-item col-md-6 col-lg-3 col-xl-5">
                      <Link id="ingresar1" className="nav-link " to="/autor">
                        <p><i class="fas fa-tty"></i> CONTACTOS</p>
                      </Link>
                    </li>
                    <li className="nav-item col-md-6 col-lg-3 col-xl-5">
                      <Link id="ingresar2" className="nav-link " to="/usuarioApp">
                        <p><i class="fas fa-users"></i> ACCEDER</p>
                      </Link>
                    </li>
                    <li className="nav-item col-md-6 col-lg-3 col-xl-5">
                      <Link id="ingresar3" className="nav-link " to="/comprar/">
                        <p><i class="fas fa-cart-arrow-down"></i>
                        CARRITO.
                        <span class="  position-absolute top-90 start-10 translate-middle  badge rounded-pill bg-danger">
                        {contCarritoGeneral.length}
                            <span class="visually-hidden"></span>
                          </span></p>
                        
                      </Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav  "></ul>
                  <ul className="navbar-nav "></ul>
                </div>
              )}
              {admin && menu ? (
                <div className ="row">
                  <ul className="navbar-nav ">
                  <li className="nav-item  col-12">
                            <Link className="nav-link " to="/visualAdmin/">
                              Menu Principal: {"         "}
                             
                            </Link>
                            {/* obtiiene el nombre y lo muestra */}
                          </li>
                   <div className ="m-5 ">
                    
                   </div>       
                  <li className="nav-item ">
                    <Link
                      id="listar3"
                      className="nav-link"
                      to="/inicio"
                      onClick={() => salir()}
                    >
                      Salir
                    </Link>
                  </li>
                </ul>
                </div>
                
              ) : null}
              {!admin && menu ? (
                <ul className="navbar-nav ">
                  <li className="nav-item ">
                    <Link
                      
                      className="nav-link"
                      to="/inicio"
                      onClick={() => salir()}
                    >
                      Salir
                    </Link>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
