"use client";
import React from "react";
import Link from "next/link";
import { Button, Card, div } from "@heroui/react";
import {
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineIdentification,
  HiOutlineUserGroup,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { GiPartyPopper } from "react-icons/gi";

const QuickAccessSection = () => {
  const quickLinks = [
    {
      label: "Certificate Verify",
      icon: HiOutlineShieldCheck,
      href: "#",
    },
    {
      label: "Tender Notices",
      icon: HiOutlineDocumentText,
      href: "#",
    },
    {
      label: "2nd Convocation",
      icon: GiPartyPopper,
      href: "#",
    },
    {
      label: "Student CV Portal",
      icon: HiOutlineIdentification,
      href: "#",
    },
    {
      label: "Conferences",
      icon: HiOutlineUserGroup,
      href: "#",
    },
    {
      label: "IQAC Self Survey",
      icon: HiOutlineAcademicCap,
      href: "#",
    },
  ];

  return (
    <div className="w-full bg-slate-50">
      {/* Banner Section */}
      <section className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white py-12 px-6 md:px-12 lg:px-16 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Banner Text Content */}
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white">
              <HiOutlineAcademicCap className="text-sm" />
              <span>Fall 2026 Online Admission</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Admissions are Open for All Programs
            </h1>

            <p className="text-amber-100 text-sm md:text-base leading-relaxed font-light">
              Get up to 100% tuition waiver based on SSC & HSC merit results,
              sports quota, and sibling concession.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Button
              as={Link}
              href="#"
              className="bg-slate-950 hover:bg-slate-900 text-white font-semibold text-sm px-6 py-6 rounded-lg transition-all shadow-md"
            >
              Apply Online Now
            </Button>
            <Button
              as={Link}
              href="#"
              variant="bordered"
              className="bg-white text-amber-900 hover:bg-amber-50 font-semibold text-sm px-6 py-6 rounded-lg border-none shadow-md transition-all"
            >
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Academic Services Section */}
      <section className="max-w-7xl mx-auto py-10 px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Quick Academic Services
          </h2>
          <span className="text-xs text-slate-400 font-medium">
            Direct Access Links
          </span>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link href={item.href} key={index} className="group">
                <Card
                  shadow="none"
                  className="border border-slate-100 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
                >
                  <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <Icon className="text-2xl text-amber-600 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-xs font-semibold text-slate-800 leading-snug">
                      {item.label}
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default QuickAccessSection;
