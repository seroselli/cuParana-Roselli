import { useEffect, useState } from 'react';
import './CartWidget.css';

const CartWidget = ({contador}) => {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    setCount(contador)
  },[contador])


    return (
        <>
        <div className="widget" style={{position:"relative"}}>
            <button className="btnCart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="35" height="35" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
              <span className="badge bg-primary text-center" style={{width:"1.7em", height: "1.7em", borderRadius: "100px", position: "absolute", right:"0px", top:"10px"}}>{count===0?count:count}</span>
            </button>
        </div>
        </>
    )
  } 


export default CartWidget


