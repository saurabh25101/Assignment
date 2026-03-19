import Image from "next/image";

const ArrowTrendingUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 text-green-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 17l6-6 4 4 8-8M14 7h7v7"
    />
  </svg>
);

const avatarRow1 = [
  { type: "photo", src: "/small-logo.jpg" },
  { type: "photo", src: "/small-logo.jpg" },
  { type: "initial", initials: "P" },
];

const avatarRow12 = [
  { type: "initial", initials: "FJ" },
  { type: "initial", initials: "S" },
  { type: "photo", src: "/small-logo.jpg" },
];

const avatarRow2 = [
  { type: "photo", src: "/small-logo.jpg" },
  { type: "photo", src: "/small-logo.jpg" },
  { type: "initial", initials: "S" },
  { type: "photo", src: "/small-logo.jpg" },
];

const avatarRow23 = [
  { type: "photo", src: "/small-logo.jpg" },
  { type: "initial", initials: "S" },
  { type: "initial", initials: "Fy" },
];

const renderAvatar = (avatar, i) => {
  if (avatar.type === "photo") {
    return (
      <img
        key={i}
        src={avatar.src}
        alt="user avatar"
        width={28}
        height={28}
        className="rounded-full border-2 border-white object-cover w-7 h-7 shrink-0"
      />
    );
  }
  return (
    <div
      key={i}
      className="w-7 h-7 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white font-semibold shrink-0"
      style={{ fontSize: "8px" }}
    >
      {avatar.initials}
    </div>
  );
};

const StatsCard = () => (
  <div className="w-59.75 h-63 bg-white rounded-[10px] p-5 flex flex-col shadow-md shrink-0">
    <div className="flex justify-between items-start">
      <h2 className="text-[26px] font-semibold text-[#0B1B3F]">30,000+</h2>
      <ArrowTrendingUp />
    </div>

    <p className="text-[12px] text-gray-400 mt-2 leading-relaxed">
      Blood test in July 2025 with 5 star ratings and happy clients.
    </p>

    <div className="h-px bg-orange-400 mt-4 w-full"></div>

    <div className="flex flex-col gap-3 mt-4">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {avatarRow1.map((avatar, i) => renderAvatar(avatar, i))}
        </div>
        <div className="flex -space-x-2">
          {avatarRow12.map((avatar, i) => renderAvatar(avatar, i))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {avatarRow2.map((avatar, i) => renderAvatar(avatar, i))}
        </div>
        <div className="flex -space-x-2">
          {avatarRow23.map((avatar, i) => renderAvatar(avatar, i))}
        </div>
      </div>
    </div>
  </div>
);

export default function About() {
  return (
    <section className="w-full bg-[#F86E00] text-white px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* ── MOBILE ONLY ── */}
          <div className="flex flex-col gap-5 items-center py-10 md:hidden">
            {/* 👉 StatsCard UPPER */}
            <StatsCard />

            {/* Image 1 */}
            <div className="relative w-full max-w-xs h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/about-img1.jpg"
                alt="about"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-full max-w-xs h-72 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Image.png"
                alt="about"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* ── DESKTOP ONLY: original overlapping layout ── */}
          <div className="hidden md:flex md:relative md:justify-center">
            {/* Top Image */}
            <div className="absolute top-0 left-0 w-56 h-72 rounded-xl overflow-hidden shadow-lg mt-20">
              <Image
                src="/about-img1.jpg"
                alt="about"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Image */}
            <div className="relative mt-70 left-62 w-64 h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/Image.png"
                alt="about"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats Card */}
            <StatsCard />
          </div>
        </div>

        {/* RIGHT SIDE (Content) */}
        <div className="text-left max-w-xl mt-0 md:mt-50 pb-10 md:pb-0">
          <p className="tracking-widest text-sm mb-2">INNER ME</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>

          <p className="leading-relaxed text-lg text-white/90">
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

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition mb-10">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
