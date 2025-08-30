import axios from "axios";

const API = axios.create({
  baseURL: "https://love-backend-nsbo.onrender.com", // ✅ matches your backend
  withCredentials: true, 
});

export default API;
