import {useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext/CartContext';
import './ItemCount.css'

const ItemCount = ({id,stock,initial,type}) => {
    let eInitial = (stock===0) ? "sin stock" : parseInt(initial);
    
    const [count,setCount] = useState(eInitial)

    useEffect(() => {
        if(type==="cartButtons"){
            modifyItem(id,count)
        }    
    }, [count])
    
    const {addItem,toggleCartContainer,modifyItem} = useContext(CartContext)

    const handleSubmit = async (e) =>{
        e.preventDefault()
            addItem({id:id,quantity:count})
            setTimeout(() => {
                toggleCartContainer()
            }, 200);
    }
    
    async function sumar() {
        if(count<stock)
            {setCount(count+1)}
        if(count===stock)
            {setCount(stock)}
    }
    
    async function restar() {
        if(count>1)
            {setCount(count-1)}
        if(count===1)
            {setCount(1)}
    }



    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex allign-center w-100' style={eInitial!=="sin stock"?null:{pointerEvents:"none"}}>
                    <div className="botones">
                        <span className="left" onClick={restar}></span>
                        <span className="right" onClick={sumar}></span>
                        <div className="box">
                            <span>{count}</span>
                        </div>
            </div>
            </div>
            {type!=="cartButtons"?
            <div className="d-flex w-100">
                <button className='w-100 btn btn-outline-dark mt-3' type='submit'>Add to Cart</button>
            </div>
            :null}   
        </form>
    )
}


export default ItemCount
