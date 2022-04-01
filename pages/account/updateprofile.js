import Image from "next/image";
import {useState} from 'react';
import { useRouter } from "next/router";
import {AiFillHome} from 'react-icons/ai';
import { parseCookies } from "nookies";
import baseUrl from '../../mongodb/baseUrl'
import pro from '../../images/pro.png'
import Head from "next/head";
export default function Profile({data}) {
  const router=useRouter()
  const cookie=parseCookies()
  const [loader, setLoader] = useState(false)
  const [img, setImg] = useState()
const [pr, setPr] = useState({
    username:"",
    email:"",
    mobilenumber:"",
    age:"",
    gender:"",
    country:"",
    yourintroline:"",
    youtube:"",
    facebook:"",
    twitter:"",
    pinterst:"",
    instagram:"",
})

const onChange=(e)=>{
setPr({...pr,[e.target.name]:e.target.value})
}

const imageUrlMaker = async () => {
   
  const appar = new FormData();
  appar.append("file", img);
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

const filteredObj=()=>{

    let asArray=Object.entries(pr)
    let filtered=asArray.filter(([key,value])=>value.length>0)
    let filteredvalues=Object.fromEntries(filtered)
    return filteredvalues
    
}

let loaderbar=()=>{
  return(
    <>
   {loader && <div className="flex justify-center">
      Loading...
    </div>}
    </>
  )
}

const UpdateProfile=async(e)=>{
    e.preventDefault()
    setLoader(true)
const imageUrl=await imageUrlMaker()

const dataPro=await filteredObj()


console.log({previos:pr,next:dataPro})
    const upReq=await fetch(`${baseUrl}/api/userdetails`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Authorization":cookie.token
        },
        body:JSON.stringify({
            username:dataPro.username,
            email:dataPro.email,
           country:dataPro.country,
            age:dataPro.age,
            gender:dataPro.gender,
            youtube:dataPro.youtube,
            facebook:dataPro.facebook,
            instagram:dataPro.instagram,
            twitter:dataPro.twitter,
            pinterst:dataPro.pinterst,
            yourintroline:dataPro.yourintroline,
            profileimage:imageUrl
        })
    })
    const res=await upReq.json()
    if(res.success){
      setLoader(false)
        router.push("/account/profile")
    }
    console.log(res)
}



  return (
    <>
    <Head>
      <title>Edit Profile Page</title>
      \<meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
    </Head>
     <nav className="bg-royal flex sm:text-base sm:font-bold  justify-between items-center text-white py-4 pl-8 text-xl">
         <h1>PROFILE UPDATE PAGE</h1>
        <h1 onClick={()=>router.push("/")} className="flex xsm:text-lg hover:cursor-pointer justify-center items-center pr-2" ><AiFillHome/><span className="ml-2 xsm:hidden">Go To Home Page</span></h1>
     </nav>
      
    

   
     <div className=" flex justify-center mt-8 w-full h-full">
      
       <form onSubmit={(e)=>UpdateProfile(e)} className=" py-8 px-6 rounded-lg shadow-lg shadow-royal">
      
<div className="w-full">

    <div className=" w-full relative h-32  text-center  bg-cover rounded-full ">
      <div className="">
    <Image src={img ? URL.createObjectURL(img): data.detail.profileimage || pro}  className=" rounded-full bg-cover" width={"100%"} height={"100%"} alt="Nothing" />

    </div>
   
    <div className="flex  justify-center w-full">
      <input className=" uploadbtn fileupload  absolute bottom-8  hover:cursor-pointer text-transparent z-10" type="file" onChange={(e)=>setImg(e.target.files[0])} name="profileimage" />
    </div>
    <div className="text-royal">
     {pr.yourintroline}

    </div>
    </div>
    <div   className=" text-slate-600 font-semibold sm:grid-cols-1 grid grid-rows-4  grid-cols-2 gap-4">
    <div className="">
            <label className="block " htmlFor="">New Username</label>
            <input  placeholder="Your username" value={pr.username} onChange={onChange} className="border w-64 text-black border-royal rounded-md   pl-2 " type="name" name="username"  />
        </div>
      
      
      
    <div className="">
            <label className="block " htmlFor="">New Email</label>
            <input  placeholder="Your email" value={pr.email} onChange={onChange} className="border w-64 text-black border-royal rounded-md   pl-2 " type="email" name="email"  />
        </div>
        <div className="">
            <label className="block " htmlFor="">Your Profession</label>
            <input  placeholder="for eg:- Advisor at Pexin"  onChange={onChange} value={pr.yourintroline} className="border w-64 text-black border-royal rounded-md   pl-2 " type="text" name="yourintroline"  />
         
        </div>
        <div className="">
            <label className="block " htmlFor="">New Gender</label>
            <input  placeholder="Your gender" value={pr.gender} onChange={onChange} className="border border-royal w-64 text-black rounded-md   pl-2 " type="gender" name="gender"  />
         
        </div>
        <div className="">
            <label className="block " htmlFor="">New Age</label>
            <input  placeholder="Your age" value={pr.age} onChange={onChange}  className="border border-royal w-64 text-black rounded-md   pl-2 " type="age" name="age"  />
         
        </div>
      
        <div className="">
            <label className="block " htmlFor="">New Country</label>
            <input  placeholder="Your country" value={pr.country} onChange={onChange} className="border border-royal w-64 text-black rounded-md   pl-2 " type="country" name="country"  />
         
        </div>
        <div className="">
            <label className="block " htmlFor="">New Mobile Number</label>
            <input  placeholder="Your country" value={pr.mobilenumber} onChange={onChange} className="border border-royal w-64 text-black rounded-md   pl-2 " type="mobilenumber" name="mobilenumber"  />
         
        </div>
        <h1 className="font-bold text-black uppercase underline">for Social Popularity</h1>
        <div className="">
   </div>
  
        <div className="">
            <label className="block " htmlFor="">Changed Youtube page link</label>
            <input  placeholder="Your Youtube page link" onChange={onChange} value={pr.youtube} className="border border-royal w-64 text-black rounded-md   pl-2 " type="text" name="youtube"  />
         
        </div>
        <div className="">
            <label className="block " htmlFor="">Changed Instagram page link</label>
            <input  placeholder="Your Instagram page link" onChange={onChange} value={pr.instagram}  className="border border-royal w-64 text-black rounded-md   pl-2 " type="text" name="instagram"  />
         
        </div>

        <div className="">
            <label className="block " htmlFor="">Changed Twitter page link</label>
            <input  placeholder="Your Twitter page link" onChange={onChange} value={pr.twitter}  className="border border-royal w-64 text-black rounded-md   pl-2 " type="text" name="twitter"  />
         
        </div>

        <div className="">
            <label className="block " htmlFor="">Changed Pinterset page link</label>
            <input  placeholder="Your Pinterest page link" onChange={onChange} value={pr.pinterest} className="border border-royal w-64 text-black rounded-md   pl-2 " type="text" name="pinterest"  />
         
        </div>

        <div className="">
            <label className="block " htmlFor="">Changed Facebook page link</label>
            <input  placeholder="Your Facebook page link" onChange={onChange} value={pr.facebook} className="border border-royal w-64 text-black rounded-md   pl-2 " type="text" name="facebook"  />
         
        </div>

      


        </div>



    </div>
    <div className="w-full text-white flex justify-center">
<div className="mt-4 bg-royal rounded-2xl w-fit px-4 py-1">
    <button type="submit" > Update Profile</button>
    </div>
    </div>
    </form>

     </div> 
{
  loader? loaderbar():""
}


     
   
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