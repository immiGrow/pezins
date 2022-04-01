import React,{useEffect,useState} from 'react'
import * as Realm from 'realm-web'
export default function Allphotos() {
    const [photos, setPhotos] = useState([])
useEffect(() => {
    RealmConnector()
}, [])
const RealmConnector=async()=>{
    const Realm_APP_ID="pexists-ponln"
    const app= new Realm.App({id:Realm_APP_ID})
    const credentials= Realm.Credentials.anonymous()
    try {
        const user=await app.logIn(credentials)
        const allphotos=await user.functions.getAllPhotos()
        setPhotos(allphotos)
        console.log(photos)
    } catch (error) {
        console.error(error)
    }
}
console.log(photos)
  return (
    <>
    
   All Photos

   {
       photos.map((images)=>{
           return (
               <>
               <h1 key={images._id}>{images.imagename}</h1>
               </>
           )
       })
   }
    
    </>
  )
}
