import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = (props) =>{


      return (
      <nav>
        <div className="marca">{props.marca}</div>
        <div className="ms-auto d-flex allign-middle">
          <p>{props.cartCount}</p>
          <CartWidget/>
        </div>

      </nav>
    )
}
export default NavBar

function clickLogIn(){
  console.log("Login")
}