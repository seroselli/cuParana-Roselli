import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom';
import { paths } from '../../App';
import { getDatosbyId } from '../../db/asyncmock';
import { DBContext } from '../DBContext/DBContext';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = (props) => {

    const [item, setItem] = useState()
    const {itemId} = useParams()
    const {itemsCount} = useContext(DBContext)
    const counterItems = itemsCount
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
                    navigate(`${paths.item}/${parseInt(aux.id)}`)
                }
                else{
                    navigate(paths.notfound)
                }
            }
         }) 
   },[itemId])

   const handleEvent = (e)=>{
    if(e==="+"){
        let idNext = parseInt(counterItems.findIndex(d=>d==parseInt(itemId)))+1
        if(idNext==counterItems.length){
            navigate(`${paths.item}/${counterItems[0]}`)
        }
        else{
            navigate(`${paths.item}/${counterItems[idNext]}`)
        }

    }else{
        let idNext = parseInt(counterItems.findIndex(d=>d==parseInt(itemId)))-1
        if(idNext<0){
            navigate(`${paths.item}/${counterItems[(counterItems.length-1)]}`)
        }
        else{
            navigate(`${paths.item}/${counterItems[idNext]}`)
        }
    }
   }

    return (
        <>
        <div className="detailContainer mb-5">
                <ItemDetail itemId={itemId} item={item} events={handleEvent}/>
        </div>
        </>
    )
  } 

  export default ItemDetailContainer