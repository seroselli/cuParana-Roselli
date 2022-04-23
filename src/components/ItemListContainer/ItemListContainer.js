import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { CartContext } from '../CartContext/CartContext';


const ItemListContainer = ({greeting}) => {

  const [type,setType] = useState("")
  const {category} = useParams()

  const {datos,spinner} = useContext(CartContext)

    useEffect(()=>{
      setType(category)
    },[category])

    return (
        <>
        <div className="parallax">
          <div className="shop d-flex flex-column py-3" style={{paddingLeft:"10vw",paddingRight:"10vw"}}>
                  <h1 style={{minHeight: "20vh"}}>{greeting}</h1>
                  <div className="row">
                    <div className="col-3">
                      <div className="filters mt-3 p-3">
                       <b>Tienda  {category===undefined?null:'>'} {category}</b> 
                        <ul>
                          <h4>Category</h4>
                          <li><Link to="/cupcakes" style={category==="cupcakes"?{textDecoration:"none", color: "black", pointerEvents: "none"}:{textDecoration:"none"}}>Cupcakes</Link></li>
                          <li><Link to="/cakes" style={category==="cakes"?{textDecoration:"none", color: "black", pointerEvents: "none"}:{textDecoration:"none"}}>MiniCakes</Link></li>
                        </ul>
                        <ul>
                          <h4>Ingredientes</h4>
                          <li>Vainilla</li>
                          <li>Chocolate</li>
                          <li>Frutilla</li>
                          <li>Avellanas</li>
                          <li>Zanahoria</li>
                        </ul>
                      </div>
                    </div>
                    <div className='container-fluid col-9'>
                      {!spinner?<ItemList data={datos} type={type}/>:<Spinner/>}
                    </div>
                  </div>
          </div>
        </div>
        </>
    )

  }


export default ItemListContainer