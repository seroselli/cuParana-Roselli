import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { CartContext } from '../CartContext/CartContext';
import { DBContext } from '../DBContext/DBContext';


const ItemListContainer = ({greeting,types}) => {

  const navigate = useNavigate()
  const [type,setType] = useState(types)
  const {categoryId} = useParams()

  const {db,spinner, refreshDB} = useContext(DBContext)

    useEffect(()=>{
      if(categoryId===undefined){
        setType("tienda")
      }
      else{
        setType(categoryId)
      }
      
    },[categoryId])

    return (
        <>
        <div className="parallax">
          <div className="shop d-flex flex-column py-3" style={{paddingLeft:"10vw",paddingRight:"10vw"}}>
                  <h1 style={{minHeight: "20vh"}}>{greeting}</h1>
                  <div className="row">
                    <div className="col-3">
                      <div className="filters mt-3 p-3">
                       <b>Tienda  {categoryId===undefined?null:'>'} {categoryId==1?"Cupcakes":categoryId==2?"Cakes":null}</b> 
                        <ul>
                          <h4>Category</h4>
                          <li><Link to="/category/1" style={categoryId==1?{textDecoration:"none", color: "black", pointerEvents: "none"}:{textDecoration:"none"}}>Cupcakes</Link></li>
                          <li><Link to="/category/2" style={categoryId==2?{textDecoration:"none", color: "black", pointerEvents: "none"}:{textDecoration:"none"}}>MiniCakes</Link></li>
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
                      {!spinner?<ItemList data={db} type={type}/>:<Spinner/>}
                    </div>
                  </div>
          </div>
        </div>
        </>
    )

  }


export default ItemListContainer