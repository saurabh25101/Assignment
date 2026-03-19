 import AuthCard from "@/components/AuthCard";

export default function SignupForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f2f2] px-4">
      
      <AuthCard title="Create an Account" desc="Welcome! Signing up is quick and easy. By creating an account, you’ll be able to securely access and manage your lab test reports online, track your health progress, and receive timely updates on your results.">
        
        <div className="flex flex-col gap-4">

           
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="First Name" className="input w-full" />
            <input type="text" placeholder="Last Name" className="input w-full" />
          </div>

          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
        <input 
  type="password" 
  placeholder="Confirm Password" 
  className="input" 
/>

<p className="text-[10px] text-gray-400  whitespace-nowrap">
  Use 8 or more characters with a mix of letters, numbers and symbols
</p>
          <button className="btn">Sign Up</button>

        </div>

      </AuthCard>

    </div>
  );
}