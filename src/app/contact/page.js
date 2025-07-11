'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Page = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitMessage('Thank you for subscribing to our newsletter!')
      setEmail('')
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 3000)
    }, 1000)
  }

  const openGoogleMaps = () => {
    const address = "Living Faith Church Elelenwo, Odani Junction, opposite Total Fuel Station, East West Road, Elelenwo Port Harcourt, Rivers State"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  const openFacebook = () => {
    window.open('https://www.facebook.com/lfcelelenwo', '_blank')
  }

  const openYouTube = () => {
    window.open('https://www.youtube.com/@lfcelelenwo', '_blank')
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Image Section */}
      <div className='relative w-full h-[70vh] overflow-hidden'>
        <Image
          src="/contactmain.jpg"
          alt="Living Faith Church Elelenwo Contact"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0  bg-opacity-30"></div>
      </div>
        {/* Overlay */}
        
              
              {/* Contact Info */}
              
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-6 ml-4 mr-4">
          
          {/* Google Maps Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-red-600 to-red-500 text-white">
              <h2 className="text-2xl font-bold mb-2">Find Us Here</h2>
              <p className="opacity-90">Visit us at our church location</p>
            </div>
            <div className="p-6">
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5234567890123!2d7.0123456789!3d4.8234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDknMjQuNSJOIDfCsDAwJzQ0LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Living Faith Church Elelenwo Location"
                ></iframe>
              </div>
              <div className="mt-4 p-2 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Address Details:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Living Faith Church Elelenwo<br />
                  Odani Junction, Opposite Total Fuel Station<br />
                  East West Road, Elelenwo<br />
                  Port Harcourt, Rivers State, Nigeria
                </p>
                <button
                  onClick={openGoogleMaps}
                  className="mt-3 text-red-500 hover:text-red-600 font-medium text-sm transition-colors"
                >
                  Open in Google Maps →
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden ">
            <div className="p-4 bg-gradient-to-r from-red-500 to-red-500 text-white ">
              <h2 className="text-2xl font-bold mb-2">Stay Connected</h2>
              <p className="opacity-90">Subscribe to our newsletter for updates</p>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Join Our Newsletter
                </h3>
                <p className="text-gray-600 mb-4">
                  Get the latest updates about our church activities, events, and spiritual messages 
                  delivered directly to your inbox.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 hover:bg-red-600 hover:cursor-pointer disabled:bg-red-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                </button>
              </form>

              {submitMessage && (
                <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-500 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">What you&apos;ll receive:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Weekly spiritual messages and devotionals</li>
                  <li>• Church event announcements and updates</li>
                  <li>• Special program invitations</li>
                  <li>• Community news and prayer requests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        {/* Contact Cards Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6 ml-4 mr-4">
            
            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg mb-10 p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">Reach out to us for any inquiries</p>
              <div className="space-y-2">
                <a href="tel:+2347031048849" className="block font-semibold text-red-500 hover:text-red-600 font-medium">
                  07031048849
                </a>
                <a href="tel:+2348138060591" className="block font-semibold text-red-500 hover:text-red-600 font-medium">
                  08138060591
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg mb-10 p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions and feedback</p>
              <a href="mailto:lfcelelenwo@gmail.com" className="text-red-500 hover:text-red-600 font-semibold">
                lfcelelenwo@gmail.com
              </a>
            </div>

            {/* Visit Card */}
            <div className="bg-white rounded-xl shadow-lg mb-10 p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Visit Us</h3>
              <p className="text-gray-600 mb-4">Come worship with us</p>
              <button
                onClick={openGoogleMaps}
                className="text-red-500 hover:text-red-600 font-bold"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 text-center mb-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <button
              onClick={openFacebook}
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md hover:shadow-lg"
              title="Follow us on Facebook"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button
              onClick={openYouTube}
              className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 shadow-md hover:shadow-lg"
              title="Subscribe to our YouTube channel"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page