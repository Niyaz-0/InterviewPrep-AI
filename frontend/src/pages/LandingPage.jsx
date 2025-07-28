import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data.js";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Modal from "../components/Modal";

export default function LandingPage() {

  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 animate-blob1" />
        <div className="absolute top-40 -left-20 w-60 h-60 bg-orange-300 rounded-full opacity-20 animate-blob2" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full opacity-20 animate-blob3" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            Interview Prep AI
          </div>
          <button
            className="btn-small text-lg"
            onClick={() => setOpenAuthModal(true)}>
            Login / Sign Up
          </button>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-full text-base font-semibold">
                AI Powered
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Ace Interviews with <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-text-shine">
                AI-Powered
              </span>{" "}
              Learning
            </h1>

            <div className="space-y-6">
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery - your ultimate interview toolkit is
                here.
              </p>

              <button
                className="btn-primary bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700"
                onClick={handleCTA}>
                Get Started
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img 
              src={HERO_IMG} 
              alt="Interview Prep AI" 
              className="w-full h-auto max-w-xl lg:max-w-2xl mx-auto"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make interview preparation effective and engaging
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APP_FEATURES.map((feature) => (
              <div 
                key={feature.id} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{feature.id}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader>
        <div>
          {currentPage === "login" && (
            <Login setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "signup" && (
            <Signup setCurrentPage={setCurrentPage} />
          )}
        </div>
</Modal>
    </>
  );
}
