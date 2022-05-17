import { useEffect, useState } from 'react'
import './Offices.css'

const Offices = () => {
    const [state, setstate] = useState(0)
    const offices = ["https://maps.googleapis.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.290542402612!2d-60.52811676919974!3d-31.73410329191655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b4527ecc964aaf%3A0xa38ca2d3f704342e!2sPlaza%201%C2%BA%20de%20Mayo!5e0!3m2!1ses-419!2sar!4v1651455858360!5m2!1ses-419!2sar","https://maps.googleapis.com/maps/embed?pb=!1m18!1m12!1m3!1d11088.406012350404!2d-60.53037524157036!3d-31.73772387982921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7eb0062f75d33b2d!2sPlaza%20Francisco%20Ram%C3%ADrez!5e0!3m2!1ses-419!2sar!4v1651456765843!5m2!1ses-419!2sar","https://maps.googleapis.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.528616338717!2d-60.509220074443725!3d-31.76020490206682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbd83a3b12ae420e!2sPlaza%20Martires%20de%20Malvinas!5e0!3m2!1ses-419!2sar!4v1651456817355!5m2!1ses-419!2sar"]
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    

    return (
        <>
        <div className="parallaxOffices">
            <div className="shadowOffices">
                <div className="container row w-100 contenedor m-auto">
                    <div className="col-md-6 d-flex flex-column justify-content-evenly buttonsOffices">
                            <button className={state==0?"selected":null}  onClick={(e)=>{e.preventDefault();setstate(0)}}>Office 1: San Martin 2210, Paraná, Entre Rios</button>
                            <button className={state==1?"selected":null} onClick={(e)=>{e.preventDefault();setstate(1)}}>Office 2: General Artigas 2210, Paraná, Entre Rios</button>
                            <button className={state==2?"selected":null} onClick={(e)=>{e.preventDefault();setstate(2)}}>Office 3: Urquiza 2210, Paraná, Entre Rios</button>
                    </div>
                    <div className="col-md-6 p-0 m-0">
                        <iframe id="maps" src={offices[state]} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>                          
            </div>
        </div>


        </>

        )
  }

  export default Offices






