import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { useEffect, useState } from "react"
import { logo } from "../../assets/images"

const NavBar = ({marca,cant,lista}) =>{


  const [count,setCount] = useState(0)

  useEffect(()=>{
    setCount(cant+count)
  },[cant])
  
      return (
          <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand " href="/"><img className="brandLogo" src={logo.marca} alt={marca} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ms-3">
                <a className="text-decoration-none" href="/cupcakes">Cupcakes</a>
                </li>
                <li className="nav-item ms-3">
                <a className="text-decoration-none" href="/cakes">Minicakes</a>
                </li>
              </ul>
              <div className="ms-auto d-flex allign-middle">
                <CartWidget contador={count}/>
              </div>
            </div>
          </div>
          </nav>
    ) 
}
export default NavBar


/* <CartList list={lista}/> */