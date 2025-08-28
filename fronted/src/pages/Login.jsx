import React, { useState } from 'react'
import API from '../utils/api.js'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/login', form); // login request
      navigate('/dashboard'); // redirect on success
    } catch (error) {
      setErr(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form 
      onSubmit={submit} 
      className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10"
    >
      <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
      {err && <div className="text-red-600 mb-2 text-center">{err}</div>}

      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        className="w-full p-2 border mb-3 rounded"
      />
      <input
        required
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
        className="w-full p-2 border mb-4 rounded"
      />

      <button 
        type="submit" 
        className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Login
      </button>
    </form>
  );
}
