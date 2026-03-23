 import { FlaskConical, ClipboardCheck, HeartPulse } from "lucide-react";
import CustomButton from "../btn/page";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FlaskConical className="text-red-500" size={20} />,
      title: "Simple Steps to Better Health",
    },
    {
      icon: <ClipboardCheck className="text-green-500" size={20} />,
      title: "Fast, Safe & Reliable Testing Process",
    },
    {
      icon: <HeartPulse className="text-red-400" size={20} />,
      title: "Test Booking Made Easy",
    },
  ];

  return (
    <section className=" bg-[#040847] text-white py-12 sm:py-16 lg:py-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            How it Works ?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            From order to results, every step is designed to be simple, safe, and precise.
            Once you order your test, your kit is delivered to your home.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* LEFT SIDE - Steps */}
          <div className="flex flex-col sm:flex-row md:flex-col justify-center items-center gap-8 md:gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center max-w-62.5"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white mb-3">
                  {step.icon}
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base leading-snug">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
              Your Path to Accurate Lab Testing
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
              Our process is designed to save you time while giving you clear, meaningful insight.
              Order your test online and receive your kit at home, with the option to self-collect
              a capillary sample or attend one of our phlebotomists for intravenous testing.
              Results are delivered securely through your dashboard.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6">
              <CustomButton
  variant="whiteRed"
  className="px-6 py-3 font-semibold text-sm w-full sm:w-auto btn-all"
>
  GET STARTED
</CustomButton>

             <button className="text-white underline text-lg mt-5 hover:text-[#86151d] transition">
  MORE ON HOW IT WORKS
</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}