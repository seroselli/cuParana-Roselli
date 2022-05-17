import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { Link } from "react-router-dom"
import Cart from "../Cart/Cart"
import { paths } from "../../App"


const NavBar = ({marca}) =>{
      return (

            <nav className="navbar navbar-expand-md" id="navbar">
              <div className="container my-auto" id="buttonsNav">
                <Link to={paths.home} className="navbar-brand my-auto" style={{marginLeft:"2rem"}}><img className="brandLogo" src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Flogo_completo.png?alt=media&token=5f826704-8967-431c-8909-012ade0e6013" alt={marca} /></Link>
                <button className="navbar-toggler" style={{marginRight:"0.3rem"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor: "#011c20"}}>
                <div id="contentNavbarToggled" onClick={()=>{document.getElementById("navbarSupportedContent").classList.remove("show")}}>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-3 my-auto text-center px-3">
                      <Link className="text-decoration-none" to={paths.shop} style={{color:"white"}}>Shop</Link>
                    </li>
                    <li className="nav-item mx-3 my-auto text-center text-nowrap">
                      <Link className="text-decoration-none" to={paths.contact} style={{color:"white"}}>Contact us</Link>
                    </li>                
                  </ul>
                  <div className="ms-auto d-flex allign-middle">
                    <CartWidget/>

                  </div>
                </div>
              </div>
              <Cart/>
            </nav>
          
          
      

    ) 
}
export default NavBar
