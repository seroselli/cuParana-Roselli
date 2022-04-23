import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {useState } from 'react';
import {getDatosbyId} from './db/asyncmock.js'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import MsgBox from './components/MsgBox/MsgBox';
import CartProvider from './components/CartContext/CartContext';
import Home from './components/Home/Home';

function App() {



  return (
  
  <CartProvider>
      <BrowserRouter>
      <NavBar marca="Cupcakes Paraná"/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/tienda" element={<ItemListContainer greeting='Tenemos tu nuevo cupcake favorito'/>}/>
            <Route exact path="/:category" element={<ItemListContainer greeting='Tenemos tu nuevo cupcake favorito'/>}/>
            <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;