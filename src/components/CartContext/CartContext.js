import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { DBContext } from "../DBContext/DBContext";

export const CartContext = createContext()



const CartProvider = ( { defaultValue = [] , children }) => {

  const {db} = useContext(DBContext)
    
        const [cartList,setCartList] = useState(()=>{
        try {
          let cart = localStorage.getItem('cartList');
          return cart ? JSON.parse(cart):[];
        } catch (error) {
          return [];
        }
      })

      const [ counter,setCounter ] = useState(0)
      useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList))
        setCounter(cartList.length)
      }, [cartList])

      const addItem = (evento)=>{
         let cartListCopy = cartList  
        if(isInCart(evento.id)){
            let newQuantity = cartListCopy.find(element => element.id === evento.id).quantity + evento.quantity
            modifyItem(evento.id,newQuantity)
        }
        else{
            let newItem = db.find(element=>element.id == evento.id)
            newItem.quantity = evento.quantity
            newItem.subtotal = (parseFloat(newItem.price) * parseInt(evento.quantity))
            cartListCopy.push(newItem)
            setCartList(cartListCopy)
        }
        setCounter(cartList.length)
        localStorage.setItem("cartList",JSON.stringify(cartList))
    }

    const modifyItem = (ide,quant)=>{
      let cartListCopy = cartList  
     if(isInCart(ide)){
        let indexOf = cartListCopy.findIndex(element => element.id == ide)
        cartListCopy[indexOf].quantity = quant
        cartListCopy[indexOf].subtotal = parseFloat(parseInt(quant) * parseFloat(cartListCopy[indexOf].price))
        setCartList(cartListCopy)
     }
    }

    const removeItem = async (itemId)=>{
        let cartListCopy = cartList  
        if(isInCart(itemId)){
            let indexOf = cartList.findIndex(element => element.id === itemId)
            cartListCopy.splice(indexOf,1)
            setCartList(cartListCopy)
        }
        setCounter(cartList.length)
    }

    const clear =  ()=>{
        setCartList([])
        localStorage.removeItem('cartList')
    }

    const isInCart = (ide) =>{
        return cartList.findIndex(element=>element.id==ide)>=0?true:false;
    }

    async function toggleCartContainer(){
        let aux = document.getElementById("cartContainer")
        let shadow = document.getElementById("shadowBack")
        if(aux.style.display==="block"){
            aux.style.right = "-50vw"
            setTimeout(() => {
                aux.style.display = "none" 
                shadow.style.display = shadow.style.display!=="block"? "block":"none"
            }, 200);
        }
        else{
            aux.style.display = "block"
            setTimeout(() => {
                aux.style.right = "0vw"
                shadow.style.display = shadow.style.display!=="block"? "block":"none"
            }, 200);
        }
       
      }

    const value = useMemo(()=>{
    return{
        cartList,
        addItem,
        removeItem,
        clear,
        counter,
        toggleCartContainer,
        modifyItem
        }
    },[cartList,counter,addItem,removeItem,modifyItem])



    return (
            <CartContext.Provider value={
            value}>
                { children }
            </CartContext.Provider>

    )
  }

  export default CartProvider

