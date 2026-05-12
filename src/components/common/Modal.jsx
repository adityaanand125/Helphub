const Modal = ({ open, title, children, onClose }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-slate-900 p-6 shadow-2xl shadow-slate-950">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">Close</button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
