import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import './Toaster.css'

const Toaster = () => {
    
    const {toasts} = useContext(CartContext)

    useEffect(() => {
      console.log(toasts)
    }, [toasts])
    

    if(toasts!=[]){
        return (
            <div className="toaster-containers">

            {/*
                toasts.map(item=>
                    <div className="toast-containers" style={{backgroundColor:`${item.color}`}} key={"toast"+(Math.random()%200)}> 
                        <p className='mx-auto md-auto my-auto'>{item.text}</p>
                        <span className='ms-auto mb-auto p-1'>x</span>
                    </div>
                    )*/
            }
            </div>            
    )
    }
    else{
        return null
    }

  }

  export default Toaster
