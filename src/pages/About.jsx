const About = () => (
  <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10">

    {/* Top Content */}
    <div className="max-w-3xl">

      <p className="text-orange-400 font-medium mb-3">
        About Us
      </p>

      <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
        Connecting People <br />
        Through Kindness
      </h1>

      <p className="mt-5 text-slate-400 leading-7">
        HelpHub is a modern donation platform designed to connect
        donors, NGOs, blood banks, and volunteers in one trusted
        system with real-time updates and simple access.
      </p>

    </div>

    {/* Cards */}
    <div className="grid gap-6 md:grid-cols-2 mt-10">

      {/* Mission Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-7 hover:border-orange-500/40 transition duration-300">

        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-5">
          <span className="text-orange-400 text-xl">🎯</span>
        </div>

        <h2 className="text-2xl font-semibold text-white">
          Our Mission
        </h2>

        <p className="mt-4 text-slate-400 leading-7">
          Make donations and community support simple,
          transparent, and accessible for everyone.
        </p>

      </div>

      {/* Vision Card */}
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-7 hover:border-emerald-500/40 transition duration-300">

        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5">
          <span className="text-emerald-400 text-xl">🌍</span>
        </div>

        <h2 className="text-2xl font-semibold text-white">
          Our Vision
        </h2>

        <p className="mt-4 text-slate-400 leading-7">
          Build a trusted ecosystem where help reaches
          people faster through technology and teamwork.
        </p>

      </div>

    </div>
  </section>
);

export default About;