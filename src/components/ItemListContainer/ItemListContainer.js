import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getDatos } from '../../db/asyncmock';
import { useEffect, useState } from 'react';

const ItemListContainer = ({onAdd,greeting}) => {

  const [datos,setDatos] = useState([])

  useEffect(async ()=>{
    await getDatos().then(data=>{
      setDatos(data)
    })
  },[])


  const handleCallback = (event)=>{
    onAdd(event)
  }

    return (
        <>
            <div className="shop d-flex justify-content-center flex-column container mt-3">
                <h1>{greeting}</h1>
                <ItemList data={datos} onAdd={handleCallback}/>
            </div>
        </>
    )
  }


export default ItemListContainer