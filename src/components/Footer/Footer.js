import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = (props) => {
    
    return (
        <>
            <footer>
                <div className="container-fluid d-flex flex-column mx-auto">
                    <div className="row mx-auto justify-content-evenly w-50 mt-5">
                        <div className="col"><Link to={"/"}>Redes sociales</Link></div>
                        <div className="col"><Link to={"/"}>Nuestras sucursales</Link></div>
                        <div className="col"><Link to={"/"}>Desarrollo</Link></div>
                        
                    </div>
                    <div className="row mt-auto mx-auto">Desarrollado y diseñado por Sebastián Roselli para CoderHouse</div>
                </div>
            </footer>
        </>
    )
  }

  export default Footer
