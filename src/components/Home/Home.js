import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DBContext } from '../DBContext/DBContext'
import './Home.css'

const Home = ({}) => {
    const {refreshDB} = useContext(DBContext)

    const images = ["https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcake1.jpg?alt=media&token=8907b18b-767b-4cd2-9901-4f0083260860","https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcake2.jpg?alt=media&token=5aadcfb8-36c0-47f8-b97e-c000a0df422f","https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcake3.jpg?alt=media&token=e59de9d9-20a0-4205-8c97-67510043e25f","https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcake4.jpg?alt=media&token=3c86f39f-a628-4c90-99cb-666e2b7db469","https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcupcake1.png?alt=media&token=13fb6b4a-50f8-4d03-b9cc-f199a766b896","https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Fcupcake2.jpg?alt=media&token=ab314859-7a70-498c-950d-9c6a6d138707"]

    const [i, setI] = useState(0)

    useEffect(() => {
        refreshDB()
    }, [])
    
    return(
        <>
        <header>
            <div className="franja">
                <div className="itemContainer">
                    <img src={images[i]} className="item" alt="imagen" />
                </div>
            </div>
        </header>
        <div id="home">
            <article>
                <section>
                    <div className="container justify-content-evenly d-flex flex-column">
                        <div className="row ps-4 text-start my-5" style={{maxHeight:"200px"}} >
                            <Link to={"/tienda"} style={{textDecoration:"none", color:"white"}}>
                            <div className="d-flex p-0 w-auto boton">
                                <svg className='my-auto' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="35" height="35" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
                                <h1 className='my-auto ms-4'>Tienda</h1>
                            </div>
                            </Link>
                        </div>
                        <div className="row ps-4 text-start my-5" style={{maxHeight:"200px"}}>
                        <Link to={"/tienda"} style={{textDecoration:"none", color:"white"}}>
                            <div className="d-flex p-0 w-auto boton">
                            <svg  className='my-auto' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="35" height="35" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>                            
                            <h1 className='my-auto ms-4'>Contacto</h1>
                            </div>
                        </Link>
                        </div>
                        <div className="row ps-4 text-start my-5" style={{maxHeight:"200px"}}>
                        <Link to={"/tienda"} style={{textDecoration:"none", color:"white"}}>
                            <div className="d-flex p-0 w-auto boton ">
                                <svg className='my-auto' xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="35" height="35" viewBox="0 0 24 24"><path d="M21 14h.004l1.996 4h-2v4h2v2h-22v-2h2v-4h-2l1.996-4h.004v-14h18v14zm-12 5h-4v4h4v-4zm10 0h-4v4h4v-4zm-5 0h-4v4h4v-4zm6.386-4h-16.772l-1 2h18.772l-1-2zm-1.386-13h-14v11h14v-11zm-12 7h2v2h-2v-2zm4 0h2v2h-2v-2zm6 0v2h-2v-2h2zm-10-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>                            
                                <h1 className='my-auto ms-4'>Nuestras sucursales</h1>
                            </div>
                        </Link>
                        </div>
                    </div>
                </section>
            </article>
            <aside>
                <h3>Publicidades</h3>
                <img style={{maxWidth:"100%"}} src="https://www.decorarhogar.es/wp-content/uploads/2019/02/colores-combinan-azul-turquesa-decoracion.jpg" alt="" />
                <p>Visita nuestra página de decoración</p>
                <hr />
                <img style={{maxWidth:"100%"}} src="https://www.decorarhogar.es/wp-content/uploads/2019/02/colores-combinan-azul-turquesa-decoracion.jpg" alt="" />
                <p>Visita nuestra página de decoración</p>
            </aside>
        </div>
        
        </>

    )
}

export default Home

