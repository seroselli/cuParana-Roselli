import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getDatos } from '../../db/asyncmock';
import { useEffect, useState } from 'react';

const ItemListContainer = (props) => {

  const [idatos,setIdatos] =useState([])

  useEffect(()=>{
    getDatos().then(data=>{
      setIdatos(data)
    })
  },[])
  const handleCallback = (event)=>{
    props.onAdd(event)
  }
    return (
        <>
            <div className="shop d-flex justify-content-center flex-column container">
                <h1>{props.greeting}</h1>
                <ItemList data={idatos} onAdd={handleCallback}/>
            </div>
        </>
    )
  }


export default ItemListContainer