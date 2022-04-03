import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Item = (props) => {
    
    const [item,setItem] = useState(props.data)

    useEffect(()=>{
        setItem(props.data)
    },[props.data])
    const handleCallback = (event)=>{
        props.onAdd(event)
    }
    return (
        <>
                        <div className="col-auto card mx-auto mt-3" style={{width: "18rem"}} key={item.id}>
                        <div className="card-body d-flex flex-column justify-content-evenly">
                            <img className='w-100' src={item.imagen} alt="" />
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">{item.descripcion}</p>
                        </div>
                        <div className="mt-auto mb-3">
                              <ItemCount onAdd={handleCallback} stock={item.stock} initial="1" type="buttons" id={item.id}/>
                            </div>
                    </div>
        </>
    )
  }

  export default Item