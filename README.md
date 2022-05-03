Cupcakes Paraná
=========================
# Introducción
Este proyecto fue desarrollado con React.js y Firebase como proyecto para el curso de React en [CoderHouse](https://www.coderhouse.com/). Es sencillo, no tiene gestión ni autenticación de usuario. Sirve sólo para gestionar una compra fácil y generar ordenes de compra para un negocio pequeño.

[Create React App](https://github.com/facebook/create-react-app).Se necesita tener Node >=14 instalado
`npm create-react-app my-app`
[Firebase Firestore](https://firebase.google.com/docs/web/setup?hl=es)
`npm i firebase`

# Packages utilizados

[Bootstrap](https://www.npmjs.com/package/bootstrap) como package de estilos, complementando con mis propias ediciones de css.
 `npm i bootstrap`

[GitHub Pages](https://www.npmjs.com/package/gh-pages) para publicar/buildear la página
 `npm i gh-pages`

[React Tostify](https://www.npmjs.com/package/react-toastify) para generación de notificaciones de posición absoluta para mantener una comunicación con el usuario.
 `npm i react-toastify`

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
