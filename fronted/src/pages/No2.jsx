// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function No2() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-purple-200 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
        
//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="15195810"
//           data-share-method="host"
//           data-aspect-ratio="1"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/couple-forgive-me-asking-for-forgiveness-begging-crying-gif-15195810">
//             Couple Forgive Me Sticker
//           </a>{" "}
//           from <a href="https://tenor.com/search/couple-stickers">Couple Stickers</a>
//         </div>

//         <h1 className="text-3xl font-bold">আরেকবার ভেবে দেখো না 😣</h1>
//         <p className="text-lg"></p>

//         <div className="flex justify-center gap-5 mt-4 w-full">
//           <button
//             onClick={() => navigate("/yes")}
//             className="px-6 py-3 bg-green-400 text-white rounded-lg font-medium shadow-md hover:bg-green-500 transition-transform hover:scale-105"
//           >
//             Yes
//           </button>
//           <button
//             onClick={() => navigate("/no3")}
//             className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition-transform hover:scale-105"
//           >
//             No
//           </button>
//         </div>

//         <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
//           Srijon 💖
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function No2() {
  const navigate = useNavigate();
  const girlName = localStorage.getItem("girlName") || "My Love";
  const girlPhoto = localStorage.getItem("girlPhoto");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-100 to-red-200 p-4">
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
        
        {/* Girlfriend photo */}
        {girlPhoto && (
          <img
            src={girlPhoto}
            alt={girlName}
            className="w-40 h-40 object-cover rounded-full ring-4 ring-red-300 ring-offset-4 ring-offset-white/80 shadow-lg"
          />
        )}

        {/* GIF */}
        <div
          className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
          data-postid="15195810"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="100%"
        >
           <a href="https://tenor.com/view/couple-forgive-me-asking-for-forgiveness-begging-crying-gif-15195810">             Couple Forgive Me Sticker
           </a>{" "}
         from <a href="https://tenor.com/search/couple-stickers">Couple Stickers</a>
        </div>

        <h1 className="text-3xl font-bold flex">আরেকবার ভেবে দেখো না {girlName} 😣</h1>
        <p className="text-lg"> কেনো এমন করছো প্রিয় 😣</p>

        <div className="flex justify-center gap-5 mt-4 w-full">
          <button
            onClick={() => navigate("/yes")}
            className="px-6 py-3 bg-green-400 text-white rounded-lg font-medium shadow-md hover:bg-green-500 transition-transform hover:scale-105 cursor-pointer"
          >
            Yes
          </button>
          <button
            onClick={() => navigate("/no3")}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition-transform hover:scale-105 cursor-pointer"
          >
            No
          </button>
        </div>

        <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
          Srijon 💖
        </div>
      </div>
    </div>
  );
}
