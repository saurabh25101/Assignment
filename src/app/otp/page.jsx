 "use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OTPForm() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const router = useRouter();

  // focus first input on load
  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  // handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    // allow only numbers
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input
    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  // handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  // verify OTP
  const handleVerify = async () => {
    const finalOtp = otp.join("");
    const email = localStorage.getItem("email");

    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp: finalOtp }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("OTP Verified");
      router.push("/newpassword");
    } else {
      alert(data.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2f2] px-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            OTP Verification
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Enter the 4-digit OTP sent to your email.
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-4 mb-6">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputs.current[i] = el)}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-14 h-14 text-center border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            ))}
          </div>

          {/* Verify Button */}
         <button
  onClick={handleVerify}
  className="w-full btn-primary rounded-xl"
>
  Verify
</button>

        </div>
      </div>
    </div>
  );
}