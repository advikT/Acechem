import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Target, ChevronRight, Play } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Expert Curriculum",
      description: "Comprehensive AP Chemistry curriculum designed by experienced educators and industry professionals."
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with maximum 12 students per class for optimal learning outcomes."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "95% of our students achieve a score of 4 or 5 on the AP Chemistry exam."
    },
    {
      icon: Target,
      title: "Non-Profit Mission",
      description: "All proceeds support educational initiatives and scholarships for underserved students."
    }
  ];

  const stats = [
    { number: "500+", label: "Students Taught" },
    { number: "95%", label: "Pass Rate" },
    { number: "4.8/5", label: "Average Rating" },
    { number: "$50K+", label: "Scholarships Awarded" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Master AP Chemistry with 
              <span className="text-blue-300"> ACE Academy</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join our elite AP Chemistry program where exceptional teaching meets proven results. 
              Transform your understanding of chemistry while supporting educational equity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
              >
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
    { /* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose ACE Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine academic excellence with social impact, creating an unparalleled learning experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Excel in AP Chemistry?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of successful students who've achieved their AP Chemistry goals with ACE Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;