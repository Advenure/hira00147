"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useState } from "react";


export default function Navbartwo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-black border-b-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h2 className="text-2xl font-bold text-blue-950 ">HIRA PORTFOLIO</h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 text-xl ml-">
            <Link href="/">
            <li className="block text-lg px-2 py-2 hover:underline  hover:text-blue-700 font-bold" >Home</li> 
            </Link>
            <Link href="/about">
            <li className="block text-lg px-2 py-2  hover:underline  hover:text-blue-700 font-bold" >About </li> 
            </Link>
            <Link href="/blogs">
            <li className="block px-2  py-2 text-lg hover:underline hover:text-blue-700 font-bold">Blogs</li> 
            </Link>
            <Link href="/contact">
            <li className="block px-2  py-2 text-lg  hover:underline  hover:text-blue-700 font-bold"> Contact</li> 
            </Link>
            <div className="flex gap-4 justify-center items-center">
           
            </div>
           <Link href={'/imagecv'}> <button className="px-6 py-2 bg-blue-700 text-white rounded-md hover:scale-105 translate-x-2 transition-all ">
          DOWNLOAD CV
          </button> </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex gap-2 items-center md:hidden">
          <Link href="" className="text-2xl">
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" focus:outline-none 5xl:" >
                <Image src={"/image copy 3.png"} alt=""width={52} height={16}></Image>
              

            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-gray-300">
          <Link href="/"> <h1 className="font-bold px-4 underline ">Home</h1></Link>
          <Link href="/about">
          <li className="block px-4 py-2 hover:underline" >About</li> 
          </Link>
          
          <Link href="/blogs">
            <li className="block px-4 py-2 hover:underline" >Blogs</li> 
          </Link>
          <Link href="/contact">
            <li className="block px-4 py-2 hover:underline" >Contact</li> 
          </Link>
          <Link href="/imagecv">
            <li className="block px-4 py-2 hover:underline" >DOWNLOAD CV</li> 
          </Link>
          
         
        </div>
      )}
    </nav>
  );
}
