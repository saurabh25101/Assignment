 
 import Image from "next/image";
import CustomButton from "../btn/page";

export default function Offers() {
  const offers = [
    {
      title: "80 Biomarkers, One Test A lifetime of insights",
      img: "/phone.png",
      btn: "START NOW",
    },
    {
      title: "Wellness Wrapped Savings Stacked",
      img: "/offers.png",
      btn: "SAVE NOW",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-16 bg-[#FFA4AB]">
      
      {/* Heading */}
      <div className="text-center mb-10">
      <p className="text-[#A11D28] text-[20px] font-semibold text-center capitalize leading-none">
  Get Started
</p>
       <h2 className="font-hanken text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-normal leading-none text-center capitalize">
  Latest Offers
</h2>
      
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {offers.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden min-h-[220px] md:h-60"
          >
            {/* IMAGE */}
            <Image
              src={item.img}
              alt="offer"
              fill
              className="object-cover"
            />

            

            {/* CONTENT */}
       <div className="relative z-10 p-4 md:p-7 h-full flex flex-col text-white max-w-[60%]">
  
  <h3 className="text-base md:text-xl mt-4 md:mt-6 leading-snug">
    {item.title}
  </h3>

    <CustomButton
  variant="whiteRed"
  className="btn-book text-xs md:text-sm font-medium mt-4 md:mt-10"
>
  {item.btn}
</CustomButton>

</div>
          </div>
        ))}
      </div>
    </section>
  );
}