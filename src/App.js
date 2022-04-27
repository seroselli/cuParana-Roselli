import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {useEffect, useState } from 'react';
import {getDatosbyId} from './db/asyncmock.js'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import MsgBox from './components/MsgBox/MsgBox';
import CartProvider from './components/CartContext/CartContext';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import BuyPage from './components/BuyPage/BuyPage';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import SearchProvider from './components/SearchContext/SearchContext';
import DBProvider from './components/DBContext/DBContext';
import Footer from './components/Footer/Footer';



const App = () =>{

  return (
    <DBProvider>
      <CartProvider>
        <SearchProvider>
          <BrowserRouter >
          <NavBar marca="Cupcakes Paraná"/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/tienda" element={<ItemListContainer types="tienda" greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path="/contacto" element={<ItemListContainer greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path="/sucursales" element={<ItemListContainer greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path="/category/:categoryId" element={<ItemListContainer greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path="/buypage" element={<BuyPage />}/>
                <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route exact path="/notfound" element={<NotFound/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </SearchProvider>
      </CartProvider>
    </DBProvider>
  
  );
}

export default App;


