import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left Content */}
        <div className="max-w-2xl">

          <p className="text-orange-400 font-medium mb-3">
            Join Our Platform
          </p>

          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            Register Your NGO <br />
            Or Blood Bank
          </h2>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Expand your reach and connect with donors,
            volunteers, and people who need help through
            our trusted platform.
          </p>

        </div>

        {/* Right Buttons */}
        <div className="flex flex-wrap gap-4">

          <Link
            to="/ngo-request"
            className="px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-semibold transition"
          >
            Request NGO Access
          </Link>

          <Link
            to="/bloodbank-request"
            className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-orange-500 hover:text-orange-400 text-white font-semibold transition"
          >
            Register Blood Bank
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CTASection;