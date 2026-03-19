 import Image from "next/image";

export default function WhyChooseUs() {
  const leftFeatures = [
    {
      title: "Trusted Labs, Reliable Results",
      desc: "We work exclusively with accredited UK laboratories, ensuring accurate and reliable data you can trust.",
    },
    {
      title: "Simple & Easy To Understand Reports",
      desc: "Medical reports can be confusing. We simplify your data into clear insights to help you take action.",
    },
  ];

  const rightFeatures = [
    {
      title: "Fast & Secure Reports",
      desc: "Get your results quickly and securely without compromising quality. Reports are shared directly to your dashboard.",
    },
    {
      title: "One Platform, Complete Health Solution",
      desc: "From booking tests to understanding reports and taking health decisions, everything is available in one place.",
    },
  ];

  return (
    <section className=" bg-[#A11D28] text-white py-12 sm:py-16 lg:py-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12 lg:mb-16 items-center">
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-center">
            Why Choose Us
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg text-center md:text-left">
            Our approach is built around clarity, precision, and long-term health. 
            We focus on what truly matters in your blood data, avoiding unnecessary testing 
            while delivering insights that support better decisions today and into the future.
          </p>
        </div>

        {/* MIDDLE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          
          {/* LEFT FEATURES */}
          <div className="flex flex-col gap-8 sm:gap-10 text-center md:text-right">
            {leftFeatures.map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-65 h-75 sm:h-90 overflow-hidden rounded-lg">
              <Image
                src="/Rectangle.png"
                alt="runners"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 260px"
              />
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="flex flex-col gap-8 sm:gap-10 text-center md:text-left">
            {rightFeatures.map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}