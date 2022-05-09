import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/CartContext/CartContext';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import BuyPage from './components/BuyPage/BuyPage';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import DBProvider from './components/DBContext/DBContext';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Contact from './components/Contact/Contact';
import Offices from './components/Offices/Offices';
import Terms from './components/Terms/Terms';

/*               IMPORTANT!!                 */

const GH = "/cuParana-Roselli"  //NPM RUN BUILD (GitHub Pages) --> and change in package.json the object "homepage" : "https://seroselli.github.io/cuParana-Roselli/"
//const GH = ""   //NPM START --> and change in package.json the object "homepage" : "/"
/*CHANGE THIS ↑↑↑ FOR NPM START */

export const paths = {home: GH+"/", shop: GH + "/shop",item: GH+"/item", buypage: GH + "/buypage", contact: GH + "/contact", offices: GH + "/offices", terms: GH + "/terms", notfound: GH + "/notfound", category: GH + "/category"}

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
  if(window.screen.width<1000){
    return(
      <div className='d-flex justify-content-evenly flex-column' style={{width:"100%",height:"70vh",position:"absolute"}}>
        <img className='mx-auto' style={{width:"50%"}} src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Flogo_completo.png?alt=media&token=5f826704-8967-431c-8909-012ade0e6013" alt="" />
        <div className='mx-auto text-center' style={{color:"red",width:"80%",height:"auto",fontSize:"25px"}}>Sorry, this page is not available for smartphones and tablets</div>
        <div style={{color:"white", marginLeft:"auto", marginRight:"auto"}}>Responsive mode under construction</div>
      </div>
    )
  }
  else{
    return (
    <DBProvider>
      <CartProvider>
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
                <Route exact path={paths.home} element={<Home/>}/>
                <Route exact path={paths.shop} element={<ItemListContainer types="tienda" greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path={paths.shop+"/filter=:filter"} element={<ItemListContainer types="tienda" greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path={paths.contact} element={<Contact/>}/>
                <Route exact path={paths.offices} element={<Offices/>}/>
                <Route exact path={paths.category+"/:categoryId"} element={<ItemListContainer greeting='Tenemos tu nuevo cupcake favorito'/>}/>
                <Route exact path={paths.buypage} element={<BuyPage />}/>
                <Route exact path={paths.item+"/:itemId"} element={<ItemDetailContainer/>}/>
                <Route exact path={paths.notfound} element={<NotFound/>}/>
                <Route exact path={paths.terms} element={<Terms/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
      </CartProvider>
    </DBProvider>
  
  );
  }
  
}
  
}

export default App;


