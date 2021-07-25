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
  var [totalPago, settotalPago] = useState(0);
  var [totalPago1, settotalPago1] = useState(0);
  var [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    if (contCarritoGeneral.length === 0) {
     
      setSwich(true);
    } else {
      setSwich(false);


  /*     const result = contCarritoGeneral.reduce((a, b) => ({ ficha: a.libros.ficha*1*a.suma+  b.libros.ficha*1*b.suma }));
console.log(result); */
     /*  
      contCarritoGeneral.forEach(function(elemento, indice) {
        settotalPago += elemento["ficha"];
    });
    console.log('las edades suman: ' + totalPago); */

     
        var totalAges = contCarritoGeneral.reduce((sum, value) => (value.libros.ficha !== 0 ? 
          sum + value.libros.ficha*1*value.suma : sum ),0);
        settotalPago(totalAges)
     
     
        var Productos = contCarritoGeneral.reduce((sum2, value2) => (value2.libros.ficha !== 0 ? 
          sum2 +" *Producto: "+ value2.libros.genero+", Unidades: "+value2.suma : sum2+", " ),"");
          setTotalProductos(Productos)
    

      /* const  settotalPago1=  contCarritoGeneral.find(buscadorID =>buscadorID.libros._id !== 0
        
      
        )
        settotalPago=(totalPago + totalPago1)
      */
console.log(totalPago1);
console.log(totalPago);
    }
  }, [contCarritoGeneral]);

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const eliminarcarrito = (id) => {
   /*  */
    const nuvoArreglo =contCarritoGeneral.filter(buscadorID =>buscadorID.libros._id !== id)

    setContCarritoGeneral (nuvoArreglo)
    console.log(id)
    console.log(nuvoArreglo)

  };

  const ingresarProductoCarrito = (librosBase) => {
    
  

const id =librosBase.libros._id

const libros= librosBase.libros
const suma= librosBase.suma+1
const nuevoArreglo2 ={libros,suma}
const nuevoArreglo3 = contCarritoGeneral.map(buscadorID =>buscadorID.libros._id === id
  ?
  nuevoArreglo2
  :

  buscadorID
  )
setContCarritoGeneral(nuevoArreglo3)
console.log( id);
console.log( libros);
console.log( nuevoArreglo2);
console.log(suma);
console.log(nuevoArreglo3);


 
   
  };

  const restarProductoCarrito = (librosBase2) => {
    
  

    const id =librosBase2.libros._id
    
    const libros= librosBase2.libros
    const suma= librosBase2.suma-1
    const nuevoArreglo4 ={libros,suma}
    const nuevoArreglo5 = contCarritoGeneral.map(buscadorID =>buscadorID.libros._id === id
      ?
      nuevoArreglo4
      :
    
      buscadorID
      )
    setContCarritoGeneral(nuevoArreglo5)
    console.log( id);
    console.log( libros);
    console.log( nuevoArreglo4);
    console.log(suma);
    console.log(nuevoArreglo5);
    
    
     
       
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

          { swich ?  null
           :<div className="container mt-5 text-center modal1">
             
           <h3> TOTAL A PAGAR: ${totalPago}</h3>
           <a className="btn btn-warning"
                            type="button"
                              href={
                                "https://api.whatsapp.com/send?phone=573105038758 &text=Me%20gustaría%20comprar%20los%20siguientes%20productos:%20" 
                               +totalProductos+"%20,%20por%20valor%20Total%20de:%20$"+totalPago+"%20Pesos"
                              
                              }
                              
                              target="_blank"
                            >
                              Comprar
                            </a>
         </div>}
     
          {" "}
          {/* para colocarlos en horizontal */}
          {contCarritoGeneral.map((libros) => (
            <div className="col-md-4 pt-2" key={libros.libros._id}>

              <div className="card text-center ">
                <div className="card-header">
                  <strong>Producto: {libros.libros.genero}</strong>
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
                    {libros.libros.ficha*libros.suma}
                
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
                  <button className="btn btn-primary" type=""
                  onClick={() =>
                    restarProductoCarrito(libros )}
                    disabled={libros.suma===1} 
                  >
                    -
                  </button>
                  </div>
                  
                </div>
                <div className="container">
                <button
                  className="btn btn-danger mt-2"
                  onClick={() =>
                    eliminarcarrito(libros.libros._id )}
                  
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
