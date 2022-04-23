import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './Cart.css'

const Cart = ({id}) =>{

    const {cartList,toggleCartContainer} = useContext(CartContext)
    const handleEvent = (evento) =>{
        console.log(evento)
    }

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
                        <ul className="d-flex flex-column">
                            <li className="d-flex justify-content-between">
                                        <p><strong>ID</strong></p>
                                        <p>Name</p>
                                        <p>Price</p>
                                    </li>
                            {
                            cartList.map(item =>
                               
                                    <li className="d-flex justify-content-between" key={"cart"+item.id}>
                                        <p className="my-auto"><strong>{item.id}</strong></p>
                                        <p className="my-auto">{item.nombre}</p>
                                        <p className="my-auto">{item.quantity}</p>
                                        <p className="my-auto">${item.precio}</p>
                                        <ItemCount onAdd={handleEvent} stock={item.stock}  initial={item.quantity} type="cartButtons"/>
                                    </li>
                             
                            )
                            }
                        </ul>
                    </div>
                    <div className="foot">
                        <button className="btn">Finish Buying</button>
                    </div>
                </div>
                       
            </div> 
            <div id="shadowBack" onClick={toggleCartContainer}></div>     
        </>
    )
}

export default Cart