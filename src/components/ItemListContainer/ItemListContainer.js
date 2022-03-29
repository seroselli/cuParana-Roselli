import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
  const handleCallback = (event)=>{
    props.onAdd(event)
  }
    return (
        <>
            <div className="shop d-flex justify-content-center flex-column">
                <h1>{props.greeting}</h1>
                    <div className="card mx-auto" style={{width: "18rem"}}>
                        <div className="card-body">
                            <img className='w-100' src="./assets/cupcake2.jpg" alt="" />
                            <h5 className="card-title">Articulo 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ItemCount onAdd={handleCallback} stock="5" initial="1" type="buttons"/>
                        </div>
                    </div>
            </div>
        </>
    )
  }


export default ItemListContainer