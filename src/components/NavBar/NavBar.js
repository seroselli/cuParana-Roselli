import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { Link } from "react-router-dom"
import Cart from "../Cart/Cart"
import { useContext, useState } from "react"
import { SearchContext } from "../SearchContext/SearchContext"

const NavBar = ({marca}) =>{
  const { searchInput}=useContext(SearchContext)
  const [results ,setResults] = useState([])


  const searching = (e) => {
    setResults(searchInput(e.target.value))
    console.log(results)
  }

  const toggleResults = () => {
    let doc = document.getElementById("searchOptions")
    doc.style.display!="flex"? doc.style.display="flex":doc.style.display="none";
  }

      return (

            <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand " ><img className="brandLogo" src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Flogo_completo.png?alt=media&token=5f826704-8967-431c-8909-012ade0e6013" alt={marca} /></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
              </button>
              <div className="collapse navbar-collapse m-0 ps-3" id="navbarSupportedContent" style={{backgroundColor: "#011c20"}}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-3 my-auto text-center">
                    <Link className="text-decoration-none " to="/shop" style={{color:"white"}}>Shop</Link>
                  </li>
                  <li className="nav-item mx-3 my-auto text-center text-nowrap">
                    <Link className="text-decoration-none" to="/contact" style={{color:"white"}}>Contact us</Link>
                  </li>
                  <li className="nav-item mx-3 search d-flex mt-1" style={{position:"relative"}}>
                    <input className="my-auto mx-auto" type="text"  onClick={()=>{toggleResults()}} onChange={(e)=>{searching(e)}}/>
                    <button className="btn my-auto md-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="20" height="20" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
                    </button>
                    <div className="results" id="searchOptions" onClick={()=>{toggleResults()}}>
                      <ul>
                        {results.length>0?
                        results.map(option => 
                          <li className="option" key={"option-search-"+option.id}>{option.name}</li>
                        )
                        :null}
                      </ul>
                    </div>
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
