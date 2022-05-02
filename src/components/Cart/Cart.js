import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './Cart.css'

const Cart = () =>{

    const {cartList,toggleCartContainer,clear,counter,removeItem,modifyItem,addItem, cartContainer} = useContext(CartContext)

    const listado = cartList
    const navigate = useNavigate()


    const[ total, setTotal ] = useState(0)

    const showDetail = (itemId) => {
        let aux = document.getElementById("detail" + itemId)
        aux.style.display !== "flex"? aux.style.display = "flex" : aux.style.display = "none"
    }

    const handleEvent= (event) => {
        let aux = 0;
        listado.forEach(element => {
            aux +=parseFloat(element.subtotal)
        });
      setTotal(aux)   
    }

    useEffect(() => {
      handleEvent()
    }, [cartList,toggleCartContainer])
    
    if(cartContainer&&counter>0){
        return (
            <>
                <div id="cartContainer">
                    <div className="canvasWhite">
                        <div className="header">
                            <h1>Cart wish</h1> 
                            <button className="btn" onClick={toggleCartContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                            </button>
                        </div>
                        <div className="list">
                            <div className="d-flex row">
                                <div className="container row my-2">
                                            <div className="col-3 text-center">Name</div>
                                            <div className="col-5 text-center">Quantity</div>
                                            <div className="col-3 text-end">Price</div>
                                            <div className="col-1 text-center"></div>
                                </div>
                        
                                        <hr className="mx-auto" style={{width:"90%",color:"rgba(0, 0, 0, 0.2)"}}/>
                                {
                                listado.map(item =>

                                        <div className="row container" key={"cart"+item.id} style={{position:"relative"}}>
                                            <div className="col-3 my-auto text-center text-nowrap">{item.name}</div>
                                            <div className="col-5 my-auto text-center">
                                                <ItemCount data={item} type="cartButtons" initial={item.quantity} onAdd={handleEvent}/>
                                            </div>
                                            <div className="col-3 my-auto text-end">
                                                ${item.subtotal}
                                            </div>
                                            <div className="col-1 my-auto text-center d-flex">
                                                <p className="btnCart" onClick={()=>{removeItem(item.id);handleEvent()}}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></p>
                                            </div>
                                            <div className="detailItem" id={"detail"+item.id}>
                                                {item.description}
                                                <p className="btnCart mt-auto" style={{position:"absolute", right:"0px",bottom:"0px"}} onClick={()=>{showDetail(item.id)}}>Ocultar</p>
                                            </div>
                                            <div className="row d-flex">
                                                <p className="btnCart ms-auto my-auto" onClick={()=>{showDetail(item.id)}}>Detalles</p>
                                            </div>
                                            <hr className="mx-auto" style={{width:"90%",color:"rgba(0, 0, 0, 0.2)"}}/>
                                        </div>

                                    )
                                } 
                            </div>
                        </div>
                        <div className="row ">
                                <div className="col-3 text-center my-auto">Total</div>
                                <div className="col-5 text-center my-auto"></div>
                                <div className="col-3 text-end my-auto">${total}</div>
                                <div className="col-1 text-center my-auto"></div>
                        </div>
                        <div className="foot mt-auto mb-4">
                            <button className="btn btn-danger ms-3" onClick={()=>{clear()}} ><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg></button>
                            <button className="col btn" onClick={()=>{toggleCartContainer();navigate("/buypage")}}>Finish Buying</button>
                        </div>
                    </div>
            </div> 
            <div id="shadowBack" onClick={toggleCartContainer}></div> 

            </>
        )
    }
    else{
        return (
            <>
                <div id="cartContainer">
                    <div className="canvasWhite">
                        <div className="header">
                            <h1>Cart wish</h1> 
                            <button className="btn" onClick={toggleCartContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                            </button>
                        </div>
                        <h3 className="mx-auto">Empty Cart</h3>
                    </div>
                </div> 
                <div id="shadowBack" onClick={toggleCartContainer}></div>     
            </>
    )
    }


}

export default Cart


