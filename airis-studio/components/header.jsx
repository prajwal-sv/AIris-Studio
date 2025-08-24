"use client";
import React, { use } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const Header = () => {

     const path = usePathname();

  return <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap">
  <div className="backdrop-blur-md bg-white/10 border-white/20 rounded-full px-8 py-3 flex  items-center justify-between gap-8">
 <Link href="" className="mr-10 md-mr-20">
 <Image 
 src ='/logo2.png'
  alt='Airis-Studio'
  className='min-w-24 object-cover'
  width={96} 
  height={24}/>
  
</Link>

{path === "/" && 
 (<div className='hidden md:flex gap-x-6'>
    <Link
    href="#pricing"
    className=" text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer">
        Pricing
    </Link>
    <Link
    href="#contact"
    className=" text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer">
        Contact
    </Link>
    

    <Link
    href="#features"
    className=" text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer">
        Freatures
    </Link>
    

 </div>)}

 <div className="flex items-center gap-3 ml-10 md:ml-20">Auth</div>

  </div>
  
  
  </header>
}

export default Header