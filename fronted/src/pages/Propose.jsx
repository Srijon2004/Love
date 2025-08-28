// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import API from '../utils/api'

// export default function Propose() {
//   const { username } = useParams()
//   const [data, setData] = useState(null)
//   const [err, setErr] = useState('')

//   useEffect(() => {
//     API.get(`/user/propose/${username}`)
//       .then(res => setData(res.data))
//       .catch(e => setErr(e.response?.data?.message || 'Proposal not found'))
//   }, [username])

//   if (err) return <div className="text-center mt-20 text-red-600">{err}</div>
//   if (!data) return <div className="text-center mt-20">Loading...</div>

//   return (
//     <div className="max-w-2xl mx-auto text-center mt-12 bg-white p-6 rounded shadow-lg">
//       <h1 className="text-3xl font-bold mb-4">
//         Hey {data.girlfriend.name} 💖
//       </h1>

//       {data.girlfriend.photo && (
//         <img
//           src={data.girlfriend.photo}
//           alt="her"
//           className="mx-auto rounded-full w-48 h-48 object-cover mb-4"
//         />
//       )}

//       <p className="mb-6 text-lg">{data.girlfriend.details}</p>

//       <div className="text-2xl font-semibold mb-4">
//         Will you be mine forever? 🌹
//       </div>

//       <div className="mt-6 space-x-4">
//         <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//           Yes 💍
//         </button>
//         <button className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300">
//           Maybe 🙂
//         </button>
//       </div>
//     </div>
//   )
// }





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import API from '../utils/api'; // make sure this points to your axios instance

// export default function Propose() {
//   const { username } = useParams();
//   const [data, setData] = useState(null);
//   const [err, setErr] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!username) return;

//     setLoading(true);
//     API.get(`/user/propose/${username}`)
//       .then((res) => {
//         setData(res.data);
//         setErr('');
//       })
//       .catch((e) => {
//         console.error(e);
//         setErr(e.response?.data?.message || 'Proposal not found');
//         setData(null);
//       })
//       .finally(() => setLoading(false));
//   }, [username]);

//   if (loading) return <div className="text-center mt-20">Loading...</div>;
//   if (err) return <div className="text-center mt-20 text-red-600">{err}</div>;

//   return (
//     <div className="max-w-2xl mx-auto text-center mt-12 bg-white p-6 rounded shadow-lg">
//       <h1 className="text-3xl font-bold mb-4">
//         Hey {data.girlfriend.name} 💖
//       </h1>

//       {data.girlfriend.photo && (
//         <img
//           src={data.girlfriend.photo}
//           alt="her"
//           className="mx-auto rounded-full w-48 h-48 object-cover mb-4"
//         />
//       )}

//       <p className="mb-6 text-lg">{data.girlfriend.details}</p>

//       <div className="text-2xl font-semibold mb-4">
//         Will you be mine forever? 🌹
//       </div>

//       <div className="mt-6 space-x-4">
//         <button
//           onClick={() => alert('She said YES! 💍')}
//           className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           Yes 💍
//         </button>
//         <button
//           onClick={() => alert('Maybe later 🙂')}
//           className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
//         >
//           Maybe 🙂
//         </button>
//       </div>
//     </div>
//   );
// }












// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import API from '../utils/api';

// export default function Propose() {
//   const { username } = useParams();
//   const [data, setData] = useState(null);
//   const [err, setErr] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!username) return;

//     setLoading(true);
//     API.get(`/user/propose/${username}`)
//       .then((res) => {
//         setData(res.data);
//         setErr('');
//         localStorage.setItem('girlName', res.data.girlfriend.name);
//       })
//       .catch((e) => {
//         console.error(e);
//         setErr(e.response?.data?.message || 'Proposal not found');
//         setData(null);
//       })
//       .finally(() => setLoading(false));
//   }, [username]);

//   const name = data?.girlfriend?.name || localStorage.getItem('girlName') || '____';

