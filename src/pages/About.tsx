import React from 'react';
import { Users, Heart, BookOpen, Award } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Abhinav Jain",
      role: "Founder & Instructor",
      bio: "Abhinav Jain is a passionate tutor who has guided many students in AP Chemistry. He achieved a 5 on the May 2025 AP Chemistry Exam and has competed in various Chemistry competitions, such as USNCO and WUCT. He acknowledges the fact that chemistry can feel memorization-heavy, so he focuses his lessons on conceptual and intuitive learning. He has comprehensive experience in general and organic chemistry. He plans to attend the USNCO study camp in June 2026, where the top 20 high school chemists in the nation prepare for the International Chemistry Olympiad. ",
      image: "bopi.png"
    }
   
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Education",
      description: "We believe every student deserves access to excellent chemistry education, regardless of their background."
    },
    {
      icon: Users,
      title: "Student-Centered Approach",
      description: "Our teaching methods are tailored to individual learning styles and needs for maximum success."
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "We maintain the highest standards in curriculum design and instructional quality."
    },
    {
      icon: Award,
      title: "Proven Impact",
      description: "Our success is measured not just in test scores, but in the confidence and knowledge our students gain."
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About ACE Academy</h1>
          <p className="text-xl leading-relaxed">
            Founded with a mission to make world-class AP Chemistry education accessible to all students, 
            while creating positive impact in our community through educational equity.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                ACE is designed to help students develop an intuitive understanding of chemistry—without relying on memorization. Instead of teaching rules in isolation, ACE builds chemistry knowledge from the ground up, giving students a strong foundation that carries over into all sciences, including biology and physics.

              </p>
              <p>
                You don’t need to be “good at chemistry” before joining. ACE will make you good at chemistry.
              </p>
              <h6>
                What Our Program Offers:
              </h6>
              <p>
                Live Classes: 2 per week (Tuesdays & Thursdays, 8:00–9:00 PM EST)

              </p>
              <p>
                Comprehensive Notes & Worksheets to reinforce each lesson
              </p>
              <p>
                Practice Exams (sample exam link)
              </p>
              <p>
              Chemical Relevance Sections (CRS) in every unit, showing real-life applications (e.g., in the Organic Chemistry unit, the CRS explores biochemistry and why hair can be straight or curly)

              </p>
              <p>
              Supplementary Videos to clarify difficult concepts normally taught straight from textbooks
              </p>
              <p>
              Office Hours with Abhinav for 1-on-1 help at no extra cost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from curriculum development to student support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate educators bring decades of combined experience in chemistry education and research.
            </p>
          </div>

          <div className={`grid gap-8 justify-center ${
            team.length === 1
              ? 'grid-cols-1 max-w-md mx-auto'
              : team.length === 2
              ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
              : 'md:grid-cols-3'
          }`}>
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section (commented out) */}
      {/*
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Students Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$50,000+</div>
              <div className="text-blue-100">In Scholarships Awarded</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Partner Schools</div>
            </div>
          </div>
        </div>
      </section>
      */}
    </div>  
  ); 
};   

export default About;