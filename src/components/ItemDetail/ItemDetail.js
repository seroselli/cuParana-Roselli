import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatosbyId } from '../../db/asyncmock';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({onAdd}) => {
    
    const [item,setItem] = useState()
   
    const {itemId} = useParams()

    useEffect(()=>{
        console.log(itemId)
         getDatosbyId(itemId).then(data=>{
            setItem(data)
          }) 
    },[])

    const spinner = (
        <div className="spinner-grow mx-auto" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

    const itemDetail = (
        <>

            <div className="d-flex p-3 mx-auto justify-content-evenly">
                
                <img className='img-fluid' style={{maxHeight:"25rem"}} src={item===undefined?null:item.imagen} alt="image"/>
                
                <div className="d-flex justify-content-evenly flex-column ms-3" style={{maxHeight:"25rem"}}>
                    <h3>{item===undefined?null:item.nombre} </h3>
                    <p >{item===undefined?null:item.descripcion} </p>
                    <p style={{color:"green"}}>Envío gratis</p>
                    <ItemCount stock={item===undefined?null:item.stock}  initial="1" type="buttons" id={item===undefined?null:item.id} />
                </div>
                
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


/* 
   */