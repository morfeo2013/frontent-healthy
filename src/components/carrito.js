/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TemaContext } from "../context/Usecontext";

/* provicional */
function carrito() {
  const { contCarritoGeneral } = useContext(TemaContext);
  const { setContCarritoGeneral } = useContext(TemaContext);
  var [swich, setSwich] = useState(true);

  useEffect(() => {
    if (contCarritoGeneral.length === 0) {
      setSwich(true);
    } else {
      setSwich(false);
    }
  }, [contCarritoGeneral]);

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const eliminarcarrito = (eliminar) => {
    const newUser = contCarritoGeneral.filter(
      (user) => user.eliminar !== eliminar
    );
    setContCarritoGeneral(newUser);
    console.log(newUser);
  };

  return (
    <div className="container pt-5 mt-5">
      <div>
        {swich ? (
         <div className="container text-center mt-3">
           <div class="card border-success mb-3" >
  <div class="card-header bg-transparent border-success"></div>
  <div class="card-body text-success">
    <h5 class="card-title">Su Carrito de Compras Esta Vacio</h5>
    <p class="card-text">Lo Invitamos a revisar todo nuestro gran portafolio de productos, enfocados en el mejoramiento de la salud espiritual, mental, emocional, social y en el cuidado del medio ambiente. </p>
  </div>
  <div className="text-center">
  <img  id="imagen6"
            src="https://res.cloudinary.com/dhiasghho/image/upload/c_mfit,h_338/v1625379384/carrito-compras-supermercado-vacio-realista-aislado-blanco_53562-6809_vxgtwz.jpg"
            alt=""
          />
  </div>
 
  <div class="card-footer bg-transparent border-success"></div>
</div>
            
         </div>
         
        ) : null}

        <div className="row " id="card1">
          {" "}
          {/* para colocarlos en horizontal */}
          {contCarritoGeneral.map((libros) => (
            <div className="col-md-4 pt-2" key={libros._id}>
              <div className="card text-center">
                <div className="card-header">
                  <strong>Producto: {libros.titulo}</strong>
                </div>
                <div className=" imagen3 ">
                  <img
                    className="  img-thumbnail img-fluid  text-center"
                    src={libros.imagen}
                    width="20"
                    height="20"
                    alt=""
                  ></img>
                </div>
                <div className="card-body m-auto">
                  <p></p>
                  <strong>
                    Valor: {"$"}
                    {libros.ficha}
                  </strong>
                </div>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => eliminarcarrito(libros._id)}
                >
                  {" "}
                  <i className="far fa-trash-alt"></i>
                  {/* agregar el onClick para ejecutaar la funcion eliminar APROVECHA Y SACA EL ._ID Y LO ENVIA A LA FUNCION ELIMINAR(_ID)*/}
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default carrito;
