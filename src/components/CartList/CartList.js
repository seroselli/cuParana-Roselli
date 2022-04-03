import { useEffect, useState } from 'react';

const CartList = (props) => {

    const [list,setList] = useState(props.add)

    useEffect(()=>{
    setList(props.add)
    },[props.add])

    return (
        <>
            <div className="collapse lista" id="cart"> 
                <h5>Shopping Cart</h5>   
                <ul className="cart-list">
                {list.map(element =>
                    <li className="cart-article mt-auto" key={'article'+element.id}>
                        <p className='article'>{element.nombre}</p>
                        <div className='quantity'>{element.cantidad}</div>
                    </li>
                )}

                </ul>
                
                <button type="button" className="btn btn-outline-info buy">Buy</button>
            </div>
        </>
    )
  }

  export default CartList
