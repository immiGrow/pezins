import React from 'react'
import AccountNav from '../../Components/AccountNav'
import Navbar from '../../Components/Navbar'
import { parseCookies } from 'nookies'
import baseUrl from '../../mongodb/baseUrl';
import UserPhotos from '../../Components/UserPhotos';
import {useRouter} from 'next/router'
import Head from 'next/head';
export default function Yourimages({images}) {
const router=useRouter()

  
  return (
    <>
    <Head>
      <title>Pezins - Your Images</title>
      <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
    </Head>
    <Navbar/>
    <AccountNav/>
 
 
  {

    images.length>0? 
   <UserPhotos images={images}/>
 : 
 <div className="mt-8 flex justify-center">
 <div className="flex text-slate-600 space-y-4 flex-col">
  
     <h1 className='text-3xl'>That is a very clean Photo Studio </h1>
     <p className='text-lg text-center'>No Images Found</p>
    <button className='text-white text-center bg-green-700 w-fit px-2 py-1 rounded-3xl' onClick={()=>router.push("/account/upload")} >Upload Photos</button>
    </div>
     </div>

 }
  
    
    
    </>
  )
}
export async function getServerSideProps(ctx){
  const {token}=parseCookies(ctx)
if(!token){
  const {res}=ctx
  res.writeHeader(302,{
    Location:"/userend/login"
  })
  res.end()
}

const request=await fetch(`${baseUrl}/api/uploadallphotos`,{
  method:"GET",
  headers:{
    "Authorization":token
  }
})
const response=await request.json()
return{
  props:{
    images:response.data
  }
}

}