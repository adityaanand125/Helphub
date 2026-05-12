const About = () => (
  <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">About HelpHub</h1>
    <p className="mt-4 max-w-3xl leading-7 text-slate-300">
      HelpHub is a donor-to-NGO platform built for real-time help, donation tracking, and verified support. The frontend is designed to be mobile-first, fast, and emotionally engaging.
    </p>
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl bg-slate-800 p-6">
        <h2 className="text-xl font-semibold text-white">Mission</h2>
        <p className="mt-3 text-slate-300">Connect donors, NGOs, and volunteers with instant updates, secure donations, and live tracking.</p>
      </div>
      <div className="rounded-3xl bg-slate-800 p-6">
        <h2 className="text-xl font-semibold text-white">Vision</h2>
        <p className="mt-3 text-slate-300">Build a trusted ecosystem for community support and fast charity response.</p>
      </div>
    </div>
  </section>
)

export default About
