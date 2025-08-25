import React from 'react';
import { Clock, Users, BookOpen, Award, CheckCircle, Calendar } from 'lucide-react';

const CourseDetails = () => {
  const courses = [
    {
      title: "AP Chemistry Complete",
      duration: "Full Academic Year",
      format: "Hybrid (Online + In-Person Labs)",
      price: "$1,200",
      maxStudents: "12 students max",
      description: "Comprehensive AP Chemistry course covering all exam topics with extensive lab work and practice tests.",
      features: [
        "Complete AP Chemistry curriculum",
        "Weekly 3-hour sessions",
        "Monthly in-person lab sessions",
        "Unlimited practice tests",
        "Individual progress tracking",
        "College application guidance",
        "24/7 online support forum"
      ],
      schedule: "September - May",
      popular: true
    },
    {
      title: "AP Chemistry Intensive",
      duration: "16 Weeks",
      format: "Online with Virtual Labs",
      price: "$800",
      maxStudents: "15 students max",
      description: "Fast-paced course for students with chemistry background, focusing on AP-specific concepts and exam strategies.",
      features: [
        "Accelerated curriculum coverage",
        "Twice-weekly 2-hour sessions",
        "Virtual lab simulations",
        "Targeted practice tests",
        "Exam strategy workshops",
        "Peer study groups"
      ],
      schedule: "January - May",
      popular: false
    },
    {
      title: "Summer AP Chemistry Prep",
      duration: "8 Weeks",
      format: "Online",
      price: "$450",
      maxStudents: "20 students max",
      description: "Summer preparation course to build foundational chemistry knowledge before taking AP Chemistry.",
      features: [
        "Foundation building",
        "Three 1.5-hour sessions per week",
        "Interactive problem solving",
        "Diagnostic assessments",
        "Study skill development",
        "Preview of AP topics"
      ],
      schedule: "June - July",
      popular: false
    }
  ];

  const curriculum = [
    {
      unit: "Unit 1",
      title: "Atomic Structure and Properties",
      topics: ["Moles and molar mass", "Mass spectroscopy", "Elemental composition", "Electron configuration", "Periodic trends"]
    },
    {
      unit: "Unit 2", 
      title: "Molecular and Ionic Compound Structure",
      topics: ["Types of chemical bonds", "Intramolecular force and potential energy", "Structure of ionic solids", "Structure of metals and alloys", "Lewis diagrams"]
    },
    {
      unit: "Unit 3",
      title: "Intermolecular Forces and Properties",
      topics: ["Intermolecular forces", "Properties of solids", "Solids, liquids, and gases", "Ideal gas law", "Kinetic molecular theory"]
    },
    {
      unit: "Unit 4",
      title: "Chemical Reactions",
      topics: ["Introduction for reactions", "Net ionic equations", "Representations of reactions", "Physical and chemical changes", "Stoichiometry"]
    },
    {
      unit: "Unit 5",
      title: "Kinetics",
      topics: ["Reaction rates", "Introduction to rate law", "Concentration changes over time", "Elementary reactions", "Collision model", "Reaction energy profile"]
    },
    {
      unit: "Unit 6",
      title: "Thermodynamics",
      topics: ["Endothermic and exothermic processes", "Energy diagrams", "Heat transfer and thermal equilibrium", "Heat capacity and calorimetry", "Energy of phase changes", "Introduction to entropy"]
    },
    {
      unit: "Unit 7",
      title: "Equilibrium",
      topics: ["Introduction to equilibrium", "Direction of reversible reactions", "Reaction quotient and equilibrium constant", "Calculating the equilibrium constant", "Magnitude of the equilibrium constant", "Properties of the equilibrium constant", "Calculating equilibrium concentrations", "Representations of equilibrium", "Introduction to Le Châtelier's principle"]
    },
    {
      unit: "Unit 8",
      title: "Acids and Bases",
      topics: ["Introduction to acids and bases", "pH and pOH of strong acids and bases", "Weak acid and base equilibria", "Acid-base reactions and buffers", "Acid-base titrations", "Molecular structure of acids and bases"]
    },
    {
      unit: "Unit 9",
      title: "Applications of Thermodynamics",
      topics: ["Introduction to entropy", "Absolute entropy and entropy change", "Gibbs free energy and thermodynamic favorability", "Thermodynamic and kinetic control", "Free energy and equilibrium", "Coupled reactions", "Galvanic and electrolytic cells", "Cell potential and free energy", "Cell potential under nonstandard conditions", "Electrolysis and Faraday's law"]
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Course Details</h1>
          <p className="text-xl leading-relaxed">
            Choose from our comprehensive course offerings designed to fit different learning styles and schedules.
          </p>
        </div>
      </section>

      

      {/* Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete AP Chemistry Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curriculum covers all 9 units of the College Board AP Chemistry framework, ensuring comprehensive preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((unit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 text-sm font-bold px-3 py-1 rounded-full">
                    {unit.unit}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{unit.title}</h3>
                <ul className="space-y-1">
                  {unit.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-sm text-gray-600">• {topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Course SignUp</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Course includes access to our comprehensive learning platform, practice materials, and expert instructor support.
            </p>
            <a
              href="https://forms.gle/FLrNAkH9nTLvofNt5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Sign Up Now
            </a>
          </div>

          </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Courses?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
              <p className="text-blue-100">Learn from PhD-level chemistry experts with years of AP teaching experience.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Small Class Sizes</h3>
              <p className="text-blue-100">Personalized attention with maximum 20 students per class for optimal learning.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Materials</h3>
              <p className="text-blue-100">Access to extensive practice problems, lab simulations, and exam prep resources.</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Chemistry Journey?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join hundreds of students who've achieved their AP Chemistry goals with our proven program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  
 
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;