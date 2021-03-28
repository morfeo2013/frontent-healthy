import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'


export default function IngresarLibro(props) {/* aca el props es para identificar la ruta   que se ingreso  e identificar si es para editar o crear */

    /* crear los esatados del backen */
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [genero, setGenero] = useState('')
    const [ficha, setFicha] = useState('')
    const [imagen, setImagen] = useState('')
    const [unidades, setUnidades] = useState('')
    const [foto, setFoto] = useState('')
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    /* COMANDOS PARA GENERAR LA VALIDACION DE PA PAGINA CREAR O MODIFICAR */

    /* PARA UTILIZAR EL MISMO DISEÑO PARA VARIAS ORDENES CREAR MODIFICAR DE ALA WEB */
    /* CREAR EL ESTADO BOOLEANO */
    const [editar, setEditar] = useState('')




    /* CREAR UNA CONDICION IF ELS PARA HACCER LOS CAMBIOS POR MEDIO DEL USSEFECT */
    /* utilizando los props con el parametro props.match.path devuelve esto '/comprar/:id'
    con esto lo uso para identificar que opcion mostrara*/
    useEffect(() => {
        if (props.match.path === ('/comprar/:id')) { /* verifica que el props recivido tenga un id ingresado */
            setEditar('comprar')

            const id = props.match.params.id /* saco el i d */
            consultarusuarioUnico(id)
            console.log(props.match.path)
            console.log(editar)
        } else if (props.match.path === ('/editar/:id')) {
            setEditar('modificar')

            const id = props.match.params.id /* saco el i d */
            consultarusuarioUnico(id)
            console.log(props.match.path)
            console.log(editar)
        }
    }, [])





    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /*     ACCION PARA ACTIVAR FUNCION MODIFICAR O GARDAR */

    const accion = async (e) => {
        e.preventDefault() /* para prevenir que la pagina se refresque */
        if (editar === ('modificar')) {
            modificarLibro()
            console.log('esta en la accion modificar')
        } else if (editar === ('comprar')) {
            console.log('esta en la accion comprar')
        } else {
            guardarLibro()
        }

    }

    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* CONSULATAR USUARIO UNICO */

    const consultarusuarioUnico = async (id) => {
        const respuesta = await Axios.get('https://ganohealthy.herokuapp.com/obtener/' + id) /* se envia la instruccion al backen para que  consulte un usuarios especifico con el id */
        /*       console.log(respuesta) */

        /* DESPUES DE RECIBIR LA INFORMACION SE ACTUALIZA LOS ESTADOS */

        setTitulo(respuesta.data.titulo)
        setAutor(respuesta.data.autor)
        setGenero(respuesta.data.genero)
        setFicha(respuesta.data.ficha)
        setImagen(respuesta.data.imagen)

        console.log(respuesta.data.imagen)
    }
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    /* MODIFICACION DE CLIENTE UNICO DESPUES DE CONSULTAR LA FUNCION CLIENTE UNICO */

    const modificarLibro = async () => {

        const id = props.match.params.id
        const formdata = new FormData()
        formdata.append('titulo', titulo)
        formdata.append('autor', autor)
        formdata.append('genero', genero)
        formdata.append('ficha', ficha)

        formdata.append('image', imagen) /* deve decir 'image' el archivo */

        console.log('mensage desde el setFoto: ' + foto)
        formdata.append('image', imagen) /* deve decir 'image' el archivo */

        const respuesta = await Axios.put('http://localhost:4000/modificar/' + id, formdata)
        console.log(respuesta)
        const mensaje = respuesta.data.mensaje /* llama desde la constante respuesta el mensage guardado en baken */
        Swal.fire({

            icon: 'success',
            title: mensaje,
            showConfirmButton: false,

        })
        setTimeout(() => {
            window.location.href = '/visualAdmin/' /* para redirigir ala pagina listar */

        }, 1300)

    }















    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    /* INGRESO DE CLIENTES NUEVOS*/
    const guardarLibro = async () => {  /* SE CREA LA FUNCION QUE SERA LLAMADA PRO EL BOTON GUARDAR */


        if (imagen != null) {
            const formdata = new FormData()
            formdata.append('titulo', titulo)
            formdata.append('autor', autor)
            formdata.append('genero', genero)
            formdata.append('ficha', ficha)
            formdata.append('image', imagen) /* deve decir 'image' el archivo */
            const respuesta = await Axios.post('https://ganohealthy.herokuapp.com/crear', formdata) /* CON AXIONS 
            LLAMA AL BACKEN EN SU PUERTO Y UNA UN ENVIO POS, ENVIANDO LOS DATOS DE LIBRONUEVO */

            const mensaje = respuesta.data.mensaje /* llama desde la constante respuesta el mensage guardado en baken */


            Swal.fire({

                icon: 'success',
                title: mensaje,
                showConfirmButton: false,

            })
            setTimeout(() => {
                window.location.href = '/administrador1'/* para redirigir ala pagina listar */

            }, 1300)
        } else {
            const formdata = new FormData()
            formdata.append('titulo', titulo)
            formdata.append('autor', autor)
            formdata.append('genero', genero)
            formdata.append('ficha', ficha)
            formdata.append('image', imagen) /* deve decir 'image' el archivo */
            const respuesta = await Axios.post('https://ganohealthy.herokuapp.com/crear', formdata) /* CON AXIONS 
            LLAMA AL BACKEN EN SU PUERTO Y UNA UN ENVIO POS, ENVIANDO LOS DATOS DE LIBRONUEVO */

            const mensaje = respuesta.data.mensaje /* llama desde la constante respuesta el mensage guardado en baken */


            Swal.fire({

                icon: 'success',
                title: mensaje,
                showConfirmButton: false,

            })
            setTimeout(() => {
                window.location.href = '/administrador1'/* para redirigir ala pagina listar */

            }, 1300)
        }







    }



    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    return (
        /* el entorno para el ingreso o modificacion de nuevos usuarios o datos pos-put */

        <div className="container m-auto">
            <div className="row" >
                {(editar === '') ?
                    null
                    :
                    <div className="container col-3 imagen6 text-center" >
                        <img className="  img-thumbnail img-fluid  text-center" src={imagen} width="20" height="20" alt=""></img>

                    </div>
                }



                <div className="col-9 pt-4-mx-auto">

                    <div className="card card-body">
                        {/* PARA MODIFICAR EL TITULO SEGUN LA OPCION */}
                        {




                            (editar === 'modificar') ?
                                <h3>
                                    Modificar Producto
                             </h3>
                                : (editar === 'comprar') ?
                                    <h3>
                                        Comprar Producto
                          </h3>
                                    : <h3>
                                        Ingresar Producto Nuevo
</h3>
                        }




                        {/* SE AGREGA LA FUNCION ACCION PARA DETERMINAR SI SE ACTIVA
                                   LA FUNCION GUARDAR O MODIFICAR */}




                        <form onSubmit={accion} >{/* EL ONSUBMIT ES PARA REALIZAR UNA ACCION CUANDO EL BOTON SEA PRESIONADO */}
                            {(editar === 'comprar') ?


                                <div className="container text-center">

                                    <div className="form-group  mt-3" >

                                        <input type="
  text"  className="form-control " value={null}/* EL .toLowerCase() CONVIERTE LAS PALARAS INGRESADAS A MINUSCULAS */ onChange={e => setUnidades(e.target.value.toLowerCase())}
                                            required autoFocus placeholder="Unidades a Comprar" />




                                    </div>

                                    <fieldset disabled>{  /* PARA TENER LA OPCION DE DESABILITAR LOS FORM PARA COMPRAR */}

                                        <div className="form-group  mt-3" >

                                            <input type="
text"  className="form-control " value={titulo}/* EL .toLowerCase() CONVIERTE LAS PALARAS INGRESADAS A MINUSCULAS */ onChange={e => setTitulo(e.target.value.toLowerCase())}
                                                required autoFocus placeholder="Producto" />




                                        </div>
                                        <div className="form-group  mt-3">
                                            <input type="
text" className="form-control" value={genero} onChange={e => setGenero(e.target.value.toLowerCase())} placeholder="codigo" required />
                                        </div>
                                        <div className="form-group  mt-3">
                                            <input type="
text" className="form-control" value={autor} onChange={e => setAutor(e.target.value.toLowerCase())} placeholder="detalle" required />
                                        </div>

                                        <div className="form-group  mt-3">
                                            <input type="
text" className="form-control" value={ficha} onChange={e => setFicha(e.target.value.toLowerCase())} placeholder="Valor" required />
                                        </div>


                                        {/*  <div className="form-group  mt-3">
         <input type="
  text" className="form-control" value={imagen} onChange={e => setImagen(e.target.value.toLowerCase())} placeholder="Valor" required />
     </div> */}






                                        {/* CREAR EL OPERADOR TERCEARIO PARA EL CAMBIO DE BOTON UTILIZANDO EL CREADO EN EL ESTADO EDITAR AL INICIO*/}





                                    </fieldset>

                                </div>



                                :

                                <div className="container text-center">

                                    <div className="form-group  mt-3" >

                                        <input type="
 text"  className="form-control " value={titulo}/* EL .toLowerCase() CONVIERTE LAS PALARAS INGRESADAS A MINUSCULAS */ onChange={e => setTitulo(e.target.value.toLowerCase())}
                                            required autoFocus placeholder="Producto" />




                                    </div>
                                    <div className="form-group  mt-3">
                                        <input type="
 text" className="form-control" value={genero} onChange={e => setGenero(e.target.value.toLowerCase())} placeholder="codigo" required />
                                    </div>
                                    <div className="form-group  mt-3">
                                        <input type="
 text" className="form-control" value={autor} onChange={e => setAutor(e.target.value.toLowerCase())} placeholder="detalle" required />
                                    </div>

                                    <div className="form-group  mt-3">
                                        <input type="
 text" className="form-control" value={ficha} onChange={e => setFicha(e.target.value.toLowerCase())} placeholder="Valor" required />
                                    </div>
                                    {/*   <div className="form-group  mt-3">
         <input type="
  text" className="form-control" value={imagen} onChange={e => setImagen(e.target.value)} placeholder="Link de la imagen" required />
     </div> */}








                                    {/* CREAR EL OPERADOR TERCEARIO PARA EL CAMBIO DE BOTON UTILIZANDO EL CREADO EN EL ESTADO EDITAR AL INICIO*/}







                                </div>


                            }

                            {/* opcion subir foto */}

                            <div className="d-grid gap-2 m-3"> {/* para alargar el boton */}

                                {


                                    // eslint-disable-next-line no-mixed-operators
                                    (editar === '') ?


                                        <div className="form-group">

                                            <input className="form-control" type="file" placeholder="Seleccionar Imagen"
                                                autoFocus onChange={e => setImagen(e.target.files[0])



                                                } required disabled />

                                        </div>



                                        : null


                                }
                                {


                                    // eslint-disable-next-line no-mixed-operators
                                    (foto === '') ?






                                        <div className="form-group">
                                            <input className="form-control" type="file" placeholder="Seleccionar Imagen"
                                                autoFocus onChange={e => setImagen(e.target.files[0])
                                                } required  /* disabled */ />

                                        </div>



                                        : null


                                }

                            </div>





                            <div className="d-grid gap-2 m-3"> {/* para alargar el boton */}
                                {


                                    (editar === 'modificar') ?

                                        <button className="btn btn-success mt-3 " onChange={(e) => setFoto(e.target.value('subir foto'))}>Subir Foto</button>


                                        :
                                        null
                                    /* 
                                     */


                                }

                                {


                                    (editar === 'modificar') ?

                                        <button type="submit" className="btn btn-success mt-3 ">Modificar</button>
                                        : (editar === 'comprar') ?

                                            <button type="submit" className="btn btn-warning mt-3 ">Comprar</button>
                                            :

                                            <button type="submit" className=" btn btn-success" >Guardar</button>


                                }


                            </div>


                        </form>
                    </div>
                </div>

            </div>



        </div>



    )
}
