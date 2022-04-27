import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"
import { createContext, useEffect, useMemo, useState, } from "react"
import { getItems } from "../../db/asyncmock"

export const DBContext = createContext()



const DBProvider = ( { children }) => {

    const [spinner,setSpinner] = useState(true)
    const [db,setDb] = useState([])
    
    useEffect(() => {
        getItems().then(data => {
            data.sort(function (a, b) {
                if (parseInt(a.id) > parseInt(b.id)) {
                  return 1;
                }
                if (parseInt(a.id) < parseInt(b.id)) {
                  return -1;
                }
                return 0;
              });
            setDb(data)
            setSpinner(false) 
        })
    }, [])
    
    const refreshDB = () =>{
        getItems().then(data => {
            setDb(data)
            setSpinner(false) 
        })
    }

    const addItemDB = (data) => {
        console.log(`Añadiendo ${data} a Firebase Collection`)
    }

    const valueD = useMemo(()=>{
    return{
        db,
        spinner,
        refreshDB
        }
    },[db,spinner])



    return (
            <DBContext.Provider value={
            valueD}>
                { children }
            </DBContext.Provider>

    )
  }

  export default DBProvider

