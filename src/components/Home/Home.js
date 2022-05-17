import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { paths } from '../../App'
import { DBContext } from '../DBContext/DBContext'
import './Home.css'


const Home = ({}) => {
    const navigate = useNavigate()
    const {refreshDB} = useContext(DBContext)

    useEffect(async() => {
        document.getElementById("parallax").style.opacity = 1
        refreshDB()
    }, [])  

        return(
            <>
            <div id="parallax">
                <img id='imgCupcakes' className='mx-auto my-auto' src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2Flogo_completo.png?alt=media&token=5f826704-8967-431c-8909-012ade0e6013" alt="" />
            </div>
            <div id="home">
                        <div className="container-fluid row my-3 ">
                            <div className="col-md-4 p-0 d-flex" id="shop" onClick={()=>{navigate(paths.shop)}}>
                                <div className="shadow"></div>
                                <div className="d-flex flex-column my-auto mx-auto esvg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto ' fill="white" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
                                    <p className='mx-auto my-auto' >Shop</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-0  d-flex" id="contact" onClick={()=>{navigate(paths.contact)}}>
                                <div className="shadow"></div>
                                <div className="d-flex flex-column my-auto mx-auto esvg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto ' fill="white" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm-3.5 10c0 .829-.671 1.5-1.5 1.5-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5zm5 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5z"/></svg>                                    
                                    <p className='mx-auto my-auto' >Contact</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-0  d-flex" id="offices" onClick={()=>{navigate(paths.offices)}}>
                                <div className="shadow"></div>
                                <div className="d-flex flex-column my-auto mx-auto esvg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='mx-auto ' fill="white" viewBox="0 0 24 24"><path d="M10 9v-1.098l1.047-4.902h1.905l1.048 4.9v1.098c0 1.067-.933 2.002-2 2.002s-2-.933-2-2zm5 0c0 1.067.934 2 2.001 2s1.999-.833 1.999-1.9v-1.098l-2.996-5.002h-1.943l.939 4.902v1.098zm-10 .068c0 1.067.933 1.932 2 1.932s2-.865 2-1.932v-1.097l.939-4.971h-1.943l-2.996 4.971v1.097zm-4 2.932h22v12h-22v-12zm2 8h18v-6h-18v6zm1-10.932v-1.097l2.887-4.971h-2.014l-4.873 4.971v1.098c0 1.066.933 1.931 2 1.931s2-.865 2-1.932zm15.127-6.068h-2.014l2.887 4.902v1.098c0 1.067.933 2 2 2s2-.865 2-1.932v-1.097l-4.873-4.971zm-.127-3h-14v2h14v-2z"/></svg>
                                    <p className='mx-auto my-auto' >Offices</p>
                                </div>
                            </div>
                        </div>

            </div>
                <aside style={{display:"none"}}>
                    <h3>Publicidades</h3>
                    <img style={{maxWidth:"100%"}} src="https://www.decorarhogar.es/wp-content/uploads/2019/02/colores-combinan-azul-turquesa-decoracion.jpg" alt="" />
                    <p>Visita nuestra página de decoración</p>
                    <hr />
                    <img style={{maxWidth:"100%"}} src="https://www.decorarhogar.es/wp-content/uploads/2019/02/colores-combinan-azul-turquesa-decoracion.jpg" alt="" />
                    <p>Visita nuestra página de decoración</p>
                </aside>
            </>
    
        )
    
    
    
}

export default Home