//   if (loading) return <div className="text-center mt-20 text-xl">Loading...</div>;
//   if (err) return <div className="text-center mt-20 text-red-600 text-xl">{err}</div>;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-300 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg transition-all">
//         {/* Tenor GIF */}
//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="22885016"
//           data-share-method="host"
//           data-aspect-ratio="1.04918"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/manja-gif-22885016">Manja Sticker</a> from{' '}
//           <a href="https://tenor.com/search/manja-stickers">Manja Stickers</a>
//         </div>
//         <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//         <h1 className="text-3xl font-bold">Do you love me? 🤗</h1>
//         <p className="text-lg">
//           <span id="girlName" className="font-semibold">{name}</span> is all yours 💕
//         </p>

//         <div className="flex flex-wrap justify-center gap-5 w-full mt-4">
//           <a
//             href="/yes"
//             className="px-6 py-3 bg-pink-400 text-white rounded-lg font-medium shadow-md hover:bg-pink-500 transform transition-transform hover:scale-105"
//           >
//             Yes
//           </a>
//           <a
//             href="/no1"
//             className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transform transition-transform hover:scale-105"
//           >
//             No
//           </a>
//         </div>

//         <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
//           Srijon 💖
//         </div>
//       </div>
//     </div>
//   );
// }






















// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import API from '../utils/api';

// export default function Propose() {
//   const { username } = useParams();
//   const [data, setData] = useState(null);
//   const [err, setErr] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Fetch API data
//   useEffect(() => {
//     if (!username) return;
//     setLoading(true);
//     API.get(`/user/propose/${username}`)
//       .then((res) => {
//         setData(res.data);
//         setErr('');
//         localStorage.setItem('girlName', res.data.girlfriend.name);
//       })
//       .catch((e) => {
//         console.error(e);
//         setErr(e.response?.data?.message || 'Proposal not found');
//         setData(null);
//       })
//       .finally(() => setLoading(false));
//   }, [username]);

//   // Load Tenor script
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://tenor.com/embed.js';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const name = data?.girlfriend?.name || localStorage.getItem('girlName') || '____';

//   if (loading) return <div className="text-center mt-20 text-xl">Loading...</div>;
//   if (err) return <div className="text-center mt-20 text-red-600 text-xl">{err}</div>;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-300 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg transition-all">

//         {data.girlfriend.photo && (
//           <img
//             src={data.girlfriend.photo}
//             alt={name}
//             className="w-48 h-48 object-cover rounded-full border-4 border-pink-400 shadow-lg"
//           />
//         )}

//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="22885016"
//           data-share-method="host"
//           data-aspect-ratio="1.04918"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/manja-gif-22885016">Manja Sticker</a> from{' '}
//           <a href="https://tenor.com/search/manja-stickers">Manja Stickers</a>
//         </div>

//         <h1 className="text-3xl font-bold">Do you love me? 🤗</h1>
//         <p className="text-lg">
//           <span id="girlName" className="font-semibold">{name}</span> is all yours 💕
//         </p>

//         <div className="flex flex-wrap justify-center gap-5 w-full mt-4">
//           <a
//             href="/yes"
//             className="px-6 py-3 bg-pink-400 text-white rounded-lg font-medium shadow-md hover:bg-pink-500 transform transition-transform hover:scale-105"
//           >
//             Yes
//           </a>
//           <a
//             href="/no1"
//             className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transform transition-transform hover:scale-105"
//           >
//             No
//           </a>
//         </div>

//         <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
//           Srijon 💖
//         </div>
//       </div>
//     </div>
//   );
// }











// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Propose() {
//   const navigate = useNavigate();
//   const girlName = localStorage.getItem("girlName") || "My Love";

//   // Load Tenor GIF script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-300 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
        
//         {/* GIF */}
//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="22885016"
//           data-share-method="host"
//           data-aspect-ratio="1.04918"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/manja-gif-22885016">Manja Sticker</a> from{" "}
//           <a href="https://tenor.com/search/manja-stickers">Manja Stickers</a>
//         </div>

//         <h1 className="text-3xl font-bold">Do you love me? 🤗</h1>
//         <p className="text-lg">
//           <span className="font-semibold">{girlName}</span> is all yours 💕
//         </p>

