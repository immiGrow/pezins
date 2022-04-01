import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/logo.png';
import {AiFillLike,AiFillEye} from 'react-icons/ai'
import {MdCloudDownload} from 'react-icons/md'

export default function Pixabay({image}) {
const nformater=(views)=>{
  console.log(views)
  const si=[
    {
      value:1,sym:"",
    },
    {
      value:1E3,sym:"k",
    },
    {
      value:1E6,sym:"M",
    },
    {
      value:1E9,sym:"B",
    },
    {
      value:1E12,sym:"T",
    }
  ]
  let rx= /\.0+$|(\.[0-9]*[1-9])0+$/
  let i
  for(i=si.length-1; i>0; i--){
    if(views>=si[i].value){
break
    }
  }
  let divide=views/si[i].value
  let rviews=divide.toFixed(0).replace(rx,"$1")+si[i].sym
  console.log(rviews)
  return rviews
}

  return (
    <>
  
  
    <div className='relative render  mt-5 mx-2'>
    {
image.map((photo)=>{
 return (
   <>
    
   <div  className=' relative   ' key={photo.id} >
   <div key={photo.largeImageURL} className=" relative w-full ">
   <img  src={photo.largeImageURL} className="  relative mb-2 " key={photo.largeImageURL}  alt="" />
   </div>
   <div className="">
       <div className=" absolute bottom-0 left-0 flex text-white items-center w-full">
         <div className="w-8 flex items-center">
       <Image className='rounded-full w-full  ' width={"100%"} height={"100%"} src={photo.userImageURL || logo} alt="" />
       </div>
       <div className=" flex justify-between items-center ml-1 space-x-2">
       <strong className='flex justify-between items-center '><AiFillLike /><span >{photo.likes<1000?photo.likes:nformater(photo.likes)}</span></strong>
       <strong className='flex justify-between items-center'><AiFillEye /><span>{photo.views<1000?photo.views:nformater(photo.views)}</span></strong>
       
      
  
<Link href={photo.largeImageURL}><a target={"_blank"} className='flex justify-between items-center font-bold' ><MdCloudDownload /><span>{photo.downloads<1000?photo.downloads:nformater(photo.downloads)}</span></a></Link>
</div>
</div>

</div>
{/*Another One Copy */}

{/*Ending copy */}


   </div>
   </>
 )
 
})
} 
</div>
    </>
  )
}
