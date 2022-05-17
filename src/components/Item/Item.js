import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../App';
import './Item.css'

const Item = ({data}) => {
    
    const [item,setItem] = useState(data)

    useEffect(()=>{
        setItem(data)
    },[data])

    return (
        <>
        <div className="col-xl-auto boxItem mt-3">
          <Link to={`${paths.item}/${item.id}`} style={{textDecoration:"none", color:"#011c20"}}>
          <div className="cardItem">
            <div className="containerImg">
              <img src={item.image} alt="Avatar"/>
            </div>
            <div className="cardText">
                <h5><b>{"Price:  $" + item.price }</b></h5> 
                <p>{item.name}</p>  
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
