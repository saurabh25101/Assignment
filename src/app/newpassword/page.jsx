 "use client";

import AuthCard from "@/components/AuthCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";  

export default function NewPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API_URL;

  const handleUpdate = async () => {
    if (password !== confirm) {
      toast.error("Passwords do not match"); 
      return;
    }

    const email = localStorage.getItem("email");

    try {
      const res = await fetch(`${API}/api/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Password updated successfully "); 
        setTimeout(() => {
          router.push("/success");
        }, 1500);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2f2] px-4">
      <div className="w-full max-w-md">
        <AuthCard title="New Password" desc="Choose a strong password...">
          <div className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="New Password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
              onChange={(e) => setConfirm(e.target.value)}
            />

            <p className="text-[10px] text-gray-400">
              Use 8+ characters with mix of letters, numbers, symbols
            </p>

            <button onClick={handleUpdate} className="btn w-full">
              Update
            </button>
          </div>
        </AuthCard>
      </div>
    </div>
  );
}