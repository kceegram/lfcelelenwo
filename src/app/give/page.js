'use client'

import { useEffect } from 'react'
import React from 'react'
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <div className='relative w-full h-[60vh] md:h-[70vh] overflow-hidden'>
        <Image 
          src="/give1.jpg" 
          alt="Give Image" 
          width={1920} 
          height={1080} 
          priority 
          className="w-full h-full object-cover" 
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-40"></div>
        
        {/* Bible Verse Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <h1 className="font-serif italic text-xl md:text-2xl lg:text-3xl font-bold mb-4 tracking-wide">
              &quot;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&quot;
            </h1>
            <p className="text-xl md:text-2xl font-medium opacity-90">
              2 Corinthians 9:7 (NIV)
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* How to Give Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up" data-aos-duration="800">
            How to Give
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Digital Giving
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Give conveniently through bank transfers using the account details provided below. This secure method allows you to contribute from anywhere, anytime.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                In-Person Giving
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join us during our church services to give in person. Your presence and contribution help build our ministry of faith.
              </p>
            </div>
          </div>
        </div>

        {/* Ways to Give Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up" data-aos-duration="800">
            Ways to Give
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Offering/Tithe */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <div className="bg-red-500 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Offering/Tithe</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-4">Support the ministry and church operations</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Account Number</p>
                    <p className="text-2xl font-bold text-gray-800">0553000415</p>
                    <p className="text-lg text-red-500 font-semibold">Ecobank</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 text-center">
                    You can also give in person during church service
                  </p>
                </div>
              </div>
            </div>

            {/* Welfare */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <div className="bg-red-500 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Welfare</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-4">Support church welfare programs</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Account Number</p>
                    <p className="text-2xl font-bold text-gray-800">2840123085</p>
                    <p className="text-lg text-red-500 font-semibold">Ecobank</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 text-center">
                    You can also give in person during church service
                  </p>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              <div className="bg-red-500 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Transport</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-4">Support church transportation needs</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Account Number</p>
                    <p className="text-2xl font-bold text-gray-800">2840123793</p>
                    <p className="text-lg text-red-500 font-semibold">Ecobank</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 text-center">
                    You can also give in person during church service
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 rounded-lg p-8 text-center" data-aos="fade-up" data-aos-duration="800">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Thank You for Your Generosity
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Your faithful giving enables us to fulfill our mission and purpose. 
            Every contribution, whether large or small, makes a significant impact in advancing God&apos;s kingdom.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Page