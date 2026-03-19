 
 
import { Hand } from "lucide-react";
import LoginForm from "../../components/forms/Form";
import AuthCard from "@/components/AuthCard";

export default function LoginPage() {
  return (
    <div className="py-12 flex justify-center bg-[#f7f2f2] px-4">
      <AuthCard
        title={
          <span className="flex items-center gap-2">
            Welcome Back <Hand className="w-6 h-6 text-yellow-500" />
          </span>
        }
        desc="To access your lab test reports securely, please log in with your credentials. Our platform is designed to provide you with a seamless experience, allowing you to view, download, and manage your lab test results at any time."
      >
        <LoginForm/>
      </AuthCard>
    </div>
  );
}