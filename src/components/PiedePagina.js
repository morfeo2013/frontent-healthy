import React from 'react'


export default function PiedePagina() {
    return (
        <div>
            
            <section id="footer">
        <div className="container">

          <div className="row mt-5">
            <div className="col-sm-12 col-md-4 text-center text-dark">
              <h3 className="mt-5">Nosotros

                  </h3>
              <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid voluptatem recusandae perspiciatis similique inventore odio amet quod? Nesciunt, libero.  
              derechos reservados</p>

            </div>

            <div className="col-sm-12 col-md-4 text-center text-dark">
              <h3 className="mt-5">Contactanos

                  </h3>
             
              <p className="mt-5 ">
              <p>‎<i className="fas fa-envelope-open"></i> ganohealthymedellin@gmail.com </p>
                <i className="fas fa-map-marker-alt" ></i> Colombia-Medellin
                  </p>
              <p><i className="fas fa-phone" ></i> 310 503 87 58</p>

              <p> <a className="text-success" href="https://api.whatsapp.com/send?phone=+573105038758"> {/* PARA REDIDRECCIONAR A WHATSAP */}
                <i className="fab fa-whatsapp-square fa-3x" > </i></a></p>



            </div>


            <div className="col-sm-12 col-md-4 text-center text-dark">


             
                <h3 className="mt-5">Siguenos</h3>
                <div className="container ">
                <div className="row">
                <div className="col-4 mt-5 text-primary">
                  <i className="fab fa-facebook-square fa-3x"></i>
                </div>
                <div className="col-4 mt-5 text-warning">
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



        </div>
    )
}
