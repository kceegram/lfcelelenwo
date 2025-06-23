'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

const Page = () => {
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
  }, []);

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
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 hover:text-red-500 hover:cursor-pointer transition-colors duration-300'>
            OUR LEADERSHIP
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
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
                <div className="relative h-96 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden">
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
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    BISHOP DAVID O. OYEDEPO
                  </h3>
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="w-8 sm:w-12 h-0.5 bg-red-500 mr-3"></div>
                    <span className="text-red-600 font-semibold text-sm sm:text-base lg:text-lg">FOUNDER &quot; PRESIDENT</span>
                  </div>
                  <p className="text-gray-500 italic text-sm sm:text-base lg:text-lg">Living Faith Church Worldwide</p>
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
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    PASTOR MICHAEL OBAKHENA
                  </h3>
                  <div className="flex items-center justify-center lg:justify-end mb-4">
                    <span className="text-red-600 font-semibold text-sm sm:text-base lg:text-lg text-center lg:text-right">DISTRICT, RESIDENT PASTOR</span>
                    <div className="w-8 sm:w-12 h-0.5 bg-red-500 ml-3"></div>
                  </div>
                  <p className="text-gray-500 italic text-sm sm:text-base lg:text-lg">Living Faith Church Elelenwo</p>
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
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    PASTOR DAVID OLUWAROTIMI
                  </h3>
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="w-8 sm:w-12 h-0.5 bg-red-500 mr-3"></div>
                    <span className="text-red-600 font-semibold text-sm sm:text-base lg:text-lg text-center lg:text-left">ASSISTANT DISTRICT, RESIDENT PASTOR</span>
                  </div>
                  <p className="text-gray-500 italic text-sm sm:text-base lg:text-lg">Living Faith Church Elelenwo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Church Section */}
      <div className="bg-white mr-4 ml-4 lg:mr-32 lg:ml-32 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 max-w-6xl mx-auto">
        <div className="p-6 sm:p-8 lg:p-12">
          {/* Section Heading */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 hover:text-red-600 hover:cursor-pointer transition-colors duration-300">
              ABOUT LIVING FAITH CHURCH ELELENWO
            </h2>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 sm:w-20 h-0.5 bg-red-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-xl font-medium text-gray-800 mb-8 text-center lg:text-left">
                Living Faith Church Elelenwo AKA <strong className="text-red-500">WINNERS CHAPEL ELELENWO</strong> is a living proof of the faithfulness of God, the validity of the liberation mandate and the spirit of God at work in this commission.
              </p>
              
              <p className="text-base md:text-lg leading-7 mb-6">
                Winners Chapel International Elelenwo is a branch of Living Faith Church Worldwide. We are a living proof of the faithfulness of God, the efficacy of the liberation mandate and the power of God at work in this commission. Great testimonies, healings, deliverance, change of stories, divine restorations and supernatural interventions in the lives of our members have been credited.
              </p>
              
              <p className="text-base md:text-lg leading-7">
                Winners Chapel Elelenwo is a church where the undiluted word of faith is divinely backed-up with signs and wonders. In the past couple of years, the church has grown from strength to strength with diverse testimonies, success and undeniable presence of God in our midst and in the increased multitudes in all our services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Mandate */}
      <div className="text-center mt-20 ml-4 mr-4 mb-24 lg:mt-20 lg:mr-32 lg:ml-32 pt-10">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 text-white shadow-2xl">
          <h2 className='text-2xl md:text-2xl hover:text-yellow-500 hover:cursor-pointer lg:text-4xl font-bold md:font-bold lg:font-bold mb-4 mt-10 transition-colors duration-300'>
            LIVING FAITH CHURCH WORLDWIDE
          </h2>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
            THE MANDATE
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
            "Now the hour has come to liberate the world from all oppressions of the devil through the preaching of the word of faith, and I am sending you to undertake this task."
          </p>
          <div className="w-32 h-1 bg-white mx-auto mt-6 opacity-80"></div>
        </div>
      </div>
    </div>
  )
}

export default Page