import React from 'react'
import {FiShare} from 'react-icons/fi';
import {ImHappy2} from 'react-icons/im';

export default function UserPhotos({images}) {
  return (
    <>
   
        <ul className='flex justify-end'>
    <button className='hover:text-royal xsm:px-1 xsm:text-xs xsm:border hover:bg-white border-royal flex items-center border-2 hover:border-2 bg-royal text-white transition-all duration-300 ease-in-out font-semibold hover:border-royal rounded-md w-fit px-2 py-1'><span className='pr-2'><FiShare/></span>Want to Upload a new Photo</button>
        </ul>
   
    <div className="my-4 md:text-base  uppercase ml-2  text-lg font-semibold">

    <h2 className='flex items-center xsm:text-xs space-x-2' >These Photos has been uploaded by you<span></span> <span><ImHappy2/></span><span><ImHappy2/></span> </h2>

    </div>
    <div className="render sm:mx-2 mx-4">
    {
        images.map((photo)=>{
            return(
                <>
                <div key={photo._id} className="">
                    <img src={photo.imageURL} alt="" />
                </div>
                </>
            )
        })
    }
    </div>
    </>
  )
}
