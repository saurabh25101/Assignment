 "use client";

import { Check, Gem, Target } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      icon: <Target className="w-5 h-5 text-white" />,
      price: "$34",
      desc: "Our pricing plans are designed to make quality diagnostic testing affordable and transparent.",
      features: [
        "160+ lab tests annually",
        "Insights from top doctors and researchers",
        "All-in-one for your whole body",
        "Tracked in one secure place",
        "No insurance, transparent pricing",
      ],
      highlight: false,
    },
    {
      name: "Premium",
      icon: <Gem className="w-5 h-5 text-white" />,
      price: "$56",
      desc: "Each plan includes accurate testing, hygienic sample collection, and easy-to-understand digital reports.",
      features: [
        "Testing 2x/year and on-demand",
        "Personalized protocol for instant action",
        "Add advanced MRI and CT scans anytime",
        "Clinicians review every result and flag issues",
        "24/7 Priority Support",
      ],
      highlight: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6  bg-[#FAF9F6]">
      
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Find Your Perfect Plan
        </h2>
        <p className="text-gray-500 text-sm mt-4">
          Our pricing plans are designed to be transparent, affordable, and flexible to suit your health needs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative w-full min-h-130 rounded-2xl p-6 pt-12 sm:p-8 flex flex-col justify-between
            ${
              plan.highlight
                ? "bg-linear-to-b from-[#f8c9cc] to-[#f3e9ea] shadow-xl"
                : "bg-[#f1f2f4] border border-gray-200"
            }`}
          >
           {plan.highlight && (
  <div className="absolute top-0 left-0 w-17 h-15 overflow-hidden rounded-tl-2xl z-0">
    
    <div className="absolute top-0 left-0 w-full h-full bg-[#e39fa5] clip-triangle" />
    <div className="absolute top-0 left-0 w-full h-full bg-white/20 clip-triangle" />
    
  </div>
)}
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-br from-[#b94b5b] to-[#7b1f2a] shadow-md">
              {plan.icon}
            </div>

            {/* Title */}
            <div>
              <div className="flex items-center gap-2 mt-6 flex-wrap">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {plan.name}
                </h3>

                {plan.highlight && (
                  <span className="text-xs border border-red-400 text-red-500 px-2 py-0.5 rounded-full">
                    Best offer
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {plan.desc}
              </p>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                {plan.price}
                <span className="text-sm font-normal text-gray-500 ml-1">
                  per month
                </span>
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-300 my-6" />

            {/* Features */}
            <ul className="space-y-3 flex-1">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-700">
                  <Check className="w-4 h-4 mt-1 text-gray-800 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-8 w-full py-3 rounded-lg font-medium transition
              ${
                plan.highlight
                  ? "bg-[#a61d24] text-white hover:bg-[#8d171d]"
                  : "border border-red-400 text-red-500 hover:bg-red-50"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}