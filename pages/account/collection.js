import React from 'react'
import AccountNav from '../../Components/AccountNav'
import Navbar from '../../Components/Navbar'
import { parseCookies } from 'nookies'
import logo from '../../images/logo.png';
import baseUrl from '../../mongodb/baseUrl'
import ShowCollection from '../../Components/ShowCollection'
import Image from 'next/image'
import Head from 'next/head';
export default function collection({data}) {
  console.log(data)
  return (
    <>
    <Head>
      <title>Pezins - Collection</title>
      <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
    </Head>
    <Navbar/>
    <AccountNav/>
    
    {
      data.length>0?
      <div className="grid grid-cols-5 mx-4">
      {
          data && data.map((coll)=>{
              return(
                  <>
                    <div key={coll.ImageId._id} className="w-fit mx-1 mb-4 xxsm:mb-2 xsm:mb-1 ">
  
  <div  className="photo  w-full  ">
  <Image src={coll.ImageId.imageURL} className="" objectFit='cover' width={"200%"}  height={"200%"} alt="" />
   </div>
  
  <div className=" ">
  
  <div className="flex items-center justify-between">
  
   <div className="md:w-6 lg:w-8 2xl:w-10 rounded-full  ">
     <Image src={coll.ImageId.uploaderprofileimage} width={"100%"} objectFit="cover" height={"100%"} className="w-6 ml-1 rounded-full" alt="" />
   </div> 
    
   
    
    </div>
    </div>
  </div>
  
  
                  
                  </>
              )
          })
      }
  
      </div>:
      
      <div className="mt-8 flex justify-center">
      <div className="flex text-slate-600 space-y-4 flex-col">
       
          <h1 className='text-3xl'>That is a very Polished Collection </h1>
          <p className='text-lg text-center'>Add Images to Collection that You like most and do not want to loose</p>
         <button className='text-white text-center bg-royal w-fit px-2 py-1 rounded-3xl' onClick={()=>router.push("/")} >Add Photos To Collection</button>
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
  res.writeHeader(302,{Location:"/userend/login"})
  res.end()
}
const request=await fetch(`${baseUrl}/api/collection`,{
  method:"GET",
  headers:{
    "Authorization":token
  }
})
const respo=await request.json()
console.log(respo)
return{
  props:{
    data:respo.getCollect.Images
  }
}
}