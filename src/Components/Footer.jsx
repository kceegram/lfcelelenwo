'use client'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
     
  return (
    <footer className='w-full bg-tranparent bg-opacity-2 backdrop-blur-md fixed bottom-0 left-0 right-0 z-10 border-t border-white border-opacity-30'>
      <div className='container mx-auto flex justify-center items-center h-16 sm:h-16'>
        <p className='text-sm sm:text-sm md:text-sn text-white font-meduim text-center drop-shadow-lg'>
         LFCELELENWO © {currentYear} All Rights Reserved - Developed by Kceegram_ThinkGlobal
        </p>
      </div>
    </footer>
  )
}

export default Footer