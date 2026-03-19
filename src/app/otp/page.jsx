 import AuthCard from "@/components/AuthCard";
import Link from "next/link";

export default function OTPForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2f2] px-4">
      
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
          
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            OTP Verification
          </h2>

      
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            For your security, we’ve sent a one-time password (OTP) to your
            registered email address or mobile number. Please enter the OTP
            below to verify your identity and continue.
          </p>

    
          <div className="flex justify-center gap-4 mb-6">
            {[1, 2, 3, 4].map((_, i) => (
              <input
                key={i}
                maxLength={1}
                className="w-14 h-14 text-center border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            ))}
          </div>
 
          <div className="flex justify-between text-sm text-gray-500 mb-6">
            <span>Remaining Time: 00:59s</span>
            <span>
              Did not get the code?{" "}
              <button className="text-red-600 font-medium hover:underline">
                Resend
              </button>
            </span>
          </div>

        
          <Link href="/newpassword">
            <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-xl font-medium transition">
              Verify
            </button>
          </Link>

        </div>
      </div>

    </div>
  );
}