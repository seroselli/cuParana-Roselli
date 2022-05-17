import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { DBContext } from "../DBContext/DBContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()



const CartProvider = ( { defaultValue = [] , children }) => {

    const notifySuccess = (text) => {
            toast.success(text, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });

    }
    const notifyWarning = (text) => {
       
            toast.warn(text, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
        
    }

    const notifyError = (text) => {
        toast.error(text, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }


    
    const {db} = useContext(DBContext)
    const [ counter,setCounter ] = useState(0)
    const [cartContainer,SetCartContainer] = useState(false)
    const [cartList,setCartList] = useState(()=>{
        try {
          let cart = localStorage.getItem('cartList');
          return cart ? JSON.parse(cart):[];
        } catch (error) {
          return [];
        }
      })

      const [total,setTotal] = useState(()=>{
        let aux = {quantity: 0 , cost: 0}
        cartList.forEach(element => {
            aux.quantity += element.quantity
            aux.cost += element.subtotal
        });
        return aux;
    })

      useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList))
        setCounter(cartList.length)
        refreshTotal()
      }, [cartList])


      const addItem = (evento)=>{
         let cartListCopy = cartList  
        if(isInCart(evento.id)){
            let newQuantity = cartListCopy.find(element => element.id == evento.id)?.quantity + evento.quantity
            modifyItem({id:evento.id,quantity:newQuantity}).then(response =>{
                response?notifySuccess("Quantity modified!"):notifyWarning("Something it's wrong, quantity unmodified");  
            })
        }
        else{
            let newItem = db.find(element=>element.id == evento.id)
            newItem.quantity = evento.quantity
            newItem.subtotal = parseFloat(parseFloat(newItem.price) * parseInt(evento.quantity))
            cartListCopy.push(newItem)
            setCartList(cartListCopy)
            isInCart(evento.id)?notifySuccess("Item added successfully"):notifyWarning("The item could not be added");
        }
        setCounter(cartList.length)
        localStorage.setItem("cartList",JSON.stringify(cartList))
        refreshTotal()
    }

    const modifyItem = async (evento)=>{
      let cartListCopy = cartList  
     if(isInCart(evento.id)){
         return new Promise (resolve => {
            let indexOf = cartListCopy.findIndex(element => element.id == evento.id)
            cartListCopy[indexOf].quantity = evento.quantity
            cartListCopy[indexOf].subtotal = parseFloat(parseInt(evento.quantity) * parseFloat(cartListCopy[indexOf].price))
            setCartList(cartListCopy)
            refreshTotal()
            resolve (cartList[indexOf].quantity == evento.quantity )
         })
     }
     
    }

    const removeItem = (itemId)=>{
        let cartListCopy = cartList  
        
        if(isInCart(itemId)){
            let indexOf = cartList.findIndex(element => element.id === itemId)
            cartListCopy.splice(indexOf,1)
            setCartList(cartListCopy)
        }
        setCounter(cartList.length)
        localStorage.setItem("cartList",JSON.stringify(cartList))
       
    }

    const clear =  ()=>{
        setCartList([])
        localStorage.removeItem('cartList')
        refreshTotal()
    }

    const isInCart = (ide) =>{
        return cartList.findIndex(element=>element.id==ide)>=0?true:false;
    }

    const refreshTotal = () => {
        let aux = {quantity: 0 , cost: 0}
        cartList.forEach(element => {
            aux.quantity += element.quantity
            aux.cost += element.subtotal
        });
        setTotal(aux);
    }

    async function toggleCartContainer(){
        let aux = document.getElementById("cartContainer")
        let shadow = document.getElementById("shadowBack")
        if(aux.style.display==="block"){
            aux.style.right = "-100vw"
            setTimeout(() => {
                aux.style.display = "none" 
                shadow.style.display = shadow.style.display!=="block"? "block":"none"
            }, 200);
            SetCartContainer(false)
        }
        else{
            aux.style.display = "block"
            setTimeout(() => {
                aux.style.right = "0vw"
                shadow.style.display = shadow.style.display!=="block"? "block":"none"
            }, 200);
            SetCartContainer(true)
        }
       
      }

    return (
            <CartContext.Provider value={{cartList,addItem,total,removeItem,clear,counter,toggleCartContainer,modifyItem,cartContainer,notifySuccess,notifyError,notifyWarning}}>
                { children }
            </CartContext.Provider>

    )
  }

  export default CartProvider

