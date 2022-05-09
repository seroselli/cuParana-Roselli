import { Link } from 'react-router-dom'
import { paths } from '../../App'
import './Footer.css'

const Footer = (props) => {
    
    return (
        <>
            <footer>
                <div className="container-fluid d-flex flex-column mx-auto">
                    <div className="row mx-auto justify-content-evenly w-50 mt-5">
                        <div className="col"><Link to={paths.contact}>Redes sociales</Link></div>
                        <div className="col"><Link to={paths.offices}>Nuestras sucursales</Link></div>
                        <div className="col"><a href={"http://www.linkedin.com/in/seroselli"}>Desarrollo</a></div>
                        
                    </div>
                    <div className="row mt-auto mx-auto">Desarrollado y diseñado por Sebastián Roselli para CoderHouse</div>
                </div>
            </footer>
        </>
    )
  }

  export default Footer
