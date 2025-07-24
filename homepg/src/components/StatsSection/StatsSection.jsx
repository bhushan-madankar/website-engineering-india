import React from "react";

const stats = [
  { label: "Coordinators", value: "250+", icon: "👥" },
  { label: "Colleges Collaborated", value: "30+", icon: "🎓" },
  { label: "Alumni Chapters", value: "15+", icon: "🏛️" },
  { label: "Volunteers", value: "1000+", icon: "🤝" },
];

const StatsSection = () => {
  return (
    <section className="flex justify-around flex-wrap gap-2 py-10 px-5 bg-[rgba(173,216,230,0.35)] backdrop-blur-md ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#ffffff] py-10 px-5 rounded-[12px] shadow-[0_15px_30px_rgba(0,0,0,0.1)] text-center flex flex-col justify-center flex-1 max-w-[250px] h-[230px] transition-transform duration-300 ease-in-out hover:-translate-y-4 font-poppins">
          <div className="text-[2.5rem] mb-[1,5rem] ">{stat.icon}</div>
          <div className="text-[2rem] text-[#040007] font-[poppins] mb-[1rem] ">{stat.value}</div>
          <div className="text-[1.5rem] text-black font-[poppins] font-bold">
            {stat.label} 
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
