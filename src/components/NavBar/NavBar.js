import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { logo } from "../../assets/images"
import { Link, useParams } from "react-router-dom"
import Cart from "../Cart/Cart"

const NavBar = ({marca}) =>{

      return (
          <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand " ><img className="brandLogo" src={logo.marca} alt={marca} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ms-3 my-auto">
                  <Link className="text-decoration-none " to="/tienda" style={{color:"white"}}>Tienda</Link>
                </li>
                <li className="nav-item ms-3 my-auto">
                  <Link className="text-decoration-none" to="/contacto" style={{color:"white"}}>Contacto</Link>
                </li>
                <li className="nav-item ms-5 search d-flex mt-1">
                  <input className="my-auto" type="text"/>
                  <button className="btn my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="20" height="20" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
                  </button>
                </li>
              </ul>
              <div className="ms-auto d-flex allign-middle">
                <CartWidget/>
                <Cart/>
              </div>
            </div>
          </div>
          </nav>
    ) 
}
export default NavBar
