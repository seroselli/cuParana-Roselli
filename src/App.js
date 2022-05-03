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
import Toaster from './components/Toaster/Toaster';
import { ToastContainer } from 'react-toastify';
import Contact from './components/Contact/Contact';
import Offices from './components/Offices/Offices';
import Terms from './components/Terms/Terms';




const App = () =>{

const [state,setState] = useState(()=>{
  let states = sessionStorage.getItem("startVideo")
  if(states!=null){
    return false
  }
  else{
    return true
  }

})
  useEffect(async() => {
    if(state){
          setTimeout(() => {
      document.getElementById("video2").style.opacity = 0
    }, 2000);
    setTimeout(() => {
      setState(false)
      sessionStorage.setItem("startVideo","true")
    }, 4000);
    }

  }, [])
  
  if(state){
    return (
        <div style={{position:"relative", width:"100vw",height:"100vh",top:"0px",left:"0px"}}>  
            <video id="video2" style={{width:"100vw",height:"100vh", position:"absolute", top:"0px", left:"0px",transition:"1500ms",opacity:"1",display:"block"}} autoPlay muted>
                <source src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2FCUPCAKES.mp4?alt=media&token=13086de8-b5ed-403b-9778-075965caee3a" type="video/mp4"/>
            </video>  
        </div>
    )
}
else{
  return (
    <DBProvider>
      <CartProvider>
        <SearchProvider>
          <BrowserRouter >
            <NavBar marca="Cupcakes Paraná"/>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{zIndex:"10000",marginTop:"50px"}}
              />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/shop" element={<ItemListContainer types="tienda" greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path="/shop/filter=:filter" element={<ItemListContainer types="tienda" greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/offices" element={<Offices/>}/>
                <Route exact path="/category/:categoryId" element={<ItemListContainer greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path="/buypage" element={<BuyPage />}/>
                <Route exact path="/buypage/nextstep" element={<BuyPage />}/>
                <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route exact path="/notfound" element={<NotFound/>}/>
                <Route exact path="/terms" element={<Terms/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </SearchProvider>
      </CartProvider>
    </DBProvider>
  
  );
}
  
}

export default App;


