Cupcakes Paraná [`Open Page`](https://seroselli.github.io/cuParana-Roselli/)
=========================
# Introducción
Este proyecto fue desarrollado con React.js y Firebase como proyecto para el curso de React en [CoderHouse](https://www.coderhouse.com/). Es sencillo, no tiene gestión ni autenticación de usuario. Sirve sólo para gestionar una compra fácil y generar ordenes de compra para un negocio pequeño.

[Create React App](https://github.com/facebook/create-react-app).Se necesita tener Node >=14 instalado
`npm create-react-app my-app`
[Firebase Firestore](https://firebase.google.com/docs/web/setup?hl=es)
`npm i firebase`

Algunas cosas importantes:
=========================
Esta página esta publicada en Github Pages a través del package `npm i gh-pages`, para ello se agregó en package.json "homepage" la dirección de GH pages. Por lo tanto se hizo un `npm run build` y un `npm run deploy` para publicar el webpack bajo el siguiente link: [Cupcakes Paraná](https://seroselli.github.io/cuParana-Roselli/)
 Notar también que también se hizo una modificación en los path de los Links para que el Browser Router funcione correctamente en la dirección de GH Pages. Esta modificación se puede ver en [App.js](https://github.com/seroselli/cuParana-Roselli/blob/main/src/App.js)
 
# Packages utilizados

[Bootstrap](https://www.npmjs.com/package/bootstrap) como package de estilos, complementando con mis propias ediciones de css.
 `npm i bootstrap`

[GitHub Pages](https://www.npmjs.com/package/gh-pages) para publicar/buildear la página
 `npm i gh-pages`

[React Tostify](https://www.npmjs.com/package/react-toastify) para generación de notificaciones de posición absoluta para mantener una comunicación con el usuario.
 `npm i react-toastify`

[Html2Canvas](https://html2canvas.hertzen.com/documentation) para generación de un canvas y su exportación como JPG. `npm i html2canvas`

Routing
=========================

App----------->Navbar

App----------->Footer

App----------->BrowserRouting

BrowserRouting-->ItemListContainer---->ItemList---->Item------>ItemCount
BrowserRouting-->BuyPage-------------->CheckCart--->CheckOut-->ResumeOrder
BrowserRouting-->ItemDetailContainer-->ItemDetail-->ItemCount
BrowserRouting-->NotFound
BrowserRouting-->Terms
BrowserRouting-->Offices

Responsive
=========================
Con respecto a uso responsive de la página web, todavía queda bajo construcción y se pospone su desarrollo por no estar implícito en los requisitos de entrega.
