import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({onAdd,data}) => {
    
    const [item,setItem] = useState(data)

    useEffect(()=>{
        setItem(data)
    },[data])

    const handleCallback = (event)=>{
        onAdd(event.item)

    }



    return (
        <>
            <div className="col-auto card mx-auto mt-3" style={{width: "18rem"}} key={item.id}>
                <ItemDetail data={item} onAdd={handleCallback}/>
            </div>
        </>
    )
  }

  export default ItemDetailContainer