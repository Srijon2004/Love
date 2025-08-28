import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Propose from './pages/Propose'


export default function App(){
return (
<div className="min-h-screen bg-gradient-to-r from-pink-50 to-indigo-50">
<nav className="p-4 flex justify-between">
<Link to="/" className="font-bold text-xl">Propose</Link>
<div className="space-x-4">
<Link to="/signup" className="underline">Signup</Link>
<Link to="/login" className="underline">Login</Link>
</div>
</nav>


<div className="p-6">
<Routes>
<Route path="/" element={<div className="text-center mt-20">Welcome to Propose — <Link to="/signup" className="text-blue-600 underline">Create account</Link></div>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/login" element={<Login/>} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/propose/:username" element={<Propose/>} />
</Routes>
</div>
</div>
)
}