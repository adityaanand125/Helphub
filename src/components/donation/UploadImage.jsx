import { useState } from 'react'

const UploadImage = () => {
  const [preview, setPreview] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
  }

  return (
    <div className="space-y-4 rounded-3xl bg-slate-950 p-6">
      <label className="block text-sm font-medium text-slate-300">Upload Image</label>
      <input type="file" accept="image/*" onChange={handleFileChange} className="text-slate-200" />
      {preview && <img src={preview} alt="preview" className="h-48 w-full rounded-3xl object-cover" />}
    </div>
  )
}

export default UploadImage
