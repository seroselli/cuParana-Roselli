import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({data}) => {
    
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
                <h5><b>{"Precio:  $" + item.precio }</b></h5> 
                <h5>{item.nombre}</h5>  
                <div className="StockyPrecio">
                </div>
            </div>
          </div> 
          </Link>
          </div>
        </>
    )
  }

  export default Item