//         <div className="flex justify-center gap-5 mt-4 w-full">
//           <button
//             onClick={() => navigate("/yes")}
//             className="px-6 py-3 bg-pink-400 text-white rounded-lg font-medium shadow-md hover:bg-pink-500 transition-transform hover:scale-105"
//           >
//             Yes
//           </button>
//           <button
//             onClick={() => navigate("/no1")}
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











// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../utils/api";

// export default function Propose() {
//   const { username } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState("");

//   useEffect(() => {
//     if (!username) return;
//     setLoading(true);

//     API.get(`/user/propose/${username}`)
//       .then((res) => {
//         setData(res.data);
//         setErr("");
//         // ✅ Store name and photo in localStorage for No pages
//         localStorage.setItem("girlName", res.data.girlfriend.name);
//         localStorage.setItem("girlPhoto", res.data.girlfriend.photo || "");
//       })
//       .catch((e) => {
//         console.error(e);
//         setErr(e.response?.data?.message || "Proposal not found");
//         setData(null);
//       })
//       .finally(() => setLoading(false));
//   }, [username]);

//   // Load Tenor script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   const girlName = data?.girlfriend?.name || localStorage.getItem("girlName") || "My Love";
//   const girlPhoto = data?.girlfriend?.photo || localStorage.getItem("girlPhoto");

//   if (loading) return <div className="text-center mt-20 text-xl">Loading...</div>;
//   if (err) return <div className="text-center mt-20 text-red-600 text-xl">{err}</div>;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-300 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
        
//         {/* Girlfriend photo */}
//         {girlPhoto && (
//           <img
//             src={girlPhoto}
//             alt={girlName}
//             className="w-48 h-48 object-cover rounded-full border-4 border-pink-400 shadow-lg"
//           />
//         )}

//         {/* GIF */}
//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="22885016"
//           data-share-method="host"
//           data-aspect-ratio="1.04918"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/manja-gif-22885016">Manja Sticker</a> from{" "}
//           <a href="https://tenor.com/search/manja-stickers">Manja Stickers</a>
//         </div>

//         <h1 className="text-3xl font-bold">Do you love me? 🤗</h1>
//         <p className="text-lg">
//           <span className="font-semibold">{girlName}</span> is all yours 💕
//         </p>

//         <div className="flex justify-center gap-5 mt-4 w-full">
//           <button
//             onClick={() => navigate("/yes")}
//             className="px-6 py-3 bg-pink-400 text-white rounded-lg font-medium shadow-md hover:bg-pink-500 transition-transform hover:scale-105"
//           >
//             Yes
//           </button>
//           <button
//             onClick={() => navigate("/no1")}
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


















// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../utils/api";

// export default function Propose() {
//   const { username, girlfriendId } = useParams(); // optionally accept girlfriendId
//   const navigate = useNavigate();

//   const [girlfriend, setGirlfriend] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [err, setErr] = useState("");

//   useEffect(() => {
//     if (!username) return;
//     setLoading(true);

//     const url = girlfriendId
//       ? `/user/propose/${username}/${girlfriendId}` // fetch single girlfriend by ID
//       : `/user/propose/${username}`;              // fetch all girlfriends

//     API.get(url)
//       .then((res) => {
//         let gf;

//         // New backend returns 'girlfriends' array for multiple, 'girlfriend' for single
//         if (girlfriendId) {
//           gf = res.data.girlfriend;
//         } else if (res.data.girlfriends) {
//           gf = res.data.girlfriends[0]; // take first girlfriend if multiple
//         } else {
//           gf = res.data.girlfriend || null; // fallback to legacy
//         }

//         if (!gf) {
//           setErr("No proposal found");
//           setGirlfriend(null);
//           return;
//         }

//         setGirlfriend(gf);

//         // store in localStorage for fallback
//         localStorage.setItem("girlName", gf.name || "My Love");
//         localStorage.setItem("girlPhoto", gf.photo || "");
//       })
//       .catch((e) => {
//         console.error(e);
//         setErr(e.response?.data?.message || "Proposal not found");
//         setGirlfriend(null);
//       })
//       .finally(() => setLoading(false));
//   }, [username, girlfriendId]);

