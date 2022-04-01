import React from "react";
import Image from "next/image";
import Link from "next/link";
import download from "../images/download.jpg";
import talent from "../images/talent.jpg";
import logo from '../images/logo.jpg'
import {FaHome} from 'react-icons/fa'
import {useRouter} from 'next/router'
import Head from "next/head";
export default function Join() {
    const router=useRouter()
  return (
    <>
    <Head>
      <title>Connect with Pezins</title>
      <meta name="description" content="Pezins is the worldwide smallest  website and application to download and upload unlimited photos and images and use in your commercial or non-commercial site and in your projects.It is the main and simple to use and bring in work and bussiness." />
    </Head>
      <nav className="bg-royal flex justify-between items-center w-full h-24">
        <div onClick={()=>router.push("/")} className="w-20 ml-4">
          <Image src={logo} alt="" />
        </div>
        <div onClick={()=>router.push("/userend/login")} className="mr-2 hover:cursor-pointer text-white font-bold">
          <span>
            Have an account already ??{" "}
           
              <a className="border-b-2 border-b-white">Login</a>
           
          </span>
        </div>
      </nav>
      
    <div onClick={()=>router.push("/")} className="text-royal w-fit h-12 flex  justify-start items-center mt-1 ml-2" ><FaHome size={20}/><span className="ml-1">Back To Home</span></div> 
      
      <div className="flex  space-x-8 justify-between items-center w-full ">

        <div className="flex mx-2 flex-col">
          <div className="">
            <Image className=" rounded-lg" src={download} alt="" />
          </div>
        <button onClick={()=>router.push("/")} className="border-2 xsm:py-0 xsm:text-sm border-royal  hover:text-white font-bold hover:bg-royal text-royal rounded-md py-1" >I wanna Download...</button>


        </div>
        <div className="flex flex-col">

          <div className="">
            <Image className=" rounded-lg" src={talent} alt="" />
          </div>

    <button onClick={()=>router.push("/userend/signup")} className="bg-royal  xsm:py-0 xsm:text-sm font-bold text-white rounded-md py-1">I wanna show my TALENT...</button>

        </div>
      </div>
    </>
  );
}
