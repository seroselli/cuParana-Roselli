import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({data, type}) => {
    
    const [item,setItem] = useState(data)

    useEffect(()=>{
        setItem(data)
    },[data])
    return (
        <>
        <div className="col-auto boxItem mt-3">
          <Link to={`/item/${item.id}`} style={{textDecoration:"none", color:"#011c20"}}>
          <div className="cardItem">
            <div className="containerImg">
              <img src={item.imagen} alt="Avatar"/>
            </div>
            <div className="cardText">
               <h4><b>{item.nombre}</b></h4> 
              <p>{item.descripcion}</p>
              <div className="StockyPrecio">
                <p>{item.stock === 0 ? "Sin stock":"Stock: " + item.stock }</p>
                <p>{"Precio:  $" + item.precio }</p>
              </div>
            </div>
          </div> 
          </Link>
          </div>
        </>
    )
  }

  export default Item
