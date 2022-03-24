import './ItemListContainer.css';
import ClassCounter from '../ClassCounter/ClassCounter';

const ItemListContainer = (props) => {
    return (
        <>
            <div className="shop d-flex justify-content-center flex-column">
                <h1>{props.greeting}</h1>
                    <div className="card mx-auto" style={{width: "18rem"}}>
                        <div className="card-body">
                            <img className='w-100' src="./assets/cupcake2.jpg" alt="" />
                            <h5 className="card-title">Articulo</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <ClassCounter event=""/>
                        </div>
                    </div>
            </div>
        </>
    )
  }


export default ItemListContainer