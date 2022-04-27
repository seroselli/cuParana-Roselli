import { createContext, useContext, useEffect, useMemo, useState, } from "react"
import { DBContext } from "../DBContext/DBContext"

export const SearchContext = createContext()



const SearchProvider = ( { children }) => {

    const { db ,refreshDB} = useContext(DBContext)
    const [history,setHistory] = useState(()=>{
        let historyLocal = localStorage.getItem("searchHistory")||null
        if(historyLocal){
           return JSON.parse(historyLocal)
        }
        else{
            return []
        }
    })
    
    const searchInput = (info) =>{
        let searchWord = info.toLowerCase()
            let result = db.filter(word => word.name.toLowerCase().indexOf(searchWord)>=0)
            return result;   
    }

    const valueS = useMemo(()=>{
    return{
        searchInput
        }
    },[searchInput])



    return (
            <SearchContext.Provider value={
            valueS}>
                { children }
            </SearchContext.Provider>

    )
  }

  export default SearchProvider

