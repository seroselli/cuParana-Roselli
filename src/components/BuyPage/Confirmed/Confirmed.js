
import html2canvas from 'html2canvas'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import Spinner from '../../Spinner/Spinner'
import './Confirmed.css'


const Confirmed = ({onAdd,data}) => {
    const {notifySuccess} = useContext(CartContext)
    const [state, setState] = useState(data)
    useEffect(() => {
        setState(data)
    }, [data])
    
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
        return (
            <div className="container px-5 mt-5 text-center" style={{color:"white",minHeight:"700px"}}>
            <div className="title">
                <img  src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcupcakes.png?alt=media&token=17a60148-974d-4b72-ab50-740f8eb5415b" alt="" />
                <h3 >You are one step away from trying the best muffins</h3>
            </div>
            <p style={{fontSize:"11px"}}>Don't forget to tag us on social media ʕᵔᴥᵔʔ</p>
            <button id="btnDownload" className='btn my-auto' type='button' onClick={()=>{captureResume()}} >Download <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 24v-20h-8v2h6v16h-18v-16h6v-2h-8v20h22zm-12-13h-4l5 6 5-6h-4v-11h-2v11z"/></svg></button>

            <div className="list-cart2" id='resume'>
            {state!=undefined?
                <div className="container" >
                    <div className="mt-3 d-flex flex-row justify-content-evenly">
                        <h3>Purchace completed!</h3>        
                    </div>
                    <p style={{fontSize:"10px"}}>Do not forget to save the id for any query</p>
                    <div className="my-3 d-flex flex-column">
                        <div className='d-flex mx-auto'>
                            <h5 className='my-auto'>Order ID: {state.id}</h5><p className='ms-5 my-auto'>Date: {(state.date).slice(0,10)+" - "+(state.date).slice(11,19)}</p>
                        </div>
                    </div>
                    <div className="row my-3">
                        <h5>Buyer: {state.name}</h5>
                    </div>
                    <div className="row my-3">
                        <h5>Cost: {state.cost}</h5>   
                    </div>
                    <div className="row my-2">
                        <h5>Sending to direction: {state.direction}</h5>   
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


