import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({onAdd}) => {

    return (
        <>
            <div className="d-flex justify-content-between mx-auto mt-3 flex-column" style={{width: "40rem"}}>
                <ItemDetail/>
            </div>
        </>
    )
  } 

  export default ItemDetailContainer