import React from "react";

const   HeroSection = () => (
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
    </div>
  </section>
);

export default HeroSection;