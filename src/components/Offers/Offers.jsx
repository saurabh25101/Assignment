 import Image from "next/image";

export default function Offers() {
  const offers = [
    {
      title: "80 Biomarkers, One Test A lifetime of insights",
     
      img: "/phine.jpg",
      btn: "START NOW",
    },
    {
      title: "Wellness Wrapped Savings Stacked",
    
      img: "/offers.jpg",
      btn: "SAVE NOW",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16  bg-[#FFA4AB]">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm   text-gray-700">
          Get Started
        </p>
        <h2 className="text-4xl font-semibold">Latest Offers</h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {offers.map((item, index) => (
         <div
  key={index}
  className="relative rounded-2xl overflow-hidden h-60"
>
  {/* IMAGE BACKGROUND */}
   <div className="absolute inset-0 overflow-hidden">
    <Image
      src={item.img}
      alt="offer"
      fill
      className="object-cover"
    />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 p-6 h-full w-[60%] text-white flex flex-col justify-between">
    <div>
      <h3 className="text-xl pt-5 leading-tight">
        {item.title}
      </h3>
    </div>

    <button className="bg-white text-red-700 px-4 py-2 rounded-md text-sm font-medium w-fit">
      {item.btn}
    </button>
  </div>
</div>

           
        ))}
      </div>
    </section>
  );
}