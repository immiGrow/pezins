import React,{useState,useEffect} from 'react'
import Photo from './Photo'

export default function Photos({images}) {
const [len, setLen] = useState(false)
const widthChecker=()=>{
  
  if(screen.availWidth<=330){
    setLen(true)
  }
  else{
    setLen(false)
  }
}
useEffect(() => {
  widthChecker()

 
}, [])

  return (
      <>
    
   
  
        <div className={len?"smallend w-fit mt-8 xsm:mx-1 xsm:mt-2 mx-4 text-center relative ":"render  w-fit mt-8 xsm:mx-1 xsm:mt-2 mx-4 text-center relative"}>
        {
            images && images.map((photos)=>{
                return (
                    <Photo key={photos._id} photo={photos}/>
                )
            })
        }
        </div>
       
      
      
    

    </>
  )
}
