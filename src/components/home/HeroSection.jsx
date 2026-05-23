import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full bg-slate-950 text-white pb-10"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">

        {/* Small Text */}
        <p className="text-orange-400 font-medium mb-4">
          Helping People Together
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Donate & Support <br />
          People In Need
        </h1>

        {/* Description */}
        <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          A simple platform to donate food, blood, and support NGOs
          easily from anywhere.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">

          <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl font-semibold text-slate-950 transition">
            Donate Now
          </button>

          <button className="px-6 py-3 border border-slate-700 hover:border-orange-500 hover:text-orange-400 rounded-xl font-semibold transition">
            Learn More
          </button>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-14">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">
              Food Donation
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Share food with needy people.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">
              Blood Donation
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Help save lives in emergencies.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">
              NGO Support
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Connect with trusted NGOs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;