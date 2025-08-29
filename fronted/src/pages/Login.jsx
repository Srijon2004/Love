// import React, { useState } from 'react'
// import API from '../utils/api.js'
// import { useNavigate } from 'react-router-dom'

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [err, setErr] = useState('');
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/auth/login', form); // login request
//       navigate('/dashboard'); // redirect on success
//     } catch (error) {
//       setErr(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <form 
//       onSubmit={submit} 
//       className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10"
//     >
//       <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
//       {err && <div className="text-red-600 mb-2 text-center">{err}</div>}

//       <input
//         required
//         type="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={e => setForm({ ...form, email: e.target.value })}
//         className="w-full p-2 border mb-3 rounded"
//       />
//       <input
//         required
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={e => setForm({ ...form, password: e.target.value })}
//         className="w-full p-2 border mb-4 rounded"
//       />

//       <button 
//         type="submit" 
//         className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//       >
//         Login
//       </button>
        

//     </form>
//   );
// }














// import React, { useState } from 'react'
// import API from '../utils/api.js'
// import { useNavigate } from 'react-router-dom'

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [err, setErr] = useState('');
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/auth/login', form); // login request
//       navigate('/dashboard'); // redirect on success
//     } catch (error) {
//       setErr(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <form 
//       onSubmit={submit} 
//       className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10"
//     >
//       <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
//       {err && <div className="text-red-600 mb-2 text-center">{err}</div>}

//       <input
//         required
//         type="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={e => setForm({ ...form, email: e.target.value })}
//         className="w-full p-2 border mb-3 rounded"
//       />
//       <input
//         required
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={e => setForm({ ...form, password: e.target.value })}
//         className="w-full p-2 border mb-4 rounded"
//       />

//       <button 
//         type="submit" 
//         className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//       >
//         Login
//       </button>

//       {/* Signup redirect link */}
//       <p className="text-center mt-4">
//         Don’t have an account?{" "}
//         <button
//           type="button"
//           onClick={() => navigate('/signup')}
//           className="text-indigo-600 underline"
//         >
//           Signup
//         </button>
//       </p>
//     </form>
//   );
// }


















// import React, { useState } from 'react';
// import API from '../utils/api.js';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [err, setErr] = useState('');
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/auth/login', form); // login request
//       navigate('/dashboard'); // redirect on success
//     } catch (error) {
//       setErr(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-white to-pink-100">
//       <form 
//         onSubmit={submit} 
//         className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         {err && <div className="text-red-600 mb-4 text-center font-medium">{err}</div>}

//         <input
//           required
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={e => setForm({ ...form, email: e.target.value })}
//           className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />
//         <input
//           required
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={e => setForm({ ...form, password: e.target.value })}
//           className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-pink-400"
//         />

//         <button 
//           type="submit" 
//           className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
//         >
//           Login
//         </button>

//         <p className="text-center mt-6 text-gray-600">
//           Don’t have an account?{" "}
//           <button
//             type="button"
//             onClick={() => navigate('/signup')}
//             className="text-pink-600 font-medium hover:underline"
//           >
//             Signup
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// }













// import React, { useState } from 'react';
// import API from '../utils/api.js';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [err, setErr] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showPass, setShowPass] = useState(false);
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setErr('');
//     setLoading(true);
//     try {
//       const res = await API.post('/auth/login', form); // login request

//       // ✅ Save token if backend sends one
//       if (res.data?.token) {
//         localStorage.setItem('token', res.data.token);
//       }

//       navigate('/dashboard'); // redirect on success
//     } catch (error) {
//       if (error.response) {
//         setErr(error.response.data?.message || 'Invalid credentials');
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
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         {err && <div className="text-red-600 mb-4 text-center font-medium">{err}</div>}

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
//           {loading ? 'Logging in...' : 'Login'}
//         </button>

//         {/* Forgot Password + Signup */}
//         <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
//           <button
//             type="button"
//             className="hover:underline"
//             onClick={() => navigate('/forgot-password')}
//           >
//             Forgot password?
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate('/signup')}
//             className="text-pink-600 font-medium hover:underline"
//           >
//             Signup
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

















// yyyyyyyyyyyyyyy

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../utils/api.js";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react"; // icons

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPass, setShowPass] = useState(false);
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setErr("");
//     setLoading(true);
//     try {
//       const res = await API.post("/auth/login", form);

