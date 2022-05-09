import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { CartContext } from '../CartContext/CartContext';
import { DBContext } from '../DBContext/DBContext';
import { getItemsbyQuery } from '../../db/asyncmock';
import { async } from '@firebase/util';
import { paths } from '../../App';


const ItemListContainer = ({greeting,types}) => {

  const navigate = useNavigate()
  const {categoryId,filter} = useParams()
  const {notifyWarning} = useContext(CartContext)
  const {db,spinner,setSpinner, sortDB,refreshDB,filterData} = useContext(DBContext)
  const list = db
  
  useEffect(() => {
    refreshDB()
  }, [])
  
    useEffect(async()=>{
        await sortDB(filter).then(response=>{
        })
    },[categoryId,db,filter])

    const refreshList = (e) => {
        navigate(`${paths.shop}/filter=${document.getElementById("filter").value}`)
    }

    const handleSubmit = async(e) =>{
      e.preventDefault()
      filterData(e).then(response => {
        if(response==="noitems"){
          notifyWarning("There is no data with that price range")
          refreshDB()
        }
        else{
          console.log("actualizado")
        }
      })

      }
    
    if(db!=undefined){
      return (
        <> 
        <div className="parallax" style={{backgroundColor:"white"}}>
          <div className="shop d-flex flex-column pd-3" >
                  <h2 style={{backgroundColor:"#011c20"}}>{greeting}</h2>
                  <div className="row">
                    <div className="col-md-2 p-0">
                      <div className="filters p-3">
                       <b>Tienda  {categoryId===undefined?null:'>'} {categoryId==1?"Cupcakes":categoryId==2?"Cakes":null}</b> 
                        <ul>
                          <h4>Category</h4>
                          <li><Link to={paths.category+"/1"} style={categoryId==1?{textDecoration:"none", color: "black", pointerEvents: "none"}:{textDecoration:"none"}}>Cupcakes</Link></li>
                          <li><Link to={paths.category+"/2"} style={categoryId==2?{textDecoration:"none", color: "black", pointerEvents: "none"}:{textDecoration:"none"}}>MiniCakes</Link></li>
                        </ul>
                        <div className='d-flex flex-column w-100'>
                          <h4>Filter by</h4>
                          <div className='mx-auto'>
                            <select value={filter?filter:"default"} className='ms-1 my-3' id="filter" onChange={(e)=>{refreshList(e.target.value)}}>
                              <option value="default">Select filter</option>
                              <option value="newest">Newest</option>
                              <option value="ctoe">Price: cheap to expensive</option>
                              <option value="etoc">Price: expensive to cheap</option>
                              <option value="stock">Stock</option>
                            </select>   
                          </div>

                        </div>
                        <div className="d-flex flex-column w-100">
                          <h4>Price</h4>
                          <form onSubmit={handleSubmit}>
                            <div className="d-flex">
                              <input className='mx-1 my-auto' name='min' placeholder='100' type="text" style={{width:"50%",height:"fit-content"}} /><p className='my-auto'>to</p>
                              <input className='mx-1 my-auto' name='max' placeholder='200' type="text" style={{width:"50%",height:"fit-content"}} />
                              <button className='btn btn-outline-dark' style={{height:"fit-content"}} type="submit">Filter</button>
                            </div> 
                          </form>
                        </div>

                      </div>
                    </div>
                    <div className='container-fluid col-9' >
                      {!spinner?<ItemList data={list} type={categoryId==undefined?"shop":categoryId}/>:<Spinner/>}
                    </div>
                    <div className="col-1"></div>
                  </div>
          </div>
        </div>
        </>
    )
    }
    else{
      return(
        <div className="container" style={{marginTop:"100px",minHeight:"100vh"}}>
          <Spinner/>
        </div>
      )
    }


  }


export default ItemListContainer