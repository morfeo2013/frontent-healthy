/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-target-blank */
import Axios from "axios"; /* PARA PODER HACER LAS PETICIONES GET,PUT,POS,DELETE EN EL BACKEND */
import Swal from "sweetalert2"; /* EL EFECTO IMPORTADO DE ANIMACION */
import React, {
  useEffect,
  useState,
  useContext /* importamos el usecontext */,
} from "react"; /* PARA UTILIZAR LOS ESTADOS (useState) Y QUE SE EJECUTEN PRIMERO DETERMINADAS ACCIONES (useEffect) */

/* luego de importar el useContext de React, llamamos la propiedad del componnete por destructuracion TemaContext */
import { TemaContext } from "../context/Usecontext";

import { Link } from "react-router-dom"; /* IMPORTAR PARA PODER ACCEDER AL PA PROPIEDAD LINK Y ACCEDER
A LA PAGINA DONDE ESTA CREADO LA OPCION DE  CREAR USUARIOS EN EL RETUR DE CREACION DE PAGINAS */

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// init Swiper:

/* SE CREA EL COMPONENTE ListarLibro() */
export default function VistaProductos() {
  const { actBoton } = useContext(TemaContext);
  const { setActBoton } = useContext(TemaContext);

  const { contCarritoGeneral } = useContext(TemaContext);
  const { setContCarritoGeneral } = useContext(TemaContext);
  const [fredy, setFredy] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [ficha, setFicha] = useState("");
  const [imagen, setImagen] = useState("");
  const [idd, setIdd] = useState("");
  const consultarusuarioUnico = async (id) => {
    const respuesta = await Axios.get(
      "https://ganohealthy.herokuapp.com/obtener/" + id
    ); /* se envia la instruccion al backen para que  consulte un usuarios especifico con el id */
    /*       console.log(respuesta) */

    /* DESPUES DE RECIBIR LA INFORMACION SE ACTUALIZA LOS ESTADOS */
    setIdd(respuesta.data._id);
    setTitulo(respuesta.data.titulo);
    setAutor(respuesta.data.autor);
    setGenero(respuesta.data.genero);
    setFicha(respuesta.data.ficha);
    setImagen(respuesta.data.imagen);
  };

  /* ESTADOS PARA GUARDAR LOS DATOS RECIBIDOS DEL BACKEND DE TODOS LOS  USARIOS */
  const [datos, setDatos] = useState(
    []
  ); /*  crea una arrays para guardar todos los objetos json que de descargaran de
    la base de datos */

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  /* ESTADOS PARA BUSCAR USARIOS */

  const [search, setSearch] =
    useState(
      ""
    ); /* aca ira el estado de la palabra EN TEXTO en la busqueda le la pagina bajo la palabra search */

  const [buscar, setBuscar] = useState(
    []
  ); /* aca el arrays recojera el OBJETO json del estado datos */

  const [opcion, setOpcion] =
    useState(
      ""
    ); /* este estado realiza el contro del tipo de busqueda que se realizara */

  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  /* ESTADO PARA ACCEDER A MODIFICAR-ELIMINAR O A COMPRAR */

  // eslint-disable-next-line no-unused-vars
  const [admin, setAdmin] = useState(false);

  const id = sessionStorage.getItem("id");

  const id2 = sessionStorage.getItem("admin");

  useEffect(() => {
    if (id === id2) {
      setAdmin(true);
    }
  }, [id, id2]);

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  /* para control del usecontext */
  const [cont, setCont] = useState(contCarritoGeneral.length);
  const [unidades, setUnidades] = useState(1);

  useEffect(() => {
    const dd = cont + 1;
    if (contCarritoGeneral.length > cont) {
      setCont(dd);
      Swal.fire({
        icon: "success",
        title: "Producto Agregado al Carrito de compras",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    /* jQuery("#"+contCarritoGeneral._id).prop('disabled', true); */

    console.log("Contador " + cont);
    console.log(contCarritoGeneral.sumatoria);
    console.log(
      "numero producto  agregado al carrito" + contCarritoGeneral.length
    );
  }, [contCarritoGeneral]);

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  /*FUNCION PARA LISTAR USUARIOS */
  const obtenerUsuarios = async () => {
    /* se crea la validacion del tokend */

    const respuesta = await Axios.get(
      "https://ganohealthy.herokuapp.com/obtener/"
    ); /* usando axios se descarga con una peticion get la lista de  usuarios del backend */
    /* SE PASA LA INFORMACION AL ESTADO SETDATOS Y DATOS */
    setDatos(
      respuesta.data
    ); /* se envia la informacion al estado setdatos para ser almacenado en datos finalmente E NLA HUBICACION .DATA DEL OBJETO JSON RECIBIDO DE LBACKEND*/
    sessionStorage.setItem("contProductos", respuesta.data.length);
    console.log(respuesta.data.length);

    /* llevar al inicio del listado */

    /* console.log(respuesta) */
  };

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  /*   USSEFECT
    ESTE ES PARA MOSTRAR LA LISTA DE LIBROS

    el useeffect es para iniciar automaticamente en determinada accion este caso 
        la funcion obtener listado de usarios */
  useEffect(() => {
    obtenerUsuarios();
  }, []);

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  /* LOSSEGUNDO QUE EVALUARA ES QUE HAY EN EL ESTADO OPCION QUE ES EL ENCARGADO DE RECIVIR EL TEXTO DE LA BUSQUEDA  */
  useEffect(() => {
    /* CREO UNA CONDICION QUE AL SER EVALUADO POR EL CHECKEND IGUALE EL ESTADO
        OPCIONS A UN TEXTO Y AL SER IGUAL EJECUTA LA OPCION DESEADA */

    /* SE PASAN LOS DATOS DE EL ESTADO DATOS A SETBUSCAR PARA TERMINAR LUEGO EN BUSCAR */
    if (opcion === "titulo")
      setBuscar(
        datos.filter((datos2) => {
          /* se pasan los valores del datos del backen al arrays setbuscar */
          return datos2.titulo.includes(
            search
          ); /* retorna los valores que contengan en la palabra search */
        })
      );
    else if (opcion === "autor")
      setBuscar(
        datos.filter((datos2) => {
          /* se pasan los valores del datos del backen al arrays setbuscar */
          return datos2.autor.includes(
            search
          ); /* retorna los valores que contengan en la palabra search */
        })
      );
    else if (opcion === "genero")
      setBuscar(
        datos.filter((datos2) => {
          /* se pasan los valores del datos del backen al arrays setbuscar */
          return datos2.genero.includes(
            search
          ); /* retorna los valores que contengan en la palabra search */
        })
      );
    /* CUANDO ESTE EL CAMPO VACIO AUTOMATICAMENTE SE HUBICA EN LA OPCION TITULO Y CON  defaultChecked={true} SE SELECCIONA DE INICIO EN EL CHECKED DE TITULO */ else if (
      opcion === ""
    )
      setBuscar(
        datos.filter((datos2) => {
          /* se pasan los valores del datos del backen al arrays setbuscar */
          return datos2.titulo.includes(
            search
          ); /* retorna los valores que contengan en la palabra search */
        })
      );
  }, [datos, search, opcion]);

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  /* FUNCION ELIMINAR */

  /* para generar doble verificacion de eliminar */

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  /* AGREGAR A MIS FAVORITOS */

  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  // eslint-disable-next-line no-unused-vars
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* const g ="https://morfeo12345678.s3-sa-east-1.amazonaws.com/fotos+ganoderma/Screenshot_20201103_093714.jpg " */

  /* CRACION DE LA TABLA BASICA PARA IMPORTAR LOS LISTADOS DESDE EL BACKEND */

  /* importamos los estados que sern compartidos en todos los compoentes */

  /*   const ingresarProductoCarrito = (libros) => {
    setContCarritoGeneral([...contCarritoGeneral, libros])
    setContCarritoGeneral({contCarritoGeneral,operacion:0});
  }; */

  const ingresarProductoCarrito = async (libros) => {

    /* Opcion 1 creando un objeto suma aparte de libros */

    setContCarritoGeneral([...contCarritoGeneral,{ libros, suma: 1 }]);
    console.log(contCarritoGeneral);


 /* Opcion 2 incluyendo suma un objeto   dentro de objetos libros */
  /*  const libroSuma={...libros,suma:1}
    setContCarritoGeneral([...contCarritoGeneral, libroSuma]);
    console.log(contCarritoGeneral);
 */


    /* Opcion 3 incluyendo suma varios objetos dentro del objeto libros  */
    /* 
    const suma={sumar:1,restar:2,multiplicar:3}
    const librosss={...libros}
    const libros1= {...librosss,...suma} despues de tener los dos con const se utiliza el ... en ambos
    setContCarritoGeneral([ ...contCarritoGeneral,libros1 ]) */


  };

  const funcionResta = () => {
    if (unidades > 1) {
      /* evitar que pase de 1 */
      setUnidades(unidades - 1);
    }
  };
  return (
    <div className="container pt-5 mt-4">
      <div className="container border border-success  mt-5">
        {/* AGREGAR PARA ADMINISTRADOR OPCION AGREGAR NUEVO PRODUCTO*/}

        <div className="container">
          <div class="swiper-container mySwiper col-md-12 col-lg-7   text-center">
            <div class="swiper-wrapper">
              {datos.map((libros) => (
                <img
                  key={libros._id}
                  className="container-fluid swiper-slide"
                  src={libros.imagen}
                  alt=""
                ></img>
              ))}
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <nav className="navbar ">
          <div className="container">
            <div className="col-md-6 ml-auto">
              {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

              {/* ESTE CODIGO ES PARA RECOGER LA INFORMACION A ELEGIR DE QUE TIPO DE BUSQUEDA SE REALIZARA  
                   AL SER ELEGISO LO GUARDARA CON EL PARAMETRO "VALUE" Y AL LLEVARA AL ESTADO:
                   setOpcion(e.target.value) PARA LUEGO ACTUALIZAR EL ESTADO OPCION*/}
              {/*  {if (opcion ==='')checked} */}

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  defaultChecked={true}
                  /*  defaultChecked={true}  para seleccionar de inicio una de las opcionees */
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="titulo"
                  onChange={(e) => setOpcion(e.target.value)}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Buscar por Linea
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="genero"
                  onChange={(e) => setOpcion(e.target.value)}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Buscar por producto
                </label>
              </div>

              {/*  <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value='autor' onChange={e => setOpcion(e.target.value)} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Buscar por valor </label>
                        </div> */}

              {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

              {/*ACA SE RENDERIZARA LA PALABRA EN TEXTO QUE SE ESTARA BUSCANDO */}
            </div>
            <div className="col-md-6 ml-auto">
              <input
                type="search"
                className="form-control mr-sm-2"
                placeholder="Buscar Producto por..."
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                required
              />
              {/* se le da valor al estado search  y  va a larer lo que  Y LOS ENVIARA AL ESTADO setSearch(e.target.value) QUE POSTERIOR MENTE LO ENVIARA AL ESTADO TEXTO "SEARCH"*/}
              {/* NOTA: EL .toLowerCase() ES PARA QUE TODA LA LETRA SEA CONVERTIDA A MINUSCULA PARA EVITR INCOPATIBILIDAD ENA LA BUSQUEDA */}
            </div>
          </div>
        </nav>

        <div className="row ">
          {" "}
          {/* para colocarlos en horizontal */}
          {buscar.map((libros) => (
            <div
              className="col-xs-6 col-sm-12 col-md-6 col-lg-4 pt-2 "
              key={libros._id}
            >
              <div className="card text-center marco2">
                <div className="card-header ">
                  <stron className="text-center">
                    Catalogo: {libros.titulo}
                  </stron>
                </div>
                <div className=" imagen3 ">
                  <img
                    className="  img-thumbnail img-fluid  text-center"
                    src={libros.imagen}
                    width="20"
                    height="20"
                    alt=""
                  ></img>
                  {/*  {console.log(libros.imagen)} */}
                </div>
                <div className="card-heart ">
                  <strong>Producto: {libros.genero}</strong>
                  <p></p>
                  <strong>
                    Valor: {"$"}
                    {libros.ficha}
                  </strong>
                </div>

                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* MODAL DETALLE PRODUCTO */}
                <td>
                  <div className="mt-5 bt-5">
                    <button
                      onClick={(e) => consultarusuarioUnico(libros._id)}
                      type="button"
                      className="btn btn-outline-success mb-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="far fa-address-book  m-1"></i>
                      Leer mas
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog d-none-modal-md modal-lg">
                        <div className="modal-content  modal0">
                          <div className="modal-header ">
                            <h5 className="modal-title " id="exampleModalLabel">
                              Catalogo: {titulo}
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body ">
                            <div className="container-fluxer col-12">
                              <div className="row modal1 ">
                                <div className="col-xs-12 col-lg-6 imagen33">
                                  <img id="" src={imagen} alt="" />
                                </div>

                                <div className="row col-xs-12 col-lg-6 text-start">
                                  <div>
                                    <h4 className=" text-center">
                                      Producto: {genero}
                                    </h4>
                                  </div>
                                  <hr />
                                  <div>
                                    <h4 className="mt-1">
                                      Descripcion: {autor}
                                    </h4>
                                  </div>
                                  <div>
                                    <h4 className="text-center align-self-end modal2">
                                      Precio: ${ficha * unidades}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <button
                              className="btn btn-primary"
                              type=""
                              onClick={() => {
                                setUnidades(unidades + 1);
                              }}
                            >
                              +
                            </button>
                            <button
                              className="btn btn-outline-success"
                              disabled="true"
                              type=""
                            >
                              {unidades}
                            </button>
                            <button
                              className="btn btn-primary"
                              type=""
                              onClick={() => funcionResta()}
                            >
                              -
                            </button>
                          </div>
                          <div class="modal-footer ">
                            <div className="container text-center">
                              <a
                                type="button"
                                className="btn btn-danger "
                                data-bs-dismiss="modal"
                              >
                                Cerrar
                              </a>
                              <a
                                className="btn btn-warning"
                                type="button"
                                href={
                                  unidades === 1
                                    ? "https://api.whatsapp.com/send?phone=573105038758 &text=Me%20gustaría%20comprar%20" +
                                      unidades +
                                      "%20Unidad%20de%20el%20producto:%20" +
                                      genero +
                                      ",%20Por%20un%20Total%20de:%20$" +
                                      ficha * unidades +
                                      "%20Mil%20Pesos."
                                    : "https://api.whatsapp.com/send?phone=573105038758 &text=Me%20gustaría%20comprar%20" +
                                      unidades +
                                      "%20Unidades%20de%20el%20producto:%20" +
                                      genero +
                                      "%20Por%20un%20Total%20de:%20$" +
                                      ficha * unidades +
                                      "%20Mil%20Pesos."
                                }
                                target="_blank"
                              >
                                Comprar
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                    {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
                    {/* FIN MODAL */}
                    <button
                      /*  id={contCarritoGeneral._id} */
                      type="submit"
                      className="btn btn-outline-warning mb-2"
                      /*  disable={contCarritoGeneral.libros.suma>1} */
                      onClick={() => ingresarProductoCarrito(libros)}

                      /*  to={"/comprar/"  + libros._id} */
                    >
                      <i className="fas fa-shopping-cart"></i>
                      +Agregar
                    </button>
                  </div>
                </td>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
