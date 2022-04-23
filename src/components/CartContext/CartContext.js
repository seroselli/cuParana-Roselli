import { createContext, useEffect, useMemo, useState } from "react"
import { getItems } from "../../db/asyncmock"

export const CartContext = createContext()

const CartProvider = ( { defaultValue = [] , children }) => {

    const [datos,setDatos] = useState([])
    const [spinner,setSpinner] = useState(true)
    
    useEffect(async()=>{
      await getItems().then(data=>{
            setDatos(data)
            setSpinner(false) 
          })
      },[])


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
          
        if(!isInCart(evento.id)){
            let aux = cartList
            aux.push(evento)
            setCartList(aux)
            setCounter(cartList.length)
        }
        else{
            let cartListCopy = cartList
            let indexOf = cartListCopy.findIndex(item=>item.id === parseInt(evento.id))
            cartListCopy[indexOf].quantity += evento.quantity
            setCartList(cartListCopy)
        }
    }

    const removeItem = async (itemId)=>{
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

    const clear =  ()=>{
        setCartList([])
    }

    const isInCart = (id) =>{
        let inCart = cartList.find(element=>element.id === parseInt(id))
        return Boolean(inCart);
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
        isInCart,
        counter,
        datos,
        spinner,
        toggleCartContainer
        }
    },[cartList,datos,spinner,counter])



    return (
            <CartContext.Provider value={
            value}>
                { children }
            </CartContext.Provider>

    )
  }

  export default CartProvider

