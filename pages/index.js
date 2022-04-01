import React,{useState} from 'react'
import Navbar from '../Components/Navbar';
import search from '../images/search.svg'
import {RiSearchEyeLine} from 'react-icons/ri'
import { useRouter } from 'next/router';
import InputSearch from '../Components/InputSearch';
import Header from '../Components/Header';
import Head from 'next/head';

export default function Home() {
  const router=useRouter()
  const [searchTerm, setSearchTerm] = useState("")
 
  const handleSubmit=(e)=>{
e.preventDefault()
if(!searchTerm){
  router.push("/")
}
else{
  router.push({
    pathname:`search/${searchTerm}`
  })
  
  setSearchTerm("")
    }
}

 
  return (
    <>
    <Head>
      <title>Pezins - Beautiful Free images & Pictures with Unlimited downloads</title>
      <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    </Head>
      <Navbar/>

  <Header/>    
  
    <div className="mt-8  w-full  ">
<form  onSubmit={handleSubmit} className="  w-full flex justify-center items-center">

<RiSearchEyeLine className='-mr-8 z-10 text-slate-800  text-2xl'/>
<input type="text" placeholder='Enter your query' onChange={(e)=>setSearchTerm(e.target.value)} 
value={searchTerm} className='border-2 border-slate-400 focus:border-slate-800 rounded-md w-3/5 py-1 pl-10' />




</form>
</div>
<InputSearch />


    </>
  )
}


