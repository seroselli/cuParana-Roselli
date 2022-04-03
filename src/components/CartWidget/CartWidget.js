import './CartWidget.css';
import { useEffect, useState } from 'react';

const CartWidget = (props) => {
const [state,setState] = useState(0)

useEffect(()=>{
  if(props.contador>0){
    setState(props.contador)
  }
},[props.contador])
    return (
        <>
        <div className="widget">
            {state}
            <button className="btnCart" data-bs-toggle="collapse" data-bs-target="#cart" aria-expanded="false" aria-controls="collapseExample">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="30" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
            </button>
        </div>
        </>
    )
  }


export default CartWidget


