'use client'

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function AutoType() {
  const [text, setText] = useState('');
  const fullText = "Welcome to Living Faith Church Elelenwo, where faith comes alive.";
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [textColor, setTextColor] = useState('text-white');

  // Handle typing animation
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100); // Adjust speed as needed
      
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [index, fullText]);

  // Color change effect after typing is complete
  useEffect(() => {
    if (isTypingComplete) {
      const colors = ['text-yellow-300', 'text-red-400', 'text-blue-300', 'text-green-300'];
      let colorIndex = 0;
      
      const colorInterval = setInterval(() => {
        setTextColor(colors[colorIndex % colors.length]);
        colorIndex++;
      }, 2000); // Change color every 2 seconds
      
      return () => clearInterval(colorInterval);
    }
  }, [isTypingComplete]);

  // Handle cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);

  return (
  <div className="h-screen pb-16 flex flex-col items-center justify-center relative">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/lfchomewelcomeimg.jpg"
        alt="Welcome Background"
        fill
        priority
        className="object-cover"
        data-aos="zoom-in" data-aos-duration="1000"
      />
    </div>
    
    {/* Content */}
    <div className=" bg-opacity-60  rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl w-full z-10">
      <div className="flex flex-col items-center">
        <h1 
          className={`text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} text-center mb-4 md:mb-6 font-serif transition-colors duration-700`} 
          style={{ fontFamily: '"Noto Serif", serif' }}
        >
          {text}
          <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </h1>
        
        <div className="mt-4 md:mt-8 space-y-3 md:space-y-4 text-center">
          <button className="bg-red-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 transform hover:scale-105 font-serif text-sm md:text-base" style={{ fontFamily: '"Noto Serif", serif' }}>
            Join Us Sunday
          </button>
          
          <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold mt-2 md:mt-4 font-serif" style={{ fontFamily: '"Noto Serif", serif' }}>
            Experience the power of faith every Sunday at 7:00 AM 1st service and 9:00 AM 2nd Service
          </p>
        </div>
      </div>
    </div>
  </div>
);
}


