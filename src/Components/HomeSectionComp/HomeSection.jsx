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
  const [isMobile, setIsMobile] = useState(false);
  
  const slides = [
    {
      id: 1,
      type: 'welcome',
      mobileImage: '/lfchomewelcomeimg.jpg',
      desktopImage: '/lfchomewelcomeimg.jpg',
      title: 'Welcome Section',
    },
    {
      id: 2,
      type: 'image',
      mobileImage: '/opendoorsmob.img.png',
      desktopImage:'/opendoors.img.png'
    },
    {
      id: 3,
      type: 'image',
      mobileImage: '/convenantexchangemob.img.png',
      desktopImage: '/conexchangedesk.img.png'
    },
    {
      id: 4,
      type: 'image',
      mobileImage: '/neweramob.img.png',
      desktopImage: '/neweradesk.img.png'
    },

    {
      id: 5,
      type: 'image',
      mobileImage: '/transportationmob.img.png',
      desktopImage: '/transportationdesk.img.png'
    }
    
    
    
  ];

  // Check screen size and set mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical mobile breakpoint
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 15000); // Change slide every 15 seconds
    
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
            {/* Background Image - Responsive */}
            <div className="absolute inset-0 z-0">
              {/* Mobile Image */}
              <img
                src={slide.mobileImage}
                alt={slide.title}
                className="w-full h-full object-cover md:hidden"
              />
              {/* Desktop Image */}
              <img
                src={slide.desktopImage}
                alt={slide.title}
                className="w-full h-full object-cover hidden md:block"
              />
              <div className="absolute inset-0 bg-opacity-20"></div>
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
              ) : slide.type === 'custom-mobile' ? (
                // Custom Mobile-Optimized Design
                <div className={`absolute inset-0 flex ${slide.overlayPosition === 'bottom-left' ? 'items-end justify-start' : 'items-center justify-center'} p-4 md:p-8`}>
                  <div className="md:hidden bg-gradient-to-r from-red-600 to-red-800 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-red-300 border-opacity-30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">🙏</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3 font-serif">
                        {slide.title}
                      </h2>
                      <p className="text-yellow-100 text-sm leading-relaxed mb-4">
                        {slide.subtitle}
                      </p>
                      <div className="flex justify-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop version for this slide */}
                  <div className="hidden md:flex md:items-center md:justify-end md:w-full">
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 max-w-md shadow-2xl border border-white border-opacity-20">
                      <div className="text-right">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full ml-auto mb-6 flex items-center justify-center">
                          <span className="text-3xl">🙏</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                          {slide.title}
                        </h2>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">
                          {slide.subtitle}
                        </p>
                        <div className="flex justify-end space-x-2">
                          <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce"></div>
                          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : slide.type === 'custom-desktop' ? (
                // Custom Desktop-Optimized Design
                <div className={`absolute inset-0 flex ${slide.overlayPosition === 'center' ? 'items-center justify-center' : 'items-end justify-start'} p-4 md:p-8`}>
                  {/* Mobile version for this slide */}
                  <div className="md:hidden bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 bg-opacity-95 backdrop-blur-sm rounded-3xl p-6 max-w-sm w-full shadow-2xl">
                    <div className="text-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                          <span className="text-3xl">⛪</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 font-serif">
                        {slide.title}
                      </h2>
                      <p className="text-blue-100 text-sm leading-relaxed mb-4">
                        {slide.subtitle}
                      </p>
                      <div className="border-t border-white border-opacity-30 pt-4">
                        <div className="flex justify-center items-center space-x-4">
                          <div className="flex flex-col items-center">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mb-1"></div>
                            <span className="text-xs text-white">Faith</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-2 h-2 bg-red-400 rounded-full mb-1"></div>
                            <span className="text-xs text-white">Hope</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mb-1"></div>
                            <span className="text-xs text-white">Love</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop version for this slide */}
                  <div className="hidden md:flex md:items-center md:justify-center md:w-full">
                    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-red-900 bg-opacity-80 backdrop-blur-xl rounded-3xl p-12 max-w-2xl shadow-2xl border border-purple-300 border-opacity-30">
                      <div className="text-center">
                        <div className="relative mb-8">
                          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                            <span className="text-6xl">⛪</span>
                          </div>
                          <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-pulse flex items-center justify-center">
                            <span className="text-2xl">✨</span>
                          </div>
                        </div>
                        <h2 className="text-5xl font-bold text-white mb-6 font-serif">
                          {slide.title}
                        </h2>
                        <p className="text-purple-200 text-xl leading-relaxed mb-8">
                          {slide.subtitle}
                        </p>
                        <div className="border-t border-white border-opacity-30 pt-8">
                          <div className="flex justify-center items-center space-x-12">
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 bg-yellow-400 rounded-full mb-2 animate-pulse"></div>
                              <span className="text-lg text-white font-semibold">Faith</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 bg-red-400 rounded-full mb-2 animate-pulse delay-100"></div>
                              <span className="text-lg text-white font-semibold">Hope</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 bg-blue-400 rounded-full mb-2 animate-pulse delay-200"></div>
                              <span className="text-lg text-white font-semibold">Love</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : slide.type === 'custom-image-mobile' ? (
                // Custom Image Slide - Mobile Optimized
                <div className="absolute inset-0">
                  {/* Mobile Design */}
                  <div className="md:hidden relative w-full h-full">
                    <div className="absolute inset-0">
                      <img
                        src={slide.mobileImage}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Mobile Overlay Design */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-20">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">📱</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-lg font-serif">{slide.title}</h3>
                            <p className="text-gray-300 text-sm">{slide.description}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-center">
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Design */}
                  <div className="hidden md:block relative w-full h-full">
                    <div className="absolute inset-0">
                      <img
                        src={slide.desktopImage}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Desktop Overlay Design */}
                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 max-w-md border border-white border-opacity-30 shadow-2xl">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl">📱</span>
                          </div>
                          <h3 className="text-white font-bold text-2xl mb-3 font-serif">{slide.title}</h3>
                          <p className="text-gray-200 text-lg mb-6">{slide.description}</p>
                          <div className="border-t border-white border-opacity-30 pt-4">
                            <div className="flex justify-center space-x-4">
                              <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : slide.type === 'custom-image-desktop' ? (
                // Custom Image Slide - Desktop Optimized
                <div className="absolute inset-0">
                  {/* Mobile Design */}
                  <div className="md:hidden relative w-full h-full">
                    <div className="absolute inset-0">
                      <img
                        src={slide.mobileImage}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                    </div>
                    
                    {/* Mobile Overlay Design */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 border border-blue-300 border-opacity-30">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-lg">💻</span>
                          </div>
                          <h3 className="text-white font-bold text-base font-serif">{slide.title}</h3>
                          <p className="text-blue-100 text-xs mt-1">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Bottom Accent */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-center space-x-8">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-xs text-white">1</span>
                          </div>
                          <span className="text-white text-xs">Connect</span>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-xs text-white">2</span>
                          </div>
                          <span className="text-white text-xs">Engage</span>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-xs text-white">3</span>
                          </div>
                          <span className="text-white text-xs">Grow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Design */}
                  <div className="hidden md:block relative w-full h-full">
                    <div className="absolute inset-0">
                      <img
                        src={slide.desktopImage}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
                    </div>
                    
                    {/* Desktop Overlay Design */}
                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 bg-opacity-80 backdrop-blur-xl rounded-3xl p-10 max-w-lg border border-blue-300 border-opacity-30 shadow-2xl">
                        <div className="text-center">
                          <div className="relative mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                              <span className="text-3xl">💻</span>
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                          </div>
                          <h3 className="text-white font-bold text-3xl mb-4 font-serif">{slide.title}</h3>
                          <p className="text-blue-200 text-lg mb-8">{slide.description}</p>
                          
                          {/* Desktop Feature Grid */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span className="text-white font-bold">1</span>
                              </div>
                              <span className="text-white text-sm font-semibold">Connect</span>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span className="text-white font-bold">2</span>
                              </div>
                              <span className="text-white text-sm font-semibold">Engage</span>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <span className="text-white font-bold">3</span>
                              </div>
                              <span className="text-white text-sm font-semibold">Grow</span>
                            </div>
                          </div>
                          
                          {/* Desktop Bottom Animation */}
                          <div className="border-t border-white border-opacity-30 pt-4">
                            <div className="flex justify-center space-x-3">
                              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                              <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse delay-200"></div>
                              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                            </div>
                          </div>
                        </div>
                      </div>
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
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-grey-500 bg-opacity-20 hover:bg-opacity-30 hover:cursor-pointer backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center transition-all duration-300 group border border-white border-opacity-30 shadow-lg"
      >
        <span className="text-white group-hover:text-red-500 transition-colors duration-200 text-2xl font-bold leading-none" style={{ transform: 'translateX(-1px)' }}>‹</span>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-grey-500 bg-opacity-20 hover:bg-opacity-30 hover:cursor-pointer backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center transition-all duration-300 group border border-white border-opacity-30 shadow-lg"
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