import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../utils/api'

export default function Propose() {
  const { username } = useParams()
  const [data, setData] = useState(null)
  const [err, setErr] = useState('')

  useEffect(() => {
    API.get(`/user/propose/${username}`)
      .then(res => setData(res.data))
      .catch(e => setErr(e.response?.data?.message || 'Proposal not found'))
  }, [username])

  if (err) return <div className="text-center mt-20 text-red-600">{err}</div>
  if (!data) return <div className="text-center mt-20">Loading...</div>

  return (
    <div className="max-w-2xl mx-auto text-center mt-12 bg-white p-6 rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
        Hey {data.girlfriend.name} 💖
      </h1>

      {data.girlfriend.photo && (
        <img
          src={data.girlfriend.photo}
          alt="her"
          className="mx-auto rounded-full w-48 h-48 object-cover mb-4"
        />
      )}

      <p className="mb-6 text-lg">{data.girlfriend.details}</p>

      <div className="text-2xl font-semibold mb-4">
        Will you be mine forever? 🌹
      </div>

      <div className="mt-6 space-x-4">
        <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Yes 💍
        </button>
        <button className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Maybe 🙂
        </button>
      </div>
    </div>
  )
}
