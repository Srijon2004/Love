// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// export default function No3() {
//   const navigate = useNavigate();
//   const noButtonRef = useRef(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   // Function to move No button randomly
//   const moveRandom = () => {
//     const btn = noButtonRef.current;
//     if (!btn) return;
//     const maxX = window.innerWidth - btn.offsetWidth - 20;
//     const maxY = window.innerHeight - btn.offsetHeight - 20;

//     btn.style.position = "absolute";
//     btn.style.top = `${Math.floor(Math.random() * maxY)}px`;
//     btn.style.left = `${Math.floor(Math.random() * maxX)}px`;
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-100 to-pink-200 p-4 relative">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg relative">

//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="15974530976611222074"
//           data-share-method="host"
//           data-aspect-ratio="1.26923"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/peach-goma-phone-gif-15974530976611222074">
//             Peach Goma Phone Sticker
//           </a>{" "}
//           from <a href="https://tenor.com/search/peach+goma-stickers">Peach Goma Stickers</a>
//         </div>

//         <h1 className="text-3xl font-bold">প্লিজ হ্যাঁ বলে দাও না! আর কত ঘোরাবে আমায় 😭</h1>
//         <p className="text-lg">আমি কিন্তু খুব কষ্ট পাবো 😭</p>

//         <div className="flex justify-center gap-5 mt-4 w-full relative">
//           <button
//             onClick={() => navigate("/yes")}
//             className="px-6 py-3 bg-green-400 text-white rounded-lg font-medium shadow-md hover:bg-green-500 transition-transform hover:scale-105"
//           >
//             Yes
//           </button>
//           <button
//             ref={noButtonRef}
//             onMouseEnter={moveRandom}
//             className="px-6 py-3 bg-red-400 text-white rounded-lg font-medium shadow-md hover:bg-red-500 transition-transform"
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





// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// export default function No3() {
//   const navigate = useNavigate();
//   const noButtonRef = useRef(null);

//   // Get girlfriend info
//   const girlName = localStorage.getItem("girlName") || "My Love";
//   const girlPhoto = localStorage.getItem("girlPhoto");

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   // Function to move No button randomly
//   const moveRandom = () => {
//     const btn = noButtonRef.current;
//     if (!btn) return;
//     const maxX = window.innerWidth - btn.offsetWidth - 20;
//     const maxY = window.innerHeight - btn.offsetHeight - 20;

//     btn.style.position = "absolute";
//     btn.style.top = `${Math.floor(Math.random() * maxY)}px`;
//     btn.style.left = `${Math.floor(Math.random() * maxX)}px`;
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-100 to-pink-200 p-4 relative">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg relative">

//         {/* Girlfriend Photo */}
//         {girlPhoto && (
//           <img
//             src={girlPhoto}
//             alt={girlName}
//             className="w-40 h-40 object-cover rounded-full ring-4 ring-pink-400 ring-offset-4 ring-offset-white/80 shadow-lg"
//           />
//         )}

//         {/* GIF */}
//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="15974530976611222074"
//           data-share-method="host"
//           data-aspect-ratio="1.26923"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/peach-goma-phone-gif-15974530976611222074">
//             Peach Goma Phone Sticker
//           </a>{" "}
//           from{" "}
//           <a href="https://tenor.com/search/peach+goma-stickers">
//             Peach Goma Stickers
//           </a>
//         </div>

//         {/* Text */}
//         <h1 className="text-3xl font-bold">
//           প্লিজ হ্যাঁ বলে দাও না! আর কত ঘোরাবে আমায় 😭
//         </h1>
//         <p className="text-lg">{girlName}, আমি কিন্তু খুব কষ্ট পাবো 💔</p>

//         {/* Buttons */}
//         <div className="flex justify-center gap-5 mt-4 w-full relative">
//           <button
//             onClick={() => navigate("/yes")}
//             className="px-6 py-3 bg-green-400 text-white rounded-lg font-medium shadow-md hover:bg-green-500 transition-transform hover:scale-105"
//           >
//             Yes
//           </button>
//           <button
//             ref={noButtonRef}
//             onMouseEnter={moveRandom}
//             className="px-6 py-3 bg-red-400 text-white rounded-lg font-medium shadow-md hover:bg-red-500 transition-transform"
//           >
//             No
//           </button>
//         </div>

//         {/* Footer */}
//         <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
//           Srijon 💖
//         </div>
//       </div>
//     </div>
//   );
// }







import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function No3() {
  const navigate = useNavigate();
  const noButtonRef = useRef(null);

  // Get girlfriend data
  const girlName = localStorage.getItem("girlName") || "My Love";
  const girlPhoto = localStorage.getItem("girlPhoto");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  // Function to move No button randomly
  const moveRandom = () => {
    const btn = noButtonRef.current;
    if (!btn) return;

    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;

    btn.style.position = "fixed"; // <-- stays on screen, no page growth
    btn.style.top = `${Math.floor(Math.random() * maxY)}px`;
    btn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-100 to-pink-200 p-4 relative">
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">

        {/* Girlfriend photo */}
        {girlPhoto && (
          <img
            src={girlPhoto}
            alt={girlName}
            className="w-40 h-40 object-cover rounded-full ring-4 ring-pink-400 ring-offset-4 ring-offset-white/80 shadow-lg"
          />
        )}

        {/* GIF */}
        <div
          className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
          data-postid="15974530976611222074"
          data-share-method="host"
          data-aspect-ratio="1.26923"
          data-width="100%"
        >
          <a href="https://tenor.com/view/peach-goma-phone-gif-15974530976611222074">
            Peach Goma Phone Sticker
          </a>{" "}
          from{" "}
          <a href="https://tenor.com/search/peach+goma-stickers">
            Peach Goma Stickers
          </a>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-bold">প্লিজ হ্যাঁ বলে দাও না! আর কত ঘোরাবে আমায় 😭</h1>
        <p className="text-lg">{girlName}, আমি কিন্তু খুব কষ্ট পাবো 😭</p>

        {/* Yes Button (fixed inside box) */}
        <div className="flex justify-center gap-5 mt-4 w-full relative">
          <button
            onClick={() => navigate("/yes")}
            className="px-6 py-3 bg-green-400 text-white rounded-lg font-medium shadow-md hover:bg-green-500 transition-transform hover:scale-105"
          >
            Yes
          </button>
        </div>

        {/* Footer */}
        <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
          Srijon 💖
        </div>
      </div>

      {/* Floating "No" button */}
      <button
        ref={noButtonRef}
        onMouseEnter={moveRandom}
        className="px-6 py-3 bg-red-400 text-white rounded-lg font-medium shadow-md hover:bg-red-500 transition-transform"
        style={{ position: "fixed" }} // always fixed
      >
        No
      </button>
    </div>
  );
}
