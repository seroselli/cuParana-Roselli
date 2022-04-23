import { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ItemList = ({type, data}) => {
    
  const [datos,setDatos] = useState(data)

  const [category,setCategory] = useState(type)
  useEffect(()=>{
    setDatos(data)
    setCategory(type)
    },[type,data])

    
    return (
        <>
            <div className="row d-flex justify-content-evenly" >
                {
                datos.map(item =>
                    <>
                          {category==="cupcakes"&&item.id<1000?<Item data={item} key={"item"+item.id}/>:null}
                          {category==="cakes"&&item.id>=1000?<Item data={item} key={"item"+item.id}/>:null}
                          {category!=="cakes"&&category!=="cupcakes"?<Item data={item} key={"item"+item.id}/>:null}
                    </>
                )
                }
            </div>
        </>
    )
  }


export default ItemList

/*                    {type=="cupcakes"?item.id<1000?<Item data={item} type={type} key={"cupcake"+item.id}/>:null:null}
                    {type=="cakes"?item.id>=1000?<Item data={item} type={type} key={"cake"+item.id}/>:null:null}
                    {type!=="cakes"&& type!=="cupcakes"?<Item data={item} type={type} key={"item"+item.id}/>:null}*/