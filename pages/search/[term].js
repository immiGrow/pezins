import React,{useState,useEffect} from 'react'
import Photos from '../../Components/Photos'
import { useRouter } from 'next/router'
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {RiSearchEyeLine} from 'react-icons/ri'
import * as Realm from 'realm-web'
import Navbar from '../../Components/Navbar'
import Head from 'next/head'
export default function InputSearch() {
  const [images, setImages] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const {query}=useRouter()
  const router=useRouter()
  useEffect(() => {
      if(query.term){

          RealmConnector()
      }
  }, [query])
  
   const RealmConnector=async()=>{
    
     const appId="pexists-ponln"
    const app=new Realm.App({id:appId})
    const credentials=Realm.Credentials.anonymous()
    try {
      const user=await app.logIn(credentials)
      const searchImages=await user.functions.searchImages(query.term)
     await setImages(searchImages)
    } catch (error) {
      console.error(error)
    }
   }

   const handleSubmit=(e)=>{
    e.preventDefault()
    if(!searchTerm){
      router.push("/")
    }
    else{
      router.push({
        pathname:`${searchTerm}`
      })
      
      setSearchTerm("")
        }
    }
  
  return (
    <>
    <Head>
        <title>{images.length}+ {query.term} Photos </title>
        <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
    </Head>
    <Navbar/>

{/*Filter options Starts */}
{/* <div  className="overflow-scroll flex justify-start items-center space-x-12 h-12   bg-white text-slate-800 ">
      <button></button>
       <button onClick={()=>router.push(`/search/fashion`)} className='font-semibold hover:underline'>Fashion</button>
       <button onClick={()=>router.push(`/search/nature`)} className='font-semibold hover:underline'>Nature</button>
       <button onClick={()=>router.push(`/search/currentevents`)} className='flex font-semibold hover:underline'>Current<span className='ml-1'> Events</span></button>
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
       
    </div> */}


  
{/*Filter options Ends */}



     <div onClick={()=>router.push("/")} className="text-3xl  hover:cursor-pointer hover:text-black m-2  text-royal ">
<BsArrowLeftCircleFill/>
     </div>

<div className="mx-4">
     <span className='font-semibold'>{images.length}</span> Results Found of <span className='font-semibold'>{query.term}</span>
     </div>
     <div className="mt-8  w-full  ">
<form  onSubmit={handleSubmit} className="  w-full flex justify-center items-center">

<RiSearchEyeLine className='-mr-8 z-10 text-slate-800  text-2xl'/>
<input type="text" placeholder='Enter your query' onChange={(e)=>setSearchTerm(e.target.value)} 
value={searchTerm} className='border-2 border-slate-400 focus:border-slate-800 rounded-md w-3/5 py-1 pl-10' />




</form>
</div>
  {/* <InputSearch /> */}
  
   
<Photos images={images}/>
    </>
  )
}
