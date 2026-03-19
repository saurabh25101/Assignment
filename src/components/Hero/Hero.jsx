 import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-2xl text-left">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Know Your Body <br />
          Transform Your Health <br />
          Live Your Life
        </h1>

        {/* Paragraph */}
        <p className="text-gray-200 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
          Functional blood testing with personalised insights and clear guidance,
          helping you take control of your health and make confident, proactive decisions.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
          
          <button className="bg-[rgba(161,29,40,1)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[rgba(140,25,35,1)] hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto">
            Book now
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 w-full sm:w-auto">
            Find your test
          </button>

        </div>
      </div>
    </section>
  );
}