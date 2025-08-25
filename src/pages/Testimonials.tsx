import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Advik Tatavarthi",
      school: "Troy High School",
      score: "AP Score: 5",
      image: "",
      text: "Ace Academy completely transformed my understanding of AP Chemistry. Abhinav was incredibly helpful in making the concepts clear and fun to learn by tieing them into real-world applications. With his help I was able to do well on all assesments and the AP exam!"
    },
    {
      name: "Paul Lei",
      school: "Troy High School",
      score: "AP Score: 5",
      image: "",
      text: "Abhinav is an amazing tutor who really cares about his students. His teaching style is very intuitive and he makes sure to explain concepts in a way that is easy to understand. Thanks to his guidance, I was able to achieve a 5 on the AP Chemistry exam!"
    },
    {
      name: "Jayden Paik",
      school: "Troy High School",
      score: "AP Score: 5",
      image: "",
      text: "I highly recommend Ace Academy to anyone looking to excel in AP Chemistry. Abhinav's lessons are engaging and he provides plenty of practice problems to help reinforce the material. His support and encouragement made a huge difference in my performance on the exam."
    },

  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating", description: "" },
    { number: "100%", label: "Pass Rate", description: "Students scoring 3+" },
    { number: "80%", label: "Top Scores", description: "Students scoring 4 or 5" },
    { number: "100%", label: "Satisfaction", description: "Would recommend to friends" }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Student Success Stories</h1>
          <p className="text-xl leading-relaxed">
            Hear from our amazing students who've achieved their AP Chemistry goals and beyond.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">
              Real stories from real students who've transformed their chemistry understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.school}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-3 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {testimonial.score}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-300" />
                  <p className="text-gray-700 leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to achieve your AP Chemistry goals and make a difference? Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
              href="https://forms.gle/FLrNAkH9nTLvofNt5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Enroll Now
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;