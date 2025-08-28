import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Left side logo */}
      <Link to="/" className="text-2xl font-bold text-pink-500">
        💖 Propose
      </Link>

      {/* Right side links */}
      <div className="flex gap-6 text-lg">
        <Link to="/" className="text-gray-700 hover:text-pink-500 transition">
          Home
        </Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-pink-500 transition">
          Propose
        </Link>
        <Link to="/signup" className="text-gray-700 hover:text-pink-500 transition">
          Signup
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-pink-500 transition">
          Login
        </Link>
      </div>
    </nav>
  );
}
