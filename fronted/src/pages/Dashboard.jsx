import React, { useState } from 'react'
import API from '../utils/api'

export default function Dashboard() {
  const [form, setForm] = useState({ name: '', photo: '', details: '' })
  const [msg, setMsg] = useState('')

  // Convert uploaded file to base64
  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setForm(f => ({ ...f, photo: reader.result }))
    reader.readAsDataURL(file)
  }

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await API.post('/user/girlfriend', form)
      const username = res.data.username
      const link = `${window.location.origin}/propose/${username}`

      await navigator.clipboard.writeText(link)
      setMsg('✅ Proposal link copied: ' + link)
    } catch (err) {
      setMsg(err.response?.data?.message || '❌ Error saving details')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-2xl mb-4 font-bold text-center">Girlfriend Details 💖</h2>
      {msg && <div className="mb-3 text-center text-pink-600">{msg}</div>}

      <form onSubmit={submit}>
        <input
          required
          placeholder="Her Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border mb-3 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="w-full mb-3"
        />
        <textarea
          placeholder="Write a sweet message ❤️"
          value={form.details}
          onChange={e => setForm({ ...form, details: e.target.value })}
          className="w-full p-2 border mb-4 rounded"
        />

        <button
          type="submit"
          className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
        >
          Generate & Copy Link
        </button>
      </form>
    </div>
  )
}
