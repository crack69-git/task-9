"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import {
  FiArrowRight,
  FiBookOpen,
  FiExternalLink,
  //   FiFlaskConical,
  FiSun,
} from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-5 py-8 md:px-8 lg:px-12">
      <section className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[390px_1fr] lg:gap-[38px]">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative overflow-hidden rounded-[15px] border border-slate-100 bg-[#f1f5fb] px-6 py-6 shadow-[0_3px_8px_rgba(15,23,42,0.10)]">
            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-5 -top-8 h-28 w-28 rounded-full bg-white/40" />
            <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-[#eaf0f9]" />

            {/* Chancellor information */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-slate-200 shadow-sm">
                <Image
                  src="/images/vc.jpg"
                  alt="Vice Chancellor"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold leading-tight text-[#00285c]">
                  Prof. Dr. Md. Nural Anwar
                </h3>

                <p className="mt-1 text-[11px] font-medium text-[#173b70]">
                  Hon&apos;ble Vice Chancellor
                </p>

                <p className="text-[11px] text-[#60718a]">
                  Port City International University
                </p>
              </div>
            </div>

            {/* Label */}
            <div className="relative z-10 mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#003b84]">
                Vice Chancellor&apos;s Message
              </p>
            </div>

            {/* Quote */}
            <div className="relative z-10 mt-3">
              <p className="text-[13px] font-normal italic leading-[1.62] text-[#354c6c]">
                &ldquo;Port City International University located at Chittagong
                is a new generation private university committed to excellence
                in higher education and research. The vision of this university
                is to make it a global standard center of excellence through
                education, research and service. Transformative education to
                change the society as it demands is our mission. In a world
                where change is the &lsquo;norm&rsquo;, there is one thing for
                certain—knowledge.&rdquo;
              </p>
            </div>

            {/* Read more */}
            <div className="relative z-10 mt-7">
              <button
                type="button"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold text-[#002d68] transition-colors hover:text-[#0054bd]"
              >
                Read Vision & Full Message
                <FiArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2">
              <FiSun size={14} className="text-[#e68a00]" strokeWidth={2.5} />

              <span className="text-[11px] font-semibold uppercase tracking-[0.02em] text-[#b16a00]">
                Institutional Identity & Mission
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[670px] text-[32px] font-bold leading-[1.08] tracking-[-0.8px] text-[#00285c] md:text-[35px]">
              Welcome to Port City International University
            </h1>

            {/* First paragraph */}
            <p className="mt-6 max-w-[720px] text-[14px] leading-[1.65] text-[#334e72]">
              Since the establishment, Port City International University has
              been focusing on assisting the students in facing the challenges
              of the ever advancing world. PCIU is a platform where students can
              rise to the highest level of their achievements.
            </p>

            {/* Second paragraph */}
            <p className="mt-5 max-w-[720px] text-[13.5px] leading-[1.65] text-[#60718a]">
              It provides an outstanding and supportive environment for both
              undergraduate and postgraduate students. A talented and dedicated
              group of academics provide guidance and advise the students to
              pursue their research and academic endeavor. The dynamic teaching
              and learning environment of PCIU have helped this University to be
              more competitive in maintaining a global standard in quality
              education and research.
            </p>

            {/* ================= FEATURE BOXES ================= */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* Feature 1 */}
              <div className="flex min-h-[78px] items-start gap-3 rounded-[10px] bg-[#f0f2ff] px-4 py-4">
                <div className="mt-0.5 shrink-0 text-[#c47700]">
                  <FiBookOpen size={17} strokeWidth={2} />
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold leading-tight text-[#00285c]">
                    Outcome-Based Learning
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.4] text-[#65728a]">
                    Curriculums mapped to modern international industry
                    requirements.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex min-h-[78px] items-start gap-3 rounded-[10px] bg-[#f0f2ff] px-4 py-4">
                <div className="mt-0.5 shrink-0 text-[#c47700]">
                  {/* <FiFlaskConical size={17} strokeWidth={2} /> */}
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold leading-tight text-[#00285c]">
                    Applied Research Focus
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.4] text-[#65728a]">
                    Peer-reviewed publications, national conferences & funded
                    student labs.
                  </p>
                </div>
              </div>
            </div>

            {/* More About Us */}
            <div className="mt-6">
              <Button
                className="h-[36px] rounded-[6px] bg-[#002653] px-5 text-[11px] font-semibold text-white shadow-none"
                endContent={<FiExternalLink size={12} />}
              >
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
