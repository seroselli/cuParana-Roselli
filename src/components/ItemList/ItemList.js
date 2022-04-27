import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({type, data}) => {
  const [datos,setDatos] = useState(data)
  useEffect(()=>{
    setDatos(data)
    },[type,data])

    
    return (
        <>
            <div className="row d-flex justify-content-evenly" >
              {
                type=="tienda"? 
                datos.map(item=>
                  <Item data={item} key={"shop"+item.id}/>
                 ):datos.map(item=>type==item.categoryId?<Item data={item} key={item.categoryId+"-"+item.id}/>:null)
              }
            </div>
        </>
    )
  }


export default ItemList
