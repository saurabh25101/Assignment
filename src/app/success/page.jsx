 import AuthCard from "@/components/AuthCard";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2f2] px-4">
      
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          
     
          <div className="w-20 h-20 mx-auto flex items-center justify-center bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

       
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Successfully
          </h2>

         
          <p className="text-gray-500 mb-6">
            Your password has been reset successfully
          </p>

          
          <Link href="/">
            <button className="   btn w-full">
              Continue
            </button>
          </Link>

        </div>
      </div>

    </div>
  );
}