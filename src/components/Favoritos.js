/* eslint-disable no-sequences */
import Axios from 'axios'/* PARA PODER HACER LAS PETICIONES GET,PUT,POS,DELETE EN EL BACKEND */

import React, { useEffect, useState } from 'react' /* PARA UTILIZAR LOS ESTADOS (useState) Y QUE SE EJECUTEN PRIMERO DETERMINADAS ACCIONES (useEffect) */

import Swal from 'sweetalert2'/* EL EFECTO IMPORTADO DE ANIMACION */

import { Link } from 'react-router-dom'  /* IMPORTAR PARA PODER ACCEDER AL PA PROPIEDAD LINK Y ACCEDER
A LA PAGINA DONDE ESTA CREADO LA OPCION DE  CREAR USUARIOS EN EL RETUR DE CREACION DE PAGINAS */
import navar from './Nav'





export default function Favoritos() {


    const [favoritos, setFavoritos] = useState([])
    const id = (sessionStorage.getItem('id'))

    useEffect(() => {
        obtenerFavoritos() /* ACTIVA PRIMERAMENTE LAFUNCION OBTENERUSUARIOS */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) /* es necesario dejar este  parametro vacio o sera un ciclo infito */

    const obtenerFavoritos = async () => {

        /* se crea la validacion del tokend */


        
        const respuesta = await Axios.get('https://ganohealthy.herokuapp.com/favoritos/' + id) /* usando axios se descarga con una peticion get la lista de  usuarios del backend */
        /* SE PASA LA INFORMACION AL ESTADO SETDATOS Y DATOS */
        setFavoritos(respuesta.data.user2)  /* se envia la informacion al estado setdatos para ser almacenado en datos finalmente E NLA HUBICACION .DATA DEL OBJETO JSON RECIBIDO DE LBACKEND*/
        console.log(respuesta.data.user2)
        console.log((respuesta.data.user2).length)
        sessionStorage.setItem('contadorFavoritos',((respuesta.data.user2).length))

        /* llevar al inicio del listado */

        /* console.log(respuesta) */
    }

    const eliminar= async(producto)=>{
       
       
         const dir=(sessionStorage.getItem('id'))
        const respuesta = await Axios.delete('https://ganohealthy.herokuapp.com/borrarFavoritos/'+dir+'/'+producto)/* no es necesarioque coicida con el backend */
        
        /* '/'+dir+'/'+producto esto en el baquend se recive en el router como /:dir/:producto */
        
        /* cuando reciba l informacion entra tambien el id de el elemento a eliminar y el id del producto a eliminar */
        obtenerFavoritos()  /* se llama para vuela inmediatamente a la lista inicial */
        const mensaje = respuesta.data.mensaje
           console.log(respuesta) 


        Swal.fire({

            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
          
        })
        
    }



     
    return (
        <div className="container-fluid">
            {/* CREO LA BARRA DE BUSQUEDA */}

          


            <nav className="navbar "  >

                <div className="container">

                    <div className="col-md-6 ml-auto">

                        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}










                    </div>

                </div>

            </nav>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}


            {/* CREO LA TABLA */}
            <table className=" table table-success table-striped">
                <thead>
                    <tr >
                        {/* ACA VA EL ENCABEZADO DE LA LISTA */}
                        <th scope="col">#</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Codigo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                {/* ACA VA EL LISTADO DESCARGADO  */}

                {
                    /* UTILIZO LOS DATOS DEL ESTADO QUE RECIVIO DEL SETDATOS */
                    favoritos.map((productos, i) => (  /* productos RECIVIRA LOS LA INFORMACION DE DATOS RECIVIDO DE SETDATOS*/

                        <tbody key={i}>{/* NECESARIO CREAR UN KEY  le asigno el _id que viene por defecto del mongodb como entrada*/}
                            <tr>
                                <td >{i + 1}</td>
                                <div className=" imagen5">
              <img className="  img-fluid  text-center" src={   favoritos[i].imagen     }  alt=""></img>
              
                               </div>
                                <td>{productos.titulo}</td>
                                <td>{productos.genero}</td>
                                <td>{productos.autor}</td>
                                <td>{productos.ficha}</td>
                                <td>

                                    <Link className="btn btn-warning mr-2" to={'/comprar/' + productos._id}>
                                        <i className="fas fa-shopping-cart"></i>
                                        {/* implementar icono fontosso */}
    Comprar
   </Link>




                                    <button className="btn btn-danger mr-2" id="desactivar" onClick={() => eliminar(productos._id) }><i className="far fa-trash-alt">  </i> {/* agregar el onClick para ejecutaar la funcion eliminar APROVECHA Y SACA EL ._ID Y LO ENVIA A LA FUNCION ELIMINAR(_ID)*/}

  Eliminar 
</button>
                                </td>
                            </tr>

                        </tbody>
                        

                    ))
                    
                }




            </table>
        </div>

    )

}

