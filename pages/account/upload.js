import React,{useState} from 'react'
import Image  from 'next/image'
import logo from '../../images/logo.jpg'
import baseUrl from '../../mongodb/baseUrl'
import {MdCancel} from 'react-icons/md'
import {FaImages} from 'react-icons/fa';

import { parseCookies } from 'nookies'
import Navbar from '../../Components/Navbar'
import Head from 'next/head'
export default function Upload() {
  
 let Cookie=parseCookies()
 console.log(Cookie.token)
  const [url, setUrl] = useState("")
  const [details, setDetails] = useState({
    imagename:"",
    category:""
   
})

const [tags, setTags] = useState([])
  const onChange=(e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
    
  }
  const handleSubmitAllDetails=async(e)=>{
    e.preventDefault()
    console.log(details,tags)
   
    const photoUrl=await imageUrlMaker()
    
  const userReq=await fetch(`${baseUrl}/api/uploadallphotos`,
  {
      method:"PUT",
      headers:{
          "Content-Type":"application/json",
          "Authorization":Cookie.token
         
      },
      body:JSON.stringify({
          imagename:details.imagename,
          category:details.category,
          tags:tags,
          imageURL:photoUrl
      })
      
  })
  
  const response=await userReq.json()
 
  console.log(response)
}

const addTags=(e)=>{
  
  if(e.key==="Enter" && e.target.value !== "" ){
    setTags([...tags,e.target.value])
    e.target.value=""
  }
}
const removetag=(indexToRemove)=>
{
setTags(tags.filter((_,index)=>index !== indexToRemove))
}
const imageUrlMaker = async () => {
   
  const appar = new FormData();
  appar.append("file", url);
  appar.append("upload_preset", "pixelsimages");
  appar.append("cloud_name", "pixelsimage");

const sendReq = await fetch("https://api.cloudinary.com/v1_1/pixelsimage/image/upload", {
  method: "POST",
  body: appar,
});
const recieve = await sendReq.json();

console.log(recieve);
return recieve.url;

};
  return (
    <>
    <Head>
      <title>Upload Unlimited Photos</title>
      <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
    </Head>
    

<Navbar/>
<div className="bg-green-100">
<div className="flex  space-x-24 pt-8 w-full">
<div className="left font-light media space-y-8 w-fit px-4 py-16">
  <div className="flex space-y-1 flex-col">
<h1 className='font-semibold uppercase'>Remember</h1>
<strong>Image should be clear to make feel downloaders great feeling.</strong>
<strong>Image size must be less than 30MB.</strong>
</div>
<div className="flex space-y-1 flex-col">
<h1 className='font-semibold uppercase'>Uploading Image Related</h1>
<strong><span className='font-semibold underline'>Imagename </span>:- It is the real and accurate name of image content.</strong>
<strong><span className='font-semibold underline'>Category </span>:- It is the list to which category your image belongs.</strong>
<strong><span className='font-semibold underline'>Tags </span>:- It will rank your image in search Engine searched by users.</strong>
</div>

</div>
{/*Form starts*/}

<div className="flex justify-center w-full relative">
  <div className="uploadedimage">

  </div>

<form  className="allinputs relative">

<div className="individualinputs relative ">
  <div className="border-dashed border-2 border-indigo-600 w-96 h-48 relative">
Select File 
Deagasjkcsccds
  </div>
<div className="absolute -z-10 top-0">

<input type="file" onChange={(e)=>setUrl(e.target.files[0])} accept="image/*" className='dragbtn block' name=""  />
</div>

</div>

<div className="individualinputs relative ">
<label htmlFor="">Imagename</label>
<input type="text" required minLength={5} onChange={onChange} value={details.imagename} className='block border  border-black w-full rounded-md focus:border-2' name="imagename"  />
</div>

<div className="individualinputs relative ">
<label htmlFor="">Category</label>
<input type="text" required minLength={5} onChange={onChange} value={details.category} className='block  border border-black w-full rounded-md focus:border-2' name="category"  />
</div>

<div className="individualinputs relative ">
<label htmlFor="">Tags</label>
<input type="text" onKeyUp={addTags} className='block  border border-black w-full rounded-md focus:border-2' name=""  />
</div>

<div className=' text-red-700 text-xs ml-2 '><span></span>* Be Remember that these Tags will rank your image searching. So do by twice thinking.</div>
            <div className="tags-container w-full bg-white ">
                <ul className='flex flex-wrap mb-2 mt-2 h-auto space-y-2 space-x-2 '>
                <li></li>
                 {tags.map((tag,index)=>{
                   return (
                     <>
                     
                     <li key={index} className='bg-royal rounded-lg text-white py-1 px-2 flex space-x-1'><span key={index}>{tag}</span><MdCancel className='hover:cursor-pointer' onClick={()=>removetag(index)}/></li>
                     
                     </>
                   )
                 })}
                </ul>

           </div>

           <div className="flex justify-center w-4/5/">
           <button onClick={(e)=>handleSubmitAllDetails(e)} type="submit" className='w-full bg-royal font-bold text-white rounded-lg py-2' >Submit</button>
           
           </div>


</form>


</div>

{/*Form ends */}

</div>

{/*Searching not inclueded tags will be shown here */}
<div className="">
<h1>Tags Field</h1>

</div>

</div>
    </>
  )
}
