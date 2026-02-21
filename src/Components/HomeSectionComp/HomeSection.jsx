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
      mobileImage: '/opendoorsfocusmobile.img.png',
      desktopImage: '/opendoorsfocusdesk.img.png'
    },
    
    {
      id: 3,
      type: 'image',
      mobileImage: '/fswtmainmob.img.png',
      desktopImage: '/fswtmain.img.png'
    },

    {
      id: 4,
      type: 'image',
      mobileImage: '/convenantgreetingsmob.img.png',
      desktopImage: '/convenantgreetingsdesk.img.png'
    },

    {
      id: 5,
      type: 'image',
      mobileImage: '/churchtransportmob.img.png',
      desktopImage: '/transportationdesk.img.png'
    }
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  useEffect(() => {
    if (currentSlide === 0) {
      setText('');
      setIndex(0);
      setIsTypingComplete(false);
      setTextColor('text-white');
    }
  }, [currentSlide]);

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

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (slideIndex) => setCurrentSlide(slideIndex);

  const preventImageInteraction = (e) => e.preventDefault();

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        MozUserSelect: 'none',
      }}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative flex-shrink-0 w-full h-full"
            style={{ minWidth: '100%' }}
          >
            {/* Mobile Image */}
            <div className="absolute inset-0 md:hidden">
              <img
                src={slide.mobileImage}
                alt={slide.title || `Slide ${slide.id}`}
                className="w-full h-full object-cover object-center"
                draggable={false}
                onContextMenu={preventImageInteraction}
                onDragStart={preventImageInteraction}
                style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}
              />
            </div>

            {/* Desktop Image */}
            <div className="absolute inset-0 hidden md:block">
              <img
                src={slide.desktopImage}
                alt={slide.title || `Slide ${slide.id}`}
                className="w-full h-full object-cover object-center"
                draggable={false}
                onContextMenu={preventImageInteraction}
                onDragStart={preventImageInteraction}
                style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
              {slide.type === 'welcome' ? (
                // Welcome slide — Doc2 styling
                <div className="bg-opacity-30 rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl w-full">
                  <div className="flex flex-col items-center">

                    {/* Typing heading — Noto Serif, Doc2 sizes */}
                    <h1
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 transition-colors duration-700 ${textColor}`}
                      style={{ fontFamily: '"Noto Serif", serif' }}
                    >
                      {currentSlide === 0 ? text : fullText}
                      {currentSlide === 0 && (
                        <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                      )}
                    </h1>

                    <div className="mt-4 md:mt-8 space-y-3 md:space-y-4 text-center">
                      {/* Join Us Sunday — Doc2 red button */}
                      <button
                        className="bg-red-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full transition duration-300 transform hover:scale-105 text-sm md:text-base"
                        style={{ fontFamily: '"Noto Serif", serif' }}
                      >
                        Join Us Sunday
                      </button>

                      {/* Service times — Doc2 styling */}
                      <p
                        className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold mt-2 md:mt-4"
                        style={{ fontFamily: '"Noto Serif", serif' }}
                      >
                        Experience the power of faith every Sunday at 7:00 AM 1st service and 9:00 AM 2nd Service
                      </p>
                    </div>

                  </div>
                </div>
              ) : (
                <div className="w-full h-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Prev Arrow — Doc2 styling */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-opacity-20 hover:bg-opacity-30 cursor-pointer backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center transition-all duration-300 group border border-white border-opacity-30 shadow-lg"
      >
        <span
          className="text-white group-hover:text-red-500 transition-colors duration-200 text-2xl font-bold leading-none"
          style={{ transform: 'translateX(-1px)' }}
        >
          ‹
        </span>
      </button>

      {/* Next Arrow — Doc2 styling */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-opacity-20 hover:bg-opacity-30 cursor-pointer backdrop-blur-sm rounded-full w-7 h-7 flex items-center justify-center transition-all duration-300 group border border-white border-opacity-30 shadow-lg"
      >
        <span
          className="text-white group-hover:text-red-500 transition-colors duration-200 text-2xl font-bold leading-none"
          style={{ transform: 'translateX(1px)' }}
        >
          ›
        </span>
      </button>

      {/* Slide Counter — Doc2 top-right position */}
      <div className="absolute top-6 right-6 z-20 bg-black bg-opacity-50 rounded-full px-4 py-2">
        <span className="text-white font-semibold">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>

      {/* Slide Dots — kept from Doc3 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentSlide
                ? 'bg-white w-4 h-4 scale-110'
                : 'bg-white bg-opacity-50 w-3 h-3'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}