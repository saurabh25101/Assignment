 "use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const testimonials = [
    { name: "John Doe", text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.", img: "/img1.jpg" },
    { name: "John Doe", text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.", img: "/img2.jpg" },
    { name: "John Doe", text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.", img: "/img3.jpg" },
    { name: "John Doe", text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.", img: "/img4.jpg" },
    { name: "John Doe", text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.", img: "/img5.jpg" },
  ];

 
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className=" bg-[#040847] py-24 text-white overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Our Client Testimonials
        </h2>
        <p className="text-sm text-gray-300 mt-4 max-w-xl mx-auto">
          Patients consistently appreciate the ease of booking, professional staff, and easy-to-understand lab reports.
        </p>
      </div>

      
      <div className="relative px-10 md:px-20">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1.2}
          grabCursor={true}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          className="overflow-visible!"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
                
                {/* Image */}
                <div className="relative w-full h-50">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width:768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <p className="text-gray-600 text-sm mb-4">
                    {item.text}
                  </p>

                  <p className="font-semibold text-sm">
                    — {item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-12">
          <button
            ref={prevRef}
            className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            ‹
          </button>

          <button
            ref={nextRef}
            className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}