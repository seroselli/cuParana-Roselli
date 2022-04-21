import {useState } from 'react'
import './ItemCount.css'

const ItemCount = ({id,stock,initial,onAdd}) => {
    let eInitial = (stock===0) ? "sin stock" : parseInt(initial);
    
    const [count,setCount] = useState(eInitial)


    const handleSubmit = (e) =>{
        e.preventDefault()
        onAdd(count)
    }
    function sumar() {
        if(count<stock)
            {setCount(count+1)}
        if(count===stock)
            {setCount(stock)}
    }
    
    function restar() {
        if(count>initial)
            {setCount(count-1)}
        if(count===initial)
            {setCount(initial)}
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
            <div className="d-flex w-100">
                <button className='w-100 btn btn-outline-dark mt-3' type='submit'>Add to Cart</button>
            </div>
        </form>
    )
}


export default ItemCount
