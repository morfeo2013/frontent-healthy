import React from 'react'; /* llama a react  */
import ReactDOM from 'react-dom';  /* llama a react  react-dom para manipular el doom*/
 /* importa los estilos ccs */
import App from './App';  /* importa app.js para ejecutarlo  y pasarlo al index.html */
 import 'bootswatch/dist/sketchy/bootstrap.min.css'/* ESTILOS DFIFERNETES EN BOOSTRAP */
/* activa el doom y le inyecta los archivos js */
import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* MUESTRRA Y RENDERIZA EL ARCHIVO .JS IMPPORTADO AL INICI */}
  </React.StrictMode>,
  document.getElementById('root') /* LLAMA EL ARCHIVOEN EL INDEX.HTML PARA INYECTAR EL <APP> */
);


