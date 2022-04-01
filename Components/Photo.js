import React,{useState} from 'react'
import logo from '../images/logo.jpg'
import {AiFillHeart,AiOutlineAppstoreAdd} from 'react-icons/ai';


import {FaCloudDownloadAlt} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import baseUrl from '../mongodb/baseUrl';
import { parseCookies } from 'nookies';
export default function Photo({photo}) {
const [fill, setFill] = useState(false)
const [added, setAdded] = useState(false)
const cookie=parseCookies()
const AddThisToCollection=async()=>{
const resp=await fetch(`${baseUrl}/api/collection`,{
  method:"PUT",
  headers:{
    "Content-Type":"application/json",
    "Authorization":cookie.token
  },
  body:JSON.stringify({
    PhotoId:photo._id
  })
})
const respo=await resp.json()
if(respo.success){
  setAdded(true)
}
else{
  setAdded(false)
}
console.log(respo)
}
  return (
   <>
  <div className="w-fit mb-4 xxsm:mb-2 xsm:mb-1 relative">

  <div title={photo.imagename} className="photo  w-full  relative">
  <Link href={"/photo/[id]"} as={`/photo/${photo._id}`}><a ><img src={photo.imageURL} alt="" /></a></Link> 

   </div>

<div className="overlay xxsm:relative xxsm:opacity-100 xxsm:translate-y-0 w-full xsm:text-xs text-white xsm:px-1 md:px-2 px-4 pt-1 absolute translate-y-1 bottom-0 opacity-0 hover:opacity-100 z-10 transition-all duration-300 ease-in hover:translate-y-0 ">

<div className="flex items-center justify-between">
  
   <div className="md:w-6 lg:w-8 2xl:w-10 rounded-full  ">
     <Image src={photo.uploaderprofileimage || logo} objectFit="cover" width={"100%"} height={"100%"} className="w-6 ml-1 rounded-full" alt="" />
   </div> 
    
    {/* <strong>{photo.uploadername}</strong> */}
   <Link href={"/photo/[id]"} as={`/photo/${photo._id}`}><a ><strong  className='xxsm:border-2 sm:text-lg hover:cursor-pointer xxsm:border-slate-500 text-2xl xxsm:px-2 xxsm:text-xs xxsm:rounded-lg  xxsm:flex xxsm:items-center xxsm:space-x-1 xsm:text-sm xxsm:text-black '><FaCloudDownloadAlt className='xxsm:border-2 xxsm:text-2xl xxsm:pr-1 xxsm:border-r-slate-600'/><span className='xxsm:block hidden xsm:text-sm' >Download</span></strong></a></Link> 
    
    </div>
    </div>
    
    {/*Smooth */}

    <div className="overlay xxsm:relative xxsm:opacity-100 xxsm:translate-y-0 w-full xsm:text-xs text-white xsm:px-1 md:px-2 px-4 pt-1 absolute -translate-y-1 top-0 opacity-0 hover:opacity-100 z-10 transition-all duration-300 ease-in hover:translate-y-0 ">

<div className="flex items-center justify-end text-2xl xsm:text-sm sm:text-lg space-x-2">
  
  
    
    {/* <strong>{photo.uploadername}</strong> */}
    <strong onClick={AddThisToCollection} className={' '}><AiOutlineAppstoreAdd className=''/></strong>
    
    <strong  className=' '><AiFillHeart className=''/></strong>
    
    </div>
    </div>

    {/*Rough */}
    
  
   
</div>
   </>
  )
}
