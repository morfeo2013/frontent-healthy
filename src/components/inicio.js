import React from "react";
import { Link } from "react-router-dom";

export default function inicio() {
  return (
    <div className=" " id="inicio">
      <div className="container">
        <div className="row "></div>
      </div>
      <div className="container ">

      </div>
      <section id="llamado-accion">
        <div className="">
          <div className="row  ">
            <div className="col-12 fondo-blur  ">
              <img
                id="logos-base"
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
          <div className="row mt-5 ">
            <div className="col-sm-12 text-dark">
              <h1 className="text-center">QUIENES SOMOS</h1>

              <div className="text-center"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 col-md-12 text-center">
              <h1 className="mt-2">
                <i className="fas fa-paint-brush"></i>
                VISION
              </h1>
              <h3 className="mt-5">
                Ser reconocidos como empresalíderen Colombia distinguiéndonos
                por la calidad y eficacia de nuestros productos dirigidos a la
                salud y el bienestar, reconocidos mundialmente por la capacidad
                de generar bienestar, brindando conocimiento y herramientas para
                mejorar la calidad de vida.
              </h3>
              <button className="btn btn-info text-center mb-5">
                Ver Mas <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div>
            <div className="col-sm-12 col-md-12 text-center">
              <h1 className="mt-5">
                <i className="fas fa-search-dollar"></i>
                MISION
              </h1>
              <h3 className="mt-5">
                Somos una comunidad que quiere evolucionar y potenciar el mundo
                de la salud y el bienestar; aprovechando todos los avances
                científicos y los beneficios que ofrece la propia naturaleza.
                Simultáneamente, motivando y brindando herramientas a todas las
                personas para que mantengan un estilo de vida a través de la
                toma de decisiones conscientes respecto a su alimentación,
                salud, bienestar, actividad física y espiritual. Llevando salud
                y bienestar a todas las familias.
              </h3>
              <button className="btn btn-info text-center mb-5">
                Ver Mas <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonios">
        <div className="container">
          <h1 className="text-center m-5"> NUESTROS VALORES</h1>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-3 text-center">
              <div className="card">
                <div className="card-boddy">
                  <h4>PASION</h4>
                  <p className="mt-5">
                    Por medio de nustros canales de difucion, pretendemos llegar
                    a todos los lugares de colombia yde LatinoAmerica.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <div className="card">
                <div className="card-boddy">
                  <h4>TRANSPARENCIA</h4>
                  <p className="mt-5">
                    Por medio de nustros canales de difucion, pretendemos llegar
                    a todos los lugares de colombia yde LatinoAmerica.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <div className="card">
                <div className="card-boddy">
                  <h4>EMPATIA</h4>
                  <p className="mt-5">
                    Por medio de nustros canales de difucion, pretendemos llegar
                    a todos los lugares de colombia yde LatinoAmerica.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <div className="card">
                <div className="card-boddy">
                  <h4>CALIDAD</h4>
                  <p className="mt-5">
                    Por medio de nustros canales de difucion, pretendemos llegar
                    a todos los lugares de colombia yde LatinoAmerica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="m-5">.</div>

    </div>
  );
}
