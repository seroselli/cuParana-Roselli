import { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ItemList = ({type, data}) => {
    
  const [datos,setDatos] = useState(data)


  useEffect(async ()=>{
    setDatos(data)
    },[data])

    
    return (
        <>
            <div className="row d-flex justify-content-evenly" >
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