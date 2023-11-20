"use client"
import React from 'react';
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {

  const [Toggle, setToggle] = useState(false);

  useEffect(() => {}, [])

  const handleClick = () => {
    setToggle(!Toggle);
  };

  return (
    <div className=''>
     <header class="text-gray-600 body-font flex">
      <div class="container mx-auto flex justify-between items-center w-full">
        <a class="flex items-center justify-start ml-2 sm:w-[20%]">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          {/* <img className='w-20 h-20' src="/4.png" alt="" /> */}
          <img className="w-[50%] sm:w-[75%]" src="/4.png" alt="" />
        </a>

        <nav class="md:ml-auto hidden md:flex items-center text-base justify-center">
          <a href='/' class="mr-5 hover:text-gray-900">Home</a>
          {/* <a class="mr-5 hover:text-gray-900">Blogs</a> */}
          {/* <a class="mr-5 hover:text-gray-900">Library</a>  */}
          <a class="mr-5 hover:text-gray-900">Services</a>
          <a class="mr-5 hover:text-gray-900">Contact Us</a>
        </nav>

        <nav class={`md:ml-auto flex flex-col md:hidden flex-wrap items-center text-base justify-center delay-300 text-center gap-8 p-12 h-screen bg-black/90 w-full fixed top-[100px] text-white ${Toggle?"right=[100%]" : "left-[100%]"}`}>
          <a class="hover:text-gray-900">Home</a>
          {/* <a class="hover:text-gray-900">Blogs</a> */}
          {/* <a class="hover:text-gray-900">Library</a> */}
          <a class="hover:text-gray-900">Services</a>
          <a class="hover:text-gray-900">Contact Us</a>
        </nav>

        {Toggle ? (
          <img
            src="/close.png"
            alt=""
            className="z-0 md:hidden pr-5 h-[30px]"
            onClick={handleClick}
          />
        ) : (
          <img
            src="/hamburger.png"
            alt=""
            className="z-0 md:hidden pr-5 h-[30px]"
            onClick={handleClick}
          />
        )}

      </div>

    </header> 
    </div>
  )
}

export default Navbar
