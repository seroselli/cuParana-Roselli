import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { Link } from "react-router-dom"
import Cart from "../Cart/Cart"
import { paths } from "../../App"


const NavBar = ({marca}) =>{
      return (

            <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid">
              <Link to={paths.home} className="navbar-brand " ><img className="brandLogo" src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Flogo_completo.png?alt=media&token=5f826704-8967-431c-8909-012ade0e6013" alt={marca} /></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
              </button>
              <div className="collapse navbar-collapse m-0 ps-3" id="navbarSupportedContent" style={{backgroundColor: "#011c20"}}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-3 my-auto text-center">
                    <Link className="text-decoration-none " to={paths.shop} style={{color:"white"}}>Shop</Link>
                  </li>
                  <li className="nav-item mx-3 my-auto text-center text-nowrap">
                    <Link className="text-decoration-none" to={paths.contact} style={{color:"white"}}>Contact us</Link>
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
