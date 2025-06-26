'use client'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Image Section */}
      <div className='relative w-full h-[60vh] md:h-[70vh] overflow-hidden'>
        <Image
          src="/educationimg.jpg"
          alt="Kingdom Heritage Model School"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
          data-aos="zoom-in" 
          data-aos-duration="1000"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0  bg-opacity-30"></div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2'>
            KINGDOM HERITAGE MODEL SCHOOL
          </h1>
          <h2 className='text-xl md:text-2xl font-semibold text-red-600 mb-2'>
            ELELENWO
          </h2>
          <h3 className='text-lg md:text-xl font-medium text-gray-600 mb-6'>
            (KHMS) - A Branch of Kingdom Heritage Model School, Canaanland, Ota
          </h3>
        </div>

        {/* Scrollable Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-h-[600px] overflow-y-auto">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About Kingdom Heritage Model School Elelenwo</h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Kingdom Heritage Model School (KHMS) Elelenwo is a proud branch of the renowned Kingdom Heritage Model School, Canaanland, Ota. As a primary school within the Winners Chapel International network of schools, KHMS Elelenwo brings the same high standards of foundational education and Christian values to the Elelenwo community and surrounding areas.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our primary school maintains the established tradition of providing quality foundational education that nurtures both academic achievement and strong Christian values. We are committed to giving children the best possible start in their educational journey, following the proven educational framework of our parent institution.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Heritage</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As a branch of Kingdom Heritage Model School, Canaanland, Ota, we inherit a rich legacy of educational excellence that spans years of proven success. Our parent institution has set the standard for quality Christian education in Nigeria, and we proudly continue this tradition in Elelenwo, bringing world-class education closer to home.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To be a leading primary educational institution that provides excellent foundational education rooted in Christian values, preparing young minds for academic success and godly character development.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To provide quality primary education that combines academic excellence with Christian values, developing young learners intellectually, spiritually, morally, and socially to build a strong foundation for their future educational journey. As a branch of KHMS Canaanland, we maintain the same high standards while serving the local Elelenwo community.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Core Values</h4>
              <ul className="text-gray-700 mb-4 leading-relaxed list-disc pl-6">
                <li><strong>Excellence:</strong> We strive for the highest standards in foundational learning</li>
                <li><strong>Integrity:</strong> We instill honesty and moral uprightness from an early age</li>
                <li><strong>Faith:</strong> We build young minds on Christian principles</li>
                <li><strong>Innovation:</strong> We use age-appropriate, modern teaching methods</li>
                <li><strong>Nurturing:</strong> We provide a caring environment for young learners</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Primary Education Programs</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                KHMS Elelenwo offers comprehensive primary education programs covering Nursery through Primary 6, following the same proven curriculum framework as our parent institution in Canaanland, Ota. Our curriculum is based on the Nigerian National Curriculum for Basic Education, enhanced with creative teaching methods and Christian values integration.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Facilities & Resources</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our primary school is equipped with child-friendly facilities including colorful classrooms designed for young learners, playground equipment, library with age-appropriate books, computer lab, and a safe, secure environment that supports both learning and play activities.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Why Choose KHMS Elelenwo Primary School?</h4>
              <ul className="text-gray-700 mb-4 leading-relaxed list-disc pl-6">
                <li>Part of the prestigious Kingdom Heritage Model School network</li>
                <li>Same high standards as KHMS Canaanland, Ota</li>
                <li>Experienced teachers specialized in primary education</li>
                <li>Small class sizes for individual attention</li>
                <li>Strong emphasis on character building from early age</li>
                <li>Age-appropriate learning activities and programs</li>
                <li>Safe and nurturing environment for young children</li>
                <li>Active parent-school partnership</li>
                <li>Excellent foundation for future academic success</li>
                <li>Convenient location in Elelenwo</li>
                <li>Affordable quality education</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Admission Information</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We welcome children from ages 2-11 years (Nursery 1 through Primary 6) who are ready to begin their educational journey in a Christian environment. Admission is open throughout the year, and we encourage parents to visit our campus to see our child-friendly facilities and meet our dedicated primary education teachers.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
                <p className="text-red-700 font-semibold">
                  For more information about admissions, fees, and primary school programs, please contact our school office or visit during our open house events. Give your child the best foundation for their educational journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page