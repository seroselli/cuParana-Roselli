import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { useEffect, useState } from 'react';

const ItemList = ({onAdd,data}) => {
    
    const [datos,setDatos] = useState(data)

    useEffect(()=>{
        setDatos(data)
    },[data])

    const handleCallback = (event)=>{
        onAdd(event)
    }
    
    return (
        <>
            <div className="row">
                {
                datos.map(item =>
                    <ItemDetailContainer data={item} onAdd={handleCallback} key={"item"+item.id}/>
                )
                }
            </div>
        </>
    )
  }


export default ItemList