import React from "react";
import "./StatsSection.css";

const stats = [
  { label: "Coordinators", value: "250+", icon: "👥" },
  { label: "Colleges Collaborated", value: "30+", icon: "🎓" },
  { label: "Alumni Chapters", value: "15+", icon: "🏛️" },
  { label: "Volunteers", value: "1000+", icon: "🤝" },
];

const StatsSection = () => {
  return (
       <section className="stats-section">
      {stats.map((stat, index) => (
        <div key={index} className="card">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
