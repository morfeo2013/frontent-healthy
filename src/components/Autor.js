import React from 'react'
import Swal from 'sweetalert2'



/* ACA SE CRE EL COMPONENTE PRINCIPAL */
export default function Autor() {

 

/* useEffect(() => {
    activarAlerta()
  
      
    
}, []) */
    const activarAlerta=()=>{
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }


    return (
        <div>
            <div className="container">
            <h1 className="text-center text-primary mt-3">
          GanoHealthy Medellin-Angela Goez Correa
               </h1>
             

            
            
            </div>
           
         </div>
    )
}
