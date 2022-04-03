import {useState } from 'react'

const ItemCount = (props) => {
    let initial = (props.stock===0) ? "sin stock" : 1;
    let [count,setCount] = useState(initial)


    const onTrigger = (evento) => {
           props.onAdd({cantidad: count, id: props.id})
           setCount(1);
    }

    const btnDisabled = props.stock>0 ? {}:{pointerEvents:"none"}

    return (
        <>
            <div className='d-flex allign-center w-100' style={btnDisabled}>
                    <div className="d-flex justify-content-center w-100">
                        <button className="btn btn-outline-danger me-auto px-4" onClick={()=>{count>0?setCount(count-1):setCount(0)}}>-</button>
                        <div className="align-middle px-3 my-auto fw-bold">
                            {count}/{props.stock}
                        </div>
                        <button  className="btn btn-outline-success ms-auto px-4" onClick={()=>{count<props.stock?setCount(count+1):setCount(props.stock)}}>+</button>
                    </div>
            </div>
            <div className="d-flex w-100" style={btnDisabled}>
                <button className='w-100 btn btn-outline-dark mt-3' type='button' onClick={()=>{onTrigger(count)}}>Add to Cart</button>
            </div>
        </>
    )
}

export default ItemCount

