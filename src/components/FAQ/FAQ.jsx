 "use client";
import { useState } from "react";

export default function FAQ() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      q: "How long until we deliver your first blog post?",
      a: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
    },
    { q: "How long until we deliver your first blog post?", a: "Short answer here." },
    { q: "How long until we deliver your first blog post?", a: "Short answer here." },
    { q: "How long until we deliver your first blog post?", a: "Short answer here." },
    { q: "How long until we deliver your first blog post?", a: "Short answer here." }
  ];

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="py-20 px-6 md:px-16  bg-[#FAF9F6]">

     
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold text-gray-700">
          Frequently Ask Questions
        </h2>
      </div>
 
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        
        <div className="space-y-6">
          {faqs.slice(0, 2).map((item, i) => (
            <Card
              key={i}
              item={item}
              index={i}
              active={active}
              toggle={toggle}
            />
          ))}
        </div>

      
        <div className="space-y-6">
          {faqs.slice(2, 5).map((item, i) => (
            <Card
              key={i + 2}
              item={item}
              index={i + 2}
              active={active}
              toggle={toggle}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

 
function Card({ item, index, active, toggle }) {
  return (
    <div
      onClick={() => toggle(index)}
      className={`
        rounded-xl p-6 cursor-pointer transition-all duration-300
        ${active === index 
          ? "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]" 
          : "bg-white/80 shadow-sm"
        }
      `}
    >
      <div className="flex gap-4 items-start">

        
        <div
          className={`
            text-xl font-bold mt-1
            ${active === index ? "text-green-500" : "text-gray-700"}
          `}
        >
          {active === index ? "−" : "+"}
        </div>
 
        <div>
          <h3 className="font-medium text-gray-800">
            {item.q}
          </h3>q

          {active === index && (
            <p className="mt-14 text-gray-500 text-sm leading-relaxed">
              {item.a}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}