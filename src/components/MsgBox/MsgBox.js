import { useState } from "react"
import { imgCupcakes } from "../../assets/images"

const MsgBox = ({id,title,text,image,link,event}) => {
    
    const [state] = useState({title:"Titulo del card",text:"Texto del card o mensaje a mostrar",image: imgCupcakes[3], link: "/"})


    return (
          <div className="position-absolute start-50 translate-middle " style={{top:"40%", display:"block"}} id={id}>
                <div className="container">
                    <div>HOLA</div>
                </div>
            </div>

    )
  }

  export default MsgBox
