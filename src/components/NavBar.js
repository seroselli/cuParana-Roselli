import React from "react"
import './NavBar.css'

const NavBar = (props) =>{
      return (
      <nav>
        <div className="marca">{props.marca}</div>
        <div className="botones">
          <button onClick={clickLogIn}>Acceder</button>
          <button onClick={clickMenuBtn} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
          </button>
        </div>
        <div className="collapse lista" id="collapseExample"> 
            <ul className="list-group">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
      </nav>
    )
}
export default NavBar

function clickLogIn(){
  console.log("Login")
}
function clickMenuBtn() {
  console.log("Menu")
}


