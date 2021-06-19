/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function RedesSociales() {
  /* CREAMOS LOS ICONOS QUE ATRVEZ DE CSS LOS UBICAMOS A LA DERECLA Y CON EL EFECTO DE RESALTAR Y REDONDEADO */

  return (
    <div class="social-bar">
     
      <a href="#" class="icon icon-subir" id="">
      <i class="fas fa-arrow-up"></i>
      </a>
      
      <a
        href="https://www.facebook.com/ganhealthm"
        class="icon icon-facebook"
        target="_blank"
      >
        <i class="fab fa-facebook-square"></i>
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=573105038758 &text=Me%20gustaría%20conocer%20mas%20sobre%20el%20sitio%20web"
        class="icon icon-whatshap"
        target="_blank"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
      <a
        href="https://instagram.com/ganohealthy_medellin/?hl=es-la"
        class="icon icon-instagram"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  );
}

export default RedesSociales;
