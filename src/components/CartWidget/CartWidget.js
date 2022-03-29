import './CartWidget.css';
import ClassCounter from '../ItemCount/ItemCount.js';

const CartWidget = (props) => {
    return (
        <>
        <div className="widget">

           
            <button className="btnCart" onClick={clickMenuBtn} data-bs-toggle="collapse" data-bs-target="#cart" aria-expanded="false" aria-controls="collapseExample">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="30" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
            </button>
            
        </div>

                <CartList/>
        </>
    )
  }


export default CartWidget


const CartList = (props) => {
    return (
        <>
            <div className="collapse lista" id="cart"> 
            
                <h5>Shopping Cart</h5>   
                <ul className="cart-list">
                <li className="cart-article">
                    <p className='article'>Article</p>
                    <p className='quantity'>Quantity</p>
                </li>
                <li className="cart-article mt-auto">
                    <p className='article'>Articulo 1</p>
                    <div className='quantity'>
                        
                    </div>
                    
                </li>
                </ul>
                
                <button type="button" className="btn btn-outline-info buy">Buy</button>
            </div>
        </>
    )
  }

function clickMenuBtn() {
console.log("Menu")
}