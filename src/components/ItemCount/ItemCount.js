import {useState } from 'react'

const ItemCount = (props) => {
    let initial = (props.stock===0) ? "sin stock" : 1;

    let [count,setCount] = useState(initial)
    let [stock,setStock] = useState(props.stock)

    const onTrigger = async (evento) => {
           props.onAdd({item:{cantidad: count, id: props.id},stock:stock})
           setStock(stock-count)
           stock===1? setCount(0) : setCount(1);
    }

    const btnDisabled = stock>0 ? {}:{pointerEvents:"none"}

    return (
        <>
            <div className='d-flex allign-center w-100' style={btnDisabled}>
                    <div className="d-flex justify-content-center w-100">
                        <button className="btn btn-outline-danger me-auto px-4" onClick={()=>{count>1?setCount(count-1):setCount(1)}}>-</button>
                        <div className="align-middle px-3 my-auto fw-bold">
                            {stock!==0?`${count}/${stock}`:"sin stock"}
                        </div>
                        <button  className="btn btn-outline-success ms-auto px-4" onClick={()=>{count<stock?setCount(count+1):setCount(stock)}}>+</button>
                    </div>
            </div>
            <div className="d-flex w-100" style={btnDisabled}>
                <button className='w-100 btn btn-outline-dark mt-3' type='button' onClick={()=>{onTrigger(count)}}>Add to Cart</button>
            </div>
        </>
    )
}

export default ItemCount

