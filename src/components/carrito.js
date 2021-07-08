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
  var [fredy, setFredy] = useState(123);



  useEffect(() => {
    if (contCarritoGeneral.length === 0) {
     
      setSwich(true);
    } else {
      setSwich(false);
    }
  }, [contCarritoGeneral]);

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const eliminarcarrito = (eliminar) => {
   /*  const newUser = contCarritoGeneral.filter(
      (user) => user.eliminar._id !== eliminar
    );
    setContCarritoGeneral(newUser);
    console.log(newUser); */
    
    console.log(eliminar)
  };

  const ingresarProductoCarrito = (libros) => {
    
    /* setContCarritoGeneral([...contCarritoGeneral, libros]); */
  /*   contCarritoGeneral([...contador, {fredy:'hola'}])  */
   /*  setFredy(libros.libros.suma(0)) */
   /*  setContCarritoGeneral({libros,suma:0}); */
   /* contCarritoGeneral([...contador, {fredy:'hola'}]) */

 /*   setContCarritoGeneral([contCarritoGeneral, {libros,suma:2}]) */

   console.log(contCarritoGeneral);
    console.log( libros);
    console.log( libros.libros);
    console.log( libros.suma);
/*    return (fredy) */
  /*  contCarritoGeneral[(contCarritoGeneral.length - 1)].libros */
    /* 
    const dd =jQuery("#fff").prop('disabled', true);

   console.log(contCarritoGeneral);
     */
 
 
   
  };

  return (
    <div className="container pt-5 mt-5 ">
      <div>
        {swich ? (
         <div className="container text-center mt-3">
  <div class="card-header bg-transparent border-success">
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
           <div className="container pt-2 mt-2 ">
      
        <div className="row mmarco2" >
          {" "}
          {/* para colocarlos en horizontal */}
          {contCarritoGeneral.map((libros) => (
            <div className="col-md-4 pt-2" key={libros.libros._id}>
              <div className="card text-center ">
                <div className="card-header">
                  <strong>Producto: {libros.titulo}</strong>
                </div>
                <div className=" imagen3 ">
                  <img
                    className="  img-thumbnail img-fluid  text-center"
                    src={libros.libros.imagen}
                    width="20"
                    height="20"
                    alt=""
                  ></img>
                </div>
                <div className=" m-auto">
                  <p></p>
                  <strong>
                    Valor: {"$"}
                    {libros.ficha}
                  </strong>
                </div>
                <div className="card-body2">
                  <div className="m-2">
                  <button className="btn btn-primary" type=""
                  onClick={()=>ingresarProductoCarrito(libros)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-outline-success"
                    disabled="true"
                    type=""
                  >
                   {libros.suma}
                  </button>
                  <button className="btn btn-primary" type="">
                    -
                  </button>
                  </div>
                  
                </div>
                <div className="container">
                <button
                  className="btn btn-danger mt-2"
                  onClick={() =>
                    eliminarcarrito(libros )}
                  
                  /*   eliminarcarrito(libros._id) */
                >
                  {" "}
                  <i className="far fa-trash-alt"></i>
                  {/* agregar el onClick para ejecutaar la funcion eliminar APROVECHA Y SACA EL ._ID Y LO ENVIA A LA FUNCION ELIMINAR(_ID)*/}
                  Eliminar
                </button>
                </div>
            
              </div>
            </div>
          ))}
        </div>
        
          
        </div>
      </div>
    </div>
  );
}

export default carrito;
