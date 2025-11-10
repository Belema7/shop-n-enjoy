import React from "react";
import Navbar from "../components/Navbar";
import { Code, Target, BookOpen, Rocket, Calendar, Heart } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code, text: "useReducer for advanced state management" },
    { icon: Code, text: "useState for UI states and interactions" },
    { icon: Code, text: "useContext to manage global cart state" },
    { icon: Code, text: "useMemo for performance optimization" },
    { icon: Code, text: "useEffect for product fetching and localStorage" },
    { icon: Code, text: "React Router for page navigation" },
    { icon: Code, text: "LocalStorage to persist cart data" },
    { icon: Code, text: "Tailwind CSS for styling" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Rocket className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            About This Project
          </h1>
          <p className="text-cyan-400 text-lg font-semibold">
            Week 2 of My 100 Days Full Stack Development Journey
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <BookOpen className="text-cyan-400 mt-1 shrink-0" size={24} />
            <div>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                This shopping app is part of my <span className="font-semibold text-cyan-400">Second Week Challenge</span> 
                in my 100 Days Full Stack Development Journey.  
                During this week, my main focus was understanding deeper React concepts and 
                applying them to a functional, real-world style project.
              </p>
              <div className="flex items-center gap-2 text-cyan-400">
                <Calendar size={18} />
                <span className="font-medium">Week 2 Progress</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Learned */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-cyan-400" size={24} />
            <h2 className="text-2xl font-bold text-white">
              What I Learned This Week
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                <skill.icon className="text-cyan-400 shrink-0" size={18} />
                <span className="text-gray-300">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Purpose */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <Target className="text-cyan-400 mt-1 shrink-0" size={24} />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Purpose of This Project
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                The goal was to challenge myself by building a complete mini shopping app 
                from scratch using React. This allowed me to practice real-world features like 
                adding items to a cart, managing quantities, removing products, calculating totals, 
                and simulating a checkout process.
              </p>
              <p className="text-gray-300 text-lg">
                This project shows how much progress I can make in one week — and I'm excited to see 
                where I'll be at the end of 100 days.
              </p>
            </div>
          </div>
        </div>

        {/* Motivation */}
        <div className="bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="text-red-400 animate-pulse" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Built with Passion & Persistence
            </h3>
            <p className="text-cyan-400 font-medium">
              Every line of code brings me closer to mastering full-stack development
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 p-6 bg-gray-800 rounded-2xl border border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white font-semibold">100 Days Journey Progress</span>
            <span className="text-cyan-400 font-bold">2%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-linear-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
              style={{ width: '2%' }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-2 text-center">
            Week 2 completed • 86 days to go!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;