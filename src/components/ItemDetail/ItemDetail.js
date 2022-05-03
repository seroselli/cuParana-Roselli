import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({itemId, item, events}) => {
    
    const spinner = (
        <div className="spinner-grow mx-auto my-auto" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

    const itemDetail = (
        <>

            <div className="d-flex p-3 mx-auto justify-content-between container row">
                <div className="d-flex p-3 md-auto col-8">
                    <img className='img-fluid' src={item===undefined?null:item.image} alt="image"/>
                </div>
                <div className="d-flex justify-content-evenly flex-column col-4 boxCard">
                    <h3>{item===undefined?null:item.name} </h3>
                    <p >{item===undefined?null:item.description} </p>
                    <p >Stock: {item===undefined?null:item.stock} </p>
                    <p style={{color:"green"}}>Envío gratis</p>
                    <ItemCount data={item} initial="1" type="buttons"/>
                </div>
                <div className="linea"></div>
            </div>
        </>
    )

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="d-flex w-100 mt-3">
                        <button className="md-auto" style={{border:"transparent", backgroundColor:"transparent"}} onClick={()=>{events("-")}}> 
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg></span>
                        </button>
                        <button className="ms-auto" style={{border:"transparent", backgroundColor:"transparent"}} onClick={()=>{events("+")}}>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg></span>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex w-100 h-100">
              {item===undefined?spinner:itemDetail}  
            </div>
            
        </>
        
    )
  }

  export default ItemDetail