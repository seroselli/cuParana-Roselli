import { Link } from 'react-router-dom'
import { paths } from '../../App'
import './Footer.css'

const Footer = (props) => {
    
    return (
        <>
            <footer>
                <div className="container-fluid px-1">
                    <div className="row mx-auto mt-5 text-center justify-content-center">
                        <div className="col-md-auto"><Link to={paths.contact}>Redes sociales</Link></div>
                        <div className="col-md-auto"><Link to={paths.offices}>Nuestras sucursales</Link></div>
                        <div className="col-md-auto"><a href={"http://www.linkedin.com/in/seroselli"}>Desarrollo</a></div>
                        
                    </div>
                    <div className="row mt-3 mx-auto text-center justify-content-center">Desarrollado y diseñado por Sebastián Roselli para CoderHouse</div>
                </div>
            </footer>
        </>
    )
  }

  export default Footer
