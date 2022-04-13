import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {useState } from 'react';
import {getDatosbyId} from './db/asyncmock.js'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [cartList, setCartList] = useState([{id: 0, nombre: "Empty Cart", precio: null, cantidad: null}]);
  const [count, setCount] = useState(0);


  const handleCallBack = async (event) =>{
    let article = { id: event.item.id , cantidad: event.item.cantidad}
    let item = await getDatosbyId(article.id)
    setCount(event.item.cantidad)
    let aux = cartList[0].id!==0?cartList:[];
    if(item!==null){
        let aux2;
        let check = aux.find(element => element.id === event.id)
        if(check){
            let i = aux.indexOf(check)
            aux[i].cantidad +=  parseInt(article.cantidad)
        }
        else{
            aux2 = {id: item.id, nombre: item.nombre, precio: item.precio, cantidad: article.cantidad}
            aux.push(aux2)
        }
        setCartList(aux) 
    }
  }
  
  return (
    <BrowserRouter>
      <NavBar marca="Cupcakes Paraná" cant={count} lista={cartList}/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting='Tenemos tu nuevo cupcake favorito'/>}/>
        <Route exact path="/:category" element={<ItemListContainer greeting='Tenemos tu nuevo cupcake favorito' onAdd={handleCallBack}/>}/>
        <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



