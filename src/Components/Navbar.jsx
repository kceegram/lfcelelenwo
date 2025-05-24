'use client'
import React, { useState } from 'react'
import Image from 'next/image';

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false)
     
  const handleShowNavBar = () => {
    setShowNavBar(true)
  }
   
  const handleHideNavBar = () => {
     setShowNavBar(false)
  }
   
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <nav className='hidden lg:flex justify-between items-center bg-transparent px-8 py-1'>
        <div className='flex'>
          <Image src="/images/winnerslogo.png" alt="Church Logo" width={70} height={80} className='pb-1'/>
          <h3 className='ml-2 pt-3 text-white text-md font-bold drop-shadow-lg'>LIVING FAITH <br /> CHURCH ELELENWO</h3>
        </div>
         
        <div className='flex gap-10 text-white'>
          <p className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>Home</p>
          <p className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>About Us</p>
          <p className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>Ministries</p>
          <p className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>More</p>
          <p className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>Contact Us</p>
          <p className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>Give</p>
          <p className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>Education</p>
        </div>
      </nav>
       
      {/* Mobile Navbar */}
      <nav className='flex justify-between items-center px-5 py-3 bg-transparent lg:hidden'>
        <div className='flex items-center'>
          <Image src="/images/winnerslogo.png" alt="Church Logo" width={50} height={60} />
          <h3 className='ml-2 text-white text-sm font-bold drop-shadow-lg'>LIVING FAITH <br /> CHURCH ELELENWO</h3>
        </div>
                 
        <div>
          {showNavBar ? (
            <button onClick={handleHideNavBar} className='text-3xl text-white drop-shadow-lg'>
              <span aria-hidden="true">✕</span>
            </button>
            ) : (
            <button onClick={handleShowNavBar} className='text-3xl text-white drop-shadow-lg'>
              <span aria-hidden="true">☰</span>
            </button>
          )}
        </div>
      </nav>
       
      {/* Mobile Menu */}
      {showNavBar && (
        <div className='lg:hidden fixed top-0 left-0 w-full h-screen bg-white bg-opacity-95 z-50'>
          <div className='flex justify-between items-center px-5 py-3 border-b'>
            <div className='flex items-center'>
              <Image src="/images/winnerslogo.png" alt="Church Logo" width={50} height={60} />
              <h3 className='ml-2 text-black text-sm font-bold'>LIVING FAITH <br /> CHURCH ELELENWO</h3>
            </div>
            <button onClick={handleHideNavBar} className='text-3xl text-black'>
              <span aria-hidden="true">✕</span>
            </button>
          </div>
          <div className='flex flex-col p-5 space-y-6 text-lg pb-5'>
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