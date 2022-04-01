import React,{useState,useEffect} from 'react'
import Photos from './Photos'
import * as Realm from 'realm-web'
export default function InputSearch() {
  const [images, setImages] = useState([])

  useEffect(() => {
    RealmConnector()
  }, [])
  
   const RealmConnector=async()=>{
     const appId="pexists-ponln"
    const app=new Realm.App({id:appId})
    const credentials=Realm.Credentials.anonymous()
    try {
      const user=await app.logIn(credentials)
      const allphotos=await user.functions.getAllPhotos()
     await setImages(allphotos)
    } catch (error) {
      console.error(error)
    }
   }
  
  return (
    <>
   
   
<Photos images={images}/>
    </>
  )
}
