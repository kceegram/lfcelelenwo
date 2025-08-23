"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
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

  const ministries = [
    {
      id: 1,
      title: "Children's Ministry",
      image: "/childrenchurch.jpg",
      verse: "&quot;Train up a child in the way he should go; even when he is old he will not depart from it.&quot;",
      reference: "Proverbs 22:6",
      benefit: "&quot;Our Children&apos;s Ministry provides a safe, nurturing environment where young hearts encounter God&apos;s love through engaging Bible stories, worship, crafts, and play. We lay the foundation for lifelong faith while teaching children about God&apos;s character and His plan for their lives.&quot;",
      icon: "👶",
      color: "from-red-50 to-gray-100",
      borderColor: "border-red-300"
    },
    {
      id: 2,
      title: "Teens Ministry",
      image: "/teenschurchimg.jpg",
      verse: "&quot;Don&apos;t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.&quot;",
      reference: "1 Timothy 4:12",
      benefit: "&quot;Our Teens Ministry creates a dynamic community where teenagers can explore their faith, ask tough questions, and discover their identity in Christ. Through relevant teaching, fellowship, and service opportunities, we equip teens to navigate life&apos;s challenges with biblical wisdom and peer support.&quot;",
      icon: "🌟",
      color: "from-red-50 to-gray-100",
      borderColor: "border-red-300"
    },
    {
      id: 3,
      title: "Youth Ministry",
      image: "/youthchurchimg.jpg",
      verse: "&quot;Remember your Creator in the days of your youth, before the days of trouble come and the years approach when you will say, &apos;I find no pleasure in them.&apos;&quot;",
      reference: "Ecclesiastes 12:1",
      benefit: "&quot;Our Youth Ministry empowers young adults to live out their faith boldly in today&apos;s world. We focus on discipleship, leadership development, and practical life skills while building authentic relationships and preparing them for their calling in ministry, career, and family life.&quot;",
      motto: "YOUTH ALIVE🔥 !!",
      response: "RISING GIANTS",
      icon: "🔥",
      color: "from-red-50 to-gray-100",
      borderColor: "border-red-300"
    },
    {
      id: 4,
      title: "WORD OF FAITH BIBLE INSTITUTE (WOFBI)",
      verse: "&quot;Study to show yourself approved unto God, a workman that needs not to be ashamed, rightly dividing the word of truth.&quot;",
      reference: "2 Timothy 2:15",
      benefit: "&quot;The Word of Faith Bible Institute [WOFBI] is a Ministry/Leadership Training Centre, wofbi is a winners based certificate course program which serves as the training arm of the Living Faith Church Worldwide. The courses are designed to motivate participants positively towards distinction both in their secular as well as spiritual engagement.&quot;",
      courses: [
        {
          name: "Junior Bible School (JBS)",
          description: "&quot;Junior Bible School is a divine set up by God to help us correct a lot of issues in the lives of our children and make them align with His plans and purposes for them based on His Word.&quot;"
        },
        {
          name: "Basic Certificate Course (BCC)",
          description: "&quot;A foundational program that establishes solid biblical principles and fundamental Christian doctrines, equipping believers with essential knowledge for effective Christian living and basic ministry service.&quot;"
        },
        {
          name: "Leadership Certificate Course (LCC)",
          description: "&quot;An intermediate program focused on developing leadership skills rooted in biblical principles, preparing participants for various leadership roles within the church and society with practical ministry training.&quot;"
        },
        {
          name: "Leadership Diploma Course (LDC)",
          description: "&quot;An advanced comprehensive program that provides in-depth theological training and advanced leadership development, preparing graduates for senior ministry positions and pastoral/leadership responsibilities.&quot;"
        }
      ],
      foundationSchool: {
        name: "FOUNDATION SCHOOL",
        subtitle: "BELIEVERS FOUNDATION/MEMBERSHIP CLASS",
        quote: "&quot;If the foundations be destroyed, what can the righteous do?&quot;",
        reference: "Psalm 11:3",
        description: "&quot;Believers/Membership class held immediately after every service, first service 7:00AM and second service 9:00AM, for all first-time worshipers and new converts.&quot;"
      },
      icon: "📚",
      color: "from-red-50 to-grey-100",
      borderColor: "border-red-300",
      isTextOnly: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 mt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 hover:text-red-500 duration-1500">
            Our Ministries
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto font-serif">
            Discover how God is moving through our various ministries. Each ministry is designed to nurture faith, 
            build community, and equip believers for a life of purpose and service.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Ministries Grid */}
        <div className="space-y-16">
          {ministries.map((ministry, index) => (
            <div 
              key={ministry.id}
              className={ministry.isTextOnly ? "flex justify-center" : `flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Section - Hero Style (only for non-text-only ministries) */}
              {!ministry.isTextOnly && (
                <div className="lg:w-1/2">
                  <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-2xl shadow-2xl group">
                    <Image
                      src={ministry.image}
                      alt={ministry.title}
                      width={1920}
                      height={1080}
                      priority
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay for better readability */}
                    <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300 rounded-2xl"></div>
                    
                    {/* Ministry Icon Overlay */}
                    <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-3 shadow-lg">
                      <div className="text-2xl">{ministry.icon}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div className={ministry.isTextOnly ? "max-w-4xl text-center space-y-6" : "lg:w-1/2 space-y-6"}>
                <div className={ministry.isTextOnly ? "flex flex-col items-center gap-3" : "flex items-center gap-3"}>
                  <div className="text-4xl">{ministry.icon}</div>
                  <div>
                    <h2 className="text-3xl font-serif md:text-4xl font-bold text-gray-900 hover:text-red-500 durationn-1800">
                      {ministry.title}
                    </h2>
                    {ministry.subtitle && (
                      <p className="text-lg font-serif text-gray-600 font-medium">
                        {ministry.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bible Verse */}
                <div className={`bg-gradient-to-r ${ministry.color} p-6 rounded-xl border-l-4 ${ministry.borderColor} shadow-sm`}>
                  <blockquote className="text-red-600 font-medium text-lg italic font-serif mb-3">
                    <span dangerouslySetInnerHTML={{ __html: ministry.verse }} />
                  </blockquote>
                  <cite className="text-gray-600 font-semibold font-serif text-sm uppercase tracking-wide">
                    — {ministry.reference}
                  </cite>
                </div>

                {/* Ministry Benefit */}
                <div className="prose prose-lg text-gray-700">
                  <p className="font-serif leading-relaxed text-base md:text-lg">
                    <span dangerouslySetInnerHTML={{ __html: ministry.benefit }} />
                  </p>
                </div>

                {/* WOFBI Courses */}
                {ministry.courses && (
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl font-serif sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 text-center sm:text-left">Available Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {ministry.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300 w-full">
                          <h4 className="text-base font-serif sm:text-lg lg:text-xl font-bold text-red-500 mb-2 break-words">{course.name}</h4>
                          <p className="text-gray-700 text-sm font-serif sm:text-base leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: course.description }} />
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Foundation School - Separate Section */}
                {ministry.foundationSchool && (
                  <div className="mt-8 mb-8 sm:mt-12 space-y-4 sm:space-y-6 w-full">
                    <div className="border-t-2 border-grey-800 pt-6 sm:pt-8">
                      <h3 className="text-2xl font-serif sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 text-center px-2">
                        {ministry.foundationSchool.name}
                      </h3>
                      <div className="bg-gradient-to-r from-red-50 to-grey-50 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg border border-orange-200 mx-2 sm:mx-0">
                        <h4 className="text-lg font-serif sm:text-xl lg:text-2xl font-bold text-red-600 mb-3 sm:mb-4 text-center px-2">
                          {ministry.foundationSchool.subtitle}
                        </h4>
                        
                        {/* Scripture Quote */}
                        <div className="bg-white p-4 sm:p-6 rounded-lg mb-4 font-serif sm:mb-6 border-l-4 border-red-500 shadow-sm">
                          <blockquote className="text-red-600 font-semibold font-serif text-base sm:text-lg lg:text-xl italic mb-3 text-center px-2 leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: ministry.foundationSchool.quote }} />
                          </blockquote>
                          <cite className="text-gray-600 font-bold text-xs sm:text-sm text-center block">
                            — {ministry.foundationSchool.reference}
                          </cite>
                        </div>
                        
                        {/* Description */}
                        <div className="text-center px-2 sm:px-4">
                          <p className="text-gray-800 font-serif font-semibold text-sm sm:text-base lg:text-lg leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: ministry.foundationSchool.description }} />
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                )}

                {/* Youth Ministry Special Callout */}
                {ministry.motto && ministry.response && (
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="text-center space-y-3">
                      <div className="text-2xl font-serif md:text-3xl font-bold tracking-wide">
                        {ministry.motto}
                      </div>
                      <div className="text-xl font-serif md:text-2xl font-semibold text-yellow-200">
                        {ministry.response}
                      </div>
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                
                </div>
              </div>
          ))}
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
                    aria-label="Scroll to top"
         >
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
  );
};

export default Page;