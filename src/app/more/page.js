import React from 'react';
import Image from 'next/image';

const Page = () => {
  const serviceUnits = [
    {
      name: "CHOIR UNIT",
      image: "/choirunit.img.jpg",
      description: "The Choir Unit leads congregational worship through music and song, creating an atmosphere of praise and worship that draws hearts closer to God. This ministry enhances spiritual experience through music, facilitates worship expression, and brings unity in praise to glorify God&apos;s name.",
      kingdomBenefit: "Advances the Kingdom through spirit-filled worship that transforms hearts, draws souls to Christ, and creates an atmosphere where the Holy Spirit moves powerfully among God&apos;s people."
    },
    {
      name: "TECHNICAL UNIT",
      image: "/technicalunit.jpg",
      description: "The Technical Unit manages sound systems, lighting, and audio-visual equipment to ensure seamless worship services and effective communication. This unit enables clear communication of God&apos;s word, enhances worship experience through quality sound and visuals, and supports ministry effectiveness.",
      kingdomBenefit: "Amplifies Kingdom impact by ensuring God&apos;s word reaches every ear clearly, enabling effective evangelism and discipleship through multimedia ministry that transcends traditional boundaries."
    },
    {
      name: "USHERING UNIT",
      image: "/usheringunit.img.jpg",
      description: "The Ushering Unit welcomes members and visitors, maintains order during services, and assists with seating and offering collection. This ministry creates a welcoming environment, ensures orderly worship, and demonstrates Christ&apos;s love through hospitality and service.",
      kingdomBenefit: "Extends Kingdom hospitality that makes newcomers feel God&apos;s love from the moment they arrive, creating pathways for salvation and church membership through genuine Christian welcome."
    },
    {
      name: "GILEAD MEDICAL UNIT",
      image: "/gileadunit1.img.jpg",
      description: "The Gilead Medical Unit provides first aid and medical assistance during church services and events, caring for the physical well-being of the congregation. This unit demonstrates God&apos;s love through healing ministry, ensures safety during gatherings, and supports the holistic care of church members.",
      kingdomBenefit: "Manifests Kingdom healing power by providing physical care that opens hearts to receive spiritual healing, demonstrating Christ&apos;s compassion and creating opportunities for ministry and testimony."
    },
    {
      name: "HOSPITALITY UNIT",
      image: "/images/hospitality-unit.jpg",
      description: "The Hospitality Unit coordinates refreshments, special events, and creates a warm, welcoming atmosphere for fellowship and community building. This ministry fosters Christian fellowship, strengthens community bonds, and reflects God&apos;s love through service and care for others.",
      kingdomBenefit: "Builds Kingdom relationships through fellowship that strengthens faith, encourages believers, and creates environments where spiritual growth flourishes and divine connections are made."
    },
    {
      name: "FOLLOW-UP AND VISITATION UNIT",
      image: "/follow-upunit.jpg",
      description: "The Follow-up and Visitation Unit reaches out to new members, visits the sick and absent, and maintains connection with the church community. This unit strengthens pastoral care, ensures no one is forgotten, and extends the church&apos;s ministry beyond the sanctuary walls.",
      kingdomBenefit: "Expands Kingdom reach through personal discipleship and care that prevents backsliding, encourages spiritual growth, and demonstrates Christ&apos;s love in practical ways that lead to deeper commitment."
    },
    {
      name: "SANCTUARY UNIT",
      image: "/sanctuaryunit.jpg",
      description: "The Sanctuary Unit maintains the cleanliness and sanctity of the worship space, ensuring a holy and reverent environment for worship. This ministry preserves the sacred atmosphere, honors God through excellence in facility care, and creates a conducive environment for worship.",
      kingdomBenefit: "Prepares Kingdom ground where God&apos;s presence dwells powerfully, creating sacred spaces that facilitate divine encounters, spiritual breakthrough, and life-transforming worship experiences."
    },
    {
      name: "MAINTENANCE UNIT",
      image: "/maintenanceunit.jpg",
      description: "The Maintenance Unit handles repairs, upkeep, and general maintenance of church facilities, ensuring a safe and functional worship environment. This unit protects church assets, ensures safety for all members, and demonstrates faithful stewardship of God&apos;s resources.",
      kingdomBenefit: "Preserves Kingdom infrastructure that enables continuous ministry, protects God&apos;s investment in His house, and ensures the church remains a beacon of hope and transformation in the community."
    },
    {
      name: "&quot;PROTOCOL UNIT&quot;",
      image: "/protocolunit.jpg",
      description: "The Protocol Unit manages ceremonial aspects of worship, coordinates special events, and ensures proper conduct during services. This ministry maintains order and reverence in worship, facilitates smooth service flow, and upholds the dignity of sacred gatherings.",
      kingdomBenefit: "Establishes Kingdom order that reflects heaven&apos;s structure, creating environments where God&apos;s glory can be revealed powerfully and where spiritual protocols enhance divine encounters."
    },
    {
      name: "CROWD CONTROL UNIT",
      image: "/crowdcontrolunit.jpg",
      description: "The Crowd Control Unit manages congregation flow, ensures safety during large gatherings, and maintains order in high-traffic areas. This unit ensures safety and security, prevents overcrowding, and creates a peaceful environment conducive to worship and fellowship.",
      kingdomBenefit: "Maintains Kingdom peace and safety that allows God&apos;s people to worship without distraction, ensuring every believer can focus on receiving from God and experiencing His presence freely."
    },
    {
      name: "TRAFFIC UNIT",
      image: "/trafficunit.jpg",
      description: "The Traffic Unit manages parking and vehicular movement around church premises, ensuring smooth traffic flow and member safety. This ministry enhances safety and convenience, reduces congestion, and demonstrates care for the community through organized traffic management.",
      kingdomBenefit: "Facilitates Kingdom access by removing barriers that might prevent people from attending church, ensuring smooth arrival and departure that encourages consistent church attendance and participation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-800 to-red-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl mt-14 font-serif sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8">
            OUR SERVICE UNITS
          </h1>
          
          {/* Bible Quote */}
          <div className="max-w-4xl mx-auto text-center px-4">
            <blockquote className="text-base italic font-serif sm:text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed">
              &quot;Each of you should use whatever gift you have to serve others, as faithful stewards of God&apos;s grace in its various forms.&quot;
            </blockquote>
            <cite className="block mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold">
              - 1 Peter 4:10 (NIV)
            </cite>
          </div>
        </div>
      </div>

      {/* Service Units Section - Vertical Block Layout */}
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-12 lg:space-y-16">
          {serviceUnits.map((unit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={unit.image}
                  alt={unit.name}
                  width={300}
                  height={500}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  priority={index < 3}
                />
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl font-serif text-red-500 hover:text-red-500 duration-1500 sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                  {unit.name}
                </h2>
                
                {/* Description */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-base font-serif sm:text-lg text-gray-700 leading-relaxed text-justify">
                    {unit.description}
                  </p>
                </div>
                
                {/* Kingdom Benefit */}
                <div className="bg-gradient-to-r from-red-50 to-grey-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-serif sm:text-xl font-semibold text-red-500 mb-3 sm:mb-4 flex items-center">
                    <span className="mr-2">👑</span>
                    Kingdom Benefit
                  </h3>
                  <p className="text-base font-serif sm:text-lg text-gray-700 leading-relaxed text-justify italic">
                    {unit.kingdomBenefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" text-gray-800 py-8  sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl text-red-500 font-serif sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Find Your Place in God&apos;s Service
          </h2>
          
          <p className="text-lg font-serif sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Every believer has a unique calling and gifting. Discover where God is leading you to serve His kingdom and be a blessing to His people.
          </p>
          
          <div className="max-w-3xl mx-auto px-4">
            <blockquote className="text-base font-semibold text-red-600 font-serif italic sm:text-lg md:text-xl italic mb-3 sm:mb-4 leading-relaxed">
              &quot;You shall serve the Lord your God, and he shall bless thy bread, and thy water; and I will take sickness away from the midst of thee&quot;.
            </blockquote>
            <cite className="text-sm sm:text-base md:text-lg font-semibold">
              - Exodus 23:25 (NIV)
            </cite>
          </div>
          
          <div className="mt-6 sm:mt-8">
            <button className="bg-white text-red-500 px-6  font-serif sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Join a Service Unit Today
            </button>
          </div>
        </div>
      </div>

      {/* Winners Satellite Fellowship Section */}
      <div className="text-gray-800 py-12 sm:py-16 lg:py-20">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-red-500 font-serif sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8">
            WINNERS SATELLITE FELLOWSHIP (WSF)
          </h1>
          
          {/* Bible Quote */}
          <div className="max-w-3xl mx-auto text-center px-4 mb-8 sm:mb-12">
            <blockquote className="text-base text-red-600 font-semibold italic font-serif sm:text-lg md:text-xl lg: font-light italic leading-relaxed">
              &quot;Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.&quot;
            </blockquote>
            <cite className="block mt- sm:mt-4 text-sm sm:text-base lg:text-lg font-semibold">
              - Proverbs 27:17 (KJV)
            </cite>
          </div>
        </div>
      </div>

      {/* WSF Content Section */}
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Image Container */}
            <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
              <Image
                src="/homecell2.img.jpg"
                alt="Winners Satellite Fellowship"
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-serif text-red-500 sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
                Winners Satellite Fellowship
              </h2>
              
              <h3 className="text-xl font-serif text-red-500 sm:text-2xl font-semibold text-blue-600 mb-4 sm:mb-6 text-center">
                Creating a Forum for a Caring Christian Fellowship
              </h3>
              
              {/* Main Description */}
              <div className="mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-red-50 to-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-500 mb-6">
                  <blockquote className="text-base font-serif italic sm:text-lg text-red-600 leading-relaxed mb-4">
                    &quot;And they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart.&quot;
                  </blockquote>
                  <cite className="text-sm sm:text-base font-semibold text-red-600">
                    - Acts 2:46 (KJV)
                  </cite>
                </div>
                
                <p className="text-base font-serif sm:text-lg text-gray-700 leading-relaxed text-justify mb-4">
                  The advent of megachurches and the busyness of the times have resulted in a church with faceless members where people are being taught but not being touched. The Church has consequently become a large ocean with drowning members.
                </p>
                
                <p className="text-base font-serif sm:text-lg text-gray-700 leading-relaxed text-justify">
                  The Winners Satellite Fellowship (WSF) is a home cell meeting set to create a forum for a caring fellowship where every member of the Church is adequately cared for.
                </p>
              </div>
              
              {/* Objectives */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl font-serif text-red-500 sm:text-2xl font-semibold text-blue-600 mb-4 sm:mb-6">
                  Winners Satellite Fellowship Objectives
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="text-lg font-serif font-semibold text-red-600 mb-2">1. To Care</h4>
                    <p className="text-base font-serif text-gray-700">Heart of compassion</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-lg font-serif font-semibold text-green-600 mb-2">2. To Feed</h4>
                    <p className="text-base font-serif text-gray-700">Nourished and balanced saints</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="text-lg font-serif font-semibold text-yellow-600 mb-2">3. To Teach</h4>
                    <p className="text-base font-serif text-gray-700">Knowledge and enlightenment</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <h4 className="text-lg font-serif font-semibold text-orange-600 mb-2">4. To Lead</h4>
                    <p className="text-base font-serif text-gray-700">Leading leaders</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Content */}
              <div className="mb-6 sm:mb-8">
                <p className="text-base font-serif sm:text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  After the order of the 1st century New Testament church, the WSF is out to care, feed and nourish the members.
                </p>
                
                <p className="text-base font-serif sm:text-lg text-gray-700 leading-relaxed text-justify mb-4">
                  The WSF brings Jesus to your doorstep with the following results:
                </p>
                
                <ul className="list-none space-y-2 mb-6">
                  <li className="text-base font-serif sm:text-lg text-gray-700 flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    Undeniable signs and wonders
                  </li>
                  <li className="text-base font-serif sm:text-lg text-gray-700 flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    Life-changing experiences
                  </li>
                  <li className="text-base font-serif sm:text-lg text-gray-700 flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    Christian care and loving interactions
                  </li>
                  <li className="text-base font-serif sm:text-lg text-gray-700 flex items-start">
                    <span className="text-red-600 mr-3">•</span>
                    Destiny moulding teaching and much more in a non-denominational environment
                  </li>
                </ul>
              </div>
              
              {/* Meeting Times */}
              <div className="bg-gradient-to-r from-red-50 to-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-serif text-red-500 sm:text-2xl font-semibold text-blue-600 mb-4">
                  Meeting Times
                </h3>
                
                <div className="mb-4">
                  <p className="text-base font-serif sm:text-lg text-gray-700 mb-2">
                    <strong>Date:</strong> Every Saturday of the month
                  </p>
                  <p className="text-base font-serif sm:text-lg text-gray-700">
                    <strong>Time:</strong> 5:00pm – 6:00pm
                  </p>
                </div>
                
                <p className="text-lg font-serif text-red-500 sm:text-xl font-semibold text-red-500 text-center mt-6 mb-10">
                  Join a Fellowship Near You
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      

      {/* Footer */}
      <div className="bg-red-600  py-6 sm:py-8">
      </div>
    </div>
  );
};

export default Page;