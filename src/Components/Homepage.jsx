import { Button, Chip } from "@heroui/react";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { RiBookAiLine } from "react-icons/ri";

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
        height: "150vh",
        minHeight: "30vh",
      }}
      //   className="mask-b-from-95%"
    >
      <div className="flex flex-col items-start justify-start h-full w-11/12 mx-auto text-white pt-10">
        <Chip color="success" className="text-[16px] p-2">
          <FaLocationDot />
          Nikunja Housing Society, Khulshi, Chattogram, Bangladesh
        </Chip>
        <p className="text-9xl font-bold mt-4 mb-4">
          Excellence in<br></br>{" "}
          <span className="bg-linear-to-r from-orange-300 to-purple-50 bg-clip-text text-transparent">
            Higher Education
          </span>
        </p>
        <p className="text-2xl mb-4 w-3/5">
          Since the establishment, Port City International University has been
          focusing on assisting the students in facing the challenges of the
          ever advancing world. PCIU is a platform where students can rise to
          the highest level of their achievements.
        </p>

        <div className="flex gap-4 mt-10">
          <Button
            variant="primary"
            size="lg"
            className="w-40 rounded-lg bg-orange-300 text-slate-900"
          >
            Go For Admission
          </Button>
          <Button variant="secondary" size="lg" className="w-40 rounded-lg">
            Explore Programs
          </Button>
        </div>
        <div className="flex items-center gap-4 mt-10">
          <p className="flex items-center gap-2 text-lg font-bold">
            <MdVerified color="green" />
            UGC Approved University
          </p>
          <p className="flex items-center gap-2 text-lg font-bold">
            <RiBookAiLine color="yellow" />
            Outcome Based Learning (OBL) System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
