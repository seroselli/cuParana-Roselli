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
  const [state, setState] = useState("default")
  const {categoryId} = useParams()
  const {notifyWarning} = useContext(CartContext)
  const {db,spinner,setSpinner,refreshDB} = useContext(DBContext)
  const [list, setList] = useState(db)
  
  useEffect(() => {
    window.scrollTo(0, 0)
    refreshDB().then(response=>{
      setList(response)
    })
  }, [categoryId])

  useEffect(() => {
    setList(db)
  }, [db])
  
    const handleSubmit = async(e) =>{
      e.preventDefault()
      let valueOfForm = {min: parseInt(e.target[0].value), max: parseInt(e.target[1].value) }
      if(valueOfForm.min > 0 && valueOfForm.max > 0 && valueOfForm.max > valueOfForm.min ){
        sortList(valueOfForm).then(response => {
          setList(response)
        })
      }
      else{
        notifyWarning("Enter prices to filter")
      }
      }

      const handleFilter = async (e) =>{
        sortList(e).then(response => {
          setList(response)
        })
      }

      const sortList = (filter) =>{
        if(list!=undefined){
          let dbAux =  list
          return new Promise (resolve =>{
            if(filter=="newest"){
              dbAux.sort(function (a, b) {
                  if (parseInt(a.id) < parseInt(b.id)) {
                    return 1;
                  }
                  if (parseInt(a.id) > parseInt(b.id)) {
                    return -1;
                  }
                  return 0;
                });
                setState(filter)
          }
              if(filter=="stock"){
                  dbAux.sort(function (a, b) {
                      if (parseInt(a.stock) < parseInt(b.stock)) {
                        return 1;
                      }
                      if (parseInt(a.stock) > parseInt(b.stock)) {
                        return -1;
                      }
                      return 0;
                    });
                    setState(filter)
              }
              if(filter=="etoc"){
                  dbAux.sort(function (a, b) {
                      if (parseInt(a.price) < parseInt(b.price)) {
                        return 1;
                      }
                      if (parseInt(a.price) > parseInt(b.price)) {
                        return -1;
                      }
                      return 0;
                    });
                    setState(filter)
              }
              if(filter=="ctoe"){
                  dbAux.sort(function (a, b) {
                      if (parseInt(a.price) > parseInt(b.price)) {
                        return 1;
                      }
                      if (parseInt(a.price) < parseInt(b.price)) {
                        return -1;
                      }
                      return 0;
                    });
                    setState(filter)
              }
              if(filter.min!=undefined){
                let auxDB = []
                for (let i = 0; i < dbAux.length; i++) {
                  if(dbAux[i].price>=filter.min){
                    if(dbAux[i].price<=filter.max){
                      auxDB.push(dbAux[i])
                    }
                  }
                }
                if(auxDB.length>0){
                 dbAux = auxDB 
                }else{
                  notifyWarning("There are no products in that price range")
                }
              }
              resolve(dbAux)
          })
        }
    }


    const resetFilters = async() => {
      setState("default");
      refreshDB().then(response => {
        setList(response)
      })
      navigate(paths.shop);
    }

    const toggleFilters = () =>{
      if(document.getElementById("filterContent").style.display == "none"){
        document.getElementById("filterContent").style.display = "block"
      }
      else{
        document.getElementById("filterContent").style.display = "none"
      }
    }
    if(db!=undefined){
      return (
        <> 
        <div className="parallaxItemList">
          <div className="shadowItemList">
          <div className="container-xl shop" >
                  <div className="row">
                    <div className="col-md-2 p-0">
                      <div className="filters" >
                       <b>Shop  {categoryId===undefined?null:'>'} {categoryId==1?"Cupcakes":categoryId==2?"Cakes":null}</b> 
                       <button onClick={toggleFilters} id="btnFilter">Filters<span></span></button>
                       <div id="filterContent">
                        <div className='filterModule my-2'>
                            <p className='filterLetters'>Categories</p>
                            <div className='filterButtons'>
                              <button className={!categoryId?"selected":null} onClick={()=>{navigate(paths.shop)}}>All</button>
                              <button className={categoryId==1?"selected":null} onClick={()=>{navigate(paths.category+"/1")}}>Cupcakes</button>
                              <button className={categoryId==2?"selected":null} onClick={()=>{navigate(paths.category+"/2")}} >MiniCakes</button>
                            </div>
                          </div>
                          <div className='filterModule my-2'>  
                            <p className='filterLetters'>Order by</p>
                            <div className='ms-auto d-flex justify-content-center'>
                              <select value={state} id="filter" className='my-auto' onChange={(e)=>{handleFilter(e.target.value)}}>
                                <option value="default">Select filter</option>
                                <option value="newest">Newest</option>
                                <option value="ctoe">Price: cheap to expensive</option>
                                <option value="etoc">Price: expensive to cheap</option>
                                <option value="stock">Stock</option>
                              </select>   
                            </div>
                          </div>
                          <div className="filterModule my-2">
                            <p className='filterLetters'>Price</p>
                            <form onSubmit={handleSubmit}>
                              <div className="inputGroup">
                                <input className='mx-1 my-auto' name='min' placeholder='100' type="text" /><p className='my-auto'>-</p>
                                <input className='mx-1 my-auto' name='max' placeholder='200' type="text" />
                              </div> 
                                <button id='buttonSubmitFilter' style={{height:"fit-content"}} type="submit">Filter</button>
                            </form>
                          </div>
                          <div className="filterModule"><button id='resetFilters' style={{height:"fit-content"}} onClick={()=>{resetFilters()}}>Reset Filters</button></div>
                       </div>

                      </div>
                    </div>
                    <div className='col-md-10 mb-5' style={{margin:"0px!important"}}>
                      <h2 >{greeting}</h2>
                      {list!=undefined?<ItemList data={list} type={categoryId==undefined?"shop":categoryId}/>:<Spinner/>}
                    </div>
                  </div>
          </div>
          </div>

        </div>
        </>
    )
    }
    else{
      return(
        <div className="parallaxItemList">
          <div className="shadowItemList">
            <div className="container" style={{marginTop:"100px",minHeight:"100vh"}}>
              <Spinner/>
            </div>
          </div>
        </div>

      )
    }


  }


export default ItemListContainer