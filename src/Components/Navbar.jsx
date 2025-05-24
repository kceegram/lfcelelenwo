'use client'

import React, { useState } from 'react'
import Image from 'next/image';
// Removed react-icons imports
// import { TbMenu } from "react-icons/tb";
// import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false)
  
  const handleShowNavBar = () => {
    setShowNavBar(true)
  }

  const handleHideNavBar = () => {
    setShowNavBar(false)
  }

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <nav className='hidden lg:flex justify-between items-center bg-white px-8 py-1'>
        <div className='flex'>
          <Image src="/images/winnerslogo.png" alt="Church Logo" width={70} height={80} className='pb-1'/>
          <h3 className='ml-2 pt-3 text-black text-md font-bold'>LIVING FAITH <br /> CHURCH ELELENWO</h3>
        </div>

        <div className='flex gap-10 text-black'>
          <p className='hover:text-red-600 hover:cursor-pointer'>Home</p>
          <p className='hover:text-red-600 hover:cursor-pointer'>About Us</p>
          <p className='hover:text-red-600 hover:cursor-pointer'>Ministries</p>
          <p className='hover:text-red-600 hover:cursor-pointer'>More</p>
          <p className='hover:text-red-600 hover:cursor-pointer'>Contact Us</p>
          <p className='hover:text-red-600 hover:cursor-pointer'>Give</p>
          <p className='hover:text-red-600 hover:cursor-pointer'>Education</p>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className='flex justify-between items-center px-5 py-3 bg-white lg:hidden'>
        <div className='flex items-center'>
          <Image src="/images/winnerslogo.png" alt="Church Logo" width={50} height={60} />
          <h3 className='ml-2 text-black text-sm font-bold'>LIVING FAITH <br /> CHURCH ELELENWO</h3>
        </div>
        
        <div>
          {showNavBar ? (
            <button onClick={handleHideNavBar} className='text-3xl text-black'>
              {/* Replaced IoMdClose with a close symbol */}
              <span aria-hidden="true">✕</span>
            </button>
            ) : (
            <button onClick={handleShowNavBar} className='text-3xl text-black'>
              {/* Replaced TbMenu with a hamburger menu symbol */}
              <span aria-hidden="true">☰</span>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {showNavBar && (
        <div className='lg:hidden fixed top-16 left-0 w-full h-screen bg-white z-50'>
          <div className='flex flex-col p-5 space-y-6 text-lg'>
            <p className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>Home</p>
            <p className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>About Us</p>
            <p className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>Ministries</p>
            <p className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>More</p>
            <p className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>Contact Us</p>
            <p className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>Give</p>
            <p className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>Education</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
