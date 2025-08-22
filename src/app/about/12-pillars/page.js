'Use client'
import React, { useState, useEffect } from 'react';

const page = () => {
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

  const pillars = [
    {
      number: 1,
      title: "FAITH",
      verse: "&quot;For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.&quot;",
      reference: "(1 John 5:4; Ephesians 6:16)"
    },
    {
      number: 2,
      title: "THE WORD",
      verse: "&quot;Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power...&quot;",
      reference: "(John 1:1-12; Hebrews 1:3)"
    },
    {
      number: 3,
      title: "THE SUPERNATURAL",
      verse: "&quot;The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit.&quot;",
      reference: "(Psalm 82:5-7; John 3:8)"
    },
    {
      number: 4,
      title: "PRAISE",
      verse: "&quot;And when they began to sing and to praise, the Lord set ambushments against the children of Ammon, Moab, and mount Seir, which were come against Judah: and they were smitten.&quot;",
      reference: "(2 Chro. 20:20-22; Psalm 67:1-7; 149:1-9)"
    },
    {
      number: 5,
      title: "THE HOLY SPIRIT",
      verse: "&quot;And it shall come to pass in that day, that his burden shall be taken away from off thy shoulder, and his yoke from off thy neck, and the yoke shall be destroyed because of the anointing.&quot;",
      reference: "(Acts 1:1-8; Isaiah 10:27)"
    },
    {
      number: 6,
      title: "PROSPERITY",
      verse: "&quot;Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.&quot; 3 John 2. &quot;Cry yet, saying, Thus saith the Lord of hosts; My cities through prosperity shall yet be spread abroad...&quot;",
      reference: "(3 John 2; Psalm 35:27; Zech. 1:17)"
    },
    {
      number: 7,
      title: "VISION",
      verse: "&quot;Where there is no vision, the people perish: but he that keepeth the law, happy is he.&quot;",
      reference: "(Proverbs 29:18, Jer. 29:11)"
    },
    {
      number: 8,
      title: "PRAYER",
      verse: "&quot;And this is the confidence that we have in him, that, if we ask anything according to his will, he heareth us.&quot;",
      reference: "(1 John 5:14)"
    },
    {
      number: 9,
      title: "HEALING",
      verse: "&quot;That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.&quot;",
      reference: "(Isaiah 53:3-4; Jer. 8:22; Matt. 8:17)"
    },
    {
      number: 10,
      title: "WISDOM",
      verse: "&quot;And wisdom and knowledge shall be the stability of thy times, and strength of salvation: the fear of the Lord is his treasure.&quot;",
      reference: "(Prov. 24:3-4, Isaiah 33:6)"
    },
    {
      number: 11,
      title: "CONSECRATION",
      verse: "&quot;Nevertheless the foundation of God standeth sure, having this seal, the Lord knoweth them that are his. And let every one that nameth the name of Christ depart from iniquity.&quot;",
      reference: "(Hebrews 12:14; 2 Tim. 2:19)"
    },
    {
      number: 12,
      title: "SUCCESS",
      verse: "&quot;This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.&quot;",
      reference: "(Joshua 1:8-10)"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-serif">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 mt-10 tracking-tight">
              12 PILLARS
            </h1>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed opacity-90">
              God commissioned the presiding Bishop of this commission with a Word of Faith ministry to our generation. 
              Remember Paul said, &quot;...if the trumpet give an uncertain sound, who shall prepare himself to the battle?&quot; 
              <span className="block mt-4 text-base sm:text-lg opacity-80">(1 Cor 14:8)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              As a Commission, we have experienced amazing testimonies ever since this commission was handed down - that is over thirty years now! 
              The Holy Ghost further inspired the servant of God, Dr. David Oyedepo, to classify the Word of Faith He has committed into his hands 
              into the specific areas of emphasis, in direct response to Isaiah 40:6, &quot;The voice said, Cry. And he said, What shall I cry?...&quot;
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              He has named these 12 areas of emphasis as the 12 Pillars of our Commission. We have crossed Jordan into power, bearing the ark of liberation. 
              Here are the 12 stones, after the order of Joshua 4:1-8, 20-24. Having stood firm upon these twelve stones! 
              And they have resulted in breakthroughs - both for the ministry and all that are partakers with us, of the same grace.
            </p>
          </div>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 mr-10 ml-10 sm:gap-6 sm:mr-4 max-w-7xl mx-auto">
          {pillars.map((pillar) => (
            <div 
              key={pillar.number}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white sm:text-sm relative">
                <div className="flex items-center justify-between relative text-sm z-10">
                  <div className="flex items-center space-x-3">
                    <div className="text-lg mr-6 font-semibold">
                      {pillar.number}
                    </div>
                    <h3 className="font-bold text-lg lg:text-lg tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <blockquote className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4 italic">
                  <span dangerouslySetInnerHTML={{ __html: pillar.verse }} />
                </blockquote>
                <cite className="text-sm lg:text-base text-red-500 font-semibold not-italic">
                  {pillar.reference}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 hover:text-red-500 hover:cursor-pointer duration-500">
                MISSION STATEMENT
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 space-y-8">
              <p className="text-gray-700 text-lg lg:text-lg leading-relaxed">
                Our Mandate for ministry was received from the LORD Himself in an 18-hour vision. During this vision, 
                a commission was received from the LORD to liberate mankind in all facets of human existence, 
                to restore broken destinies, and to bring healing to the sick and brokenhearted.
              </p>
              
              <div className="bg-gradient-to-r from-red-50 to-red-0 rounded-xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                  This was the Divine mandate received from the LORD:
                </h3>
                <blockquote className="text-red-500 text-lg lg:text-lg font-semibold italic font-serif">
                  &quot;The hour has come to liberate the world from all oppressions of the devil through the preaching of the word of faith, 
                  and I am sending you to undertake this task.&quot;
                </blockquote>
              </div>
              
              <p className="text-gray-700 text-lg lg:text-lg font-serif">
                Today, testimonies of liberation through our messages, books, tapes, magazines and other periodicals are most humbling. 
                The word of faith is working like fire for the liberation of mankind across the nations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-8 z-50 bg-red-500 hover:bg-red-600 text-white p-3 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group hover:cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
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

export default page;