"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    // Initialize AOS when component mounts
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      await import('aos/dist/aos.css');
      
      AOS.init({
        duration: 1200,
        easing: 'ease-out-cubic',
        once: false, // Animation happens every time element comes into view
        offset: 50,
        delay: 0,
      });
    };

    initAOS();
    
    // Show/hide scroll to top button based on scroll position
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Custom SVG Icons
  const CalendarIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const HeartIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12,6 12,12 16,14"></polyline>
    </svg>
  );

  const services = [
    {
      title: "Sunday Services",
      icon: <CalendarIcon />,
      times: [
        { label: "1st Service", time: "7:00 AM" },
        { label: "2nd Service", time: "9:00 AM" }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Wednesday - Midweek/Communion",
      icon: <HeartIcon />,
      times: [
        { label: "Service", time: "5:00 PM - 6:30 PM" }
      ],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Covenant Hour Prayer",
      icon: <ClockIcon />,
      times: [
        { label: "Monday to Saturday", time: "6:15 AM - 7:15 AM" }
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <div className='relative w-full h-[60vh] md:h-[70vh] overflow-hidden'>
        <Image
          src="/aboutchurchimg.jpg"
          alt="About Lfc Elelenwo"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-30"></div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 hover:text-red-500 hover:cursor-pointer transition-colors duration-300 font-serif'>
            OUR LEADERSHIP
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-serif">
            Meet the God-appointed leaders who guide and shepherd our congregation with wisdom and love
          </p>
        </div>
      </div>

      {/* Leadership Cards Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* Bishop David O. Oyedepo */}
        <div 
          className="mb-12 md:mb-20"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Image Container */}
              <div className="w-full lg:w-2/5 relative">
                <div className="relative h-full sm:h-full md:h-full lg:h-[450px] overflow-hidden">
                  <Image
                    src="/BDO.jpg"
                    alt="Bishop David O. Oyedepo"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="w-3/2 lg:w-3/5 p-6 sm:p-6 lg:p-12">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-serif">
                    BISHOP DAVID O. OYEDEPO
                  </h3>
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="w-8 sm:w-12 h-0.5 bg-red-500 mr-3"></div>
                    <span className="text-red-600 font-semibold text-sm sm:text-base font-serif lg:text-lg font-serif">FOUNDER & PRESIDENT</span>
                  </div>
                  <p className="text-gray-500 italic text-sm sm:text-base font-serif lg:text-lg font-serif">Living Faith Church Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pastor Michael Obakhena */}
        <div 
          className="mb-12 md:mb-20"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center">
              {/* Image Container */}
              <div className="w-full lg:w-2/5 relative">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden">
                  <Image
                    src="/RPmainimg.jpg"
                    alt="Pastor Michael Obakhena"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12">
                <div className="text-center lg:text-right">
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-serif">
                    PASTOR MICHAEL OBAKHENA
                  </h3>
                  <div className="flex items-center justify-center lg:justify-end mb-4">
                    <span className="text-red-600 font-semibold text-sm sm:text-base lg:text-lg text-center lg:text-right font-serif">DISTRICT, RESIDENT PASTOR</span>
                    <div className="w-8 sm:w-12 h-0.5 bg-red-500 ml-3"></div>
                  </div>
                  <p className="text-gray-500 italic text-sm sm:text-base lg:text-lg font-serif">Living Faith Church Elelenwo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pastor David Oluwarotimi */}
        <div 
          className="mb-12 md:mb-20"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Image Container */}
              <div className="w-full lg:w-2/5 relative">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden">
                  <Image
                    src="/ARPmainimg.jpg"
                    alt="Pastor David Oluwarotimi"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="w-full lg:w-2/5 p-8 sm:p-8 lg:p-12">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-serif">
                    PASTOR DAVID OLUWAROTIMI
                  </h3>
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="w-8 sm:w-12 h-0.5 bg-red-500 mr-3"></div>
                    <span className="text-red-600 font-semibold text-sm sm:text-base lg:text-lg text-center lg:text-left font-serif">ASSISTANT DISTRICT, RESIDENT PASTOR</span>
                  </div>
                  <p className="text-gray-500 italic text-sm sm:text-base lg:text-lg font-serif">Living Faith Church Elelenwo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Church Section */}
      <div className="bg-white mr-4 ml-4 md:mr-20 md:ml-20 lg:mr-32 lg:ml-32 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 max-w-6xl mx-auto">
        <div className="p-6 sm:p-8 lg:p-12">
          {/* Section Heading */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 hover:text-red-600 hover:cursor-pointer transition-colors duration-300 font-serif">
              ABOUT LIVING FAITH CHURCH ELELENWO
            </h2>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 sm:w-20 h-0.5 bg-red-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-xl font-medium text-gray-800 mb-8 text-center lg:text-left font-serif">
                Living Faith Church Elelenwo AKA <strong className="text-red-500">WINNERS CHAPEL ELELENWO</strong> is a living proof of the faithfulness of God, the validity of the liberation mandate and the spirit of God at work in this commission.
              </p>
              
              <p className="text-base md:text-lg leading-7 mb-6 font-serif">
                Winners Chapel International Elelenwo is a branch of Living Faith Church Worldwide. We are a living proof of the faithfulness of God, the efficacy of the liberation mandate and the power of God at work in this commission. Great testimonies, healings, deliverance, change of stories, divine restorations and supernatural interventions in the lives of our members have been credited.
              </p>
              
              <p className="text-base md:text-lg leading-7 font-serif">
                Winners Chapel Elelenwo is a church where the undiluted word of faith is divinely backed-up with signs and wonders. In the past couple of years, the church has grown from strength to strength with diverse testimonies, success and undeniable presence of God in our midst and in the increased multitudes in all our services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WORSHIP WITH US SECTION - NEWLY STYLED */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 mt-16 mr-4 ml-4 md:mr-20 md:ml-20 rounded-xl lg:mr-32 lg:ml-32 lg:rounded-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div 
            className="text-center mb-12 lg:mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="inline-flex items-center justify-center mb-4">  
               <Image src="/images/winnerslogo.png" alt="Church Logo" width={70} height={80} className='pb-1'/>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 font-serif hover:text-red-600 transition-colors duration-300 cursor-pointer">
              WORSHIP WITH US
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 sm:w-20 h-0.5 bg-red-500"></div>
            </div>
            <div className="flex items-center justify-center text-gray-600 mb-4">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="text-lg lg:text-xl font-serif">
                Join us at Living Faith Church Elelenwo for inspiring worship and fellowship
              </p>
            </div>
          </div>

          {/* Service Times Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={index * 200}
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-base lg:text-lg font-bold font-serif leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="space-y-4">
                    {service.times.map((timeSlot, timeIndex) => (
                      <div 
                        key={timeIndex}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-l-4 border-red-500"
                      >
                        <span className="font-semibold text-gray-700 mb-1 sm:mb-0 font-serif">
                          {timeSlot.label}
                        </span>
                        <span className="text-lg font-bold text-red-600 font-serif">
                          {timeSlot.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div 
            className="text-center max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="600"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 font-serif">
                Come As You Are
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-serif">
                Experience the love of Christ in a welcoming family of God. All are welcome to join us in worship, prayer, and fellowship at Living Faith Church Elelenwo.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-serif">
                  Plan Your Visit
                </button>
                <Link 
                  href="/contact" 
                  className="border-2 border-red-500 text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-all duration-300 font-serif inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-100 to-red-50 px-6 py-3 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold font-serif">Living Faith Church Elelenwo</span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Mandate */}
      <div className="text-center mt-20 ml-4 mr-4 md:mr-20 md:ml-20 mb-24 lg:mt-20 lg:mr-32 lg:ml-32 pt-10">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 text-white shadow-2xl">
          <h2 className='text-2xl md:text-2xl hover:text-yellow-500 hover:cursor-pointer lg:text-4xl font-bold md:font-bold lg:font-bold mb-4 mt-10 transition-colors duration-300 font-serif'>
            LIVING FAITH CHURCH WORLDWIDE
          </h2>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 font-serif">
            THE MANDATE
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95 font-serif">
            &quot;Now the hour has come to liberate the world from all oppressions of the devil through the preaching of the word of faith, and I am sending you to undertake this task.&quot;
          </p>
          <div className="w-32 h-1 bg-white mx-auto mt-6 opacity-80"></div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
           onClick={scrollToTop}
           className="
           fixed 
             bottom-4 right-4 md:bottom-6 md:right-8  /* 👈 smaller spacing on mobile */
             z-50 
             bg-red-500 hover:bg-red-600 
             text-white 
             p-2 md:p-3              /* 👈 smaller padding on mobile */
             font-bold 
             rounded-full 
             shadow-lg hover:shadow-xl 
             transition-all duration-300 
             transform hover:scale-110 
             group hover:cursor-pointer
         "
           aria-label="Scroll to top"           >
          <svg
            className="
              w-5 h-5 md:w-6 md:h-6    /* 👈 smaller icon size on mobile */
              transform group-hover:-translate-y-1 
              transition-transform duration-300
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>

      )}
    </div>
  )
}

export default Page