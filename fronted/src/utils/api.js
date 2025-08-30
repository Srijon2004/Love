import axios from "axios";

const API = axios.create({
  baseURL: "https://love-backend-76yj.onrender.com/api/v1", // ✅ matches your backend
  withCredentials: true, 
});

export default API;
