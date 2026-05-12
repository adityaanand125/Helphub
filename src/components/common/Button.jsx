const Button = ({ children, type = 'button', onClick, className = '' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 ${className}`}
  >
    {children}
  </button>
)

export default Button
