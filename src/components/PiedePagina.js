/* eslint-disable no-undef */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
export default function PiedePagina() {
  return (
    <div className="piedepagina pb-4">
      <section id="footer">
        <div className="container ">
          <div className="row">
            <div className="col-sm-12 col-md-4 text-light ">
              <h3 className="mt-2 text-center">ENLACES</h3>
              <hr
                style={{
                  backgroundColor: "light",
                  height: 6,
                }}
              />
              <div className="offset-md-3">
                <h4>Nuestra Empresa</h4>
                <h4>Productos</h4>
                <h4>Block</h4>
                <h4>PQR</h4>
                <h4>Preguntas frecuentes</h4>
                <h4>Politicas de Privacidad</h4>
                <h4>Terminos y condiciones</h4>
              </div>
            </div>

            <div className="col-sm-12 col-md-4  text-light ">
              <h3 className="m-2 text-center">SUSCRIBETE</h3>

              <hr
                style={{
                  backgroundColor: "light",
                  height: 6,
                }}
              />
              <div className="offset-md-3">
                <h4>
                  Mantente al tanto de nuestros productos, promociones y
                  concursos!
                </h4>
                <h6 className="mt-5">Deseo recivir boletines y promociones</h6>
                <form className="form-group d-flex">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Tu dirección de correo elecrónico"
                  ></input>
                  <button type="submit" className="btn btn-success">
                    Enviar
                  </button>
                </form> 
              </div>
            </div>

            <div className="col-sm-12 col-md-4 text-center text-light">
              <h3 className="mt-2 text-center">NUESTRAS REDES</h3>
              <hr
                style={{
                  backgroundColor: "light",
                  height: 6,
                }}
              />
              {/* <div className="container">
                <div className="offset-md-3">
                  <div>
                    <a href="tel:+57 3156101684">+57 315 610 1684</a>
                  </div>
                  <div>
                    <i className="fab fa-facebook-square fa-3x"></i>@
                  </div>
                </div>
                <div className="col mt-2 text-primary"></div>
                <div className="col mt-1 text-warning">
                  <p>
                    <a
                      className="text-warning"
                      href="https://www.instagram.com/ganohealthy_medellin/?utm_source=qr"
                    >
                      <i className="fab fa-instagram-square fa-3x"></i>
                      
                    </a>
                    <a href=" ">whatzap</a>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <selection className="">
        <div>
          <p className="text-center  mt-4 text-light">
            <font font size="5">
              Todos los Derechos Reservados 2021 ©
            </font>
            <font font size="4">
              <strong>GANO HEALTHY MEDELLÍN</strong>{" "}
            </font>
          </p>
        </div>
        {/* <div className="text-center" > 
          <a
            className="text-center btn btn-success " 
            type="button"
            href="#"
            id="volver-arriba"
          >
            Volver arriba{" "}
          </a>
        </div> */}
      </selection>
    </div>
  );
}
