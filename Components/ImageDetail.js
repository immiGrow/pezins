import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import {BsHeartFill,BsHeart} from 'react-icons/bs'
import {MdCloudDownload} from 'react-icons/md'
import {AiOutlineAppstoreAdd,AiOutlineHeart} from 'react-icons/ai'
import ThanksModal from './ThanksModal'
import baseUrl from '../mongodb/baseUrl'
import Cookie from 'js-cookie'
import { parseCookies } from 'nookies'



export default function ImageDetail({image}) {
 
 
  
  const [showThank, setShowThank] = useState(false)

  

  const cookie=parseCookies()

  useEffect(() => {
    
    const changer=
      setTimeout(() => {
        setShowThank(false)
      }, 5000);
    
    return()=>clearTimeout(changer)
 
  }, [showThank])
 
  const  handleCondit = async (pictureUrl,name) => {
    console.log(pictureUrl)
    const response = await fetch(pictureUrl);
    response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
    })
    await setShowThank(true)
};

const AddThisToCollection=async()=>{
  setCall(true)
  const resp=await fetch(`${baseUrl}/api/collection`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      "Authorization":cookie.token
    },
    body:JSON.stringify({
      photoId:image._id
    })
  })
 await resp.json()

 

  }
 
  


  return (

    <>
    <div  className="w-screen pt-4 h-screen bg-slate-100">
    <div className="w-4/5 md:w-11/12  pb-12 bg-white shadow-2xl pt-8 px-4 rounded-lg mx-auto my-12  ">


    <div className="flex justify-between items-center mb-16">

      <div className="w-16 xsm:w-12">
       <Image src={image.uploaderprofileimage} className="w-16 xsm:w-12 rounded-full" objectFit='cover' width={"100%"} height={"100%"} alt=""/>
      </div>
      
      <div className="flex justify-between xsm:space-x-2 space-x-8 mr-4 xsm:mr-0 items-center">

        <div className="flex space-x-8 xsm:space-x-4 text-3xl sm:text-lg text-slate-500 items-center">
         
     
      <span onClick={AddThisToCollection} title='Add To Collection' className='hover:text-slate-700 hover:cursor-pointer' ><AiOutlineAppstoreAdd/></span>
      
        </div>
       
        <div title='Download' onClick={()=>handleCondit(image.imageURL,image.uploadername)} className="border-2 sm:text-sm hover:border-slate-800 text-slate-600  hover:text-slate-800 border-slate-500 rounded-lg w-fit px-2">
    <button  className='flex justify-between items-center font-semibold '><span className='mr-1 '><MdCloudDownload/> </span> Download</button>
        </div>

      </div>
</div>


    <div className="flex  justify-center items-center">
      
   <img src={image.imageURL} className="w-4/6" alt=""/>
</div>

</div>
</div>
<ThanksModal uploader={image.uploadername} images={image} show={showThank} setShow={setShowThank} photo={image.imageURL} />
    </>
  )
}
