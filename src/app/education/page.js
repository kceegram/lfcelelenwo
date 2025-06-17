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
          data-aos-duration="1500"
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
          <h2 className='text-xl md:text-2xl font-semibold text-red-600 mb-6'>
            (KHMS)
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-h-[600px] overflow-y-auto">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About Kingdom Heritage Model School</h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Kingdom Heritage Model School (KHMS) is a Christ-centered educational institution committed to providing quality education that nurtures both academic excellence and Christian values. Our school is dedicated to raising a generation of leaders who will impact their communities and the world at large.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To be a leading educational institution that produces globally competitive students rooted in Christian values, equipped with knowledge, skills, and character to excel in all spheres of life.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To provide holistic education that combines academic excellence with Christian values, developing students intellectually, spiritually, morally, and socially to become responsible citizens and leaders in their communities.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Our Core Values</h4>
              <ul className="text-gray-700 mb-4 leading-relaxed list-disc pl-6">
                <li><strong>Excellence:</strong> We strive for the highest standards in all we do</li>
                <li><strong>Integrity:</strong> We uphold honesty and moral uprightness</li>
                <li><strong>Faith:</strong> We build our foundation on Christian principles</li>
                <li><strong>Innovation:</strong> We embrace creativity and modern teaching methods</li>
                <li><strong>Service:</strong> We cultivate a heart for serving God and humanity</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Academic Programs</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                KHMS offers comprehensive educational programs from Early Years through Secondary level, following the Nigerian National Curriculum enhanced with international best practices. Our curriculum is designed to prepare students for both local and international examinations.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Facilities & Resources</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our school is equipped with modern facilities including well-equipped classrooms, science laboratories, computer labs, library, sports facilities, and a conducive learning environment that supports both academic and extracurricular activities.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Why Choose KHMS?</h4>
              <ul className="text-gray-700 mb-4 leading-relaxed list-disc pl-6">
                <li>Qualified and dedicated teaching staff</li>
                <li>Small class sizes for personalized attention</li>
                <li>Strong emphasis on character development</li>
                <li>Comprehensive extracurricular programs</li>
                <li>Safe and nurturing learning environment</li>
                <li>Active parent-school partnership</li>
                <li>Excellent academic track record</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mb-3">Admission Information</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We welcome students from diverse backgrounds who are ready to embrace our values and excel academically. Admission is open throughout the year, and we encourage parents to visit our campus to experience firsthand what makes KHMS special.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
                <p className="text-red-700 font-semibold">
                  For more information about admissions, fees, and programs, please contact our admissions office or visit the school during our open house events.
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