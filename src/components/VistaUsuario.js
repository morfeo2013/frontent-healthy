import Axios from 'axios'/* PARA PODER HACER LAS PETICIONES GET,PUT,POS,DELETE EN EL BACKEND */

import React, { useEffect, useState } from 'react' /* PARA UTILIZAR LOS ESTADOS (useState) Y QUE SE EJECUTEN PRIMERO DETERMINADAS ACCIONES (useEffect) */

import Swal from 'sweetalert2'/* EL EFECTO IMPORTADO DE ANIMACION */

import { Link } from 'react-router-dom'  /* IMPORTAR PARA PODER ACCEDER AL PA PROPIEDAD LINK Y ACCEDER
A LA PAGINA DONDE ESTA CREADO LA OPCION DE  CREAR USUARIOS EN EL RETUR DE CREACION DE PAGINAS */




/* SE CREA EL COMPONENTE ListarLibro() */
export default function VistaUsuario() {





    /* ESTADOS PARA GUARDAR LOS DATOS RECIBIDOS DEL BACKEND DE TODOS LOS  USARIOS */
    const [datos, setDatos] = useState([]) /*  crea una arrays para guardar todos los objetos json que de descargaran de
    la base de datos */

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* ESTADOS PARA BUSCAR USARIOS */

    const [search, setSearch] = useState('') /* aca ira el estado de la palabra EN TEXTO en la busqueda le la pagina bajo la palabra search */


    const [buscar, setBuscar] = useState([])/* aca el arrays recojera el OBJETO json del estado datos */


    const [opcion, setOpcion] = useState('') /* este estado realiza el contro del tipo de busqueda que se realizara */


    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* ESTADO PARA ACCEDER A MODIFICAR-ELIMINAR O A COMPRAR */

    const [admin, setAdmin] = useState(false)

    const id = (sessionStorage.getItem('id'))

    const id2 = (sessionStorage.getItem('admin'))
    useEffect(() => {
        if ((id === id2)) { setAdmin(true) }

    }, [id, id2])



    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /*FUNCION PARA LISTAR USUARIOS */
    const obtenerUsuarios = async () => {

        /* se crea la validacion del tokend */
        const token = sessionStorage.getItem('token')


        const respuesta = await Axios.get('https://ganohealthy.herokuapp.com/obtener/', { headers: { 'autorizacion': 'bearer ' + token } }) /* usando axios se descarga con una peticion get la lista de  usuarios del backend */
        /* SE PASA LA INFORMACION AL ESTADO SETDATOS Y DATOS */
        setDatos(respuesta.data)  /* se envia la informacion al estado setdatos para ser almacenado en datos finalmente E NLA HUBICACION .DATA DEL OBJETO JSON RECIBIDO DE LBACKEND*/
        sessionStorage.setItem('contProductos', ((respuesta.data).length))
        console.log(respuesta.data.length)

        /* llevar al inicio del listado */

        /* console.log(respuesta) */
    }


    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


    /*   USSEFECT
    ESTE ES PARA MOSTRAR LA LISTA DE LIBROS

    el useeffect es para iniciar automaticamente en determinada accion este caso 
        la funcion obtener listado de usarios */
    useEffect(() => {
        obtenerUsuarios() /* ACTIVA PRIMERAMENTE LAFUNCION OBTENERUSUARIOS */
    }, []) /* es necesario dejar este  parametro vacio o sera un ciclo infito */



    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    /* LOSSEGUNDO QUE EVALUARA ES QUE HAY EN EL ESTADO OPCION QUE ES EL ENCARGADO DE RECIVIR EL TEXTO DE LA BUSQUEDA  */
    useEffect(() => {


        /* CREO UNA CONDICION QUE AL SER EVALUADO POR EL CHECKEND IGUALE EL ESTADO
        OPCIONS A UN TEXTO Y AL SER IGUAL EJECUTA LA OPCION DESEADA */

        /* SE PASAN LOS DATOS DE EL ESTADO DATOS A SETBUSCAR PARA TERMINAR LUEGO EN BUSCAR */
        if (opcion === 'titulo')
            setBuscar(datos.filter(datos2 => {

                /* se pasan los valores del datos del backen al arrays setbuscar */
                return datos2.titulo.includes(search) /* retorna los valores que contengan en la palabra search */
            }))

        else if (opcion === 'autor')
            setBuscar(datos.filter(datos2 => {

                /* se pasan los valores del datos del backen al arrays setbuscar */
                return datos2.autor.includes(search) /* retorna los valores que contengan en la palabra search */
            }))
        else if (opcion === 'genero')
            setBuscar(datos.filter(datos2 => {

                /* se pasan los valores del datos del backen al arrays setbuscar */
                return datos2.genero.includes(search) /* retorna los valores que contengan en la palabra search */
            }))


        /* CUANDO ESTE EL CAMPO VACIO AUTOMATICAMENTE SE HUBICA EN LA OPCION TITULO Y CON  defaultChecked={true} SE SELECCIONA DE INICIO EN EL CHECKED DE TITULO */
        else if (opcion === '')


            setBuscar(datos.filter(datos2 => {

                /* se pasan los valores del datos del backen al arrays setbuscar */
                return datos2.titulo.includes(search) /* retorna los valores que contengan en la palabra search */
            }))
    }, [datos, search, opcion])





    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    /* FUNCION ELIMINAR */
    const eliminar = (id) => {

        Swal.fire({
            title: 'Eliminar Documento',
            text: "Esta seguro de Eliminar la Informacion?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar documento'

        }).then((result) => {
            if (result.isConfirmed) {

                eliminarSub(id)


            }
        })


    }
    /* para generar doble verificacion de eliminar */
/* ELIMINAR PRODUCTOS CON LA VISTA MINIATURA */
    const eliminarSub = async (id) => {

        const respuesta = await Axios.delete('https://ganohealthy.herokuapp.com/eliminar/' + id) /* cuando reciba l informacion entra tambien el id de el elemento a eliminar */
        obtenerUsuarios()  /* se llama para vuela inmediatamente a la lista inicial */
        const mensaje = respuesta.data.mensaje
        /*   console.log(respuesta) */


        Swal.fire({

            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })
    }
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* AGREGAR A MIS FAVORITOS */


    const Favoritos = async (id2) => {


        const favorito = await {
            user2: id2
        }
        const respuesta = await Axios.put('https://ganohealthy.herokuapp.com/agregarfavorito/' + id, favorito) /* cuando reciba l informacion entra tambien el id de el elemento a eliminar */


        const mensaje = respuesta.data.mensaje
        /*   console.log(respuesta) */



        Swal.fire({

            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })

        const  respuesta2 = await Axios.get('https://ganohealthy.herokuapp.com/favoritos/' + id)

        sessionStorage.setItem('contadorFavoritos', ((respuesta2.data.user2).length))/* conocer el valos de cuantos datos tiene un arrays en la tabla en el mongo db */


    }
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

















    /* CRACION DE LA TABLA BASICA PARA IMPORTAR LOS LISTADOS DESDE EL BACKEND */


    return (
        <div className="container border border-success ">
         
            {/* AGREGAR PARA ADMINISTRADOR OPCION AGREGAR NUEVO PRODUCTO*/}
            {(admin) ?
                <div className="row">
                    <div className="card-body ">
                        <div className="col-sm-12 text-center">
                        <div className="container p-5 mt-5"></div>
                            <Link className="btn btn-info mr-2" to={'/ingresar/'}> <i className="fas fa-plus"></i>
                     Agregar Nuevo Producto
                                  </Link>
                        </div>
                    </div>
                </div>
                :
                <div className="container p-5 mt-5"></div>

               

            }



            <nav className="navbar "  >

                <div className="container">

                    <div className="col-md-6 ml-auto">

                        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}


                        {/* ESTE CODIGO ES PARA RECOGER LA INFORMACION A ELEGIR DE QUE TIPO DE BUSQUEDA SE REALIZARA  
                   AL SER ELEGISO LO GUARDARA CON EL PARAMETRO "VALUE" Y AL LLEVARA AL ESTADO:
                   setOpcion(e.target.value) PARA LUEGO ACTUALIZAR EL ESTADO OPCION*/}
                        {/*  {if (opcion ==='')checked} */}

                        <div className="form-check form-check-inline"  >
                            <input className="form-check-input" type="radio" defaultChecked={true}
                                /*  defaultChecked={true}  para seleccionar de inicio una de las opcionees */
                                name="inlineRadioOptions" id="inlineRadio1" value='titulo' onChange={e => setOpcion(e.target.value)}

                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">Buscar por producto</label>
                        </div>


                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value='genero' onChange={e => setOpcion(e.target.value)} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Buscar por Codigo</label>
                        </div>




                        {/*  <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value='autor' onChange={e => setOpcion(e.target.value)} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Buscar por valor </label>
                        </div> */}

                        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

                        {/*ACA SE RENDERIZARA LA PALABRA EN TEXTO QUE SE ESTARA BUSCANDO */}
                    </div>
                    <div className="col-md-6 ml-auto">
                        <input type="search" className="form-control mr-sm-2" placeholder="Buscar Producto por..." onChange={
                            (e) => setSearch(e.target.value.toLowerCase())} required />
                        {/* se le da valor al estado search  y  va a larer lo que  Y LOS ENVIARA AL ESTADO setSearch(e.target.value) QUE POSTERIOR MENTE LO ENVIARA AL ESTADO TEXTO "SEARCH"*/}
                        {/* NOTA: EL .toLowerCase() ES PARA QUE TODA LA LETRA SEA CONVERTIDA A MINUSCULA PARA EVITR INCOPATIBILIDAD ENA LA BUSQUEDA */}
                    </div>
                </div>

            </nav>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}





            <div className="row " id="card1"> {/* para colocarlos en horizontal */}

                {buscar.map(libros => (
                    <div className="col-md-4 pt-2" key={libros._id}>

                        <div className="card text-center">

                            <div className="card-header">
                                <strong>Producto: {libros.titulo}</strong>
                            </div>
                            <div className=" imagen3 ">
                                <img className="  img-thumbnail img-fluid  text-center" src={libros.imagen} width="20" height="20" alt=""></img>
                                {console.log(libros.imagen)}
                            </div>
                            <div className="card-body m-auto">



                                <strong>codigo: {libros.genero}</strong>
                                <p> </p>
                                <strong>Descripcion: {libros.autor}</strong>
                                <p></p>
                            <strong>Valor: {'$'}{libros.ficha}</strong>



                                {admin ?
                                
                                    <td >


                                        <Link className="btn btn-info mr-2" to={'/editar/' + libros._id}><i className="fas fa-sync-alt"></i>
                                            Actualizar
                                         </Link>



                                        <button className="btn btn-danger mr-2" onClick={() => eliminar(libros._id)}> <i className="far fa-trash-alt"></i>{/* agregar el onClick para ejecutaar la funcion eliminar APROVECHA Y SACA EL ._ID Y LO ENVIA A LA FUNCION ELIMINAR(_ID)*/}

                                             Eliminar




                                         </button>
                                    </td>
                                    :
                                    <td>

                                        <Link className="btn btn-warning mr-2" to={'/comprar/' + libros._id}>
                                            <i className="fas fa-shopping-cart"></i>
                                            {/* implementar icono fontosso */}
                                            Comprar
                                           </Link>





                                        <button className=" btn btn-danger mr-3  " onClick={() => Favoritos(libros._id)}> <i className="fas fa-heart " ></i>  {/* agregar el onClick para ejecutaar la funcion eliminar APROVECHA Y SACA EL ._ID Y LO ENVIA A LA FUNCION ELIMINAR(_ID)*/}

                                                   Favoritos
                                                      </button>
                                    </td>


                                }

                            </div>

                        </div>
                    </div>

                ))}
            </div>


        </div>

    )
}
