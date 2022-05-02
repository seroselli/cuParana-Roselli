import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import CheckCart from "./CheckCart/CheckCart";
import CheckOut from "./CheckOut/CheckOut";
import Confirmed from "./Confirmed/Confirmed";



const BuyPage = (props) => {
    
    const {counter} = useContext(CartContext)
    const [state,setState] = useState(0)
    const [data,setData] = useState()

    const handleEvent = (e) =>{
        if(e==="checkout"){
            setState(1)
        }
        else{
            setData(e)
            setState(2)
        }
    }


    if(counter>0||state>0){
        if(state===0){return(<CheckCart onAdd={handleEvent}/>)}
        if(state===1){return(<CheckOut onAdd={handleEvent}/>)}
        if(state===2){return(<Confirmed data={data}/>)}
    }
    else{
        return(
            <div className="container px-5 text-center" style={{color:"white",minHeight:"700px",marginTop:"70px!important"}}>
            <div className="title">
                <img  src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcupcakes.png?alt=media&token=17a60148-974d-4b72-ab50-740f8eb5415b" alt="" />
                <h1 >Go by our store first</h1>
            </div>
            <p style={{fontSize:"11px"}}>Don't forget to tag us on social media ʕᵔᴥᵔʔ</p>
            <div className="list-cart mt-5">
                <h2>Empty Cart</h2>
                <button type="button" className="btn btn-outline-info"><Link to={"/shop"} style={{textDecoration:"none", color:"black"}}><b>Go to shop</b></Link></button>
            </div>
        </div>
        )

    }


}

  export default BuyPage