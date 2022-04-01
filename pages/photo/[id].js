import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import * as Realm from 'realm-web'
import ImageDetail from '../../Components/ImageDetail'
import Head from 'next/head'
export default function GetEachClickedPhoto() {
const [eachImage, setEachImage] = useState("")
const {query}=useRouter()

useEffect(() => {
 getEachPhoto()
}, [])



const getEachPhoto=async()=>{
   
    const appId="pexists-ponln"
    const app=await new Realm.App({id:appId})
    const credentials= await Realm.Credentials.anonymous()
  try { 
    const user=await app.logIn(credentials)
    const eachPhoto=await user.functions.getOnePhoto(query.id)
    setEachImage(eachPhoto)
  } catch (error) {
      console.error(error)
    }
}
console.log(eachImage)

  return (
    <>
<Head>
  <title>{eachImage.imagename} - {eachImage.uploadername}</title>
  <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
</Head>
{eachImage && <ImageDetail image={eachImage} setImage={setEachImage} />}
    </> 
  )
  }
