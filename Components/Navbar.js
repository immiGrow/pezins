import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import logo from '../images/logo.jpg'
import {BiMenuAltLeft} from 'react-icons/bi'
import { FaHandshake, FaUpload,FaHome,FaImages } from 'react-icons/fa'
import { BsFillPeopleFill, BsCursorFill,BsFillCollectionFill } from 'react-icons/bs'
import {GrDocumentUpdate} from 'react-icons/gr'
import {MdSwitchAccount,MdLogin,MdTipsAndUpdates} from 'react-icons/md'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const changeBackgroundColor=()=>{
    
    if(window.scrollY>=48){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }
  
  useEffect(() => {

    changeBackgroundColor()
  
    window.addEventListener("scroll", changeBackgroundColor); 
    return () => window.removeEventListener("scroll", changeBackgroundColor);
  });

  const router=useRouter()
    const [menu, setMenu] = useState(false)
   const [click, setClick] = useState(false)
    const {token}=parseCookies()
const handleLogout=()=>{
  setMenu(false)
  Cookies.remove('token')
  router.push("/userend/login")
}
  return (
    <>
    <div className="z-20 sticky top-0">
    <div className=" relative ">
  <nav  className={!navbar?'  flex justify-between items-center  w-full  text-white  bg-slate-800':'  flex justify-between items-center  w-full  text-white  bg-royal xsm:h-8 xl:h-12 '}>
    {/* Hamburger Menu and its options */}
    <div className="relative">
    <div onClick={()=>setMenu(!menu)} className="w-8 hover:cursor-pointer ">
      <span className='xxsm:text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl '><BiMenuAltLeft /></span>
</div>
</div>
    {/* Hamburger Menu and its options */}

    <div className="xxsm:w-4 xsm:w-8 w-16">
    <Image src={logo}  alt=""/>
    </div>
    
    {!token?<div className="flex items-center mr-2 space-x-2 ">
      
   <Link href={!token?"/userend/signup":"/account/upload"}><a ><span  className='border-2 sm:text-sm  xsm:text-xs  border-white rounded-lg px-2 hover:bg-white hover:cursor-pointer font-semibold hover:font-semibold hover:text-royal flex items-center '><FaUpload className='mr-1'/>Upload</span></a></Link>
   <Link href={"/join"}><a ><span className='border-2 border-white rounded-lg px-2 sm:text-sm  xsm:text-xs hover:bg-white hover:cursor-pointer font-semibold hover:font-semibold hover:text-royal flex items-center '><FaHandshake className='mr-1'/>Join</span></a></Link>
    </div>:<div className="flex items-center mr-2  ">
      
    <Link href={!token?"/userend/signup":"/account/upload"}><a ><span  className='border-2 sm:text-sm xsm:text-xs  border-white rounded-lg px-2 hover:bg-white hover:cursor-pointer font-semibold hover:font-semibold hover:text-royal flex items-center '><FaUpload className='mr-1'/>Upload</span></a></Link>
      </div>}
    
  </nav>

  </div>

  
<div  className={menu?"bg-royal text-white font-bold  pb-4 absolute z-20 transition-all duration-200 ease-in-out translate-x-0":"absolute transition-all duration-200 ease-in-out -translate-x-52"}>
<ul className='w-48  space-y-3 static'>
  <li></li>
<li  onClick={()=>setMenu(false)}  className='px-8 py-1 transition-all duration-200 hover:bg-blue-500'> <Link  href="/"><a className='flex justify-start  items-center'><span className=''><FaHome className='mx-2'/></span>Home</a></Link></li>
<li onClick={()=>setMenu(false)} className='px-8 py-1 transition-all duration-200 hover:bg-blue-500'> <Link  href="/join"><a className='flex justify-start items-center'><span className=''><FaHandshake className='mx-2'/></span>Join</a></Link></li>
<li onClick={()=>setMenu(false)}  className= 'transition-all duration-200 hover:bg-blue-500 px-8 py-1'> <Link  href={token?"/account/upload":"/userend/login"}><a className='flex justify-start items-center'><span className=''><FaUpload className='mx-2'/></span>Upload</a></Link></li>
{/*Account entity */}

{
  token?<>
  <li   className=' transition-all duration-200 hover:cursor-pointer '><a onClick={()=>setClick(!click)} className='flex px-8  py-1 hover:bg-blue-500 justify-start items-center'><span className=''><MdSwitchAccount className='mx-2'/></span> Account</a>
    <ul className={click?'transition-all duration-200 space-y-4':"hidden transition-all duration-200"}>
      <li></li>
      <li onClick={()=>setMenu(false)}  className='transition-all duration-200 hover:bg-blue-500 px-8 py-1'> <Link  href="/account/profile"><a className='flex justify-star  items-center'><span className=''><BsFillPeopleFill className='mx-2'/></span>Profile</a></Link></li>

      <li onClick={()=>setMenu(false)}  className='transition-all duration-200 hover:bg-blue-500 px-8 py-1'> <Link  href="/account/profile"><a className='flex justify-star  items-center'><span className=''><MdTipsAndUpdates className='mx-2'/></span>Update Profile</a></Link></li>

<li onClick={()=>setMenu(false)}  className='transition-all duration-200 hover:bg-blue-500 px-8 py-1 '> <Link  href="/account/yourimages"><a className='flex justify-star  items-center'><span className=''><FaImages className='mx-2'/></span>Your Images</a></Link></li>

<li onClick={()=>setMenu(false)}  className='transition-all duration-200 hover:bg-blue-500 px-8 py-1 '> <Link  href="/account/collection"><a className='flex justify-star  items-center'><span className=''><BsFillCollectionFill className='mx-2'/></span>Collection</a></Link></li>
    </ul>
</li>
{/*Account entity */}
<li  onClick={handleLogout} className='flex transition-all duration-200 hover:cursor-pointer hover:bg-blue-500 justify-start px-8 py-1 items-center pb-2'><span className=''><BsCursorFill className='mx-2'/></span>Logout</li>
  
  </>:""
}
</ul>
</div>

</div>

    </>
  )
}
