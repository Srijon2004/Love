// import axios from "axios";

// // baseURL can be set globally if backend runs on http://localhost:5000
// axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.withCredentials = true; // send cookies

// export const saveGirlfriend = async (girlfriendData) => {
//   try {
//     const res = await axios.post("/api/user/girlfriend", girlfriendData);
//     return res.data;
//   } catch (err) {
//     throw err.response?.data || err.message;
//   }
// };




// import axios from "axios";

// // baseURL can be set globally if backend runs on http://localhost:5000
// axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.withCredentials = true; // send cookies

// export const saveGirlfriend = async (girlfriendData) => {
//   try {
//     const res = await axios.post("/api/user/girlfriend", girlfriendData);

//     // Create the proposal link using the user's ID from response
//     const proposalLink = `http://localhost:5173/propose/${res.data.data.username}`;
//     console.log("✅ Proposal link copied:", proposalLink);

//     return {
//       ...res.data,
//       proposalLink,
//     };
//   } catch (err) {
//     throw err.response?.data || err.message;
//   }
// };



// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.withCredentials = true;

// export const saveGirlfriend = async (girlfriendData) => {
//   const res = await axios.post("/api/user/girlfriend", girlfriendData);

//   // Use the username returned by the backend to make the proposal link
//   const proposalLink = `http://localhost:5173/propose/${res.data.data.username}`;

//   return {
//     ...res.data,      // original backend response
//     proposalLink,     // your new proposal link
//   };
// };


import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

export const saveGirlfriend = async (girlfriendData) => {
  try {
    const res = await axios.post("/api/user/girlfriend", girlfriendData);
    // Return the response exactly as backend sends
    return res.data; // <- important!
  } catch (err) {
    throw err.response?.data || err.message;
  }
};
