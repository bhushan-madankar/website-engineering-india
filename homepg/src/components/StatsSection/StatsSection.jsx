import React from "react";

const stats = [
  { label: "Coordinators", value: "250+", icon: "👥" },
  { label: "Colleges Collaborated", value: "30+", icon: "🎓" },
  { label: "Alumni Chapters", value: "15+", icon: "🏛️" },
  { label: "Volunteers", value: "1000+", icon: "🤝" },
];

const StatsSection = () => {
  return (
    <section className="flex justify-around flex-wrap gap-[0.8rem] py-10 px-5 bg-[rgba(173,216,230,0.35)] backdrop-blur-md ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#ffffff] mb-[2rem] py-10 px-5 rounded-[12px] shadow-[0_15px_30px_rgba(0,0,0,0.1)] text-center flex flex-col justify-center w-[280px] h-[230px] transform transition duration-300 hover:scale-110 rounded-lg shadow-lg h-52 w-56 hover:shadow-xl font-poppins">
          <div className="text-[3rem] mb-[1rem] ">{stat.icon}</div>
          <div className="text-[1.8rem] text-[#040007] font-[poppins] mb-[0.5rem] ">{stat.value}</div>
          <div className="text-[1.4rem] text-black font-[poppins] font-bold">
            {stat.label} 
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
