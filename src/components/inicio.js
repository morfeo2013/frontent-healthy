/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
/*CREAMOS UN ESTADO PARA CONTROLAR NO MOSTRAR EL MODAL CUANDO ESTE LOGIADO   */

$(document).ready(function () {
  $("#staticBackdrop").modal("show");
});

export default function Inicio() {
  const [menu, setMenu] = useState(false);
  
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setMenu(true);
    }
  }, [menu]);


    
  return (
    <div className="" id="inicio" autofocus>
      {/* CREACION DEL MODAL AL INICIO DE AL PAGINA */}
      {
        menu ? null : (
          <div
            class="modal fade"
            id="staticBackdrop"
            tabindex="2"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true" 
          >
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content" id="llamado-accion">
                <div class="modal-header">
                  <div>
                    <div className="row text-center">
                      <button
                        type="button"
                        class="btn-close text-top"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <h4 class="modal-title" id="staticBackdropLabel">
                        {" "}
                        &#11088;¡Bienvenido a{" "}
                        <font color="Green">
                          GANO HEALTHY MEDELLIN!&#11088;
                        </font>
                      </h4>
                    </div>

                    <div className="row mt-2 text-center">
                      <h5>Se parte de nuestra comunidad</h5>
                      <h5>
                        Descubre increibles tips de bienestar y compra los
                      </h5>
                      <h5>mejores productos de tu ciudad.</h5>
                    </div>
                  </div>
                </div>
                <div class="modal-body">
                  
                  <form >
                  
                    <div className="container col-12 text-center">
                      <div className="row d-flex">
                        <p>
                          <font color="red">
                            <i>
                              <u> Suscribete a nuestros boletines mensuales</u>
                            </i>
                          </font>
                        </p>

                        <div className="col-xs-3 col-sm-5">
                          
                           <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="&#128231; Ingresa tu Correo"
                          />
                          
                        </div>

                        <div className="col-xs-3 col-sm-5">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Añadir una Ciudad ⇩</option>
                            <option value="1">Medellin</option>
                            <option value="2">Bogota</option>
                            <option value="3">Cali</option>
                            <option value="4">Pereira</option>
                            <option value="4">Manizales</option>
                            <option value="6">Cucuta</option>
                          </select>
                        </div>
                        <div className="col-xs-6 col-sm-2 d-grid gap-2">
                          <button
                            type="submit"
                            class="btn btn-outline-success btn-block" data-bs-dismiss="modal"
                          
                          >
                          
                            Enviar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="modal-footer ">
                  <form >
                    <div className="container d-flex text-center">
                      <div className="row">
                        <p>
                          Puedes cambiar tus preferencias de suscripción en
                          cualquier momento
                        </p>
                        <p>
                          Al hacer click en Guardar, aceptas los Términos de
                          servicio y la Política de Privacidad
                        </p>
                        <a href="/usuarioPublico">
                          ¿Ya tienes cuenta? Ingresar
                        </a>
                        <a href="#" data-bs-dismiss="modal">
                          No gracias
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
        /* fin modal */
      }
  <div className="container p-5 " id="inicio1">
<div className="container p-5 mt-3"></div>
</div>
      <section id="llamado-accion">
        
          <div className="row  ">
            <div className="col-12 fondo-blur  ">
              <img
                // eslint-disable-next-line react/style-prop-object
                src="https://res.cloudinary.com/dhiasghho/image/upload/v1623371947/logos%20base/logos_circulos_pagina_completa3_zh77fa.png"
                alt=""
                className=" d-block w-100"
              ></img>
            </div>
          </div>
      
      </section>

      <section>
        <div className="container">
          <div className="row mt- ">
            <div className="col-sm-12 text-dark">
              <h1 className="text-center">
                <strong> QUIENES SOMOS</strong>
              </h1>

              <div className="text-center"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios">
        <div className="container">
          <div className="row mt-3">
            <div className="col-sm-12 col-md-12 text-center">
              <h1 className="mt-3">
                <strong>&#127758; VISION</strong>
              </h1>
              <h3 className="mt-4">
                <strong>
                  {" "}
                  Ser reconocidos como empresa líder en Colombia
                  distinguiéndonos por la calidad y eficacia de nuestros
                  productos dirigidos a la salud y el bienestar, reconocidos
                  mundialmente por la capacidad de generar bienestar, brindando
                  conocimiento y herramientas para mejorar la calidad de vida.
                </strong>
              </h3>
            </div>
            <div className="col-sm-12 col-md-12 text-center ">
              <h1 className="mt-4">
                <strong>&#127760; MISION</strong>
              </h1>
              <h3 className="mt-5">
                <strong>
                  {" "}
                  Somos una comunidad que quiere evolucionar y potenciar el
                  mundo de la salud y el bienestar; aprovechando todos los
                  avances científicos y los beneficios que ofrece la propia
                  naturaleza. Simultáneamente, motivando y brindando
                  herramientas a todas las personas para que mantengan un estilo
                  de vida a través de la toma de decisiones conscientes respecto
                  a su alimentación, salud, bienestar, actividad física y
                  espiritual. Llevando salud y bienestar a todas las familias.
                </strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="text-center mt-4 ">&#129351; NUESTROS VALORES</h1>
          <div className="row mt-5">
            <div className="col-md-12 col-lg-3 text-center">
              <div className="marco1">
                <div className="tablaigual">
                  <div className="card-boddy">
                    <h4>
                      <strong>&#11088; PASION</strong>
                    </h4>
                    <p min className="mt-2">
                      <font font size="4">
                        <strong>
                          ¡Estamos cambiando el mundo saludable! y para seguirlo
                          haciendo el compromiso es ilimitado. a todos los
                          lugares de colombia y de LatinoAmerica.
                        </strong>
                      </font>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 text-center">
              <div className="marco1">
                <div className="tablaigual">
                  <div className="card-boddy">
                    <h4>
                      <strong>&#11088; TRANSPARENCIA</strong>
                    </h4>
                    <p min className="mt-2">
                      <font font size="4">
                        <strong>
                          Somos auténticos y sinceros, no nos interesa cambiar
                          la verdad para sacar provecho.
                        </strong>
                      </font>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 text-center">
              <div className="marco1">
                <div className="tablaigual">
                  <div className="card-boddy">
                    <h4>
                      <strong>&#11088; EMPATIA</strong>
                    </h4>
                    <p min className="mt-2">
                      <font font size="4">
                        {" "}
                        <strong>
                          Conectamos con nuestro cliente, poniéndonos en su
                          lugar para comprender sus necesidades y lograr
                          prestarle nuestra ayuda.
                        </strong>
                      </font>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 text-center">
              <div className="marco1">
                <div className="tablaigual">
                  <div className="card-boddy">
                    <h4>
                      <strong>&#11088; CALIDAD</strong>
                    </h4>
                    <p min className="mt-2">
                      <font font size="4">
                        {" "}
                        <strong>
                          {" "}
                          Nos comprometemos, que los procesos de nuestros
                          productos sean los mejores posibles, no nos
                          conformamos con menos.
                        </strong>
                      </font>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
