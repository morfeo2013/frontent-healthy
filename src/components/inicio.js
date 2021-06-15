/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

$(document).ready(function () {
  $("#staticBackdrop").modal("show");
});

export default function inicio() {
  return (
    <div className=" " id="inicio" autofocus>
      <div
        class="modal fade"
        id="staticBackdrop"
        tabindex="-1"
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
                    ¡Bienvenido a{" "}
                    <font color="Green">GANO HEALTHY MEDELLIN!</font>
                  </h4>
                </div>

                <div className="row mt-2 text-center">
                  <h5>Se parte de nuestra comunidad</h5>
                  <h5>Descubre increibles tips de bienestar y compra los</h5>
                  <h5>mejores productos de tu ciudad.</h5>
                </div>
              </div>
            </div>
            <div class="modal-body">
              <form>

                <div className="container col-12">
               
                  <div className="row text-center mb-2">
                  <p><font color="red"><i><u> Suscribete a nuestros boletines mensuales</u></i></font></p>
                    <div className="col-4">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingresa tu Correo"
                      />
                    </div>
                   
                    <div className="col-4">
                    
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Añadir una Ciudad</option>
                        <option value="1">Medellin</option>
                        <option value="2">Bogota</option>
                        <option value="3">Cali</option>
                        <option value="3">Pereira</option>
                        <option value="3">Manizales</option>
                        <option value="3">Cucuta</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <button
                        className="btn btn-outline-success"
                        data-bs-dismiss="modal"
                      >
                        Guardar
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
                  Puedes cambiar tus preferencias de suscripción en cualquier
                  momento
                </p>
                <p>
                  Al hacer click en Guardar, aceptas los Términos de servicio y
                  la Política de Privacidad
                </p>
                <a href="/usuario">¿Ya tienes cuenta? Ingresar</a>
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

      <div className="container p-5 " id="inicio1">
        <div className="container p-5 mt-3"></div>
      </div>

      <section id="llamado-accion">
        <div className="">
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
                <strong> VISION</strong>
              </h1>
              <h3 className="mt-4">
                <strong>
                  {" "}
                  Ser reconocidos como empresalíderen Colombia distinguiéndonos
                  por la calidad y eficacia de nuestros productos dirigidos a la
                  salud y el bienestar, reconocidos mundialmente por la
                  capacidad de generar bienestar, brindando conocimiento y
                  herramientas para mejorar la calidad de vida.
                </strong>
              </h3>
              <button className="btn btn-outline-success text-center mb-5">
                Ver Mas <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div>
            <div className="col-sm-12 col-md-12 text-center">
              <h1 className="mt-4">
                <strong>MISION</strong>
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
              <button className="btn btn-outline-success text-center mb-5">
                Ver Mas <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section >
        <div className="container">
          <h1 className="text-center mt-4 "> NUESTROS VALORES</h1>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-3 text-center">
              <div className="">
                <div className="card-boddy">
                  <h4>PASION</h4>
                  <p className="mt-2">
                    Por medio de nustros canales de difucion, pretendemos llegar
                    a todos los lugares de colombia yde LatinoAmerica.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <div className="">
                <div className="card-boddy">
                  <h4>TRANSPARENCIA</h4>
                  <p className="mt-2">
                    Por medio de nustros canales de difucion, pretendemos llegar
                    a todos los lugares de colombia yde LatinoAmerica.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <div className="">
                <div className="card-boddy">
                  <h4>EMPATIA</h4>
                  <p className="mt-2">
                    Por medio de nustros canales de difucion, pretendemos llegar
                    a todos los lugares de colombia yde LatinoAmerica.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <div className="">
                <div className="card-boddy">
                  <h4>CALIDAD</h4>
                  <p className="mt-2">
                    Por medio de nustros canales de difucion, pretendemos llegar
                    a todos los lugares de colombia yde LatinoAmerica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container p-4"></div>
    </div>
  );
}
