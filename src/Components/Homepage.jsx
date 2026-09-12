import { Button, Chip } from "@heroui/react";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { RiBookAiLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";

const Homepage = () => {
  return (
    <div
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(0, 0, 0, 0.75) 50%,
            rgba(0, 0, 0, 0.45) 65%,
            transparent 70%
          ),
          url('/image.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "clamp(620px, 78svh, 800px)",
      }}
      className="relative overflow-hidden"
    >
      <div className="mx-auto flex min-h-[clamp(620px,78svh,800px)] w-[min(1180px,calc(100%-2rem))] flex-col items-start justify-center py-16 text-white sm:py-20 lg:py-24">
        <Chip color="success" className="max-w-full p-2 text-xs sm:text-sm">
          <FaLocationDot />
          Nikunja Housing Society, Khulshi, Chattogram, Bangladesh
        </Chip>
        <h1 className="mt-5 mb-5 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.94] tracking-tight">
          Excellence in
          <br />
          <span className="bg-linear-to-r from-orange-300 to-purple-50 bg-clip-text text-transparent">
            Higher Education
          </span>
        </h1>
        <p className="mb-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8 lg:text-xl">
          Since the establishment, Port City International University has been
          focusing on assisting the students in facing the challenges of the
          ever advancing world. PCIU is a platform where students can rise to
          the highest level of their achievements.
        </p>

        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button
            variant="primary"
            size="lg"
            className="h-12 w-full rounded-lg bg-orange-300 text-slate-900 sm:w-44"
            endContent={<FiArrowRight />}
          >
            Go For Admission
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="h-12 w-full rounded-lg sm:w-44"
          >
            Explore Programs
          </Button>
        </div>
        <div className="mt-8 flex flex-col items-start gap-3 text-sm sm:flex-row sm:items-center sm:gap-6 sm:text-base">
          <p className="flex items-center gap-2 font-bold">
            <MdVerified color="green" />
            UGC Approved University
          </p>
          <p className="flex items-center gap-2 font-bold">
            <RiBookAiLine color="yellow" />
            Outcome Based Learning (OBL) System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
