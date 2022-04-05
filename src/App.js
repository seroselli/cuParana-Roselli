import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {useState } from 'react';
import {getDatosbyId} from './db/asyncmock.js'

function App() {

  const [cartList, setCartList] = useState([{id: 0, nombre: "Empty Cart", precio: null, cantidad: null}]);
  const [count, setCount] = useState(0);

  let parallax = {
    backgroundImage: "url('./assets/buttercream.jpg')",
    minHeight: "100vh",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  const handleCallBack = async (event) =>{
    let item = await getDatosbyId(event.id)
    setCount(event.cantidad)
    let aux = cartList[0].id!==0?cartList:[];
    if(item!==null){
        let aux2;
        let check = aux.find(element => element.id === event.id)
        if(check){
            let i = aux.indexOf(check)
            aux[i].cantidad +=  parseInt(event.cantidad)
        }
        else{
            aux2 = {id: item.id, nombre: item.nombre, precio: item.precio, cantidad: event.cantidad}
            aux.push(aux2)
        }
        setCartList(aux) 
    }
  }
  

  return (
    <div style={parallax}>
      <NavBar marca="Cupcakes Paraná" cant={count} lista={cartList}/>
      <ItemListContainer greeting='Tenemos tu nuevo cupcake favorito' onAdd={handleCallBack}/>
    </div>
  );
}

export default App;



