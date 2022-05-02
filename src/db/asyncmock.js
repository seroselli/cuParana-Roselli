import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore";
import { appFB } from "..";


export const getItems = async ()=>{
    const database = getFirestore();
    let itemsCollection = collection(database,"items");
    return new Promise ( resolve => {
        getDocs(itemsCollection).then(snapshot=>{
            if(snapshot.size === 0) {
              resolve([])
            }
            else{
              resolve(snapshot.docs.map(doc=>
                ({id:doc.id, ...doc.data() })
              ))
            }
          })
    })
}


export const getDatosbyId = id => {
    return new Promise (resolve=>{
        const database = getFirestore();
        let documento = doc(database,"items", id)
         getDoc(documento).then(item => {
          if(item.exists()){
            resolve({id:item.id,...item.data()})
          }
          else{
              resolve(undefined)
          }
        })  
    })
}

export const getItemsbyQuery = async (e)=>{
  const database = getFirestore();
  const q =  query(
    collection(database,"items"),where("price",">=",e.min),where("price","<=",e.max)
  )
  return new Promise(resolve =>{
      getDocs(q).then(snapshot=>{
      if(snapshot.size === 0){
        resolve("noitems")
      }
      else{
        let response = snapshot.docs.map(doc=>({id: doc.id,...doc.data()}))
        resolve(response)
      }
    })
  })
 
}

/*      let query = firestore.collection('col').where('foo', '==', 'bar');

      query.get().then(querySnapshot => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
          console.log(`Document found at path: ${doc.ref.path}`);
        }
      });*/