import React from "react";

const StatSection = () => {
  const stats = [
    ["01", "1500+", "Students"],
    ["02", "50+", "Programs"],
    ["03", "500+", "Alumni worldwide"],
    ["04", "25+", "Faculty members"],
  ];

  return (
    <section className="relative z-10 -mt-10 px-4 sm:-mt-14 sm:px-6">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 overflow-hidden rounded-xl bg-[#f7f3ec] text-[#08264a] shadow-[0_18px_50px_rgba(8,38,74,0.15)] md:grid-cols-4">
        {stats.map(([number, value, label], index) => (
          <div
            key={label}
            className={`relative p-5 sm:p-7 md:p-8 ${index < 3 ? "after:absolute after:bottom-5 after:right-0 after:top-5 after:w-px after:bg-[#d9d4cb]" : ""}`}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#d77b2b]">
              {number}
            </span>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-[#60718a] sm:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatSection;
