'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false)
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)
  const [showMobileAboutDropdown, setShowMobileAboutDropdown] = useState(false)
     
  const handleShowNavBar = () => {
    setShowNavBar(true)
  }
   
  const handleHideNavBar = () => {
     setShowNavBar(false)
     setShowMobileAboutDropdown(false) // Close mobile dropdown when hiding navbar
  }

  // Function to handle navigation clicks and close menu
  const handleNavClick = () => {
    setShowNavBar(false)
    setShowAboutDropdown(false)
    setShowMobileAboutDropdown(false)
  }

  // Handle About dropdown toggle for mobile
  const toggleMobileAboutDropdown = () => {
    setShowMobileAboutDropdown(!showMobileAboutDropdown)
  }
   
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <nav className='hidden lg:flex justify-between items-center bg-transparent bg-opacity-2 backdrop-blur-md px-8 py-1'>
        <div className='flex'>
          <Image src="/images/winnerslogo.png" alt="Church Logo" width={70} height={80} className='pb-1'/>
          <h3 className='ml-2 pt-3 text-white text-md font-bold drop-shadow-lg'>LIVING FAITH <br /> CHURCH ELELENWO</h3>
        </div>
         
        <div className='flex gap-10 text-white'>
           <Link href="/" className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>
            Home
           </Link>
           
           {/* About Dropdown */}
           <div 
             className='relative'
             onMouseEnter={() => setShowAboutDropdown(true)}
             onMouseLeave={() => setShowAboutDropdown(false)}
           >
             <button className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg flex items-center'>
               About Us
               <svg className='ml-1 w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                 <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
               </svg>
             </button>
             
             {showAboutDropdown && (
               <div className='absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10'>
                 <Link 
                   href="/about/lfc-elelenwo" 
                   onClick={handleNavClick}
                   className='block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-red-600'
                 >
                   LFC ELELENWO
                 </Link>
                 <Link 
                   href="/about/12-pillars" 
                   onClick={handleNavClick}
                   className='block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-red-600'
                 >
                   12 PILLARS
                 </Link>
               </div>
             )}
           </div>
           
           <Link href="/ministries" className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>
            Ministries
           </Link>
           <Link href="/more" className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>
            More
           </Link>
           <Link href="/contact" className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>
            Contact Us
           </Link>
           <Link href="/give" className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>
            Give
           </Link>
           <Link href="/education" className='hover:text-red-400 hover:cursor-pointer drop-shadow-lg'>
            Education
           </Link>
        </div>

      </nav>
       
      {/* Mobile Navbar */}
      <nav className='flex justify-between items-center px-5 py-3 bg-transparent bg-opacity-2 backdrop-blur-md lg:hidden'>
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
          
          {/* Add backdrop to close menu when clicking outside */}
          <div 
            className='absolute inset-0 bg-transparent' 
            onClick={handleHideNavBar}
          ></div>
          
          <div className='flex flex-col p-5 space-y-6 text-lg pb-5 relative z-10'>
            <Link href="/" onClick={handleNavClick} className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>
             <p>Home</p>
            </Link>
            
            {/* Mobile About Dropdown */}
            <div className='py-2 border-b'>
              <button 
                onClick={toggleMobileAboutDropdown}
                className='flex items-center justify-between w-full hover:text-red-600 hover:cursor-pointer text-black'
              >
                <span>About Us</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${showMobileAboutDropdown ? 'rotate-180' : ''}`} 
                  fill='currentColor' 
                  viewBox='0 0 20 20'
                >
                  <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                </svg>
              </button>
              
              {showMobileAboutDropdown && (
                <div className='mt-2 ml-4 space-y-2'>
                  <Link 
                    href="/about/lfc-elelenwo" 
                    onClick={handleNavClick}
                    className='block py-2 text-gray-600 text-sm font-semibold hover:text-red-600 hover:cursor-pointer'
                  >
                    LFC ELELENWO
                  </Link>
                  <Link 
                    href="/about/12-pillars" 
                    onClick={handleNavClick}
                    className='block py-2 text-gray-600 text-sm font-semibold hover:text-red-600 hover:cursor-pointer'
                  >
                    12 PILLARS
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/ministries" onClick={handleNavClick} className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>
              <p>Ministries</p>
            </Link>
            <Link href="/more" onClick={handleNavClick} className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>
            <p>More</p>
            </Link>
            <Link href="/contact" onClick={handleNavClick} className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>
             <p>Contact Us</p> 
            </Link>
            <Link href="/give" onClick={handleNavClick} className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>
             <p>Give</p>
            </Link>
            <Link href="/education" onClick={handleNavClick} className='py-2 border-b hover:text-red-600 hover:cursor-pointer text-black'>
             <p>Education</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar