import axios from "axios";

const API = axios.create({
  baseURL: "https://love-backend-bx8x.onrender.com/api", // ✅ matches your backend
  withCredentials: true, 
});

export default API;
