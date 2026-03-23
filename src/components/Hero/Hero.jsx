 import Image from "next/image";
import CustomButton from "../btn/page";
import Link from "next/link";

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
      <h1 className="text-[36px] sm:text-[48px] md:text-[60px]  
font-bold text-white leading-[1.26] tracking-normal">
  Know Your Body <br />
  Transform Your Health <br />
  Live Your Life
</h1>
        {/* Paragraph */}
        <p className="text-gray-200 mt-4 sm:mt-6 font-medium text-[15px] sm:text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] max-w-2xl">
  Functional blood testing with personalised insights and clear guidance,
  helping you take control of your health and make confident, proactive decisions.
</p>

        {/* Buttons */}
       <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">

  <Link href="/login" className="w-full sm:w-auto">
    <CustomButton className="btn-all w-full sm:w-auto">
      Login
    </CustomButton>
  </Link>

  <CustomButton
    variant="outline"
    className="btn-all w-full sm:w-auto  mb-5"
  >
    Book Now
  </CustomButton>

</div>
      </div>
    </section>
  );
}