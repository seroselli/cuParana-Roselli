import html2canvas from 'html2canvas'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import Spinner from '../../Spinner/Spinner'
import './Confirmed.css'


const Confirmed = ({onAdd,data}) => {
    const {notifySuccess} = useContext(CartContext)
    const [date,setDate] = useState(convertDate(new Date()))
    const state = data
    const cart = data.cart
    const captureResume = () =>{
        html2canvas(document.getElementById("resume")).then(canvas => {
            notifySuccess(`Downloading order`)
            var dato = canvas.toDataURL("image/jpeg");
            var a = document.createElement('a');
            a.download = state.id;
            a.target = '_blank';
            a.href= dato;
            a.click();
        });
    }
    useEffect(() => {
      setDate(convertDate(state.date))
    }, [data])
    
        return (
            <div className="container px-5 mt-5 text-center" style={{color:"white",minHeight:"700px"}}>
                
            <div className="title">
                <img  src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcupcakes.png?alt=media&token=17a60148-974d-4b72-ab50-740f8eb5415b" alt="" />
                <h3 >Purchace completed!</h3>
            </div>
            <p style={{fontSize:"11px"}}>Don't forget to tag us on social media ʕᵔᴥᵔʔ</p>
            <button id="btnDownload" className='btn my-auto' type='button' onClick={()=>{captureResume()}} >Download <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M23 24v-20h-8v2h6v16h-18v-16h6v-2h-8v20h22zm-12-13h-4l5 6 5-6h-4v-11h-2v11z"/></svg></button>
            <p style={{fontSize:"10px"}}>Save this order for any query</p>
            <div className="list-cart2" id='resume'>
            {state!=undefined?
                <div className="container" >

                    <div className="my-3 d-flex flex-column">
                        <div className='d-flex mx-auto'>
                            <h5 className='my-auto'>Order ID: {state.id}</h5><p className='ms-5 my-auto'>Date: {date}</p>
                        </div>
                    </div>
                    <div className="row my-3">
                        <h5>Buyer: {state.name}</h5>
                    </div>

                    <div className="row my-3">
                        <strong><u>Resume</u></strong>
                    {
                        cart.map(item => 
                            <div className="row mx-auto" key={"resume"+ item.id}>
                                    <div className="col">
                                        {item.name}
                                    </div>
                                    <div className="col">
                                        {item.quantity}un.
                                    </div> 
                            </div>
                        )
                    }
                    </div>
                    <div className="row mt-5">
                        <h5>Sending to direction: {state.direction}</h5>   
                    </div>
                    <div className="row my-3" style={{color:"blue"}}>
                        <h5>Total cost: ${state.cost}</h5>   
                    </div>
                    <div className="row mt-5">
                        <p style={{fontSize:"15px"}}>Thank you very much for your purchase, in the next 48 hours we will contact you</p>   
                        <h2>Cupcakes Paraná</h2>
                    </div>
                </div>:<Spinner/>
        }

        </div>
        </div>
        )


}

  export default Confirmed


function convertDate (num){

    let aux = new Date(num)
    let hora = aux.getHours()<10?  "0"+aux.getHours().toString():aux.getHours().toString()
    let min = aux.getMinutes()<10?  "0" + aux.getMinutes().toString():aux.getMinutes().toString()
    let date = aux.getDate()<10? "0" + aux.getDate().toString() : aux.getDate().toString()
    let month = aux.getMonth()<9? "0" + (aux.getMonth()+1).toString() : (aux.getMonth()+1).toString()
    let year = aux.getFullYear().toString()
    let result = hora+":"+min+" "+date+"/"+month+"/"+year
    return result

}