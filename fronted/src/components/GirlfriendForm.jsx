// import React, { useState } from "react";
// import { saveGirlfriend } from "../api/userApi";

// function GirlfriendForm() {
//   const [form, setForm] = useState({
//     name: "",
//     photo: "",
//     details: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await saveGirlfriend(form);
//       console.log("Saved:", data);
//       alert("Girlfriend details saved ✅");
//     } catch (err) {
//       console.error("Error:", err);
//       alert("Failed to save girlfriend ❌");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={form.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="photo"
//         placeholder="Photo URL"
//         value={form.photo}
//         onChange={handleChange}
//       />
//       <textarea
//         name="details"
//         placeholder="Details"
//         value={form.details}
//         onChange={handleChange}
//       />
//       <button type="submit">Save</button>
//     </form>
//   );
// }

// export default GirlfriendForm;

// import React, { useState } from "react";
// import { saveGirlfriend } from "../api/userApi";

// function GirlfriendForm() {
//   const [form, setForm] = useState({
//     name: "",
//     photo: "",
//     details: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await saveGirlfriend(form);
//       console.log("Saved:", data);

//       // Use username instead of userId
//       const proposalLink = `http://localhost:5173/propose/${data.data.username}`;

//       // Copy to clipboard
//       navigator.clipboard.writeText(proposalLink);

//       alert(`Girlfriend details saved ✅\nProposal link copied: ${proposalLink}`);
//     } catch (err) {
//       console.error("Error:", err);
//       alert("Failed to save girlfriend ❌");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={form.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="photo"
//         placeholder="Photo URL"
//         value={form.photo}
//         onChange={handleChange}
//       />
//       <textarea
//         name="details"
//         placeholder="Details"
//         value={form.details}
//         onChange={handleChange}
//       />
//       <button type="submit">Save</button>
//     </form>
//   );
// }

// export default GirlfriendForm;

// import React, { useState } from "react";
// import { saveGirlfriend } from "../api/userApi";

// function GirlfriendForm() {
//   const [form, setForm] = useState({
//     name: "",
//     photo: "",
//     details: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       //   const data = await saveGirlfriend(form);
//       //   console.log("Saved:", data);

//       //   // Get the proposal link returned from saveGirlfriend
//       //   const proposalLink = data.proposalLink;

//       //   // Copy to clipboard
//       //   navigator.clipboard.writeText(proposalLink);
//       const data = await saveGirlfriend(form);
//       const username = data?.data?.username; // optional chaining
//       if (!username) throw new Error("Username missing in response");
//       const proposalLink = `http://localhost:5173/propose/${data.data.username}`;
//       navigator.clipboard.writeText(proposalLink);
//       alert(
//         `Girlfriend details saved ✅\nProposal link copied: ${proposalLink}`
//       );
//     } catch (err) {
//       console.error("Error:", err);
//       alert("Failed to save girlfriend ❌");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Enter name"
//         value={form.name}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="photo"
//         placeholder="Photo URL"
//         value={form.photo}
//         onChange={handleChange}
//       />
//       <textarea
//         name="details"
//         placeholder="Details"
//         value={form.details}
//         onChange={handleChange}
//       />
//       <button type="submit">Save</button>
//     </form>
//   );
// }

// export default GirlfriendForm;




















