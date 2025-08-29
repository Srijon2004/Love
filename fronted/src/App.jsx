// import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'
// import Propose from './pages/Propose'


// export default function App(){
// return (
// <div className="min-h-screen bg-gradient-to-r from-pink-50 to-indigo-50">
// <nav className="p-4 flex justify-between">
// <Link to="/" className="font-bold text-xl">Propose</Link>
// <div className="space-x-4">
// <Link to="/signup" className="underline">Signup</Link>
// <Link to="/login" className="underline">Login</Link>
// </div>
// </nav>


// <div className="p-6">
// <Routes>
// <Route path="/" element={<div className="text-center mt-20">Welcome to Propose — <Link to="/signup" className="text-blue-600 underline">Create account</Link></div>} />
// <Route path="/signup" element={<Signup/>} />
// <Route path="/login" element={<Login/>} />
// <Route path="/dashboard" element={<Dashboard/>} />
// <Route path="/propose/:username" element={<Propose/>} />
// </Routes>
// </div>
// </div>
// )
// }






// import React from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'
// import Propose from './pages/Propose'
// import No1 from './pages/No1'
// import No2 from './pages/No2'
// import No3 from './pages/No3'
// import Yes from './pages/Yes'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-50 to-indigo-50">
//       <nav className="p-4 flex justify-between">
//         <Link to="/" className="font-bold text-xl">Propose</Link>
//         <div className="space-x-4">
//           <Link to="/signup" className="underline">Signup</Link>
//           <Link to="/login" className="underline">Login</Link>
//         </div>
//       </nav>

//       <div className="p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div className="text-center mt-20">
//                 Welcome to Propose — <Link to="/signup" className="text-blue-600 underline">Create account</Link>
//               </div>
//             }
//           />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/propose/:username" element={<Propose />} />
          
//           {/* Multi-step proposal pages */}
    
//         <Route path="/no1" element={<No1 />} />
//           <Route path="/no2" element={<No2 />} />
//           <Route path="/no3" element={<No3 />} />
//           <Route path="/yes" element={<Yes />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }















// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'
// import Propose from './pages/Propose'
// import No1 from './pages/No1'
// import No2 from './pages/No2'
// import No3 from './pages/No3'
// import Yes from './pages/Yes'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-50 to-indigo-50">
//       {/* Navbar always on top */}
//       <Navbar />

//       <div className="p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div className="text-center mt-20">
//                 Welcome to Propose — <span className="text-pink-600 font-bold">Make your proposal special 💕</span>
//               </div>
//             }
//           />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/propose/:username" element={<Propose />} />
          
//           {/* Multi-step proposal pages */}
//           <Route path="/no1" element={<No1 />} />
//           <Route path="/no2" element={<No2 />} />
//           <Route path="/no3" element={<No3 />} />
//           <Route path="/yes" element={<Yes />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }












// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'
// import Propose from './pages/Propose'
// import No1 from './pages/No1'
// import No2 from './pages/No2'
// import No3 from './pages/No3'
// import Yes from './pages/Yes'
// // import { FirebaseLogin } from './pages/FirebaseLogin'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-50 to-indigo-50">
//       {/* Navbar always on top */}
//       <Navbar />

//       <div className="p-6">
//         <Routes>
//           <Route path="/" element={<Home />} />  
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/propose/:username" element={<Propose />} />
//           <Route path="/no1" element={<No1 />} />
//           <Route path="/no2" element={<No2 />} />
//           <Route path="/no3" element={<No3 />} />
//           <Route path="/yes" element={<Yes />} />
//         </Routes>

//       </div>
//     </div>
//   )
// }
















import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Propose from './pages/Propose'
import No1 from './pages/No1'
import No2 from './pages/No2'
import No3 from './pages/No3'
import Yes from './pages/Yes'
import ProposeForm from './pages/ProposeForm'
import EditProposal from './pages/EditProposal'


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-indigo-50">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/propose-form" element={<ProposeForm />} /> 
          <Route path="/edit-proposal/:girlfriendId" element={<EditProposal />}/>
          <Route path="/propose/:username/:girlfriendId" element={<Propose />} />
          <Route path="/no1" element={<No1 />} />
          <Route path="/no2" element={<No2 />} />
          <Route path="/no3" element={<No3 />} />
          <Route path="/yes" element={<Yes />} />
        </Routes>
      </div>
    </div>
  )
}