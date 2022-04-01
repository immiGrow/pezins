import  { useRouter } from 'next/router'
import React,{useState} from 'react'
import Image from 'next/image'
import baseUrl from '../../mongodb/baseUrl'
import logo from '../../images/logo.jpg'
import create from '../../images/create.jpg'
import Cookies from 'js-cookie'
import {parseCookies} from "nookies"
import Head from 'next/head'
function SignUp() {
  const router=useRouter()
  const [loader, setLoader] = useState(false)
    const [cred, setCred] = useState({
       username:"",
       email:"",
       password:"",
       cpassword:""
    })
    const onChange=(e)=>{
        setCred({...cred,[e.target.name]:e.target.value})
        
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
      const handleSubmitAllCred=async(e)=>{
          e.preventDefault()
          setLoader(true)
          console.log(cred)
          
        const userReq=await fetch(`${baseUrl}/api/createuser`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:cred.username,
                email:cred.email,
                password:cred.password
            })
            
        })
        const response=await userReq.json()
       
        console.log(response)
        if(!response.error){
          setLoader(false)
          Cookies.set('token',response.authtoken)
          Cookies.set('user',response.userId)
          router.push("/account/profile")
        }
        else if(response.error){
          alert(response.error)
        }
        
      }
  return (
    <>
 
  <Head>
    <title>Creating An Account to Pezins</title>
    <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
  </Head>
  {/*Form Starts */}
  <div className="box">
    <div className="mb-4 w-full flex justify-center">
        <div className="w-20">
    <Image  src={logo} className='w-full'  alt=""/>
    </div>
    </div>
  <form onSubmit={(e)=>handleSubmitAllCred(e)}>
  <div className="inputBox ">
                <input type="name" name="username"  required minLength={5} onChange={onChange} value={cred.username}/>
                <label>Username</label>
            </div>
            <div className="inputBox ">
                <input type="email" name="email"  required minLength={3} onChange={onChange} value={cred.email}/>
                <label>Email</label>
            </div>
            <div className="inputBox">
                    <input type="password" name="password" required minLength={5} onChange={onChange} value={cred.password}/>
                    <label>Password</label>
                </div>
                <div className="inputBox">
                    <input type="password" name="cpassword" required minLength={5} onChange={onChange} value={cred.cpassword}/>
                    <label>Confirm Password</label>
                </div>
               
                <div className="flex justify-center w-4/5/">
           <button type="submit" className='w-full bg-royal font-bold text-white rounded-lg py-2' >Submit</button>
           {
          loader?loaderbar():""
        }
           </div>
           <div onClick={()=>router.push("/userend/login")} className='flex text-royal justify-center mt-2'>Have account already <span className='ml-1 text-blue-800 font-bold underline'> Login</span></div>
        </form>
        </div>
         {/*Form Ends */}
 
         
       
    </>
  )
}

export default SignUp
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