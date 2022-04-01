import Image from 'next/image'
import React,{useState} from 'react'
import youtube from '../images/youtube.svg'
import facebook from '../images/facebook.svg'
import insta from '../images/insta.svg'
import pin from '../images/pin.svg'
import twit from '../images/twit.svg'


export default function ThanksModal({uploader,photo,show,images}) {
  
    
  return (
    <>

   
  {show && <div className={show?"w-full flex justify-center transition-all duration-1000 ease-in-out -translate-y-20 xsm:-translate-y-36 sm:-translate-y-16 xl:translate-y-16 lg:-translate-y-6 ":"hidden translate-y-0"}>
       <div className="flex xsm:w-4/5 w-2/5 md:w-3/6 transition-all duration-1000 ease-in-out  rounded-r-xl border-slate-300">

<div className=" bg-slate-300 shadow-2xl  rounded-l-lg ">
<div className="w-28 px-1 pt-1 sm:w-12 ">
<Image src={photo} className="w-28 sm:w-12 " objectFit='cover' width={"100%"} height={"100%"} alt=""/>
</div>
</div>

<div className="bg-slate-300 md:text-sm rounded-r-lg sm:text-xs shadow-2xl px-6">

<div className="">
    <h2 className='text-center font-semibold'>Say Thanks 👏👏 </h2>
    <p>Give a shoutout to <span className='font-semibold underline'>{uploader}</span> on social media </p>
</div>
<div className="social pt-2 space-x-4 flex items-center">
<div className="w-4 hover:-translate-y-1 transition-all duration-300 ease-in-out ">
   <a target={"_blank"} rel="noreferrer" href={images.youtube}><Image src={youtube}  width={"100%"} height={"100%"} className="w-4" alt=""/></a>
    </div>
 
    <div className="w-4 hover:-translate-y-1 transition-all duration-300 ease-in-out">
    <a target={"_blank"} rel="noreferrer" href={images.facebook}><Image src={facebook}  width={"100%"} height={"100%"} className="w-4" alt=""/></a>
    </div>
    <div className="w-4 hover:-translate-y-1 transition-all duration-300 ease-in-out">
    <a target={"_blank"} rel="noreferrer" href={images.instagram}><Image src={insta}  width={"100%"} height={"100%"} className="w-4" alt=""/></a>
    </div>
    <div className="w-4 hover:-translate-y-1 transition-all duration-300 ease-in-out">
    <a target={"_blank"} rel="noreferrer" href={images.twitter}><Image src={twit}  width={"100%"} height={"100%"} className="w-4" alt=""/></a>
    </div>
    <div className="w-4 hover:-translate-y-1 transition-all duration-300 ease-in-out">
    <a target={"_blank"} rel="noreferrer" href={images.pinterest}><Image src={pin}  width={"100%"} height={"100%"} className="w-4" alt=""/></a>
    </div>

</div>

</div>

    </div>
    </div>}
    
    </>
  )
}
