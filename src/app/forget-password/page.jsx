 import AuthCard from "@/components/AuthCard";
import Link from "next/link";

export default function ForgotPasswordForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2f2] px-4">
      
      <AuthCard title="Forgot Password" desc="Enter your email for the verification process, we will send 4 digits code to your email.">
        
        <div className="flex flex-col gap-4">
          <input type="email" placeholder="Email Address" className="input" />
          <Link href="/otp">
  <button className="btn">Continue</button>
</Link>
        </div>

      </AuthCard>

    </div>
  );
}