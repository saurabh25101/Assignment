 export default function HealthMatters() {

  const stats = [
    {
      title: "1 in 4",
      desc: "Adults in the UK live with at least one chronic health condition",
    },
    {
      title: "50%",
      desc: "Of UK adults show sub optimal micronutrient levels on blood tests",
    },
    {
      title: "1-3",
      desc: "Have biomechanical imbalances detectable before symptoms appear",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-[#FAF9F6]">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Why Understanding Your Health Matters
      </h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Most healthcare reacts once symptoms appear. We focus on deeper testing
        and clearer insight.
      </p>

      {/* FULL WIDTH BOX */}
      <div className="w-full border border-gray-300 rounded-2xl overflow-hidden">
        
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-center items-center text-center p-10  min-h-62.5 md:min-h-80"
            >
              
              <h3 className="text-4xl font-bold text-black">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm max-w-xs">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}