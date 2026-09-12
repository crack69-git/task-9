import React from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiGlobe,
  FiShare2,
  FiCheckCircle,
} from "react-icons/fi";
import { TbAffiliate } from "react-icons/tb";

const Footer = () => {
  const quickLinks = [
    { label: "Student Portal (ERP)", href: "#" },
    { label: "IQAC Survey & Quality Cell", href: "#" },
    { label: "PCIU Alumni Association", href: "#" },
    { label: "Tender Notices & Circulars", href: "#" },
    { label: "Academic Calendar & Holidays", href: "#" },
    { label: "Central Digital Library", href: "#" },
  ];

  const academicLinks = [
    { label: "Faculties & Departments", href: "#" },
    { label: "Result Portal & Transcripts", href: "#" },
    { label: "Examination Schedule", href: "#" },
    { label: "Class & Routine Schedule", href: "#" },
    { label: "Certificate Verification", href: "#" },
    { label: "Scholarships & Financial Aid", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#0b2545] text-slate-300 font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: PCIU Chittagong */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide">
              PCIU Chittagong
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Port City International University (PCIU) is a premier UGC and
              Government approved university situated at South Khulshi,
              Chattogram, committed to excellence in research, innovation, and
              outcome-based tertiary education.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-500 pt-2">
              <FiCheckCircle className="text-sm shrink-0" />
              <span>UGC & Govt. Approved Academic Entity</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic & Portals */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wide mb-4">
              Academic & Portals
            </h3>
            <ul className="space-y-2.5 text-sm">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide mb-4">
              Contact & Location
            </h3>

            <div className="flex items-start gap-3 text-sm">
              <FiMapPin className="text-amber-500 text-base shrink-0 mt-1" />
              <span>
                Nikunja Housing Society, South Khulshi, Chattogram-4225,
                Bangladesh
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FiPhone className="text-amber-500 text-base shrink-0" />
              <span>+880 2334460144, +880 2334460145</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FiMail className="text-amber-500 text-base shrink-0" />
              <a
                href="mailto:info@portcity.edu.bd"
                className="hover:text-white transition-colors"
              >
                info@portcity.edu.bd
              </a>
            </div>

            {/* Icon Group */}
            <div className="flex items-center gap-4 pt-2 text-white">
              <Link
                href="#"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <FiGlobe className="text-lg" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <TbAffiliate className="text-lg" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <FiShare2 className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#07192e] text-xs py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p>
            © Copyright 2026, All Rights Reserved to Port City International
            University
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              UGC Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
