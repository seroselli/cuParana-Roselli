import { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ItemList = ({onAdd, type, data}) => {
    
  const [datos,setDatos] = useState(data)


  useEffect(async ()=>{
    setDatos(data)
    },[data])

  
    const handleCallback = (event)=>{
        onAdd(event)
    }
    
    return (
        <>
            <div className="row" >
                {
                datos.map(item =>
                    <>
                    {type=="cupcakes"?item.id<1000?<Item data={item} type={type} key={item.id}/>:null:null}
                    {type=="cakes"?item.id>=1000?<Item data={item} type={type} key={item.id}/>:null:null}
                    {type!=="cakes"&& type!=="cupcakes"?<Item data={item} type={type} key={"item"+item.id}/>:null}
                    </>

                )
                }
            </div>
        </>
    )
  }


export default ItemList