// .................................



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function GirlfriendForm() {
//   const [form, setForm] = useState({ name: "", photo: "", details: "" });
//   const [links, setLinks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   const token = localStorage.getItem("token"); // JWT token

//   // Fetch all links when component mounts
//   useEffect(() => {
//     fetchLinks();
//   }, []);

//   const fetchLinks = async () => {
//     try {
//       const username = "YOUR_USERNAME"; // replace dynamically if needed
//       const res = await axios.get(`/api/user/propose/${username}`);
//       setLinks(res.data.girlfriends);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("");

//     try {
//       const res = await axios.post(
//         "/api/user/girlfriend",
//         form,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMsg(res.data.message);
//       setForm({ name: "", photo: "", details: "" });
//       fetchLinks(); // refresh the list
//     } catch (err) {
//       console.error(err);
//       setMsg(err.response?.data?.message || "Error occurred");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Add a New Link</h2>
//       <form onSubmit={handleSubmit} className="mb-6">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//           className="border p-2 w-full mb-2"
//         />
//         <input
//           type="text"
//           name="photo"
//           placeholder="Photo URL"
//           value={form.photo}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//         />
//         <textarea
//           name="details"
//           placeholder="Details"
//           value={form.details}
//           onChange={handleChange}
//           className="border p-2 w-full mb-2"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded"
//           disabled={loading}
//         >
//           {loading ? "Adding..." : "Add Link"}
//         </button>
//       </form>

//       {msg && <p className="mb-4">{msg}</p>}

//       <h3 className="text-lg font-bold mb-2">All Links</h3>
//       {links.length === 0 && <p>No links added yet.</p>}
//       <ul>
//         {links.map((link, index) => (
//           <li key={index} className="border p-2 mb-2 rounded">
//             <p><strong>Name:</strong> {link.name}</p>
//             {link.photo && (
//               <img src={link.photo} alt={link.name} className="w-20 h-20 object-cover" />
//             )}
//             {link.details && <p><strong>Details:</strong> {link.details}</p>}
//             <p className="text-xs text-gray-500">Created: {new Date(link.createdAt).toLocaleString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


























// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function GirlfriendForm() {
//   const [form, setForm] = useState({ name: "", photo: "", details: "" });
//   const [links, setLinks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   const token = localStorage.getItem("token"); // JWT token
//   const username = localStorage.getItem("username") || "YOUR_USERNAME"; // dynamic username

//   // Fetch all links when component mounts
//   useEffect(() => {
//     fetchLinks();
//   }, []);

//   const fetchLinks = async () => {
//     try {
//       const res = await axios.get(`/api/user/propose/${username}`);
//       setLinks(res.data.girlfriends);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("");

//     try {
//       const res = await axios.post(
//         "/api/user/girlfriend",
//         form,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMsg(res.data.message);
//       setForm({ name: "", photo: "", details: "" });
//       fetchLinks(); // refresh the list
//     } catch (err) {
//       console.error(err);
//       setMsg(err.response?.data?.message || "Error occurred");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Add a New Link</h2>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//           className="border p-2 w-full"
//         />
//         <input
//           type="text"
//           name="photo"
//           placeholder="Photo URL"
//           value={form.photo}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <textarea
//           name="details"
//           placeholder="Details"
//           value={form.details}
//           onChange={handleChange}
//           className="border p-2 w-full"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded mt-2"
//           disabled={loading}
//         >
//           {loading ? "Adding..." : "Add Link"}
//         </button>
//       </form>

//       {msg && <p className="mb-4 text-green-600 font-semibold">{msg}</p>}

//       {/* Links List */}
//       <h3 className="text-lg font-bold mb-2">All Links</h3>
//       {links.length === 0 && <p>No links added yet.</p>}

//       <ul className="flex flex-col gap-4">
//         {links.map((link) => (
//           <li key={link._id} className="border p-3 rounded flex flex-col gap-2">
//             <p><strong>Name:</strong> {link.name}</p>
//             {link.photo && (
//               <img src={link.photo} alt={link.name} className="w-20 h-20 object-cover rounded" />
//             )}
//             {link.details && <p><strong>Details:</strong> {link.details}</p>}
//             <p className="text-xs text-gray-500">
//               Created: {new Date(link.createdAt).toLocaleString()}
//             </p>

//             {/* Unique link buttons */}
//             <div className="flex gap-2 mt-2">
//               {/* Copy link */}
//               <button
//                 className="px-2 py-1 bg-green-500 text-white rounded"
//                 onClick={() => {
//                   const url = `${window.location.origin}/propose/${username}/${link._id}`;
//                   navigator.clipboard.writeText(url);
//                   alert("Proposal link copied!");
//                 }}
//               >
//                 💌 Generate & Copy Link
//               </button>

//               {/* Open link */}
//               <a
//                 href={`/propose/${username}/${link._id}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-2 py-1 bg-blue-500 text-white rounded"
//               >
//                 Open Link
//               </a>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
























import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GirlfriendForm() {
  const [form, setForm] = useState({ name: "", photo: "", details: "" });
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username") || "YOUR_USERNAME";

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const res = await axios.get(`/api/user/propose/${username}`);
      setLinks(res.data.girlfriends);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post(
        "/api/user/girlfriend",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMsg(res.data.message);
      setForm({ name: "", photo: "", details: "" });
      fetchLinks(); 
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.message || "Error occurred");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add a New Link</h2>

      <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="details"
          placeholder="Details"
          value={form.details}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Link"}
        </button>
      </form>

      {msg && <p className="mb-4 text-green-600 font-semibold">{msg}</p>}

      <h3 className="text-lg font-bold mb-2">All Links</h3>
      {links.length === 0 && <p>No links added yet.</p>}

      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link._id} className="border p-3 rounded flex flex-col gap-2">
            <p><strong>Name:</strong> {link.name}</p>
            {link.photo && (
              <img src={link.photo} alt={link.name} className="w-20 h-20 object-cover rounded" />
            )}
            {link.details && <p><strong>Details:</strong> {link.details}</p>}
            <p className="text-xs text-gray-500">
              Created: {new Date(link.createdAt).toLocaleString()}
            </p>

            <div className="flex gap-2 mt-2">
              <button
                className="px-2 py-1 bg-green-500 text-white rounded"
                onClick={() => {
                  const url = `${window.location.origin}/propose/${username}/${link._id}`;
                  navigator.clipboard.writeText(url);
                  alert("Proposal link copied!");
                }}
              >
                💌 Generate & Copy Link
              </button>

              <a
                href={`/propose/${username}/${link._id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-blue-500 text-white rounded"
              >
                Open Link
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}