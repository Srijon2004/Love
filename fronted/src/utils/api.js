import axios from "axios";

const API = axios.create({
  baseURL: "https://love-backend-ukzr.onrender.com/api", // ✅ matches your backend
  withCredentials: true, 
});

export default API;
