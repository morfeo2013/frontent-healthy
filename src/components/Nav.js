/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
/* import ReactDOM from 'react-dom'; */
import { Link } from "react-router-dom";
/* import AlbumOfTheWeek from './estadoGlobal'
import Axios from 'axios'/* PARA PODER HACER LAS PETICIONES GET,PUT,POS,DELETE EN EL BACKEND */
const fredy = sessionStorage.getItem("contadorFavoritos");
const fredy2 = sessionStorage.getItem("contProductos");

export default function Nav() {
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

    
    <div className="sticky-top ">
        
         <div className="imagenLogo position-relative">
            <img
            src="https://res.cloudinary.com/dhiasghho/image/upload/c_scale,h_163/v1623350102/logos%20base/logo2_dja3q6.png"
            alt=""
            className="img-fluid"
            
            />
          </div>
      <div className="navprincipal navbarGeneral rounded ml-auto">
        {" "}
        {/* "VOLVER FIJO LA PARTE SUPERIOR" sticky-top  */}{" "}
        {/* PARA QUEQUEDE SIEMPRE VSIBLE EL PIE DE PAGINA'sticky-top' */}
        {/*  /* NAVRGADOR USANDO BOOSTRAP 5.0 */
        /* ULILIZACION DE UN NAV RESPONSIVE */}
        <nav
          className="navbar navbar-expand-lg  navbar-light  fondo-nav  "
          id="Menu-navegacion"
        >
         

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item ">
                  <Link
                    id="listar1"
                    className="nav-link nav-success text-light text-justify ml-auto"
                    to="/inicio"
                  >
                   <h4>INICIO</h4>
                    
                  </Link>
                  {/*  <Link className="nav-link nav-success" to="/visual"><i className="fas fa-mug-hot"></i>
      Inicio</Link> */}
                </li>
                {!menu ? (
                  <ul className="navbar-nav  text-justify">
                    <li className="nav-item">
                      <Link
                        id="listar1"
                        className="nav-link nav-success text-light ml-2"
                        to="/VistaProductos"
                      >
                        <h4> PRODUCTOS</h4>
                       
                      </Link>
                      {/*  <Link className="nav-link nav-success" to="/visual"><i className="fas fa-mug-hot"></i>
      Inicio</Link> */}
                    </li>
                  </ul>
                ) : (
                  <div class=""></div>
                )}
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
