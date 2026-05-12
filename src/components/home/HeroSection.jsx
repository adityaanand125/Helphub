import React from "react";
import { HeartHandshake, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-slate-950 text-white flex items-center "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-slate-950 rounded-full mb-6 shadow-lg shadow-orange-500/20">
            <HeartHandshake size={18} />
            <span className="text-sm font-semibold">
              Together We Can Help More
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
            Connecting
            <span className="text-orange-400"> Humanity </span>
            With
            <span className="text-emerald-400"> Hope</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
            Sahaay helps people donate food, blood, organs, and financial
            support to NGOs and needy communities through one powerful platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5 mt-10">

            <button className="px-7 py-4 bg-orange-500 hover:bg-orange-600 text-slate-950 rounded-2xl font-semibold shadow-xl shadow-orange-500/25 transition duration-300 flex items-center gap-2">
              Donate Now
              <ArrowRight size={20} />
            </button>

            <button className="px-7 py-4 border border-slate-700 hover:border-orange-500 hover:text-orange-400 rounded-2xl font-semibold text-slate-200 transition duration-300">
              Explore NGOs
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-14 text-slate-200">

            <div>
              <h2 className="text-3xl font-bold text-white">10K+</h2>
              <p className="text-slate-400 mt-1">Meals Donated</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">500+</h2>
              <p className="text-slate-400 mt-1">Blood Donations</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">150+</h2>
              <p className="text-slate-400 mt-1">NGOs Connected</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">

          {/* Main Card */}
          <div className="relative w-full max-w-lg bg-slate-900 rounded-[40px] shadow-2xl shadow-slate-950/40 p-8 border border-slate-800">

            {/* Top */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">
                Live Support
              </h3>

              <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>

            {/* Donation Cards */}
            <div className="space-y-5">

              <div className="flex items-center justify-between bg-slate-950/70 p-5 rounded-2xl">
                <div>
                  <h4 className="font-semibold text-white">
                    Food Donation
                  </h4>
                  <p className="text-sm text-slate-400">
                    120 meals available
                  </p>
                </div>

                <button className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm">
                  Accept
                </button>
              </div>

              <div className="flex items-center justify-between bg-slate-950/70 p-5 rounded-2xl">
                <div>
                  <h4 className="font-semibold text-white">
                    Blood Request
                  </h4>
                  <p className="text-sm text-slate-400">
                    O+ urgently needed
                  </p>
                </div>

                <button className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm">
                  Donate
                </button>
              </div>

              <div className="flex items-center justify-between bg-slate-950/70 p-5 rounded-2xl">
                <div>
                  <h4 className="font-semibold text-white">
                    NGO Support
                  </h4>
                  <p className="text-sm text-slate-400">
                    35 active volunteers
                  </p>
                </div>

                <button className="px-4 py-2 bg-emerald-500 text-white rounded-xl text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Floating Circle */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500/20 rounded-full blur-3xl opacity-60"></div>

          <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-emerald-500/20 rounded-full blur-3xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;