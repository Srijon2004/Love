// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function No1() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-100 to-pink-200 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="22050818"
//           data-share-method="host"
//           data-aspect-ratio="1"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/mochi-gif-22050818">Mochi Sticker</a> from{" "}
//           <a href="https://tenor.com/search/mochi-stickers">Mochi Stickers</a>
//         </div>

//         <h1 className="text-3xl font-bold">Please think again! 🙄</h1>
//         <p className="text-lg">এত তাড়া কিসের! আরেকটু ভাবো😥</p>

//         <div className="flex justify-center gap-5 mt-4 w-full">
//           <button
//             onClick={() => navigate("/yes")}
//             className="px-6 py-3 bg-green-400 text-white rounded-lg font-medium shadow-md hover:bg-green-500 transition-transform hover:scale-105"
//           >
//             Yes
//           </button>
//           <button
//             onClick={() => navigate("/no2")}
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

export default function No1() {
  const navigate = useNavigate();
  const girlName = localStorage.getItem("girlName") || "My Love";
  const girlPhoto = localStorage.getItem("girlPhoto"); // store photo earlier on Propose page

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 p-4">
    
    //   <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-300 p-4">
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
        {/* Girlfriend photo */}
        {girlPhoto && (
          <img
            src={girlPhoto}
            alt={girlName}
            className="w-40 h-40 object-cover rounded-full ring-4 ring-pink-300 ring-offset-4 ring-offset-white/80 shadow-lg"
          />
        )}

        {/* GIF */}
        <div
          className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
          data-postid="22050818"
          data-share-method="host"
          data-aspect-ratio="1"
          data-width="100%"
        >
          <a href="https://tenor.com/view/mochi-gif-22050818">Mochi Sticker</a> from{" "}
          <a href="https://tenor.com/search/mochi-stickers">Mochi Stickers</a>
        </div>

        <h1 className="text-3xl font-bold">Please think again! 🙄</h1>
        <p className="text-lg">{girlName}, এত তাড়া কিসের! আরেকটু ভাবো😥</p>

        <div className="flex justify-center gap-5 mt-4 w-full">
          <button
            onClick={() => navigate("/yes")}
            className="px-6 py-3 bg-green-400 text-white rounded-lg font-medium shadow-md hover:bg-green-500 transition-transform hover:scale-105 cursor-pointer"
          >
            Yes
          </button>
          <button
            onClick={() => navigate("/no2")}
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




// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function No1() {
//   const navigate = useNavigate();

//   const girlName = localStorage.getItem("girlName") || "My Love";
//   const girlPhoto = localStorage.getItem("girlPhoto");

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-200 to-pink-400 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">

//         {/* Girlfriend Photo */}
//         {girlPhoto && (
//           <img
//             src={girlPhoto}
//             alt={girlName}
//             className="w-40 h-40 object-cover rounded-full border-4 border-pink-500 shadow-lg"
//           />
//         )}

//         {/* Message */}
//         <h1 className="text-2xl font-bold text-gray-800">
//           {girlName}, are you sure? 🥺
//         </h1>
//         <p className="text-lg text-gray-600">
//           I don’t believe you really mean “No” 😢
//         </p>

//         {/* Buttons */}
//         <div className="flex gap-5 mt-4">
//           <button
//             onClick={() => navigate("/yes")}
//             className="px-6 py-3 bg-pink-400 text-white rounded-lg font-medium shadow-md hover:bg-pink-500 transition-transform hover:scale-105"
//           >
//             Yes 💖
//           </button>
//           <button
//             onClick={() => navigate("/no2")}
//             className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition-transform hover:scale-105"
//           >
//             No 🙈
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
