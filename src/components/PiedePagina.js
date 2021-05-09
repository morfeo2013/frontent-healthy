import React from 'react'


export default function PiedePagina() {
    return (
        <div>
            
            <section id="footer">
        <div  className="container mt-5">

          <div className="row">
            <div className="col-sm-12 col-md-4 text-center text-dark">
              <h3 className="mt-2">Nosotros

                  </h3>
              <p className="mt-2"> Por medio de nuestras redes y servicion, buacamos llegar a nuestros clientes de todo el pais, para llevar nuestros productos naturales de alta calidad a todas partes de Colombia</p>

            </div>

            <div className="col-sm-12 col-md-4 text-center text-dark">
              <h3 className="mt-2">Contactanos

                  </h3>
             
              <p className="mt-2 ">
              <p>‎<i className="fas fa-envelope-open"></i> ganohealthymedellin@gmail.com </p>
                <i className="fas fa-map-marker-alt" ></i> Colombia-Medellin
                  </p>
              <p><i className="fas fa-phone" ></i> 315 610 16 84</p>

              <p> <a className="text-success" href="https://api.whatsapp.com/send?phone=+573156101684"> {/* PARA REDIDRECCIONAR A WHATSAP */}
                <i className="fab fa-whatsapp-square fa-3x" > </i></a></p>



            </div>


            <div className="col-sm-12 col-md-4 text-center text-dark">


             
                <h3 className="mt-2">Siguenos</h3>
                <div className="container ">
                <div className="row">
                <div className="col-4 mt-2 text-primary">
                  <i className="fab fa-facebook-square fa-3x"></i>
                </div>
                <div className="col-4 mt-2 text-warning">
                  <i className="fab fa-instagram-square fa-3x"></i>
                </div>
                <div className="col-4 mt-2">
                  <i className="fab fa-twitter-square fa-3x"></i>
                </div>


              </div>
                </div>
                





            </div>
          </div>




        </div>
      </section>



        </div>
    )
}
