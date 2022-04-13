import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({data, type}) => {
    
    const [item,setItem] = useState(data)

    useEffect(()=>{
        setItem(data)
    },[data])
    

    return (
        <>
        
        <div className="col-auto" onClick={()=>{console.log("actualizado")}} style={{maxHeight:"30rem"}}>
        <Link to={`/item/${item.id}`} style={{textDecoration:"none"}}>
          <div className="card d-flex flex-column mt-3 justify-content-between" style={{width: "18rem", minHeight:"18rem"}}>
            <img src={item.imagen} className="p-3" alt="..." />
              <h5 className="card-title" style={{color:"black"}}>{item.nombre}</h5>
          </div>
        </Link>
          </div>
        
        </>
    )
  }

  export default Item
