const testimonials = [
  {
    name: "Priya",
    role: "NGO Coordinator",
    feedback:
      "HelpHub helped our NGO receive food donations instantly and track pickups live.",
  },
  {
    name: "Rohan",
    role: "Volunteer",
    feedback:
      "The donation process was fast and the volunteer team stayed connected the whole time.",
  },
];

const Testimonials = () => (
  <section className="py-10">

    {/* Heading */}
    <div className="text-center mb-12">
      <p className="text-orange-400 font-medium mb-3">
        Testimonials
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold text-white">
        What People Say
      </h2>

      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        Hear from donors, volunteers, and NGOs using our platform.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-6 md:grid-cols-2">

      {testimonials.map((item) => (
        <div
          key={item.name}
          className="relative bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-orange-500/40 transition duration-300"
        >

          {/* Quote */}
          <div className="text-5xl text-orange-500/20 absolute top-4 right-5">
            "
          </div>

          {/* Feedback */}
          <p className="text-slate-300 leading-relaxed relative z-10">
            {item.feedback}
          </p>

          {/* User */}
          <div className="flex items-center gap-4 mt-8">

            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-slate-950 font-bold">
              {item.name.charAt(0)}
            </div>

            <div>
              <h3 className="text-white font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-slate-400">
                {item.role}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>
  </section>
);

export default Testimonials;