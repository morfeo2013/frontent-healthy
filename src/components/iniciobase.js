import React from "react";
import { Link } from "react-router-dom";

export default function inicio() {
  return (
    <div>
      <section id="inicio" className="text-center">
        <div className="jumbotron fondo-imagen pb-5 d-block w-100">
          <h1 className="display-4  ">
            Salud y Bienestar al alcance de tus manos
          </h1>
          <h5 className="text-center fw-bold">
            La salud es sinónimo de vida y alegría por eso recuerda siempre que
            si tienes salud tendrás lo mas importante.
          </h5>
          <Link className="btn btn-success mr-2" to="/autor">
            <i className="fas fa-info-circle"></i>
            {/* implementar icono fontosso */}
            Más Información
          </Link>
        </div>
      </section>

      <section className="carrusel">
        <div class="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 ">
              <h2 className="mt-5 text-center">HISTORIA</h2>
              <div className="d-flex p-2 bd-highlight">
                <p>
                  Hongo milenario de origen asiático, conocido a nivel mundial
                  por sus potentes beneficios y alto impacto en la salud y el
                  bienestar de quien lo consumo. Es considerado el superlimento
                  con mayor cargo nutricional. Contiene 200 fitonutrientes y 154
                  antioxidantes, que hacen del Ganoderma Lúcidum un producto muy
                  especial: es adaptógeno e inmunomuduldor (en el sistema inmune
                  se generan el 95% de las enfermeades)
                </p>
              </div>

              <div className="text-center">
                <a
                  className="btn btn-outline-success btn-lg"
                  href="https://www.youtube.com/watch?v=DWcJFNfaw9c"
                >
                  <i className="fas fa-info-circle"></i>
                  {/* implementar icono fontosso */}
                  Más Información
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 imagen2 text-center">
              <img
                className="  img-thumbnail img-fluid d-block w-100"
                src="https://morfeo12345678.s3-sa-east-1.amazonaws.com/fotos+ganoderma/Screenshot_20201103_093714.jpg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section id="llamado-accion">
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-sm-12 text-dark">
              <h1 className="text-center">Impulsa tu empresa o negocio </h1>
              <p className="text-break ">
                Con respecto a cualquier otro negocio "convencional", el
                ingresar a una red de mercadeo te supone una baja inversión para
                iniciar tu negocio independiente. Al afiliarte, adquieres el
                conocimiento, el entrenamiento, las herramientas necesarias y el
                acompañamiento de líderes para crear y expandir tu red. ¡Te
                entregamos el “know how” del negocio! Obtienes el derecho a
                hacer uso de nuestras instalaciones físicas e infraestructura,
                que ponemos a tu disposición para que desarrolles el negocio,
                apalancado por tu patrocinador y con el respaldo de la imagen
                corporativa y experiencia de GANO EXCEL. Recibes un negocio
                “llave en mano”, en funcionamiento, con un nombre e imagen
                corporativa, una reputación y un gran potencial de crecimiento.
                No tienes que preocuparte de ningún proceso diferente a la
                gestión comercial de promoción y venta de nuestros productos. La
                empresa se encarga de la investigación y el desarrollo, la
                producción, la logística, la administración, el plan de
                mercadeo, las relaciones públicas y los temas legales y de
                impuestos. Como networker debes ocupar toda tu energía en hacer
                crecer tu red y enfocarte en el punto neurálgico de todo
                negocio: las ventas. Esto es un alivio, si tienes en cuenta que
                el empresario promedio ocupa el 80% de su tiempo en solucionar
                problemas.
              </p>
              <div className="text-center">
                <button className="btn btn-outline-danger btn-lg text-center">
                  {" "}
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios">
        <div className="container">
          <h1 className="text-center mt-5">Nuestros servicios</h1>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-4 text-center">
              <h2 className="mt-5">
                <i className="fas fa-paint-brush"></i>
                Comercializar
              </h2>
              <p className="mt-5">
                Por medio de nuestras redes y servicion, buacamos llegar a
                nuestros clientes de todo el pais, para llevar nuestros
                productos naturales de alta calidad a todas partes de Colombia
              </p>
              <button className="btn btn-info text-center mb-5">
                Ver Mas <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div>
            <div className="col-sm-12 col-md-4 text-center">
              <h2 className="mt-5">
                <i className="fas fa-search-dollar"></i>
                Buscar
              </h2>
              <p className="mt-5">
                Estamos constantemente en busqueda y capacitacion de personas
                con deseos de desarrolarse como comercializadores
                independientes,fortaleziendolos y entreneandolos en el campo de
                los productos naturales.
              </p>
              <button className="btn btn-info text-center mb-5">
                Ver Mas <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div>
            <div className="col-sm-12 col-md-4 text-center">
              <h2 className="mt-5">
                <i className="fas fa-bullhorn"></i>
                Difundir
              </h2>
              <p className="mt-5">
                Por medio de nustros canales de difucion, pretendemos llegar a
                todos los lugares de colombia yde LatinoAmerica.
              </p>
              <button className="btn btn-info text-center mb-5">
                Ver Mas <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria ">
        <div className="row mt5 no-gutters  ">
          <div className="col-sm-12 col-md-3">
            <img
              src="https://morfeo12345678.s3-sa-east-1.amazonaws.com/fotos+ganoderma/IMG_20201016_095423_1.jpg"
              alt=""
              className=" d-block w-100"
            ></img>
          </div>
          <div className="col-sm-12 col-md-3 ">
            <img
              src="https://morfeo12345678.s3-sa-east-1.amazonaws.com/fotos+ganoderma/IMG_20201016_094411_1+(1).jpg"
              alt=""
              className=" d-block w-100"
            ></img>
          </div>
          <div className="col-sm-12 col-md-3 ">
            <img
              src="https://morfeo12345678.s3-sa-east-1.amazonaws.com/fotos+ganoderma/IMG_20201016_093755_1.jpg"
              alt=""
              className=" d-block w-100"
            ></img>
          </div>
          <div className="col-sm-12 col-md-3">
            <img
              src="https://morfeo12345678.s3-sa-east-1.amazonaws.com/fotos+ganoderma/IMG_20201016_102744.jpg"
              alt=""
              className=" d-block w-100"
            ></img>
          </div>
        </div>
      </section>

      <section id="testimonios">
        <div className="container">
          <h1 className="text-center mt-5">Testimonios</h1>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-4 text-center">
              <div className="card">
                <div className="card-boddy">
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis nam temporibus voluptatum vitae quae. Nemo ducimus id
                    magnam.
                  </p>
                  <cite>
                    <strong>Jhon fredy</strong>
                  </cite>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 text-center">
              <div className="card">
                <div className="card-boddy">
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis nam temporibus voluptatum vitae quae. Nemo ducimus id
                    magnam.
                  </p>
                  <cite>
                    <strong>Sara rios goez</strong>
                  </cite>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 text-center">
              <div className="card">
                <div className="card-boddy">
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis nam temporibus voluptatum vitae quae. Nemo ducimus id
                    magnam.
                  </p>
                  <cite>
                    <strong>Elizabelh goez</strong>
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  <section id="footer">
        <div className="container">

          <div className="row mt-5">
            <div className="col-sm-12 col-md-4 text-center text-success">
              <h3 className="mt-5">Nosotros

                  </h3>
              <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid voluptatem recusandae perspiciatis similique inventore odio amet quod? Nesciunt, libero.  
              derechos reservados</p>

            </div>

            <div className="col-sm-12 col-md-4 text-center text-success">
              <h3 className="mt-5">Contactanos

                  </h3>
             
              <p className="mt-5 ">
              <p>‎<i className="fas fa-envelope-open"></i> ganohealthymedellin@gmail.com </p>
                <i className="fas fa-map-marker-alt" ></i> Colombia-Medellin
                  </p>
              <p><i className="fas fa-phone" ></i> 315 813 38 56</p>

              <p> <a className="text-success" href="https://api.whatsapp.com/send?phone=+573158133856">
                <i className="fab fa-whatsapp-square fa-3x" > </i></a></p>



            </div>


            <div className="col-sm-12 col-md-4 text-center text-success">


             
                <h3 className="mt-5">Siguenos</h3>
                <div className="container ">
                <div className="row">
                <div className="col-4 mt-5">
                  <i className="fab fa-facebook-square fa-3x"></i>
                </div>
                <div className="col-4 mt-5 ">
                  <i className="fab fa-instagram-square fa-3x"></i>
                </div>
                <div className="col-4 mt-5">
                  <i className="fab fa-twitter-square fa-3x"></i>
                </div>


              </div>
                </div>
                





            </div>
          </div>




        </div>
      </section>

 */}
    </div>
  );
}
