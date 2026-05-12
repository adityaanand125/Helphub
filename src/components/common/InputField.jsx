const InputField = ({ label, type = 'text', value, onChange, placeholder, required = false }) => (
  <label className="block text-sm text-slate-300">
    <span className="mb-2 block font-medium">{label}</span>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="mt-1 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-500"
    />
  </label>
)

export default InputField
