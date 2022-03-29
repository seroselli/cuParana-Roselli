import {useState } from 'react'

const ItemCount = (props) => {

    let [count,setCount] = useState(parseInt(props.initial))
    const styles = props.type==="buttons"?{display : "block"}:{display : "none"};

    const onTrigger = (evento) => {
           console.log(`Se agregaron ${evento}`)
           props.onAdd(count)
           setCount(0)
    }

    return (
        <>
            <div className='d-flex allign-center w-100'>
                    <div className="d-flex justify-content-center w-100">
                        <button style={styles} className="btn btn-danger" onClick={()=>{count>0?setCount(count-1):setCount(0)}}>-</button>
                        <div className="align-middle px-3 my-auto fw-bold">
                            {count}
                        </div>
                        <button style={styles} className="btn btn-success" onClick={()=>{count<props.stock?setCount(count+1):setCount(props.stock)}}>+</button>
                    </div>
                    
            </div>
            <div className="d-flex w-100" style={styles}>
                <button className='w-100 btn btn-outline-dark mt-3' type='button' onClick={()=>{onTrigger(count)}}>Agregar a Carrito</button>
            </div>
        </>
    )
}

export default ItemCount

