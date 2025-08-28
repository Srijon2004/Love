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

import React, { useState } from "react";
import { saveGirlfriend } from "../api/userApi";

function GirlfriendForm() {
  const [form, setForm] = useState({
    name: "",
    photo: "",
    details: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const data = await saveGirlfriend(form);
      //   console.log("Saved:", data);

      //   // Get the proposal link returned from saveGirlfriend
      //   const proposalLink = data.proposalLink;

      //   // Copy to clipboard
      //   navigator.clipboard.writeText(proposalLink);
      const data = await saveGirlfriend(form);
      const username = data?.data?.username; // optional chaining
      if (!username) throw new Error("Username missing in response");
      const proposalLink = `http://localhost:5173/propose/${data.data.username}`;
      navigator.clipboard.writeText(proposalLink);
      alert(
        `Girlfriend details saved ✅\nProposal link copied: ${proposalLink}`
      );
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to save girlfriend ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        value={form.photo}
        onChange={handleChange}
      />
      <textarea
        name="details"
        placeholder="Details"
        value={form.details}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default GirlfriendForm;