//   // Load Tenor GIF script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://tenor.com/embed.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   const girlName =
//     girlfriend?.name || localStorage.getItem("girlName") || "My Love";
//   const girlPhoto =
//     girlfriend?.photo || localStorage.getItem("girlPhoto") || "";

//   if (loading)
//     return <div className="text-center mt-20 text-xl">Loading...</div>;
//   if (err)
//     return (
//       <div className="text-center mt-20 text-red-600 text-xl">{err}</div>
//     );

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-300 p-4">
//       <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
//         {/* Girlfriend photo */}
//         {girlPhoto ? (
//           <img
//             src={girlPhoto}
//             alt={girlName}
//             className="w-48 h-48 object-cover rounded-full border-4 border-pink-400 shadow-lg"
//           />
//         ) : (
//           <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
//             No Photo
//           </div>
//         )}

//         {/* GIF */}
//         <div
//           className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
//           data-postid="22885016"
//           data-share-method="host"
//           data-aspect-ratio="1.04918"
//           data-width="100%"
//         >
//           <a href="https://tenor.com/view/manja-gif-22885016">Manja Sticker</a> from{" "}
//           <a href="https://tenor.com/search/manja-stickers">Manja Stickers</a>
//         </div>

//         <h1 className="text-3xl font-bold">Do you love me? 🤗</h1>
//         <p className="text-lg">
//           <span className="font-semibold">{girlName}</span> is all yours 💕
//         </p>

//         <div className="flex justify-center gap-5 mt-4 w-full">
//           <button
//             onClick={() => navigate("/yes")}
//             className="px-6 py-3 bg-pink-400 text-white rounded-lg font-medium shadow-md hover:bg-pink-500 transition-transform hover:scale-105"
//           >
//             Yes
//           </button>
//           <button
//             onClick={() => navigate("/no1")}
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




















import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function Propose() {
  const { username, girlfriendId } = useParams();
  const navigate = useNavigate();
  const [girlfriend, setGirlfriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!username || !girlfriendId) return;
    setLoading(true);

    API.get(`/user/propose/${username}/${girlfriendId}`)
      .then((res) => {
        setGirlfriend(res.data.girlfriend);
        setErr("");
        localStorage.setItem("girlName", res.data.girlfriend.name);
        localStorage.setItem("girlPhoto", res.data.girlfriend.photo || "");
      })
      .catch((e) => {
        console.error(e);
        setErr(e.response?.data?.message || "Proposal not found");
        setGirlfriend(null);
      })
      .finally(() => setLoading(false));
  }, [username, girlfriendId]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const girlName = girlfriend?.name || localStorage.getItem("girlName") || "My Love";
  const girlPhoto = girlfriend?.photo || localStorage.getItem("girlPhoto");

  if (loading) return <div className="text-center mt-20 text-xl">Loading...</div>;
  if (err) return <div className="text-center mt-20 text-red-600 text-xl">{err}</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-pink-300 p-4">
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
        
        {girlPhoto && (
          <img
            src={girlPhoto}
            alt={girlName}
            className="w-48 h-48 object-cover rounded-full border-4 border-pink-400 shadow-lg"
          />
        )}

        <div
          className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
          data-postid="22885016"
          data-share-method="host"
          data-aspect-ratio="1.04918"
          data-width="100%"
        >
          <a href="https://tenor.com/view/manja-gif-22885016">Manja Sticker</a> from{" "}
          <a href="https://tenor.com/search/manja-stickers">Manja Stickers</a>
        </div>

        <h1 className="text-3xl font-bold">Do you love me? 🤗</h1>
        <p className="text-lg">
          <span className="font-semibold">{girlName}</span> is all yours 💕
        </p>

        <div className="flex justify-center gap-5 mt-4 w-full">
          <button
            onClick={() => navigate("/yes")}
            className="px-6 py-3 bg-pink-400 text-white rounded-lg font-medium shadow-md hover:bg-pink-500 transition-transform hover:scale-105"
          >
            Yes
          </button>
          <button
            onClick={() => navigate("/no1")}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition-transform hover:scale-105"
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