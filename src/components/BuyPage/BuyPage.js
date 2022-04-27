import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";


const BuyPage = ({data}) => {
    
    const { cartList , counter ,db} = useContext(CartContext)

    const[ total, setTotal ] = useState(0)

    useEffect(() => {
        let aux = 0;
        cartList.forEach(element => {
            aux +=(parseFloat(element.precio) * parseInt(element.quantity))
        });
      setTotal(aux)        
    }, [cartList])


    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <>
            <div className="container px-5 mt-5 text-center" style={{color:"white",minHeight:"700px"}}>
                {counter>0?
                <>
                <h1 >CheckOut</h1>
                    <div className="row mt-5">
                        <div className="col">Article</div>
                        <div className="col">Quantity</div>
                        <div className="col">Subtotal</div>
                    </div>
                    <div className="row" style={{minHeight:"300px"}}>
                        {cartList.map(item=>
                            <div className="row mt-4" key={"cart"+item.id}>
                                <div className="col">{item.nombre}</div>
                                <div className="col">{item.quantity}</div>
                                <div className="col">${item.quantity*item.precio}</div>
                            </div>
                        )}
                            {console.log(data)}
                         
                    </div>
                            

                        

                   <hr style={{width:"75%", marginLeft:"auto",marginRight:"auto"}}/>
                   <div className="row" >
                        <div className="col">Total</div>
                        <div className="col"></div>
                        <div className="col">${total}</div>
                    </div>


                </>:<h1>Empty Cart</h1>}
            </div>
        </>
    )
  }

  export default BuyPage
