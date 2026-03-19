 "use client";
import Image from "next/image";
import { useState } from "react";

export default function Healthy() {
  const [active, setActive] = useState(0);

  const tabs = [
    "Daily Health",
    "Test Smart. Live Healthy",
    "Fast, Safe & Reliable Lab Testing",
    "Your Partner in Better Health",
  ];

  return (
    <section className="w-full font-sans">
      {/* Orange Header */}
      <div
        className="text-white text-center py-16 px-4"
        style={{ backgroundColor: "#F26522" }}
      >
        <p className="text-sm tracking-widest" style={{ opacity: 0.9 }}>
          Your partner in feeling your best
        </p>
        <h2
          className="text-4xl md:text-5xl font-light mt-2"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.5px" }}
        >
          Healthy Happens together
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex w-full">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex-1 text-center py-3 text-sm font-medium cursor-pointer transition-colors"
            style={{
              backgroundColor: active === i ? "#8B1A1A" : "#F26522",
              color: "#fff",
              border: "none",
              borderRight:
                i < tabs.length - 1 ? "1px solid rgba(255,255,255,0.3)" : "none",
              minHeight: "52px",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="w-full bg-white">
        {active === 0 ? (
       
          <div className="relative w-full overflow-hidden bg-white flex items-center">

  {/* LEFT CONTENT */}
  <div className="w-[45%] z-10 pl-10 pr-6 py-10">
    <h3 className="text-3xl font-bold mb-5">Daily Health</h3>

    <p className="text-gray-500 mb-6 max-w-85">
      Something feels off—but what? From inflammation to blood sugar...
    </p>

    <div className="grid grid-cols-2 gap-y-2 gap-x-10 mb-6 text-xs font-bold">
      <span>STAY HYDRATED</span>
      <span>EAT A BALANCED DIET</span>
      <span>GET QUALITY SLEEP</span>
      <span>MANAGE STRESS</span>
    </div>

    <button className="bg-[#8B1A1A] text-white px-6 py-2 text-sm rounded">
      LEARN MORE
    </button>
  </div>

  {/* RIGHT IMAGE */}
  <div className="w-[55%] flex justify-end">
    <Image
      src="/Mask-group.png"
      alt="health"
      width={700}
      height={450}
      className="object-contain h-auto"
      priority
    />
  </div>

</div>
         
        ) : (
          <div className="w-full min-h-95 md:min-h-112.5 flex items-center justify-center text-center">
   <div className="flex flex-col items-center justify-center gap-3">
  <h1 className="text-5xl font-bold text-gray-200">404</h1>
  <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
    No Data Found
  </h2>
  <p className="text-gray-500 text-sm">
    This section is under development
  </p>
</div>
</div>
        )}
      </div>
    </section>
  );
}