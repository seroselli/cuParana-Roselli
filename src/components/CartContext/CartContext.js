import { createContext, useContext, useMemo, useState } from "react"
import { getDatosbyId } from "../../db/asyncmock"


export const CartContext = createContext()

const CartProvider = ( { defaultValue = [] , children }) => {

    const [cartList,setCartList] = useState(defaultValue)

    function addItem (evento){
        if(!isInCart(evento.id)){
            let aux = cartList
            aux.push(evento)
            setCartList(aux)
        }
    }

    async function removeItem (itemId){
        if(isInCart(itemId)){
            let aux = cartList
            let index;
            for (let i = 0; i < aux.length; i++) {
                if(aux[i].id === parseInt(itemId)){
                    index = i
                }
            }
            setTimeout(() => {
                aux.splice(index,1)
                setCartList(aux)  
            }, 100); 
        }
    }

    function clear (){
        setCartList([])
    }

    const isInCart = (id) =>{
        if(cartList){
          cartList.map(element => {
           if(element.id === parseInt(id)){
               return true;
           }
           })
        }
        return false;
        
    }
    

    return (
            <CartContext.Provider value={{
                cartList,
                addItem,
                removeItem,
                clear,
                isInCart,
                counter:cartList.length
            }}>
                { children }
            </CartContext.Provider>

    )
  }

  export default CartProvider


