import { collection, doc, getDoc, getDocs, getFirestore, setDoc, Timestamp } from "firebase/firestore"
import { createContext, useEffect, useMemo, useState, } from "react"
import { getItems, getItemsbyQuery } from "../../db/asyncmock"

export const DBContext = createContext()



const DBProvider = ( { children }) => {

    const [itemsCount, setItemsCount] = useState([])
    const [db,setDb] = useState(() => {
        getItems().then(data => {
          return data
        })
    })

    const refreshDB = async() =>{
      return new Promise(resolve => {
        getItems().then(data => {
          setDb(data)
          resolve(data)
        })
      })
      }
    


    const sendCheckOut = async(form) => {
      const dbFS = getFirestore();
      let now = Date.now()
      let date = new Date()
      return new Promise ( resolve => {
        try {
          let hash = parseInt((Math.random()*100000000)%100000) + "-" + date.getDate() + ((date.getMonth()+1)<10?"0"+(date.getMonth()+1):(date.getMonth()+1)) + date.getFullYear()
          setDoc(doc(dbFS, "records", hash), {
            name: form.name,
            email: form.email,
            direction: form.direction,
            cellphone: form.cellphone,
            cart: form.cart,
            date: now,
            cost: form.cost
          });
          resolve({id:hash,name: form.name,email: form.email,direction: form.direction,cellphone: form.cellphone,cart: form.cart,date: now, cost: form.cost})
        } catch (error) {
          resolve(error)
        }
      })
    }

    const refreshCounter = (dbaux) =>{
      if(db!=undefined){
        let aux = []
        dbaux.forEach(element => {
          aux.push(element.id)
        });
        setItemsCount(aux)
        }
    }
    
    useEffect(() => {
      if(db!=undefined){
              let aux = []
      let dbaux = db
      db.forEach(element => {
        aux.push(element.id)
      });
      setItemsCount(aux)
      }

    }, [db])
    

    const valueD = useMemo(()=>{
    return{
        db,
        refreshDB,
        sendCheckOut,
        itemsCount
        }
    },[db,refreshDB])



    return (
            <DBContext.Provider value={
            valueD}>
                { children }
            </DBContext.Provider>

    )
  }

  export default DBProvider

