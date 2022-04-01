import React, { useState } from "react";
import baseUrl from "../../mongodb/baseUrl";
import {useRouter} from 'next/router'
import Image from "next/image";
import logo from '../../images/logo.jpg'
import Cookies from 'js-cookie'
import {parseCookies} from "nookies"
import Head from "next/head";
function Login() {

  const router=useRouter()
 const [loader, setLoader] = useState(false)
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  let loaderbar=()=>{
    return(
      <>
     {loader && <div className="flex justify-center">
        Loading...
      </div>}
      </>
    )
  }

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleSubmitAllCredentials = async (e) => {
   e.preventDefault();
  setLoader(true)

    if(!cred.email || !cred.password ){
      alert("Please fill all credentials")
    }
   
    const userReq = await fetch(`${baseUrl}/api/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: cred.email,
        password: cred.password
        
      })
    });
   
    const response = await userReq.json();
    
    console.log(response)
    if(response.success){
      setLoader(false)
    Cookies.set('token',response.authtoken)
    Cookies.set('user',response.userId)
    router.push("/account/profile")
    }
    else{
      alert("Login with correct credentials")
    }
  
  };
  return (
    <>

<Head>
  <title>Login To Pezins</title>
  <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
</Head>

     <div className="box">
    <div className="mb-4 w-full flex justify-center">
        <div className="xsm:w-16 w-20">
    <Image  src={logo} className='w-full'  alt=""/>
    </div>
    </div>
  <form onSubmit={(e)=>handleSubmitAllCredentials(e)}>
            <div className="inputBox ">
                <input type="email" name="email"  required minLength={5} onChange={onChange} value={cred.email}/>
                <label>Email</label>
            </div>
            <div className="inputBox">
                    <input type="password" name="password" required minLength={5} onChange={onChange} value={cred.password}/>
                    <label>Password</label>
                </div>
                <div className="flex justify-center w-4/5/">
           <button type="submit" className='w-full bg-royal font-bold text-white rounded-lg py-2' >Submit</button>
           
           </div>
           {
          loader?loaderbar():""
        }
        </form>
        <hr className="h-1 divide-dotted bg-royal  mt-2"/>
        
        <div  className='flex justify-center mt-2'> <button onClick={()=>router.push("/userend/signup")}  className="border-2 border-royal py-1 w-4/5 rounded-lg text-royal font-bold">Create An Account</button></div>
        </div>
       
    </>
  );
}

export default Login;
export async function getServerSideProps(ctx){
const {token}=parseCookies(ctx)
if(token){
  const {res}=ctx
  res.writeHeader(302,{
    Location:"/account/account"
  })
  res.end()
}

  return {
    props:{

    }
  }

  
}