import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is ACE Academy?",
          answer: "ACE Academy is a 501(c)(3) non-profit organization dedicated to providing exceptional AP Chemistry education. We offer comprehensive courses, personalized instruction, and support programs to help students excel in AP Chemistry while promoting educational equity through scholarships and community partnerships."
        },
        {
          question: "How is ACE Academy different from other test prep programs?",
          answer: "Unlike commercial test prep companies, we're a non-profit focused on educational impact rather than profit. Our instructors are PhD-level chemistry experts, we maintain small class sizes (maximum 12-20 students), and every dollar contributed supports our mission of expanding chemistry education access to underserved communities."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer a 14-day money-back guarantee from the start of your course. If you're not satisfied with the program within the first two weeks, we'll provide a full refund. After this period, we can discuss partial refunds or transfers to future sessions on a case-by-case basis."
        }
      ]
    },
    {
      category: "Courses",
      questions: [
        {
          question: "What's the difference between your course options?",
          answer: "We offer three main programs: (1) AP Chemistry Complete - our full-year comprehensive program with hybrid delivery; (2) AP Chemistry Intensive - a 16-week accelerated course for students with chemistry background; (3) Summer AP Chemistry Prep - foundational preparation for students planning to take AP Chemistry. All courses include practice tests, expert instruction, and ongoing support."
        },
        {
          question: "What are the class sizes?",
          answer: "We maintain small class sizes to ensure personalized attention. Our Complete course has maximum 12 students, Intensive has maximum 15 students, and Summer Prep has maximum 20 students. This allows our instructors to provide individualized feedback and support."
        },
        {
          question: "Do you offer make-up sessions?",
          answer: "Yes! All our live sessions are recorded and available for review. If you miss a session, you can watch the recording and submit questions to your instructor. We also offer additional office hours and can arrange individual catch-up sessions if needed."
        },
        {
          question: "What materials are included?",
          answer: "All courses include comprehensive digital materials: custom textbook, practice problem sets, lab simulation access, full-length practice exams, formula sheets, and access to our online learning platform. Physical lab kits are provided for students in the Complete course who choose in-person lab sessions."
        }
      ]
    },
    {
      category: "Technology",
      questions: [
        {
          question: "What technology do I need?",
          answer: "You'll need a computer with reliable internet connection, webcam, and microphone for live sessions. We use Zoom for classes and have our own learning management system for materials. Mobile devices can be used for practice problems and reviewing materials, but a computer is recommended for live sessions."
        },
        {
          question: "How do virtual labs work?",
          answer: "We use state-of-the-art virtual lab simulations that allow you to perform experiments, collect data, and analyze results just like in a physical lab. These simulations are based on real experimental data and provide the same learning outcomes as traditional labs while being accessible from anywhere."
        }
      ]
    },
    {
      category: "Academic",
      questions: [
        {
          question: "What are your student success rates?",
          answer: "We're proud of our outstanding results: 95% of our students score 3 or higher on the AP Chemistry exam, with 78% scoring 4 or 5. Our students consistently outperform national averages, and many go on to pursue STEM careers in top universities."
        },
        {
          question: "Do you offer college counseling?",
          answer: "While we focus primarily on AP Chemistry instruction, our Complete course includes guidance on how AP scores factor into college admissions, and we provide recommendations for students interested in chemistry-related fields. We also help students understand how their AP Chemistry success can support their broader academic goals."
        },
        {
          question: "Can students with no chemistry background take your courses?",
          answer: "Our Summer Prep course is specifically designed for students with little to no chemistry background. It builds essential foundations before AP Chemistry. Students with some chemistry experience can start with our Intensive or Complete courses. We provide a diagnostic assessment to help determine the best fit."
        }
      ]
    },
    {
      category: "Financial",
      questions: [
        {
          question: "Do you offer financial aid or scholarships?",
          answer: "Yes! As a non-profit, we're committed to making our programs accessible. We offer need-based scholarships covering 25-100% of tuition, merit-based awards, and payment plans. We also partner with schools to provide free courses to Title I students. Contact us to discuss options."
        },
        {
          question: "Are there payment plan options?",
          answer: "Absolutely. We offer flexible payment plans including monthly installments for all courses. For our Complete course, you can pay in 3, 6, or 9 monthly installments. There are no interest charges or fees for payment plans."
        },
        {
          question: "Is tuition tax-deductible?",
          answer: "As a 501(c)(3) organization, any amount you pay above the fair market value of our services may be tax-deductible as a charitable contribution. We recommend consulting with your tax advisor for specific guidance on your situation."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl leading-relaxed">
            Find answers to common questions about our programs, courses, and mission. 
            Can't find what you're looking for? We're here to help!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const currentIndex = questionIndex++;
                  return (
                    <div key={faqIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                        {openIndex === currentIndex ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {openIndex === currentIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600">
              Our team is here to help you find the perfect chemistry education solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-6">Chat with our team instantly during business hours.</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 mb-6">Send us detailed questions and we'll respond within 24 hours.</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
                Email Us
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Phone Consultation</h3>
              <p className="text-gray-600 mb-6">Schedule a personalized consultation with our education specialists.</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Before You Contact Us</h2>
            <p className="text-xl text-blue-100">
              Here are some helpful tips to get the most out of your inquiry:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">For Course Questions:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Let us know your current chemistry background</li>
                <li>• Share your target AP exam date</li>
                <li>• Mention any specific topics you're struggling with</li>
                <li>• Tell us about your learning style preferences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">For Financial Aid:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Have your family's financial information ready</li>
                <li>• Know which course you're interested in</li>
                <li>• Be prepared to discuss your academic goals</li>
                <li>• Ask about application deadlines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;