import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import { DBContext } from "../../DBContext/DBContext";

import './CheckOut.css'

const CheckOut = ({onAdd}) => {

const navigate = useNavigate()
 const {cartList,clear,notifyError,notifySuccess,notifyWarning,total} = useContext(CartContext)
 const { sendCheckOut } = useContext(DBContext)
 const wishCart = cartList
 const [state, setState] = useState(true)

 const [form_data, setForm_data] = useState({name:"",cellphone:"",direction:"",email:""})
 const [error, setError] = useState({name:true,cellphone:false,check:true,email:true})

    const checkout = (e) =>{
        e.preventDefault()
        if(wishCart.length > 0){
            sendCheckOut({name: form_data.name, cellphone: form_data.cellphone, email: form_data.email, direction: form_data.direction, terms: e.target[4].checked, cart:wishCart, cost: total.cost}).then(response =>{
                if(response.id==undefined){
                    notifyError("There was an error communicating with the server, please try again")
                    console.error(response)
                }
                else
                {
                    notifySuccess("Order sent successfully")
                    notifySuccess(`Order ${response.id}`)
                    clear()
                    onAdd(response)
                }
    })}
    else{
        notifyWarning("No tiene elementos en el carro")
        navigate("/shop")
    }
}
 
    function validate(e){
        const numeros = "0123456789";
        const letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
        const correo = "!,;:°!{}()/&%$#'¿¡?*+=^`~][";
        let palabra = e.target.value
    switch(e.target.name){
        case "name":
                for(let i=0; i<palabra.length; i++){
                    if (numeros.indexOf(palabra.charAt(i),0)!=-1){
                        setError({name:true,cellphone:error.cellphone,direcheckction:error.check,email:error.email})
                        return ;
                        }
                    }
                    setError({name:false,cellphone:error.cellphone,check:error.check,email:error.email})
        break;
        case "email":
                for(let i=0; i<palabra.length; i++){
                    if (correo.indexOf(palabra.charAt(i),0)!=-1){
                        setError({name:error.name,cellphone:error.cellphone,check:error.check,email:true})
                        return ;
                        }
                    }
                    setError({name:error.name,cellphone:error.cellphone,check:error.check,email:false})
        break;
        case "cellphone":
                for(let i=0; i<palabra.length; i++){
                    if (letras.indexOf(palabra.charAt(i),0)!=-1){
                        setError({name:error.name,cellphone:true,check:error.check,email:error.email})
                        return ;
                        }
                    }
                    setError({name:error.name,cellphone:false,check:error.check,email:error.email})
        break;
        default:
                setError({name:error.name,cellphone:error.cellphone,check:e.target.checked,email:error.email})
                    return;
        break;
    }
    }

    useEffect(() => {
        if(!error.cellphone&&error.check&&!error.email&&!error.name){
            setState(false)
        }
        else{
            setState(true)
        }
    }, [error])
    

            return (
                <>
                <div className="container px-5 mt-5 text-center" style={{color:"white",minHeight:"700px"}}>
                    <div className="title">
                        <img  src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcupcakes.png?alt=media&token=17a60148-974d-4b72-ab50-740f8eb5415b" alt="" />
                        <h3 >You are one step away from trying the best muffins</h3>
                    </div>
                    <p style={{fontSize:"11px"}}>Don't forget to tag us on social media ʕᵔᴥᵔʔ</p>
                    <div className="list-cart mt-3" id="pageForm">
                        <h3>Please, complete the forms to continue</h3>
                        <form onSubmit={checkout}>
                            <div className="form-floating mb-3">
                                <input type="text" name="name" id="form_name" className="form-control" onChange={(e)=>{validate(e);setForm_data({name:e.target.value,cellphone:form_data.cellphone,direction:form_data.direction,email:form_data.email})}} />
                                <label htmlFor="floatingInput" style={error.name?{color:"red"}:null}>Complete name</label><span>{error.name?"Sólo letras":null}</span>   
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" name="cellphone" className="form-control" onChange={(e)=>{validate(e);setForm_data({name:form_data.name,cellphone:e.target.value,direction:form_data.direction,email:form_data.email})}}/>
                                <label htmlFor="floatingInput" style={error.cellphone?{color:"red"}:null}>Cellphone</label><span>{error.cellphone?"Sólo números":null}</span>  
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email"  name="email" className="form-control" onChange={(e)=>{validate(e);setForm_data({name:form_data.name,cellphone:form_data.cellphone,direction:form_data.direction,email:e.target.value})}}/>
                                <label htmlFor="floatingInput" style={error.email?{color:"red"}:null}>Email address</label><span>{error.email?"Sin caracteres especiales":null}</span>  
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text"  name="direction" className="form-control" onChange={(e)=>{setForm_data({name:form_data.name,cellphone:form_data.cellphone,direction:e.target.value,email:form_data.email})}}/>
                                <label htmlFor="floatingInput">Direction</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked={error.check} onClick={(e)=>{validate(e)}}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked"><Link to={"/terms"}>You agree terms&conditions</Link></label>
                            </div>
                        <button id="finish" className="btn btn-success mt-5 w-50" type="submit" disabled={state}>Next Step</button>    
                        </form>
                    </div>
                </div>
            </>
            )
  }

  export default CheckOut

