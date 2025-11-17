// src/pages/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function submit(e){
    e.preventDefault();
    setErr("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Admin Sign in</h2>
        <p className="text-sm text-gray-600 mb-6">Sign in to manage elections</p>

        {err && <div className="mb-4 text-red-600">{err}</div>}

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required
              className="mt-1 block w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required
              className="mt-1 block w-full px-3 py-2 border rounded-md" />
          </div>

          <div className="text-right">
            <button type="button" onClick={()=>alert('Implement forgot flow or open reset modal')} className="text-sm text-gray-600 hover:underline">Forgot password?</button>
          </div>

          <button type="submit" className="w-full py-2 bg-black text-white rounded-lg">Sign In</button>
        </form>
      </div>
    </div>
  );
}
