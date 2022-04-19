import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const handleCallback = (event)=>{
        console.log(`Recibiendo evento en ItemDetailContainer: ${JSON.str(event)}`)
      }

    return (
        <>
        <div className="detailContainer">
            <div className="d-flex mx-auto mt-3">
                <ItemDetail />
            </div>     
        </div>
        </>
    )
  } 

  export default ItemDetailContainer