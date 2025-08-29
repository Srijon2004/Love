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























// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []); // This simple check runs once. For real-time updates, you'd need a global state.

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("username");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
//       <Link to="/" className="text-2xl font-bold text-pink-500">
//         💖 Propose
//       </Link>

//       <div className="flex gap-6 text-lg items-center">
//         <Link to="/" className="text-gray-700 hover:text-pink-500 transition">Home</Link>
        
//         {isLoggedIn ? (
//           <>
//             <Link to="/dashboard" className="text-gray-700 hover:text-pink-500 transition">Dashboard</Link>
//             <button onClick={handleLogout} className="bg-pink-500 text-white px-4 py-1 rounded-md text-base hover:bg-pink-600 transition">
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/signup" className="text-gray-700 hover:text-pink-500 transition">Signup</Link>
//             <Link to="/login" className="text-gray-700 hover:text-pink-500 transition">Login</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }


















// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []); // This simple check runs once. For real-time updates, you'd need a global state.

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("username"); // This line is added to clear the username
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
//       <Link to="/" className="text-2xl font-bold text-pink-500">
//         💖 Propose
//       </Link>

//       <div className="flex gap-6 text-lg items-center">
//         <Link to="/" className="text-gray-700 hover:text-pink-500 transition">Home</Link>
        
//         {isLoggedIn ? (
//           <>
//             <Link to="/dashboard" className="text-gray-700 hover:text-pink-500 transition">Dashboard</Link>
//             <button onClick={handleLogout} className="bg-pink-500 text-white px-4 py-1 rounded-md text-base hover:bg-pink-600 transition">
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/signup" className="text-gray-700 hover:text-pink-500 transition">Signup</Link>
//             <Link to="/login" className="text-gray-700 hover:text-pink-500 transition">Login</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }



















// mob
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-3">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-500">
          💖 Propose
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-lg items-center">
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

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-pink-500 transition">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-pink-500 transition">Dashboard</Link>
              <button onClick={handleLogout} className="w-full text-left py-2 text-red-500 hover:text-red-700 transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="block py-2 text-gray-700 hover:text-pink-500 transition">Signup</Link>
              <Link to="/login" className="block py-2 text-gray-700 hover:text-pink-500 transition">Login</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}