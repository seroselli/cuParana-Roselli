import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import { getDatosbyId } from '../../db/asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = (props) => {

    const [item, setItem] = useState()
    const {itemId} = useParams()
    const navigate = useNavigate()

    useEffect(async ()=>{
        let aux = item
        setItem(undefined)
        await getDatosbyId(itemId).then(data=>{
            if(data!=undefined){
                setItem(data)
            }
            else{
                setItem(aux)
                if(aux !== undefined){
                    navigate(`/item/${parseInt(aux.id)}`)
                }
                else{
                    navigate("/notfound")
                }
            }
         }) 
   },[itemId])

    return (
        <>
        <div className="detailContainer mb-5">
                <ItemDetail itemId={itemId} item={item}/>
        </div>
        </>
    )
  } 

  export default ItemDetailContainer