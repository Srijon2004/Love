// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
//       {/* Left side logo */}
//       <Link to="/" className="text-2xl font-bold text-pink-500">
//         💖 Propose
//       </Link>

//       {/* Right side links */}
//       <div className="flex gap-6 text-lg">
//         <Link to="/" className="text-gray-700 hover:text-pink-500 transition">
//           Home
//         </Link>
//         <Link to="/dashboard" className="text-gray-700 hover:text-pink-500 transition">
//           Propose
//         </Link>
//         <Link to="/signup" className="text-gray-700 hover:text-pink-500 transition">
//           Signup
//         </Link>
//         <Link to="/login" className="text-gray-700 hover:text-pink-500 transition">
//           Login
//         </Link>
//       </div>
//     </nav>
//   );
// }























import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []); // This simple check runs once. For real-time updates, you'd need a global state.

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-pink-500">
        💖 Propose
      </Link>

      <div className="flex gap-6 text-lg items-center">
        <Link to="/" className="text-gray-700 hover:text-pink-500 transition">Home</Link>
        
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-pink-500 transition">Dashboard</Link>
            <button onClick={handleLogout} className="bg-pink-500 text-white px-4 py-1 rounded-md text-base hover:bg-pink-600 transition">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="text-gray-700 hover:text-pink-500 transition">Signup</Link>
            <Link to="/login" className="text-gray-700 hover:text-pink-500 transition">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}


















