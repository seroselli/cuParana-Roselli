import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const NotFound = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
      setTimeout(() => {
          navigate("/tienda")
      }, 4000);
    }, [])
    


    return (
        <>
            <div className="container d-flex flex-column justify-content-evenly" style={{color:"black",height:"800px", backgroundColor:"white"}}>
                <h1 className="text-center mx-auto"><Spinner /> Page not found</h1>

                <img className="mx-auto" src="https://firebasestorage.googleapis.com/v0/b/coder-react2022.appspot.com/o/images%2FsadFace.png?alt=media&token=a88d9d0e-9f30-4598-aba3-2988fad6090c" alt="" />
            </div>
        </>
    )
  }

  export default NotFound
