import { useEffect, useState } from 'react'
import './Contact.css'
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    const checkout = (e) =>{
        e.preventDefault()
        let text = `Hola Cupcakes Paraná, soy ${e.target[0].value}, mi correo de contacto es ${e.target[1].value}, les deje este mensaje en la página: \n${e.target[2].value}`
        var msj = document.createElement('a');
        msj.target = '_blank';
        msj.href= "https://api.whatsapp.com/send?phone=5493426310597&text=" + text;
        msj.click();
    }
    return (
        <div className="container contactContainer" >
            <div className="row" id="buttonsContact">
                <ul>
                    <li><a href="https://instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="48" height="48" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a></li>
                    <li><a href="https://facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="48" height="48" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a></li>
                    <li><a href="https://wa.me/5493426310597"><svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="48" height="48" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a></li>
                </ul>
            </div>
            <div className="row mx-auto my-4" style={{width:"80%"}}>

                <div className="col-md-8">
                    <form onSubmit={checkout}>
                        <div className="form-floating mb-3">
                            <input type="text" name="name" id="form_name" className="form-control"/>
                            <label htmlFor="floatingInput" >Complete name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email"  name="email" className="form-control" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="input-group" style={{minHeight:"150px"}}>
                            <span className="input-group-text">Message</span>
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                        <button id="finish" className="btn btn-success mt-5 w-50" type="submit">Send</button>    
                    </form>
                </div>
                <div className="col-md-4">
                    <img className='imgContact' src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcupcakes.png?alt=media&token=17a60148-974d-4b72-ab50-740f8eb5415b" alt="" />
                </div>
            </div>
                
        </div>
        )
  }

  export default Contact


