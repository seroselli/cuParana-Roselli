import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getItems } from '../../db/asyncmock';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = ({onAdd,greeting}) => {
  const [spinner,setSpinner] = useState(true)
  const [type,setType] = useState("")
  const [datos,setDatos] = useState([])
  useEffect(async()=>{
    setSpinner(true) 
    await  getItems().then(data=>{
          setDatos(data)
          setSpinner(false) 
        })
    },[type])

    const {category} = useParams()

    useEffect(()=>{
      setType(category)
    },[category])
    
  const handleCallback = (event)=>{
    onAdd(event)
  }

    return (
        <>
        <div className="parallax">
          <div className="shop d-flex justify-content-center flex-column py-3">
                  <h1>{greeting}</h1>
                  <div className='container-fluid' style={{width: "70vw"}}>
                    {datos!==[]?<ItemList onAdd={handleCallback} data={datos} type={type}/>:null}
                    {spinner?<Spinner/>:null}
                  </div>
          </div>
        </div>

        </>
    )

  }


export default ItemListContainer