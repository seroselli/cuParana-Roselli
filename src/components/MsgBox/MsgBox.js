import { useState } from "react"

const MsgBox = ({id,title,text,image,link,event}) => {
    
    const [state,setState] = useState({title:"Titulo del card",text:"Texto del card o mensaje a mostrar",image: "", link: "/"})


    return (
          <div className="position-absolute start-50 translate-middle " style={{top:"40%", display:"block"}} id={id}>
                <div className="container">
                    <div>HOLA</div>
                    {JSON.stringify(state)}
                </div>
            </div>

    )
  }

  export default MsgBox
