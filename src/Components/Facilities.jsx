import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, div, CardFooter } from "@heroui/react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const AcademicFacilities = () => {
  const cardsData = [
    {
      badge: "Digital E-Library",
      image: "/library.png", // Replace with your image path
      title: "Ratnagarva Begum Ashrafunnesa Library",
      description:
        "Houses over 40,000 textbooks, access to major IEEE, JSTOR, and Springer e-journal subscriptions, air-conditioned study lounges, and private thesis carrels.",
      linkText: "Library Rules & Catalog",
      linkHref: "#",
    },
    {
      badge: "Science & Tech",
      image: "/lab.png", // Replace with your image path
      title: "Specialized Engineering & Computing Labs",
      description:
        "Equipped with high-performance workstations for AI, Robotics, Civil Engineering structures testing, Electrical machines, and Textile apparel testing apparatus.",
      linkText: "Explore Department Labs",
      linkHref: "#",
    },
    {
      badge: "Clubs & Forums",
      image: "/activity.png", // Replace with your image path
      title: "Student Forums & Co-Curriculars",
      description:
        "Active student bodies including Cultural Forum (PCCF), Debate Forum, Sports Forum, IT Forum, Media Club, and the Center For Training and Development.",
      linkText: "Join Campus Forums",
      linkHref: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
            <FiCheckCircle className="text-amber-700 text-sm" />
            <span>World-Class Infrastructure</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Dedicated Academic Facilities
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Port City International University provides an immersive collegiate
            ecosystem equipped with advanced research centers, modern libraries,
            and specialized student forums.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((item, index) => (
            <Card
              key={index}
              shadow="sm"
              className="bg-slate-50/60 border border-slate-100 rounded-2xl hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-4 overflow-visible">
                {/* Image Container with Badge */}
                <div className="relative w-full h-52 rounded-xl overflow-hidden mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <CardFooter className="pt-0 px-4 pb-5">
                <Link
                  href={item.linkHref}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors duration-200"
                >
                  <span>{item.linkText}</span>
                  <FiArrowRight className="text-sm" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicFacilities;
