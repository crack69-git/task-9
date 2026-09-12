"use client";

import Image from "next/image";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";
import { Button } from "@heroui/react";

const newsItems = [
  {
    image: "/images/news/drone-workshop.jpg",
    category: "WORKSHOP",
    categoryColor: "bg-[#a51d20]",
    date: "19 May 2026",
    time: "3:11 PM",
    title: "A workshop on Drone Photography and...",
    description:
      "Organized by PCIU Media Club, a club under the department of Journalism & Media Studies to...",
    tag: "0 Day 0 Hour Remaining",
    action: "Read",
  },
  {
    image: "/images/news/bengali-new-year.jpg",
    category: "CULTURAL",
    categoryColor: "bg-[#a55c00]",
    date: "13 Apr 2026",
    time: "12:01 PM",
    title: "নববর্ষের শুভেচ্ছা — Happy Bengali New Year 1433",
    description:
      "Port City International University conveys heartfelt felicitations on the auspicious occasion of Pohela...",
    tag: "Holiday Notice",
    action: "Read",
  },
  {
    image: "/images/news/chess.jpg",
    category: "SPORTS",
    categoryColor: "bg-[#173c80]",
    date: "11 Apr 2026",
    time: "9:00 AM",
    title: "The PCIU Sports Forum Proudly Presents the “Port...",
    description:
      "Register now through the attached official form and secure your spot. Don't miss this exciting opportunity...",
    tag: "Registration Open",
    action: "Details",
  },
  {
    image: "/images/news/rapid-chess.jpg",
    category: "INAUGURATION",
    categoryColor: "bg-[#002b69]",
    date: "11 Apr 2026",
    time: "8:50 AM",
    title: "The International Rapid Rating Chess Tournament...",
    description:
      "Deeply honored by the presence of our respected Vice Chancellor as the Chief Guest, along with distinguishe...",
    tag: "Sports Forum",
    action: "Gallery",
  },
];

export default function NewsEvents() {
  return (
    <section className="w-full bg-[#f6f8fa] px-5 py-16 md:px-8 lg:px-[18px]">
      <div className="mx-auto max-w-[1200px]">
        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.02em] text-[#b86c00]">
              Campus Updates
            </p>

            <h2 className="text-[31px] font-bold leading-[1.1] tracking-[-0.8px] text-[#00285c]">
              News &amp; Events
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <Button
              className="
                h-[31px]
                rounded-[7px]
                border
                border-[#edf0f4]
                bg-white
                px-4
                text-[10px]
                font-medium
                text-[#00285c]
                shadow-[0_1px_3px_rgba(0,0,0,0.04)]
              "
            >
              View All News
            </Button>

            <Button
              className="
                h-[31px]
                rounded-[7px]
                bg-[#082e68]
                px-4
                text-[10px]
                font-semibold
                text-white
                shadow-none
              "
            >
              View All Events
            </Button>
          </div>
        </div>

        {/* ================= NEWS GRID ================= */}
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {newsItems.map((item, index) => (
            <NewsItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   NEWS ITEM
===================================================== */

function NewsItem({ item }) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[10px]
        border
        border-[#e9edf1]
        bg-white
        shadow-[0_1px_3px_rgba(15,23,42,0.04)]
        transition-all
        duration-200
        hover:-translate-y-[2px]
        hover:shadow-[0_6px_18px_rgba(15,23,42,0.08)]
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-[153px] w-full overflow-hidden bg-[#edf1f5]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        {/* Category */}
        <div
          className={`
            absolute
            right-[8px]
            top-[9px]
            rounded-[4px]
            px-[9px]
            py-[4px]
            text-[9px]
            font-bold
            uppercase
            text-white
            ${item.categoryColor}
          `}
        >
          {item.category}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="px-[15px] pb-[12px] pt-[13px]">
        {/* Date + Time */}
        <div className="flex items-center gap-3 text-[10px] text-[#6b7180]">
          <div className="flex items-center gap-[4px]">
            <FiCalendar
              size={11}
              className="text-[#b26b00]"
              strokeWidth={1.8}
            />
            <span>{item.date}</span>
          </div>

          <div className="flex items-center gap-[4px]">
            <FiClock size={11} className="text-[#b26b00]" strokeWidth={1.8} />
            <span>{item.time}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            mt-[11px]
            line-clamp-2
            min-h-[38px]
            text-[14px]
            font-bold
            leading-[1.35]
            text-[#00285c]
          "
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-[6px]
            line-clamp-2
            min-h-[36px]
            text-[11px]
            leading-[1.55]
            text-[#68758a]
          "
        >
          {item.description}
        </p>

        {/* Divider */}
        <div className="my-[9px] h-px w-full bg-[#edf0f3]" />

        {/* Bottom */}
        <div className="flex items-center justify-between gap-2">
          {/* Tag */}
          <span
            className="
              rounded-[4px]
              bg-[#eef0ff]
              px-[7px]
              py-[3px]
              text-[8px]
              font-medium
              text-[#4d5d9a]
            "
          >
            {item.tag}
          </span>

          {/* Action */}
          <button
            type="button"
            className="
              group/action
              flex
              items-center
              gap-[2px]
              text-[9px]
              font-medium
              text-[#a65e00]
              transition-colors
              hover:text-[#002e6b]
            "
          >
            {item.action}
            <FiArrowRight
              size={10}
              className="
                transition-transform
                duration-200
                group-hover/action:translate-x-[2px]
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
}
