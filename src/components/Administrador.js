import React from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import { Link } from "react-router-dom"; /* IMPORTAR PARA PODER ACCEDER AL PA PROPIEDAD LINK Y ACCEDER
A LA PAGINA DONDE ESTA CREADO LA OPCION DE  CREAR USUARIOS EN EL RETUR DE CREACION DE PAGINAS */

export default function Administrador() {
  const id = sessionStorage.getItem("id");
  const id2 = sessionStorage.getItem("admin");

  return (
       
    <div className="bt-5 mt-5">
    
      
      {id === id2 ? <div>{null}</div> : <Redirect to="/inicio" />}
      
      <div className="bt-5 mt-5">
      
        <div className="card">
          <div className="card-header bg-success text-white">
            <h4>
              <i className="fas fa-align-justify"></i> Menú Principal
            </h4>
            
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                <Link className="text-success" to="/administrador2/">
                  Usuarios
                </Link>

                <span className="badge badge-warning badge-pill">10</span>
              </li>
              <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center ">
                <Link className=" text-success" to="/administrador1/">
                  Listado de Productos
                </Link>
                <span className="badge badge-success badge-pill">
                  {sessionStorage.getItem("contProductos")}
                </span>
              </li>
              <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                <Link className=" text-success" to="/visualAdmin/">
                  Visualizacion de Productos
                </Link>
                <span className="badge badge-danger badge-pill">
                  {sessionStorage.getItem("contProductos")}
                </span>
              </li>
              <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                <Link className="text-dark" to="/pedidos.html">
                  Pedidos
                </Link>
                <span className="badge badge-primary badge-pill">0</span>
              </li>
              <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                <Link className="text-dark" to="/cupones.html">
                  Cupones
                </Link>
                <span className="badge badge-primary badge-pill">0</span>
              </li>
            </ul>
          </div>
        </div>
     
        <div className="card mt-5">
          <div className="card-header bg-success text-white">
            <h4>
              <i className="fas fa-align-justify"></i> Administración
            </h4>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                <Link className="nav-link" to={"/favoritos/" + id}>
                  Configuraciones
                </Link>
              </li>
              <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                <Link className="nav-link" to={"/favoritos/" + id}>
                  Crear Administrador{" "}
                </Link>
              </li>
              <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center">
                <Link className="nav-link disabledCursor " to="/">
                  Sistema{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