//       // Save token in localStorage (or cookie)
//       localStorage.setItem("token", res.data.token);

//       navigate("/dashboard"); // redirect on success
//     } catch (error) {
//       setErr(error.response?.data?.message || "Login failed. Try again!");
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
//           Welcome Back 👋
//         </h2>

//         {err && (
//           <div className="text-red-600 bg-red-100 p-2 rounded mb-4 text-center">
//             {err}
//           </div>
//         )}

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

//         {/* Submit button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex justify-center items-center"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         {/* Signup redirect */}
//         <p className="text-center mt-4 text-gray-600">
//           Don’t have an account?{" "}
//           <button
//             type="button"
//             onClick={() => navigate("/signup")}
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             Signup
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// }


















// ...................................
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../utils/api.js";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";
// // Import Firebase auth functions
// import { auth, provider, signInWithPopup } from "../firebase";
// import toast from "react-hot-toast";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPass, setShowPass] = useState(false);
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setErr("");
//     setLoading(true);
//     try {
//       const res = await API.post("/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("username", res.data.username);
//       navigate("/dashboard");
//     } catch (error) {
//       setErr(error.response?.data?.message || "Login failed. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Google Sign-in Handler
//   // const handleGoogleSignIn = async () => {
//   //   try {
//   //     const result = await signInWithPopup(auth, provider);
//   //     // The ID token is sent to your backend for verification
//   //     const idToken = await result.user.getIdToken();

//   //     // Make a request to your new backend endpoint
//   //     const res = await API.post("/auth/google", { idToken });
      
//   //     // Save the token from your backend and navigate
//   //     localStorage.setItem("token", res.data.token);
//   //     navigate("/dashboard");

//   //   } catch (error) {
//   //     console.error("Google Sign-In Error", error);
//   //     setErr("Google Sign-In failed. Please try again.");
//   //   }
//   // };


//      const handleGoogleSignIn = async () => {
//     try {
//       // Firebase popup login
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Send user info to backend
//       const res = await API.post("/v1/auth/google", {
//         email: user.email,
//         name: user.displayName,
//         photo: user.photoURL,
//         uid: user.uid,
//       });

//       // Optional: store JWT token if your backend returns it
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("username", res.data.user.username);
//       // alert("Login successful!");
//       toast.success("Login successful!")
//       // Redirect to dashboard
//       navigate("/dashboard");
//     } catch (err) {
//       console.error(err);
//       // alert("Google Sign-In failed!");
//       toast.success("Google Sign-In failed!")
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-100 to-indigo-100">
//       <form
//         onSubmit={submit}
//         className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
//       >
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
//           Welcome Back 👋
//         </h2>

//         {err && (
//           <div className="text-red-600 bg-red-100 p-2 rounded mb-4 text-center">
//             {err}
//           </div>
//         )}

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

//         {/* Submit button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex justify-center items-center"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>

//         <div className="my-4 flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="flex-shrink mx-4 text-gray-400">or</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Login Button */}
//         <button
//           type="button"
//           onClick={handleGoogleSignIn}
//           className="w-full py-3 border flex justify-center items-center gap-2 rounded-lg hover:bg-gray-100 transition"
//         >
//           <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
//           <span>Sign in with Google</span>
//         </button>

//         {/* Signup redirect */}
//         <p className="text-center mt-4 text-gray-600">
//           Don’t have an account?{" "}
//           <button
//             type="button"
//             onClick={() => navigate("/signup")}
//             className="text-indigo-600 font-semibold hover:underline"
//           >
//             Signup
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// }


























// mob
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api.js";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { auth, provider, signInWithPopup } from "../firebase";
import toast from "react-hot-toast";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      navigate("/dashboard");
    } catch (error) {
      setErr(error.response?.data?.message || "Login failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const res = await API.post("/v1/auth/google", {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        uid: user.uid,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username);
      toast.success("Login successful!")
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Google Sign-In failed!")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-indigo-100 px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back 👋
        </h2>

        {err && (
          <div className="text-red-600 bg-red-100 p-2 rounded mb-4 text-center">
            {err}
          </div>
        )}

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

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex justify-center items-center"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full py-3 border flex justify-center items-center gap-2 rounded-lg hover:bg-gray-100 transition"
        >
          <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
          <span>Sign in with Google</span>
        </button>

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-indigo-600 font-semibold hover:underline"
          >
            Signup
          </button>
        </p>
      </form>
    </div>
  );
}