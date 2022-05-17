import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import { DBContext } from "../../DBContext/DBContext";
import './CheckCart.css'



const CheckCart = ({onAdd}) => {
    const navigate = useNavigate()
    const { cartList, counter,total} = useContext(CartContext)
    const listado = cartList
    const listTotal = total
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleNext = () =>{
        onAdd("checkout")
    }
        return(
            <>
            <div className="container px-5 text-center" style={{color:"white",minHeight:"700px",marginTop:"170px!important",paddingTop:"70px"}}>
                <div className="title">
                    <img  src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcupcakes.png?alt=media&token=17a60148-974d-4b72-ab50-740f8eb5415b" alt="" />
                    <h3 >You are one step away from trying the best muffins</h3>
                </div>
                <p style={{fontSize:"11px"}}>Don't forget to tag us on social media ʕᵔᴥᵔʔ</p>
                <div className="list-cart" id="pagePreview">

                    <div className="container" style={{minHeight:"300px"}}>
                        <div className="row mt-5">
                            <div className="col">Article</div>
                            <div className="col">Quantity</div>
                            <div className="col">Subtotal</div>
                        </div>

                        {listado.map(item=>
                        <div key={"cart"+item.id}>
                            <hr style={{width:"80%", marginLeft:"auto",marginRight:"auto"}}/>
                            <div className="row mt-4 py-3 mx-auto" >
                                <div className="col">{item.name}</div>
                                <div className="col">{item.quantity}</div>
                                <div className="col">${item.subtotal}</div>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="container mb-3">
                        <hr style={{width:"80%", marginLeft:"auto",marginRight:"auto"}}/>
                        <div className="row mt-auto" style={{backgroundColor:"rgba(1, 255, 170, 0.247)"}} >
                                <div className="col">Total</div>
                                <div className="col">{listTotal.quantity}</div>
                                <div className="col">${listTotal.cost}</div>
                        </div>
                    </div>
                    <button id="nextStep" className="btn" onClick={()=>{handleNext()}}>Next Step</button>
                </div>
                
            </div>
        </>
        )
    

  }

  export default CheckCart