 "use client";
import { useState } from "react";
import AuthCard from "@/components/AuthCard";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function SignupForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
const router = useRouter();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
  if (form.password !== form.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  const loading = toast.loading("Creating account...");

  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.firstName + " " + form.lastName,
        email: form.email,
        password: form.password,
      }),
    });

    const data = await res.json();

    toast.dismiss(loading);

    if (res.ok) {
      toast.success("Account created successfully");

      // optional: redirect to login
      router.push("/login");
    } else {
      toast.error(data.message || "Signup failed");
    }
  } catch (err) {
    toast.dismiss(loading);
    toast.error("Server error");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2f2] px-4">
      <AuthCard
        title="Create an Account"
        desc="Welcome! Signing up is quick and easy."
      >
        <div className="flex flex-col gap-4">

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="firstName"
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              className="input w-full"
            />
            <input
              name="lastName"
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              className="input w-full"
            />
          </div>

          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="input"
          />

          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="input"
          />

          <input
            name="confirmPassword"
            onChange={handleChange}
            type="password"
            placeholder="Confirm Password"
            className="input"
          />

          <p className="text-[10px] text-gray-400">
            Use 8+ characters with letters & numbers
          </p>

          <button onClick={handleSubmit} className="btn">
            Sign Up
          </button>

        </div>
      </AuthCard>
    </div>
  );
}