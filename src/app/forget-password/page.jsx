 "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "@/components/AuthCard";
import toast from "react-hot-toast";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
const API = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
 
  const handleSubmit = async () => {
  const loading = toast.loading("Sending OTP...");

  try {
    const res = await fetch(
      `${API}/api/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        
      }
      
    );

    const data = await res.json();

    toast.dismiss(loading);

    if (res.ok) {
      toast.success("OTP sent");

      // email save for next steps
      localStorage.setItem("email", email);

      // redirect
      router.push("/otp");
    } else {
      toast.error(data.message || "Error");
    }
  } catch (err) {
    toast.dismiss(loading);
    toast.error("Server error");
  }
};
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2f2] px-4">
      <AuthCard
        title="Forgot Password"
        desc="Enter your email for the verification process, we will send 4 digit code."
      >
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubmit} className="w-full btn-primary">
            Continue
          </button>
        </div>
      </AuthCard>
    </div>
  );
}