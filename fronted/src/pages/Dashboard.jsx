// import React, { useState } from 'react'
// import API from '../utils/api'

// export default function Dashboard() {
//   const [form, setForm] = useState({ name: '', photo: '', details: '' })
//   const [msg, setMsg] = useState('')

//   // Convert uploaded file to base64
//   const handleFile = (e) => {
//     const file = e.target.files[0]
//     if (!file) return
//     const reader = new FileReader()
//     reader.onload = () => setForm(f => ({ ...f, photo: reader.result }))
//     reader.readAsDataURL(file)
//   }

//   const submit = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await API.post('/user/girlfriend', form)
//       const username = res.data.data.username
//       const link = `${window.location.origin}/propose/${username}`

//       await navigator.clipboard.writeText(link)
//       setMsg('✅ Proposal link copied: ' + link)
//     } catch (err) {
//       setMsg(err.response?.data?.message || '❌ Error saving details')
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
//       <h2 className="text-2xl mb-4 font-bold text-center">Girlfriend Details 💖</h2>
//       {msg && <div className="mb-3 text-center text-pink-600">{msg}</div>}

//       <form onSubmit={submit}>
//         <input
//           required
//           placeholder="Her Name"
//           value={form.name}
//           onChange={e => setForm({ ...form, name: e.target.value })}
//           className="w-full p-2 border mb-3 rounded"
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFile}
//           className="w-full mb-3"
//         />
//         <textarea
//           placeholder="Write a sweet message ❤️"
//           value={form.details}
//           onChange={e => setForm({ ...form, details: e.target.value })}
//           className="w-full p-2 border mb-4 rounded"
//         />

//         <button
//           type="submit"
//           className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
//         >
//           Generate & Copy Link
//         </button>
//       </form>
//     </div>
//   )
// }




// import React, { useState } from 'react'
// import API from '../utils/api'

// export default function Dashboard() {
//   const [form, setForm] = useState({ name: '', photo: '', details: '' })
//   const [msg, setMsg] = useState('')

//   // Convert uploaded file to base64
//   const handleFile = (e) => {
//     const file = e.target.files[0]
//     if (!file) return
//     const reader = new FileReader()
//     reader.onload = () => setForm(f => ({ ...f, photo: reader.result }))
//     reader.readAsDataURL(file)
//   }

//   const submit = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await API.post('/user/girlfriend', form)
//       const username = res.data.data.username
//       const link = `${window.location.origin}/propose/${username}`

//       await navigator.clipboard.writeText(link)
//       setMsg('Proposal link copied: ' + link)
//     } catch (err) {
//       setMsg(err.response?.data?.message || '❌ Error saving details')
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 p-4">
//       <div className="w-full max-w-lg bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-pink-100">
//         <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
//           💖 Girlfriend Details 💖
//         </h2>

//         {msg && (
//           <div className="mb-4 text-center text-pink-700 font-medium">
//             {msg}
//           </div>
//         )}

//         <form onSubmit={submit} className="space-y-4">
//           <input
//             required
//             placeholder="Her Name"
//             value={form.name}
//             onChange={e => setForm({ ...form, name: e.target.value })}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
//           />

//           <div>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFile}
//               className="w-full text-sm text-gray-600"
//             />
//             {form.photo && (
//               <img
//                 src={form.photo}
//                 alt="Preview"
//                 className="mt-3 w-24 h-24 object-cover rounded-full mx-auto shadow-md border border-pink-200"
//               />
//             )}
//           </div>

//           <textarea
//             placeholder="Write a sweet message ❤️"
//             value={form.details}
//             onChange={e => setForm({ ...form, details: e.target.value })}
//             rows="4"
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition"
//           >
//             💌 Generate & Copy Link
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }





























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
      const { username, girlfriend } = res.data.data
      const link = `${window.location.origin}/propose/${username}/${girlfriend._id}`

      await navigator.clipboard.writeText(link)
      setMsg('✅ Proposal link copied: ' + link)
    } catch (err) {
      setMsg(err.response?.data?.message || '❌ Error saving details')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 p-4">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-pink-100">
        <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
          💖 Girlfriend Details 💖
        </h2>

        {msg && (
          <div className="mb-4 text-center text-pink-700 font-medium break-all">
            {msg}
          </div>
        )}

        <form onSubmit={submit} className="space-y-4">
          <input
            required
            placeholder="Her Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
              className="w-full text-sm text-gray-600"
            />
            {form.photo && (
              <img
                src={form.photo}
                alt="Preview"
                className="mt-3 w-24 h-24 object-cover rounded-full mx-auto shadow-md border border-pink-200"
              />
            )}
          </div>

          <textarea
            placeholder="Write a sweet message ❤️"
            value={form.details}
            onChange={e => setForm({ ...form, details: e.target.value })}
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition"
          >
            💌 Generate & Copy Link
          </button>
        </form>
      </div>
    </div>
  )
}
















// import React, { useState } from 'react'
// import API from '../utils/api'

// export default function Dashboard() {
//   const [form, setForm] = useState({ name: '', photo: '', details: '' })
//   const [msg, setMsg] = useState('')

//   const handleFile = (e) => {
//     const file = e.target.files[0]
//     if (!file) return
//     const reader = new FileReader()
//     reader.onload = () => setForm(f => ({ ...f, photo: reader.result }))
//     reader.readAsDataURL(file)
//   }

//   const submit = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await API.post('/user/girlfriend', form)
//       const username = res.data.data.username
//       const link = `${window.location.origin}/propose/${username}`

//       await navigator.clipboard.writeText(link)
//       setMsg('Proposal link copied: ' + link)
//     } catch (err) {
//       setMsg(err.response?.data?.message || '❌ Error saving details')
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 p-6 flex justify-center">
//       <div className="w-full max-w-lg bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-pink-100 my-auto">
//         <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-6">
//           💖 Girlfriend Details 💖
//         </h2>

//         {msg && (
//           <div className="mb-4 text-center text-pink-700 font-medium">
//             {msg}
//           </div>
//         )}

//         <form onSubmit={submit} className="space-y-4">
//           <input
//             required
//             placeholder="Her Name"
//             value={form.name}
//             onChange={e => setForm({ ...form, name: e.target.value })}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
//           />

//           <div>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFile}
//               className="w-full text-sm text-gray-600"
//             />
//             {form.photo && (
//               <img
//                 src={form.photo}
//                 alt="Preview"
//                 className="mt-3 w-24 h-24 object-cover rounded-full mx-auto shadow-md border border-pink-200"
//               />
//             )}
//           </div>

//           <textarea
//             placeholder="Write a sweet message ❤️"
//             value={form.details}
//             onChange={e => setForm({ ...form, details: e.target.value })}
//             rows="4"
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none resize-none"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 bg-pink-500 text-white text-lg font-semibold rounded-lg hover:bg-pink-600 transition"
//           >
//             💌 Generate & Copy Link
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
