import CartWidget from "../CartWidget/CartWidget"
import CartList from "../CartList/CartList"
import './NavBar.css'
import { useEffect, useState } from "react"

const NavBar = ({marca,cant,lista}) =>{


  const [count,setCount] = useState(0)

  useEffect(()=>{
    setCount(cant)
  },[cant])
  
      return (
      <nav>
        <div className="marca">
        <img src="./assets/logo_completo.png" alt={marca} />
        </div>
        <div className="ms-auto d-flex allign-middle">
          <CartWidget contador={count}/>
          <CartList list={lista}/>
        </div>
      </nav>
    ) 
}
export default NavBar


