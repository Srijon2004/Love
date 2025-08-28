import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signup", form);
      nav("/dashboard");
    } catch (error) {
      setErr(error.response?.data?.message || "Error");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow"
    >
      <h2 className="text-2xl mb-4">Signup</h2>
      {err && <div className="text-red-600">{err}</div>}
      <input
        required
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        className="w-full p-2 border mb-2"
      />
      <input
        required
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-2 border mb-2"
      />
      <input
        required
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full p-2 border mb-4"
      />
      <button className="w-full py-2 bg-pink-500 text-white rounded">
        Create account
      </button>
    </form>
  );
}
