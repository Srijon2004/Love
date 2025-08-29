// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token"); // or your auth check

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 p-6">
//       <div className="text-center max-w-xl bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-pink-100">
//         <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
//           💖 Welcome to Propose App 💖
//         </h1>
//         <p className="text-gray-700 mb-6">
//           Create a beautiful proposal page for your loved one and share it with her 💌
//         </p>

//         {!isLoggedIn ? (
//           <div className="flex gap-4 justify-center">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition"
//             >
//               Login
//             </button>
//             <button
//               onClick={() => navigate("/signup")}
//               className="px-6 py-3 bg-white border border-pink-400 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition"
//             >
//               Signup
//             </button>
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="px-8 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition"
//           >
//             💌 Start Proposal
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }













// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleStart = () => {
//     // If logged in, go to the dashboard. Otherwise, go to login page.
//     if (token) {
//       navigate("/dashboard");
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6 pt-20">
//       {/* The main card */}
//       <div className="text-center w-full max-w-lg bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-lg border border-pink-100">
        
//         <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
//           💖 Welcome to Propose App 💖
//         </h1>
        
//         <p className="text-gray-700 text-lg mb-8">
//           Create a beautiful proposal page for your loved one and share it with her 💌
//         </p>

//         <button
//           onClick={handleStart}
//           className="px-8 py-3 bg-pink-500 text-white text-xl rounded-lg font-semibold hover:bg-pink-600 transition-transform transform hover:scale-105 shadow-md"
//         >
//           Start Proposal
//         </button>
//       </div>
//     </div>
//   );
// }




















// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();
//   // This check correctly determines if the user is logged in
//   const isLoggedIn = !!localStorage.getItem("token");

//   return (
//     // This container centers the card. The new background is applied from index.css.
//     <div className="min-h-screen flex flex-col items-center justify-center p-6 pt-20">
      
//       {/* This is the card design you liked */}
//       <div className="text-center w-full max-w-xl bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-pink-100">
//         <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
//           💖 Welcome to Propose App 💖
//         </h1>
//         <p className="text-gray-700 mb-6">
//           Create a beautiful proposal page for your loved one and share it with her 💌
//         </p>

//         {/* This logic shows the correct buttons based on login status */}
//         {!isLoggedIn ? (
//           <div className="flex gap-4 justify-center">
//             <button
//               onClick={() => navigate("/login")}
//               className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-transform transform hover:scale-105"
//             >
//               Login
//             </button>
//             <button
//               onClick={() => navigate("/signup")}
//               className="px-6 py-3 bg-white border border-pink-400 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-transform transform hover:scale-105"
//             >
//               Signup
//             </button>
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="px-8 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-transform transform hover:scale-105"
//           >
//             💌 Start Proposal
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }














// mob
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 pt-20">
      
      <div className="text-center w-full max-w-xl bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-pink-100">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-600 mb-4">
          💖 Welcome to Propose App 💖
        </h1>
        <p className="text-gray-700 mb-6 text-base sm:text-lg">
          Create a beautiful proposal page for your loved one and share it with her 💌
        </p>

        {!isLoggedIn ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-transform transform hover:scale-105"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 bg-white border border-pink-400 text-pink-600 rounded-lg font-semibold hover:bg-pink-100 transition-transform transform hover:scale-105"
            >
              Signup
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-transform transform hover:scale-105"
          >
            💌 Start Proposal
          </button>
        )}
      </div>
    </div>
  );
}