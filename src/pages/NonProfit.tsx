import React from 'react';
import { Heart, Users, BookOpen, GraduationCap, Target, DollarSign } from 'lucide-react';

const NonProfit = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Merit-Based Scholarships",
      description: "We award $25,000+ annually in scholarships to high-achieving students from underserved communities.",
      impact: "50+ students supported annually"
    },
    {
      icon: BookOpen,
      title: "Free Resource Library",
      description: "Open-source chemistry materials, practice tests, and study guides available to all students worldwide.",
      impact: "10,000+ downloads monthly"
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description: "Collaborations with Title I schools to provide free AP Chemistry preparation courses.",
      impact: "25+ partner schools"
    },
    {
      icon: Heart,
      title: "Volunteer Tutoring",
      description: "Our instructors volunteer 200+ hours annually providing free one-on-one tutoring.",
      impact: "200+ volunteer hours annually"
    }
  ];

  const financials = [
    { category: "Educational Programs", percentage: 65, amount: "$130,000" },
    { category: "Scholarships & Aid", percentage: 25, amount: "$50,000" },
    { category: "Operations", percentage: 8, amount: "$16,000" },
    { category: "Fundraising", percentage: 2, amount: "$4,000" }
  ];

  const impact = [
    { number: "500+", label: "Students Served", description: "Across all our programs" },
    { number: "$150K+", label: "Aid Distributed", description: "In scholarships and free services" },
    { number: "25", label: "Partner Schools", description: "Title I schools supported" },
    { number: "92%", label: "Efficiency Rate", description: "Funds going directly to programs" }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Non-Profit Mission</h1>
          <p className="text-xl leading-relaxed mb-8">
            At ACE Academy, we believe that exceptional chemistry education should be accessible to all students, 
            regardless of their economic background. Every dollar you contribute helps us expand educational equity.
          </p>
          <div className="bg-white/10 rounded-lg p-6 inline-block">
            <p className="text-sm text-gray-200 mb-2">501(c)(3) Non-Profit Organization</p>
            <p className="text-lg font-semibold">EIN: 85-1234567</p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-gray-600">Every contribution makes a measurable difference in students' lives.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {impact.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Give Back</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your tuition and donations fund these impactful programs that expand chemistry education access.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <program.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                    <div className="bg-green-50 px-4 py-2 rounded-lg inline-block">
                      <span className="text-green-700 font-medium text-sm">{program.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Transparency</h2>
            <p className="text-xl text-gray-600 mb-8">
              We believe in complete transparency about how we use your contributions.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Based on our 2024 fiscal year with total revenue of $200,000. We maintain one of the lowest overhead 
              rates in educational non-profits, ensuring maximum impact from every dollar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Fund Allocation</h3>
              <div className="space-y-6">
                {financials.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{item.category}</span>
                      <span className="text-gray-600">{item.amount} ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Donation Impact</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">$25 Donation</h4>
                  <p className="text-gray-600">Provides practice materials for one student</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">$100 Donation</h4>
                  <p className="text-gray-600">Funds one month of free tutoring</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">$500 Donation</h4>
                  <p className="text-gray-600">Sponsors full course access for one student</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">$1,200 Donation</h4>
                  <p className="text-gray-600">Full scholarship for one student's complete program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Scholarship Success Stories</h2>
            <p className="text-xl text-gray-600">
              Meet some of the amazing students whose lives have been changed through our programs.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Maria"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Maria Rodriguez</h3>
                  <p className="text-green-600 font-medium mb-3">Full Scholarship Recipient • AP Score: 5</p>
                  <p className="text-gray-700 leading-relaxed">
                    "Thanks to ACE Academy's scholarship program, I was able to take AP Chemistry despite my family's financial constraints. 
                    The support I received helped me not only pass the exam but fall in love with chemistry. I'm now studying chemical 
                    engineering at UC Berkeley on a full academic scholarship."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="James"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">James Washington</h3>
                  <p className="text-green-600 font-medium mb-3">Community Partnership Program • AP Score: 4</p>
                  <p className="text-gray-700 leading-relaxed">
                    "My high school didn't offer AP Chemistry, but through ACE Academy's partnership with community organizations, 
                    I was able to access the course for free. The instructors believed in me when I didn't believe in myself. 
                    I'm now pre-med at Howard University."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you enroll in our courses or make a direct contribution, you're investing in educational equity 
            and the next generation of scientists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
              <Heart className="mr-2 h-5 w-5" />
              Make a Donation
            </button>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Enroll & Support
            </button>
            <button className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Download Impact Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NonProfit;