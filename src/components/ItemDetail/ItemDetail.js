import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({onAdd,data}) => {
    
    const [item,setItem] = useState(data)

    useEffect(()=>{
        setItem(data)
    },[data])

    const handleCallback = (event)=>{
        onAdd(event)
    }

    return (
        <>
            <div className="card-body d-flex flex-column justify-content-evenly">
            <img className='w-100' src={item.imagen} alt="" />
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.descripcion}</p>
            </div>
            <div className="mt-auto mb-3">
                <ItemCount onAdd={handleCallback} stock={item.stock} initial="1" type="buttons" id={item.id}/>
            </div>
        </>
    )
  }

  export default ItemDetail