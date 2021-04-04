/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'




export default function inicio() {
    return (
        <div className="container">

         















            <div className="row">

                <div className="col-6 mt-5">
                    <h3> "Salud y Bienestar al alcance de tus manos"</h3>
                    <h4 className="mt-5">Enlaces</h4>
                    <ul className="mt-5"
                    >
                        <li>
                        Que es nuestra marca personal

                    </li>

                        <li>
                        Productos

                    </li>
                        <li>
                        Testimonios

                    </li>
                    <li>
                    PQRS

                    </li>
                    <li>
                    Políticas de privacidad 

                    </li>
                    </ul>
                </div>

                <div className="col-1 mt-5">
                 

                </div >
                {(screen.width >700)?
                   
                    <div className="col-3 mt-4 " >
                    <div className='content-all'>
                    <div className='content-carrusel'>
                        
                        <figure><img src="https://res.cloudinary.com/dhiasghho/image/upload/v1617489816/img1_lpscvh.png" /></figure>

                        <figure><img src="https://res.cloudinary.com/dhiasghho/image/upload/v1617489816/img2_b553ro.png" /></figure>

                        <figure><img src="https://res.cloudinary.com/dhiasghho/image/upload/v1617489816/img3_a7djje.png" /></figure>

                        <figure><img src="https://res.cloudinary.com/dhiasghho/image/upload/v1617489816/img4_ffr0gi.png" /></figure>

                        <figure><img src="https://res.cloudinary.com/dhiasghho/image/upload/v1617489816/img5_tsw14o.png" /></figure>

                        <figure><img src="https://res.cloudinary.com/dhiasghho/image/upload/v1617489816/img6_nvhsyr.png" /></figure>

                        <figure><img src="https://res.cloudinary.com/dhiasghho/image/upload/v1617489817/img7_egtwkm.png" /></figure>

                        <figure><img src="https://res.cloudinary.com/dhiasghho/image/upload/v1617489817/img8_ximxmh.png" /></figure>

                  </div>
                    </div>
                 

                </div>

                :
                 null

                }

            </div>





        </div>
    )
}
