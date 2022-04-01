import Image from "next/image";
import React,{ useState } from "react"
import { useRouter } from "next/router";
import AccountNav from "../../Components/AccountNav";
import Navbar from "../../Components/Navbar";
import {GrEdit} from 'react-icons/gr';
import { parseCookies } from "nookies";
import baseUrl from '../../mongodb/baseUrl'
import {IoLocationSharp} from 'react-icons/io5'
import freeimg from '../../images/freeimg.jpg';
import pro from '../../images/pro.png'
import insta from '../../images/insta.svg'
import facebook from '../../images/facebook.svg'
import pin from '../../images/pin.svg'
import twit from '../../images/twit.svg'
import youtube from '../../images/youtube.svg'
import {BsTelephoneFill,BsFillCollectionFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md'
import Head from "next/head";
export default function Profile({data}) {
  const router=useRouter()
const [url, setUrl] = useState("")
const [prof, setProf] = useState("")
const cookie=parseCookies()
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

const ProfileUrl = async () => {
   
  const appar = new FormData();
  appar.append("file", prof);
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

const bgImagesRequest=async(e)=>{
setUrl(e.target.files[0])
const bgimage=await imageUrlMaker()
const respo=await fetch( `${baseUrl}/api/userdetails`,{
  method:"PUT",
  headers:{
    "Content-Type":"application/json",
    "Authorization":cookie.token
  },
  body:JSON.stringify({
    bgimage
  })
})
const res=await respo.json()
console.log(res)
}

const NextRequest=async(e)=>{
  setProf(e.target.files[0])
  const profileimage=await ProfileUrl()
  const respo=await fetch( `${baseUrl}/api/userdetails`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      "Authorization":cookie.token
    },
    body:JSON.stringify({
      profileimage
    })
  })
  const res=await respo.json()
  console.log(res)
}
console.log(url)
       
  return (
    <>
    <Head>
      <title>{data.detail.username} - Profile page</title>
      <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
    </Head>
      <Navbar />
      <AccountNav/>
    

   
      <div className="relative">

<div className=" h-full relative ">
    <div className=" ">
<Image src={url?URL.createObjectURL(url):data.detail.bgimage || freeimg} width={5000} height={2000} objectFit="cover" className=" "   alt="Nothing" />

</div>

<div className="absolute z-10 -top-2 right-0">
<div className="relative  ">
  <input type="file" title="Edit Background Image" onChange={(e)=>bgImagesRequest(e)} className="fileupload text-transparent" />
</div>
<div  title="Edit Background Image" className="absolute -z-10 -top-4 right-8 rounded-full md:-top-1 md:text-3xl bg-royal text-5xl text-white"><AiFillEdit/>
</div>
</div>

</div>



<div className=" image absolute left-4 -bottom-16 md:-bottom-8  w-full">
    <div className="w-44 relative md:w-16">
<Image src={prof?URL.createObjectURL(prof):data.detail.profileimage || pro} objectFit="cover" className="w-44  md:w-16 border-2 border-slate-800 rounded-full " width={"100%"} height={"100%"} alt="" />
</div>
<div className="absolute z-10 bottom-0">
  <input type="file" title="Edit Profile Photo" className="fileupload text-transparent" onChange={(e)=>NextRequest(e)} />

</div>
<div className="absolute bottom-2  text-2xl text-white rounded-full bg-royal">
<AiFillEdit/>
</div>
</div>
</div>



<div className=" xsm:mt-8 flex justify-center relative">
    <div className=" space-y-2">
<h2 className="font-semibold text-black">{data.detail.username}</h2>
<strong className="text-slate-600">{data.detail.yourintroline}</strong>
   
<div className="fbytube  flex justify-between space-x-2">
      
<div className="flex  space-x-2 ">
<div className="w-6 hover:-translate-y-1 transition-all duration-200 ease-in-out xsm:w-4 xsm:text-lg text-2xl">
    <IoLocationSharp/>
    </div>
   <span>{data.detail.country}</span>
</div>

<div className="flex hover:-translate-y-1 transition-all duration-200 ease-in-out space-x-2 ">
<div className="w-6  xsm:w-4">
    <Image src={facebook} className="w-6 xsm:w-4" alt=""/>
    </div>
    <a href={data.detail.facebook} rel="noreferrer" target={"_blank"} >{data.detail.facebook}</a>
</div>
<div className="flex hover:-translate-y-1 transition-all duration-200 ease-in-out space-x-2 ">
<div className="w-6 xsm:w-4">
    <Image src={insta} className="w-6 xsm:w-4" alt=""/>
    </div>
    <a href={data.detail.instagram} rel="noreferrer" target={"_blank"} >{data.detail.instagram}</a>
</div>
<div className="flex hover:-translate-y-1 transition-all duration-200 ease-in-out space-x-2 ">
<div className="w-6 xsm:w-4">
    <Image src={twit} className="w-6 xsm:w-4" alt=""/>
    </div>
    <a href={data.detail.twitter} rel="noreferrer" target={"_blank"} >{data.detail.twitter}</a>
</div>
<div className="flex hover:-translate-y-1 transition-all duration-200 ease-in-out space-x-2">
<div className=" w-6 xsm:w-4">
    <Image src={youtube} className="w-6 xsm:w-4" alt=""/>
    </div>
    <a href={data.detail.youtube} rel="noreferrer" target={"_blank"} >{data.detail.youtube}</a>
</div>
<div className="flex hover:-translate-y-1 transition-all duration-200 ease-in-out space-x-2 ">
<div className="w-6 xsm:w-4">
    <Image src={pin} className="w-6 xsm:w-4" alt=""/>
    </div>
    <a href={data.detail.pinterest} rel="noreferrer" target={"_blank"} >{data.detail.pinterest}</a>
</div>
</div>

</div>
<div onClick={()=>router.push("/account/updateprofile")} className="border-2 relative px-1 rounded-lg hover:cursor-pointer font-semibold border-royal w-fit h-fit">
  <div className="relative w-fit"> Edit Full Profile</div>
  <div className="absolute -top-2 -right-2 bg-green-600 rounded-full w-fit"><AiFillEdit/></div>
 
</div>
</div>

<div className="relative flex justify-between mt-4 xsm:mx-1 mx-4">
<div className="emailId flex justify-center pt-4 md:px-1 pb-4 xsm:text-sm items-center px-4 bg-royal text-white">

<div className="">
<div className='flex items-center'><BsTelephoneFill className='mr-2'/>{data.detail.mobilenumber || 965465456}</div>
<div className='flex items-center'><MdEmail className='mr-2'/>{data.detail.email}</div>
<div onClick={()=>router.push("/account/collection")} className='flex flex-col items-center mt-8 space-y-2 text-blue-600  px-2 rounded-3xl'><BsFillCollectionFill className='mr-2'/><span className="bg-blue-600 px-2 xsm:text-xs rounded-2xl uppercase text-white font-semibold flex ">Checkout <span className="ml-2">{data.detail.username}</span></span></div>
</div>

</div>

<div className="">
    <div className="grid  grid-cols-5   md:grid-cols-3 xsm:grid-cols-1 w-full md:mx-1 mx-2 ">
      {
        data.detail.UPhotos.map((photo)=>{
          return(
            <>
            <div key={photo._id} className="mx-2 md:mx-1 my-1">
            <Image src={photo.PhotoURL} objectFit="cover" width={"200%"} height={"200%"} alt="" />
            </div>

            </>
          )
        })
      }



</div>
</div>

</div>

     
   
    </>
  );
}

export async function getServerSideProps(ctx){
const {token}=parseCookies(ctx)
if(!token){
  const {res}=ctx
  res.writeHeader(302,{
    Location:"/userend/login"
  })
  res.end()
}
const request=await fetch(`${baseUrl}/api/userdetails`,{
  method:"GET",
  headers:{
    "Content-Type":"application/json",
    "Authorization":token
  }
})
const response=await request.json()
console.log(response)

return{
  props:{
    data:response
  }
}

}