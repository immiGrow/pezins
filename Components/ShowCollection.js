import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiAddToQueue} from 'react-icons/bi';
import {FcLike} from 'react-icons/fc'
import {FaCloudDownloadAlt} from 'react-icons/fa';
import logo from '../images/logo.png';
export default function ShowCollection({collect}) {
  console.log(collect)
  return (
    <>
    <div className="grid grid-cols-5 mx-4">
    {
        collect && collect.map((coll)=>{
            return(
                <>
                  <div key={coll._id} className="w-fit mx-1 mb-4 xxsm:mb-2 xsm:mb-1 ">

<div  className="photo  w-full  ">
<Image src={coll.imageURL || logo} className="" objectFit='cover' width={"200%"}  height={"200%"} alt="" />
 </div>

<div className=" ">

<div className="flex items-center justify-between">

 <div className="md:w-6 lg:w-8 2xl:w-10 rounded-full  ">
   <Image src={coll.uploaderprofileimage || logo} width={"100%"} objectFit="cover" height={"100%"} className="w-6 ml-1 rounded-full" alt="" />
 </div> 
  
 
  
  </div>
  </div>
</div>


                
                </>
            )
        })
    }

    </div>
    
    </>
  )
}
