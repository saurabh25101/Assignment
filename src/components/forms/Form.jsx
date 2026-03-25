 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";  
import Link from "next/link";
import toast from "react-hot-toast";
 
export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
const API = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleLogin = async () => {
  try {
    const res = await fetch(`${API}/api/auth/login`, {
      
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
 
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);

      toast.success("Login successful");

      router.push("/dashboard");
    } else {
      toast.error(data.message || "Login failed");
    }
  } catch (err) {
    toast.error("Server error");
  }
};
  

  return (
    <>
      {/* Email */}
      <div className="mb-4">
        <label className="text-sm font-medium">Email Address</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full mt-2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* Password */}
      <div className="mb-2">
        <label className="text-sm font-medium">Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter Your Password"
          className="w-full mt-2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* Forgot Password */}
      <div className="text-right text-sm mb-4">
        <Link href="/forget-password" className="text-red-600 hover:underline">
          Forgot Password?
        </Link>
      </div>

      {/* Button */}
      <button
  onClick={handleLogin}
  className="w-full btn-primary"
>
  Sign in
</button>

      {/* Signup */}
      <p className="text-center text-sm text-gray-500 mt-4">
        Don’t you have an account?{" "}
        <Link href="/signup" className="text-red-600 hover:underline">
          Sign up
        </Link>
      </p>
    </>
  );
}