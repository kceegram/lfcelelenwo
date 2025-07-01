'use client'


import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function AutoType() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [text, setText] = useState('');
  const fullText = "Welcome to Living Faith Church Elelenwo, where faith comes alive.";
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [textColor, setTextColor] = useState('text-white');
  
  const slides = [
    {
      id: 1,
      type: 'welcome',
      image: '/lfchomewelcomeimg.jpg',
      title: 'Welcome Section',
    },
    {
      id: 2,
      type: 'image',
      image: '/aboutchurchimgiii.jpg'
    },
    {
      id: 3,
      type: 'image',
      image: '/homecell2.jpg'
    },
    {
      id: 4,
      type: 'image',
      image: '/aboutchurchimg.jpg'
    },
    {
      id: 5,
      type: 'image',
      image: '/homecell1.img.jpg'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 15000); // Change slide every 30 seconds
    
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Reset typing animation when returning to welcome slide
  useEffect(() => {
    if (currentSlide === 0) {
      setText('');
      setIndex(0);
      setIsTypingComplete(false);
      setTextColor('text-white');
    }
  }, [currentSlide]);

  // Handle typing animation for welcome slide
  useEffect(() => {
    if (currentSlide === 0 && index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else if (currentSlide === 0 && index >= fullText.length) {
      setIsTypingComplete(true);
    }
  }, [index, fullText, currentSlide]);

  // Color change effect after typing is complete
  useEffect(() => {
    if (isTypingComplete && currentSlide === 0) {
      const colors = ['text-yellow-300', 'text-red-400', 'text-blue-300', 'text-green-300'];
      let colorIndex = 0;
      
      const colorInterval = setInterval(() => {
        setTextColor(colors[colorIndex % colors.length]);
        colorIndex++;
      }, 2000);
      
      return () => clearInterval(colorInterval);
    }
  }, [isTypingComplete, currentSlide]);

  // Handle cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500);
    
    return () => clearInterval(blinkInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Slides Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div key={slide.id} className="min-w-full h-full relative flex-shrink-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-20"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
              {slide.type === 'welcome' ? (
                // Welcome slide content - Original design
                <div className=" bg-opacity-30 rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl w-full">
                  <div className="flex flex-col items-center">
                    <h1 
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} text-center mb-4 md:mb-6 font-serif transition-colors duration-700`}
                      style={{ fontFamily: '"Noto Serif", serif' }}
                    >
                      {currentSlide === 0 ? text : fullText}
                      {currentSlide === 0 && (
                        <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                      )}
                    </h1>
                    
                    <div className="mt-4 md:mt-8 space-y-3 md:space-y-4 text-center">
                      <button 
                        className="bg-red-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 transform hover:scale-105 font-serif text-sm md:text-base" 
                        style={{ fontFamily: '"Noto Serif", serif' }}
                      >
                        Join Us Sunday
                      </button>
                      
                      <p 
                        className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold mt-2 md:mt-4 font-serif" 
                        style={{ fontFamily: '"Noto Serif", serif' }}
                      >
                        Experience the power of faith every Sunday at 7:00 AM 1st service and 9:00 AM 2nd Service
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                // Image-only slides - No text overlay
                <div className="w-full h-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-grey-500 bg-opacity-20 hover:bg-opacity-30 hover:cursor-pointer backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 group border border-white border-opacity-30 shadow-lg"
      >
        <span className="text-white group-hover:text-red-500 transition-colors duration-200 text-2xl font-bold leading-none" style={{ transform: 'translateX(-1px)' }}>‹</span>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-grey-500 bg-opacity-20 hover:bg-opacity-30 hover:cursor-pointer backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 group border border-white border-opacity-30 shadow-lg"
      >
        <span className="text-white group-hover:text-red-500 transition-colors duration-200 text-2xl font-bold leading-none" style={{ transform: 'translateX(1px)' }}>›</span>
      </button>

      

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 bg-black bg-opacity-50 rounded-full px-4 py-2">
        <span className="text-white font-semibold">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}