// import React, { useState } from "react";
// import API from "../utils/api";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [err, setErr] = useState("");
//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/signup", form);
//       nav("/dashboard");
//     } catch (error) {
//       setErr(error.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <form
//       onSubmit={submit}
//       className="max-w-md mx-auto bg-white p-6 rounded shadow"
//     >
//       <h2 className="text-2xl mb-4">Signup</h2>
//       {err && <div className="text-red-600">{err}</div>}
//       <input
//         required
//         placeholder="Username"
//         value={form.username}
//         onChange={(e) => setForm({ ...form, username: e.target.value })}
//         className="w-full p-2 border mb-2"
//       />
//       <input
//         required
//         placeholder="Email"
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//         className="w-full p-2 border mb-2"
//       />
//       <input
//         required
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//         className="w-full p-2 border mb-4"
//       />
//       <button className="w-full py-2 bg-pink-500 text-white rounded">
//         Create account
//       </button>
//     </form>
//   );
// }



















// import React, { useState } from "react";
// import API from "../utils/api";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [err, setErr] = useState("");
//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/signup", form);
//       nav("/dashboard");
//     } catch (error) {
//       setErr(error.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <form
//       onSubmit={submit}
//       className="max-w-md mx-auto bg-white p-6 rounded shadow"
//     >
//       <h2 className="text-2xl mb-4">Signup</h2>
//       {err && <div className="text-red-600 mb-2">{err}</div>}
//       <input
//         required
//         placeholder="Username"
//         value={form.username}
//         onChange={(e) => setForm({ ...form, username: e.target.value })}
//         className="w-full p-2 border mb-2"
//       />
//       <input
//         required
//         placeholder="Email"
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//         className="w-full p-2 border mb-2"
//       />
//       <input
//         required
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//         className="w-full p-2 border mb-4"
//       />
//       <button className="w-full py-2 bg-pink-500 text-white rounded">
//         Create account
//       </button>

//       {/* Login redirect button */}
//       <p className="text-center mt-4">
//         Already have an account?{" "}
//         <button
//           type="button"
//           onClick={() => nav("/login")}
//           className="text-pink-600 underline"
//         >
//           Login
//         </button>
//       </p>
//     </form>
//   );
// }










// import React, { useState } from "react";
// import API from "../utils/api";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [err, setErr] = useState("");
//   const [msg, setMsg] = useState("");
//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/signup", form);
//       setMsg("Signup successful! Please login.");
//       setTimeout(() => nav("/login"), 1200); // redirect after success
//     } catch (error) {
//       setErr(error.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-indigo-100">
//       <form
//         onSubmit={submit}
//         className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
//       >
//         <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
//           Create Account
//         </h2>

//         {err && <div className="text-red-600 text-sm mb-2">{err}</div>}
//         {msg && <div className="text-green-600 text-sm mb-2">{msg}</div>}

//         <input
//           required
//           placeholder="Username"
//           value={form.username}
//           onChange={(e) => setForm({ ...form, username: e.target.value })}
//           className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />
//         <input
//           required
//           placeholder="Email"
//           type="email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />
//         <input
//           required
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />

//         <button
//           type="submit"
//           className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition"
//         >
//           Sign Up
//         </button>

//         <p className="text-center mt-4 text-sm">
//           Already have an account?{" "}
//           <button
//             type="button"
//             onClick={() => nav("/login")}
//             className="text-pink-600 font-medium underline"
//           >
//             Login
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// }
















// import React, { useState } from 'react';
// import API from '../utils/api.js';
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [err, setErr] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPass, setShowPass] = useState(false);
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setErr('');
//     setLoading(true);
//     try {
//       const res = await API.post('/auth/signup', form);

//       // ✅ If backend sends token after signup, store it
//       if (res.data?.token) {
//         localStorage.setItem('token', res.data.token);
//       }

//       navigate('/dashboard'); // redirect after signup
//     } catch (error) {
//       if (error.response) {
//         setErr(error.response.data?.message || 'Signup failed');
//       } else if (error.request) {
//         setErr('Server not responding. Try again later.');
//       } else {
//         setErr('Something went wrong. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-white to-pink-100">
//       <form 
//         onSubmit={submit} 
//         className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

//         {err && <div className="text-red-600 mb-4 text-center font-medium">{err}</div>}

//         {/* Name Field */}
//         <label className="block mb-3">
//           <span className="text-gray-700">Full Name</span>
//           <input
//             required
//             type="text"
//             value={form.name}
//             onChange={e => setForm({ ...form, name: e.target.value })}
//             className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//           />
//         </label>

//         {/* Email Field */}
//         <label className="block mb-3">
//           <span className="text-gray-700">Email</span>
//           <input
//             required
//             type="email"
//             value={form.email}
//             onChange={e => setForm({ ...form, email: e.target.value })}
//             className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//           />
//         </label>

//         {/* Password Field */}
//         <label className="block mb-6">
//           <span className="text-gray-700">Password</span>
//           <div className="relative mt-1">
//             <input
//               required
//               type={showPass ? 'text' : 'password'}
//               value={form.password}
//               onChange={e => setForm({ ...form, password: e.target.value })}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPass(!showPass)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
//             >
//               {showPass ? 'Hide' : 'Show'}
//             </button>
//           </div>
//         </label>

