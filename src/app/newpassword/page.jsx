 import AuthCard from "@/components/AuthCard";
import Link from "next/link";

export default function NewPasswordForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2f2] px-4">
      
      <div className="w-full max-w-md"> 
        <AuthCard title="New Password" desc="Choose a strong password that you haven’t used before to keep your personal information and medical reports safe. Once updated, you can continue managing your lab tests, viewing reports, and tracking your health with confidence.">
          
          <div className="flex flex-col gap-4">
            <input type="password" placeholder="Old Password" className="input" />
            <input type="password" placeholder="New Password" className="input" />
            <input type="password" placeholder="Confirm Password" className="input" />

<p className="text-[10px] text-gray-400  whitespace-nowrap">
  Use 8 or more characters with a mix of letters, numbers and symbols
</p>
      
              <Link href="/success">
  <button className=" btn w-full">Update</button>
</Link>
          </div>

        </AuthCard>
      </div>

    </div>
  );
}