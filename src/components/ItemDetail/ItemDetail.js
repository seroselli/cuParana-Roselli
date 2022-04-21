import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatosbyId } from '../../db/asyncmock';
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = () => {

    const { addItem, cartList } = useContext(CartContext)
    
    const [item,setItem] = useState()
    const {itemId} = useParams()

    const [count,setCount] = useState(0)
    const [btnCount,setbtnCount] = useState(true)
    useEffect(()=>{
         getDatosbyId(itemId).then(data=>{
            setItem(data)
          }) 
    },[])

    const spinner = (
        <div className="spinner-grow mx-auto" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

    const handleEvent = (evento) =>{
        if(evento>0){
            addItem({...item,quantity:evento})
            setCount(evento)
            setbtnCount(false)
        }
    
    }

    const itemDetail = (
        <>

            <div className="d-flex p-3 mx-auto justify-content-between container row">
                <div className="d-flex p-3 md-auto col-8">
                    <img className='img-fluid' src={item===undefined?null:item.imagen} alt="image"/>
                </div>
                <div className="d-flex justify-content-evenly flex-column col-4 boxCard">
                    <h3>{item===undefined?null:item.nombre} </h3>
                    <p >{item===undefined?null:item.descripcion} </p>
                    <p >Stock: {item===undefined?null:item.stock} </p>
                    <p style={{color:"green"}}>Envío gratis</p>
                    {btnCount?<ItemCount onAdd={handleEvent} stock={item===undefined?null:item.stock}  initial="1" type="buttons" id={item===undefined?null:item.id}/>:<a className='btn btn-success mx-auto' onClick={()=>{console.log(cartList)}}>Terminar Compra</a>}
                    
                </div>
                <div className="linea"></div>
            </div>
        </>
    )

    return (
        <>
            {item===undefined?spinner:itemDetail}
        </>
        
    )
  }

  export default ItemDetail