//         <button 
//           type="submit" 
//           disabled={loading}
//           className={`w-full py-3 font-semibold rounded-lg transition 
//             ${loading ? 'bg-pink-300 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 text-white'}
//           `}
//         >
//           {loading ? 'Creating account...' : 'Signup'}
//         </button>

//         {/* Already have an account? */}
//         <div className="flex justify-center mt-4 text-sm text-gray-600">
//           <button
//             type="button"
//             onClick={() => navigate('/login')}
//             className="text-pink-600 font-medium hover:underline"
//           >
//             Already have an account? Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }














// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../utils/api.js";
// import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

// export default function Signup() {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [err, setErr] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/signup", form);
//       navigate("/login"); // redirect after signup
//     } catch (error) {
//       setErr(error.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
    
//     <form
   
//       onSubmit={submit}
//       className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow mt-10"
//     >
//       <h2 className="text-2xl mb-4 font-bold text-center">Signup</h2>
//       {err && <div className="text-red-600 mb-2 text-center">{err}</div>}

//       {/* Name */}
//       <div className="relative mb-3">
//         <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
//         <input
//           required
//           type="text"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="w-full pl-10 p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
//         />
//       </div>

//       {/* Email */}
//       <div className="relative mb-3">
//         <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
//         <input
//           required
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="w-full pl-10 p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
//         />
//       </div>

//       {/* Password */}
//       <div className="relative mb-4">
//         <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
//         <input
//           required
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           className="w-full pl-10 pr-10 p-2 border rounded focus:ring-2 focus:ring-indigo-500 outline-none"
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-3 top-3 text-gray-500"
//         >
//           {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//         </button>
//       </div>

//       <button
//         type="submit"
//         className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//       >
//         Signup
//       </button>

//       {/* Login redirect link */}
//       <p className="text-center mt-4">
//         Already have an account?{" "}
//         <button
//           type="button"
//           onClick={() => navigate("/login")}
//           className="text-indigo-600 underline"
//         >
//           Login
//         </button>
//       </p>
//     </form>
    
//   );
// }












// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../utils/api.js";
// import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

// export default function Signup() {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPass, setShowPass] = useState(false);
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setErr("");
//     setLoading(true);
//     try {
//       await API.post("/auth/signup", form);
//       navigate("/login");
//     } catch (error) {
//       setErr(error.response?.data?.message || "Signup failed. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-indigo-100">
//       <form
//         onSubmit={submit}
//         className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
//       >
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
//           Create Account ✨
//         </h2>

//         {err && (
//           <div className="text-red-600 bg-red-100 p-2 rounded mb-4 text-center">
//             {err}
//           </div>
//         )}

//         {/* Name */}
//         <div className="relative mb-4">
//           <User className="absolute left-3 top-3 text-gray-400" size={20} />
//           <input
//             required
//             type="text"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//           />
//         </div>

//         {/* Email */}
//         <div className="relative mb-4">
//           <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
//           <input
//             required
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//           />
//         </div>

//         {/* Password */}
//         <div className="relative mb-6">
//           <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
//           <input
//             required
//             type={showPass ? "text" : "password"}
//             placeholder="Password"
//             value={form.password}
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             className="w-full pl-10 pr-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPass(!showPass)}
//             className="absolute right-3 top-3 text-gray-500"
//           >
//             {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex justify-center items-center"
//         >
//           {loading ? "Signing up..." : "Signup"}
//         </button>

//         {/* Redirect */}
//         <p className="text-center mt-4 text-gray-600">
//           Already have an account?{" "}
//           <button
//             type="button"
//             onClick={() => navigate("/login")}
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             Login
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// }























// ...........
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api.js";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { auth, provider, signInWithPopup } from "../firebase";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  // Prevent multiple popups
  let googlePopupOpen = false;

  // Regular signup
  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await API.post("/auth/signup", form); // normal signup
      navigate("/login");
    } catch (error) {
      setErr(error.response?.data?.message || "Signup failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  // Google Signup/Login
  const handleGoogleSignup = async () => {
    if (googlePopupOpen) return;
    googlePopupOpen = true;
    setErr("");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Send Google info to backend
      await API.post("/auth/google-signup", {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        googleId: user.uid,
      });

      navigate("/dashboard"); // redirect after login
    } catch (error) {
      console.error(error);
      setErr("Google signup/login failed. Try again!");
    } finally {
      googlePopupOpen = false;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-indigo-100">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Create Account ✨
        </h2>

        {err && (
          <div className="text-red-600 bg-red-100 p-2 rounded mb-4 text-center">
            {err}
          </div>
        )}

        {/* Name */}
        <div className="relative mb-4">
          <User className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            required
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            required
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full pl-10 pr-10 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex justify-center items-center mb-4"
        >
          {loading ? "Signing up..." : "Signup"}
        </button>

        {/* Google Signup/Login */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex justify-center items-center mb-4"
        >
          Signup/Login with Google
        </button>

        {/* Redirect */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
