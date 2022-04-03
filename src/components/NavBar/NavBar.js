import { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget"
import CartList from "../CartList/CartList"
import './NavBar.css'
import { getDatos } from "../../db/asyncmock";

const NavBar = (props) =>{
  const [idatos, setIdatos] = useState([])

  useEffect(()=>{
    getDatos().then(data =>{
      setIdatos(data)
    })
  },[])

  const [count, setCount] = useState(0);

  useEffect(()=>{
    setCount(count+props.cartCount.cantidad)
      let info = idatos.find(element => element.id === props.cartCount.id) || null
      let aux = lista
      if(info!==null){
          let aux2;
          let check = aux.find(item => item.id === info.id) || false
          if(check){
              aux[aux.indexOf(check)].cantidad = parseInt(aux[aux.indexOf(check)].cantidad) + parseInt(props.cartCount.cantidad)
          }
          else{
              aux2 = {id: info.id, nombre: info.nombre, precio:info.precio, cantidad: props.cartCount.cantidad}
              aux.push(aux2)
          }
            setLista(aux)  
      }
      else{
          console.log("Carrito vacío")
      }
  },[props.cartCount])

  const [lista, setLista] = useState([{id: 0, nombre: "Article", precio: null, cantidad: "Quantity"}]);

      return (
      <nav>
        <div className="marca">{props.marca}</div>
        <div className="ms-auto d-flex allign-middle">
          <CartWidget contador={count}/>
          <CartList add={lista}/>
        </div>
      </nav>
    )
}
export default NavBar

