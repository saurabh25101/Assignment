 "use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OTPForm() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
const API = process.env.NEXT_PUBLIC_API_URL;
  const inputs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

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

  const handleVerify = async () => {
  const finalOtp = otp.join("");
  const email = localStorage.getItem("email");

  //  Case 1: Empty ya incomplete OTP
  if (finalOtp.length < 4) {
    setMessage("Please enter 4-digit OTP");
    setIsError(true);
    return;
  }

  try {
    const res = await fetch(`${API}/auth/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp: finalOtp }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("OTP verified successfully");
      setIsError(false);

      setTimeout(() => {
        router.push("/newpassword");
      }, 1500);
    } else {
      //  Case 2: Wrong OTP
      setMessage("Please enter correct OTP");
      setIsError(true);
    }
  } catch (err) {
    setMessage("Something went wrong");
    setIsError(true);
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

       
          {message && (
            <p
              className={`mt-4 text-center text-sm font-medium ${
                isError ? "text-red-500" : "text-green-600"
              }`}
            >
              {message}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}