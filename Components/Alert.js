import React,{useState,useEffect} from 'react'
import {GrNorton} from 'react-icons/gr'
import {MdError,MdCancel} from 'react-icons/md'
export default function Alert({type,message,show}) {
 
    
   
  return (
    
    <>
    
        {show && <div className="z-10 sticky top-14">
         <div className="   absolute  flex justify-end w-11/12 ">
                   <div className={`flex justify-between items-center bg-${type}-600 text-white px-2 py-1 shadow-md shadow-green-700`}><span><GrNorton className='mr-1'/></span>{message} <span  className='ml-2 '><MdCancel /></span></div>
               </div>
           
               </div>}
   
    </>
  )
}
