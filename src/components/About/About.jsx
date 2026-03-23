 
import Image from "next/image";
import {
  FaAngry,
  FaFrown,
  FaGrinTongueWink,
  FaMeh,
  FaSmileBeam,
} from "react-icons/fa";
import CustomButton from "../btn/page";

/* -------------------- REUSABLE COMPONENTS -------------------- */

const RatingCard = () => (
  <div className="w-[230px] h-[150px] bg-[#EDEDED] rounded-[10px] p-4 flex flex-col justify-between shadow-sm ">
    <p className="text-sm font-semibold text-[#555]">Best Ratings</p>

   <div className="flex flex-col gap-2">

     <div className="h-[10px] w-[170px] bg-gray-300 rounded-full"></div>

     <div className="h-[10px] w-[190px] bg-gray-300 rounded-full"></div>

   </div>

   ___+
  </div>
);

const ArrowTrendingUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 text-green-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 17l6-6 4 4 8-8M14 7h7v7"
    />
  </svg>
);

const Avatar = ({ src, initials }) =>
  src ? (
    <img
      src={src}
      alt="avatar"
      className="w-7 h-7 rounded-full border-2 border-white object-cover"
    />
  ) : (
    <div className="w-7 h-7 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-[9px] font-semibold text-white">
      {initials}
    </div>
  );

const StatsCard = () => (
  <div className="w-[240px] bg-white rounded-[10px] p-5 shadow-md ">
    <div className="flex justify-between items-start">
      <h3 className="text-[24px] font-semibold text-[#0B1B3F]">30,000+</h3>
      <ArrowTrendingUp />
    </div>

    <p className="text-[12px] text-gray-400 mt-2 leading-relaxed">
      Blood test in July 2025 with 5 star ratings and happy clients.
    </p>

    <div className="h-px bg-orange-400 mt-4" />

    <div className="flex flex-col gap-3 mt-4">
      <div className="flex -space-x-2">
        <Avatar src="/small-logo.jpg" />
        <Avatar src="/small-logo.jpg" />
        <Avatar initials="P" />
        <Avatar initials="FJ" />
        <Avatar initials="S" />
      </div>

      <div className="flex -space-x-2">
        <Avatar src="/small-logo.jpg" />
        <Avatar src="/small-logo.jpg" />
        <Avatar initials="S" />
        <Avatar src="/small-logo.jpg" />
        <Avatar initials="Fy" />
      </div>
    </div>
  </div>
);

const ImageCard = ({ src }) => (
  <div className="relative w-[280px] h-[380px] rounded-xl overflow-hidden shadow-lg">
    <Image src={src} alt="about" fill className="object-cover" />
  </div>
);

/* -------------------- MAIN COMPONENT -------------------- */

export default function AboutSection() {
  return (
    <section className="w-full bg-[#F86E00] text-white px-6 md:px-16 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="flex justify-center">
          {/* MOBILE */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            <StatsCard />
            <ImageCard src="/about-img1.jpg" />
            <ImageCard src="/Image.png" />
            <RatingCard />
          </div>

          {/* DESKTOP */}
         <div className="hidden md:flex justify-center">
 <div className="relative w-[600px] min-h-[800px]">

    {/* Top Image */}
    <div className="absolute left-0 top-0 w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg top-20">
      <Image
        src="/about-img1.jpg"
        alt="about"
        fill
        className="object-cover"
      />
    </div>

    {/* Bottom Image */}
    <div className="absolute   w-[300px] h-[400px] rounded-xl overflow-hidden shadow-xl left-85  top-[270px]">
      
      <Image
        src="/Image.png"
        alt="about"
        fill
        className="object-cover"
      />
    </div>

    {/* Stats Card (TOP CENTER overlap controlled) */}
    <div className="absolute top-[0px] left-85">
      <StatsCard />
    </div>

    {/* Rating Card (BOTTOM LEFT safe area) */}
    <div className="absolute  left-[20px] z-20 top-[500px]">
      <RatingCard />
    </div>

  </div>
</div>
        </div>

        {/* RIGHT */}
        <div className="w-full max-w-[420px] mx-auto text-center lg:text-left">
          <p className="tracking-[3px] text-xs mb-2">INNER ME</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-white/90">
            We exist to help people take control of their health through deeper
            testing, personalised insights and clear, actionable guidance.
            <br />
            <br />
            Rather than focusing on diagnosis alone, we use high-quality
            laboratory testing alongside human clinical oversight to support
            proactive, long-term health decisions.
            <br />
            <br />
            Our approach combines accurate data with functional interpretation,
            helping individuals understand what their results mean for real
            life, performance and longevity.
          </p>

           <CustomButton variant="white" className="mt-8 px-6 py-3 font-medium mb-10 btn-all">
  Explore More
</CustomButton>
        </div>
      </div>
    </section>
  );
}