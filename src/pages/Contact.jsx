const Contact = () => (
  <section className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-800">
    <h1 className="text-4xl font-semibold text-white">Contact Us</h1>
    <p className="mt-4 text-slate-300">Have questions, support requests, or NGO registration inquiries? Reach out and we’ll connect you quickly.</p>
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl bg-slate-800 p-6">
        <h2 className="text-xl font-semibold text-white">Email</h2>
        <p className="mt-3 text-slate-300">support@helphub.com</p>
      </div>
      <div className="rounded-3xl bg-slate-800 p-6">
        <h2 className="text-xl font-semibold text-white">Phone</h2>
        <p className="mt-3 text-slate-300">+91 00000 00000</p>
      </div>
    </div>
  </section>
)

export default Contact
