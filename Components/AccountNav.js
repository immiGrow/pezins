import Link from "next/link";
import React from "react";
import { BsFillPeopleFill, BsFillCollectionFill } from "react-icons/bs";
import { FaImages } from "react-icons/fa";

import { useRouter } from "next/router";
export default function AccountNav() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      <nav className="w-full my-4">
        <ul className="flex justify-center rounded-md  py-2 space-x-2   items-center">
          <li> </li>
          <li
            className={
              router.pathname === "/account/profile"
                ? " border-2  bg-royal xsm:text-xs  border-royal text-white xsm:border xsm:py-1 xsm:px-2 font-bold py-2 px-4"
                : "border-2 bg-white xsm:text-xs  text-royal border-royal  xsm:border xsm:py-1 xsm:px-2 font-semibold py-2 px-4"
            }
          >
            
            <Link href="/account/profile"><a className="flex justify-center flex-col items-center">
               
                <span>
                
                  <BsFillPeopleFill size={25} />
                </span>
                PROFILE
              </a></Link>
          </li>
          <li
            className={
              router.pathname === "/account/yourimages"
                ? "border-2 text-white xsm:text-xs bg-royal  xsm:border xsm:py-1 xsm:px-2 border-royal  font-semibold py-2 px-4"
                : "border-2 bg-white text-royal xsm:text-xs xsm:border xsm:py-1 xsm:px-2 border-royal font-semibold py-2 px-4"
            }
          >
            
            <Link href="/account/yourimages">
              
              <a className="flex justify-center flex-col items-center">
                
                <span span>
                  
                  <FaImages size={25} />
                </span>
                YOUR IMAGES
              </a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/account/collection"
                ? "border-2  bg-royal text-white xsm:text-xs border-royal  xsm:border xsm:py-1 xsm:px-2  font-semibold py-2 px-4"
                : "border-2 bg-white text-royal xsm:text-xs border-royal  xsm:border xsm:py-1 xsm:px-2 font-semibold py-2 px-4"
            }
          >
            
            <Link href="/account/collection">
              
              <a className="flex justify-center flex-col items-center">
                
                <span>
                  
                  <BsFillCollectionFill size={25} />
                </span>
                COLLECTION
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
