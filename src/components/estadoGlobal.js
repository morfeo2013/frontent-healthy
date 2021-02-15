import React from 'react'
 var fredy= (sessionStorage.getItem('contadorFavoritos'))
// eslint-disable-next-line react-hooks/rules-of-hooks


var fredy2=(sessionStorage.getItem('contProductos'))

const NumFavorito = React.createContext(
  
    {
       
       fredy , fredy2
   
  }

  )

 
  export default NumFavorito

  