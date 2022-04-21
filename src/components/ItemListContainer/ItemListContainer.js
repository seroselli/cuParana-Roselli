import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getItems } from '../../db/asyncmock';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import CartProvider from '../CartContext/CartContext';


const ItemListContainer = ({greeting}) => {
  const [spinner,setSpinner] = useState(true)
  const [type,setType] = useState("")
  const [datos,setDatos] = useState([])
  useEffect(async()=>{
    await  getItems().then(data=>{
          setDatos(data)
          setSpinner(false) 
        })
    },[type])

    const {category} = useParams()

    useEffect(()=>{
      setType(category)
    },[category])

    return (
        <>
        <div className="parallax">
          <div className="shop d-flex justify-content-center flex-column py-3">
                  <h1>{greeting}</h1>
                  <div className='container-fluid' style={{minWidth: "70vw"}}>
                    {!spinner?<ItemList data={datos} type={type}/>:<Spinner/>}
                  </div>
          </div>
        </div>
        </>
    )

  }


export default ItemListContainer