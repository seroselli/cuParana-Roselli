import { collection, doc, getDoc, getDocs, getFirestore, setDoc, Timestamp } from "firebase/firestore"
import { createContext, useEffect, useMemo, useState, } from "react"
import { getItems, getItemsbyQuery } from "../../db/asyncmock"

export const DBContext = createContext()



const DBProvider = ( { children }) => {

    const [spinner,setSpinner] = useState(true)
    const [db,setDb] = useState(() => {
        getItems().then(data => {
          return data
        })
    })

    const refreshDB = async() =>{
          getItems().then(data => {
            setDb(data)
            setSpinner(false) })
    }

    const sortDB = (filter) =>{
        let dbAux =  db
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
            }
            setDb(dbAux)
            resolve(db)
        })
    }

    const filterData= async(e)=>{
      const formData = {min: parseInt(e.target[0].value), max: parseInt(e.target[1].value) }
     return new Promise(resolve=>{
       getItemsbyQuery(formData).then(response=>{
        resolve(response)
      })
     }) 
    }

    const sendCheckOut = async(form) => {
      const dbFS = getFirestore();
      let now = new Date(Date.now())
      console.log(now)
      let hash = parseInt((Math.random()*100000000)%100000) + "-" + now.getDate() + ((now.getMonth()+1)<10?"0"+(now.getMonth()+1):(now.getMonth()+1)) + now.getFullYear()
      console.log(`Crete random Hash para la fecha ${now}: ${hash}`)
      return new Promise ( resolve => {
        try {
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

    const valueD = useMemo(()=>{
    return{
        db,
        spinner,
        setSpinner,
        sortDB,
        refreshDB,
        sendCheckOut,
        filterData
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

