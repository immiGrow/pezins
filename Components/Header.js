import React,{useState,useEffect} from 'react'
import Image from 'next/image';
import right from '../images/right.svg'
import banner from '../images/banner.jpg'
import { useRouter } from 'next/router';
import logo from '../images/logo.jpg'
import rig from "../images/rig.svg";
import {BsFacebook,BsYoutube} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import Link from 'next/link';

export default function Header() {
 const router=useRouter()
  return (
    <>
      <div  className="w-full py-16 bg-slate-800 relative ">
      <div  className=" flex space-x-8 px-4 xsm:px-1 justify-between w-full relative  ">

<div className="w-96">

<Image src={rig}  objectFit="cover" className='w-96 opacity-0' alt="" />
</div>
<div className="w-96 lg:hidden ">

<Image src={rig}  objectFit="cover" className='w-96 ' alt="" />
</div>
<div className="w-96">

<Image src={right}  objectFit="cover" className='w-96 opacity-90' alt="" />
</div>
    </div>
   
    </div>
    <div  className="w-full top-32 lg:top-20 sm:top-14 md:top-16 xxsm:top-24 xxsm:px-2 xsm:top-16 px-8 xsm:px-4  absolute z-10 ">
      <div className=" text-white">
 
     <h1 className='xsm:text-sm pb-2 text-lg font-bold'>Pezins</h1>
      <p  className='xsm:text-sm  xxsm:text-xs md:text-lg sm:text-base xxsm:w-11/12 font-semibold  lg:w-3/5  w-6/12 text-2xl'>Dive in the Ocean of free Memories with free Stock Photos and Download and upload <span className='text-green-400 font-semibold hover:underline underline'>Unlimited Photos</span></p>

      <button onClick={()=>router.push("/userend/signup")} className=' border-2 border-white px-2 py-1 rounded-2xl my-4 font-semibold  hover:bg-green-800 shadow-lg sm:text-sm xsm:text-xs shadow-black '>GET STARTED</button>
      {/* <div className="z-20 absolute xxsm:text-lg xxsm:hidden top-2 right-2 space-y-2 text-black ">
      <div className=" w-fit text-3xl xxsm:text-xs xsm:text-sm  xl:text-3xl lg:text-2xl hover:text-blue-800 flex justify-end">
<BsFacebook />
      </div>
      <div className=" w-fit text-3xl xxsm:text-xs  xsm:text-lg  xl:text-3xl lg:text-2xl hover:text-blue-800 flex justify-end">
<BsYoutube />
      </div>
      <div className=" w-fit text-3xl xxsm:text-xs  xsm:text-lg  xl:text-3xl lg:text-2xl hover:text-blue-800 flex justify-end">
<AiFillInstagram/>
      </div>
      </div> */}
      </div>
      
    </div>
    {/* <div  className="overflow-scroll flex justify-start items-center space-x-12 h-12   bg-white text-slate-800 ">
      <button></button>
       <button onClick={()=>router.push(`/search/fashion`)} className='font-semibold hover:underline'><Link href=""><a >Fashion</a></Link></button>
       <button onClick={()=>router.push(`/search/nature`)} className='font-semibold hover:underline'>Nature</button>
       <button onClick={()=>router.push(`/search/fashion`)} className='flex font-semibold hover:underline'>Current<span className='ml-1'> Events</span></button>
       <button onClick={()=>router.push(`/search/wallpapers`)} className='font-semibold hover:underline'>Wallpapers</button>
       <button onClick={()=>router.push(`/search/textures`)} className='font-semibold hover:underline'>Textures</button>
       <button onClick={()=>router.push(`/search/patterns`)} className='font-semibold hover:underline'>Patterns</button>
       <button onClick={()=>router.push(`/search/experiments`)} className='font-semibold hover:underline'>Experiments</button>
       <button onClick={()=>router.push(`/search/architecture`)} className='font-semibold hover:underline'>Architecture</button>
       <button onClick={()=>router.push(`/search/bussiness`)} className='font-semibold hover:underline'>Bussiness</button>
       <button onClick={()=>router.push(`/search/work`)} className='font-semibold hover:underline'>Work</button>
       <button onClick={()=>router.push(`/search/film`)} className='font-semibold hover:underline'>Film</button>
       <button onClick={()=>router.push(`/search/food`)} className='font-semibold hover:underline'>Food</button>
       <button onClick={()=>router.push(`/search/drink`)} className='font-semibold hover:underline'>Drink</button>
       <button onClick={()=>router.push(`/search/health`)} className='font-semibold hover:underline'>Health</button>
       <button onClick={()=>router.push(`/search/fitness`)} className='font-semibold hover:underline'>Fitness</button>
       <button onClick={()=>router.push(`/search/people`)} className='font-semibold hover:underline'>People</button>
       <button onClick={()=>router.push(`/search/streetphotography`)} className='flex font-semibold hover:underline'>Street <span className='ml-1'> Photography</span></button>
       <button onClick={()=>router.push(`/search/animals`)} className='font-semibold hover:underline'>Animals</button>
       <button onClick={()=>router.push(`/search/sprituality`)} className='font-semibold hover:underline'>Sprituality</button>
       <button onClick={()=>router.push(`/search/arts`)} className='font-semibold hover:underline'>Arts</button>
       <button onClick={()=>router.push(`/search/culture`)} className='font-semibold hover:underline'>Culture</button>
       <button onClick={()=>router.push(`/search/history`)} className='font-semibold hover:underline'>History</button>
       
    </div>
     */}
    </>
  )
}
