import {useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext/CartContext';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
import './ItemCount.css'

const ItemCount = ({data,type,onAdd,initial}) => {

    const {modifyItem,addItem} = useContext(CartContext)
    const [spinner,setSpinner] = useState(true)
    const [count,setCount] = useState(parseInt(initial))


    useEffect(() => {
        setSpinner(false)
      }, [data])

    const operar = async(quantity) => {
        setSpinner(true)
        if (quantity<=0){
            quantity=1
            setCount(1)
        }
        else{
            if(quantity<data.stock){
                setCount(quantity)
            }
            else{
                quantity = data.stock
                setCount(data.stock)
            }
        }
        if(type=="cartButtons"){
            
            await modifyItem({id:data.id,quantity:quantity}).then(response =>{
                setSpinner(false)
                onAdd(response)
            })   
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addItem({id:data.id,quantity:count})
    }

    

    if(type==="cartButtons"){
        return (
            <>
                    <div className='d-flex allign-center w-100'>
                        {spinner? (<Spinner/>):                        
                        <div className="botones">
                            <span className="left" onClick={()=>{operar(count-1)}}></span>
                            <span className="right" onClick={()=>{operar(count+1)}}></span>
                            <div className="box">
                                <span>{count}</span>
                            </div>
                        </div>}

                    </div>
            </>
        )
    }
    else{
        return(
            <form onSubmit={handleSubmit}>
                {data.stock==0?<p>Sin stock</p>:

                <>
                    <div className='d-flex allign-center w-100'>
                        <div className="botones">
                            <span className="left" onClick={()=>{operar(count-1)}}></span>
                            <span className="right" onClick={()=>{operar(count+1)}}></span>
                            <div className="box">
                                <span>{count}</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex w-100">
                        <button className='w-100 btn btn-outline-dark mt-3' type='submit'>Add to Cart</button>
                    </div>
                </>

                }

        </form>
        )

    }

}


export default ItemCount
