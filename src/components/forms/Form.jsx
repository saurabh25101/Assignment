 "use client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <>
      {/* Email */}
      <div className="mb-4">
        <label className="text-sm font-medium">Email Address</label>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full mt-2 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* Password */}
      <div className="mb-2">
        <label className="text-sm font-medium">Password</label>
        <input
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
      <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition">
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