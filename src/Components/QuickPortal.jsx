"use client";
import React, { useState } from "react";
import {
  FiBell,
  FiUsers,
  FiCalendar,
  FiUserCheck,
  FiStar,
  FiCompass,
  FiGrid,
  FiMonitor,
  FiArrowUpRight,
  FiSearch,
  FiExternalLink,
} from "react-icons/fi";

const PORTAL_ITEMS = [
  {
    id: "notices",
    title: "Notices",
    subtitle: "Official circulars, holiday calendars, semester instructions.",
    icon: FiBell,
    iconBg: "bg-slate-900 text-white",
    badge: "Updated Today",
    category: "General",
  },
  {
    id: "campus-life",
    title: "Campus Life",
    subtitle: "Student clubs, Cultural Forum (PCCF), Debate & Sports teams.",
    icon: FiUsers,
    iconBg: "bg-amber-100 text-amber-800",
    badge: "Clubs Active",
    category: "Activity",
  },
  {
    id: "schedule",
    title: "Class & Exam Schedule",
    subtitle:
      "Semester routine PDFs, room allocations, midterm & final schedules.",
    icon: FiCalendar,
    iconBg: "bg-indigo-100 text-indigo-700",
    badge: "Spring 2025",
    category: "Academics",
  },
  {
    id: "admission",
    title: "Admission",
    subtitle:
      "Direct admission, tuition calculator, required documents, waiver eligibility.",
    icon: FiUserCheck,
    iconBg: "bg-orange-100 text-orange-700",
    badge: "Open Now",
    category: "General",
  },
  {
    id: "academic-result",
    title: "Academic Result",
    subtitle:
      "Spring 2025 semester results, previous archives, official grade records.",
    icon: FiStar,
    iconBg: "bg-rose-100 text-rose-800",
    badge: "Portal Live",
    category: "Academics",
  },
  {
    id: "faculty-dept",
    title: "Faculty & Department",
    subtitle:
      "Science & Engineering, Business, Humanities & Law faculties directory.",
    icon: FiCompass,
    iconBg: "bg-blue-100 text-blue-900",
    badge: "Directory",
    category: "Directory",
  },
  {
    id: "facilities",
    title: "Facilities",
    subtitle:
      "Ratnagarva Begum Ashrafunnesa Library, medical unit, e-library, labs.",
    icon: FiGrid,
    iconBg: "bg-orange-100 text-orange-600",
    badge: "24/7 Access",
    category: "Campus",
  },
  {
    id: "online-class",
    title: "Online Class Instructions",
    subtitle:
      "LMS guides, video conferencing portals, digital classroom access.",
    icon: FiMonitor,
    iconBg: "bg-violet-100 text-violet-700",
    badge: "LMS Portal",
    category: "Academics",
  },
];
const QuickPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModal, setActiveModal] = useState(null);

  const categories = [
    "All",
    "Academics",
    "General",
    "Activity",
    "Campus",
    "Directory",
  ];

  const filteredItems = PORTAL_ITEMS.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 p-4 sm:p-6 md:p-10 font-sans selection:bg-amber-100 selection:text-amber-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header Section matching design */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-amber-700 font-bold text-xs tracking-wider uppercase block">
              ACADEMIC GATEWAYS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              University Quick Portal
            </h1>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed font-normal">
            Immediate access to departmental routines, official circulars,
            examination results, and online student services.
          </p>
        </header>

        {/* Filter Bar & Search Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              placeholder="Search portal services..."
              value={searchTerm}
              aria-label="Search portal services"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all shadow-sm"
            />
          </div>
        </div>

        {}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80">
            <p className="text-slate-500 text-sm">
              No services found matching standard criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-3 text-xs text-amber-700 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                /* HeroUI Card equivalent container using div for internal layout */
                <div
                  key={item.id}
                  onClick={() => setActiveModal(item)}
                  className="group relative bg-white border border-slate-100 hover:border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[170px]"
                >
                  {/* Internal card structure using pure div tag (avoiding CardBody) */}
                  <div className="space-y-4">
                    {/* Top Row: Icon Box & Arrow */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg ${item.iconBg} shadow-sm group-hover:scale-105 transition-transform duration-200`}
                      >
                        <Icon />
                      </div>
                      <span className="text-slate-300 group-hover:text-slate-600 transition-colors duration-200 p-1">
                        <FiArrowUpRight className="text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </span>
                    </div>

                    {/* Text Section */}
                    <div className="space-y-1.5">
                      <h2 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Optional Hover Accent Line */}
                  <div className="w-full h-0.5 bg-transparent group-hover:bg-amber-600/20 rounded-full mt-4 transition-colors" />
                </div>
              );
            })}
          </div>
        )}

        {}
        {activeModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-5 relative">
              <div className="flex items-start justify-between">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${activeModal.iconBg}`}
                >
                  <activeModal.icon />
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-semibold p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeModal.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-semibold rounded-md uppercase tracking-wider">
                    {activeModal.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeModal.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>
                  Category:{" "}
                  <strong className="text-slate-700">
                    {activeModal.category}
                  </strong>
                </span>
                <span>
                  Status:{" "}
                  <strong className="text-emerald-600">Active Service</strong>
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Open Portal</span>
                  <FiExternalLink />
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="py-2.5 px-4 rounded-xl text-xs font-semibold border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickPortal;
