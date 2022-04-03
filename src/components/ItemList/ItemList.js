import Item from '../Item/Item';
import { useEffect, useState } from 'react';

const ItemList = (props) => {

    const [datos,setDatos] = useState(props.data)

    useEffect(()=>{
        setDatos(props.data)
    },[props.data])

    const handleCallback = (event)=>{
        props.onAdd(event)
    }
    return (
        <>
            <div className="row">
                {
                datos.map(item =>
                    <Item data={item} onAdd={handleCallback} key={"item"+item.id}/>
                )
                }
            </div>
        </>
    )
  }


export default ItemList