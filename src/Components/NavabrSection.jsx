"use client";
import { Button, Dropdown, Label, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { HiMenuAlt1 } from "react-icons/hi";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

const NavabrSection = () => {
  const [openDrawer, setOpenDrawer] = useState(null);

  const drawerRoutes = {
    Academics: ["Programs", "Faculties & Departments", "Academic Calendar"],
    Admission: ["Apply Online", "Admission Requirements", "Tuition & Fees"],
    Facilities: ["Library", "Laboratories", "Student Facilities"],
  };

  const toggleDrawer = (drawer) => {
    setOpenDrawer((currentDrawer) =>
      currentDrawer === drawer ? null : drawer,
    );
  };

  const dropdown = (
    <>
      <Dropdown.Item id="home" textValue="Home">
        <Label>Home</Label>
      </Dropdown.Item>
      <Dropdown.Item id="Academics" textValue="Academics">
        <Label>Academics</Label>
      </Dropdown.Item>
      <Dropdown.Item id="Admission" textValue="Admission">
        <Label>Admission</Label>
      </Dropdown.Item>
      <Dropdown.Item id="Research" textValue="Research">
        <Label>Research</Label>
      </Dropdown.Item>
      <Dropdown.Item id="Facilities" textValue="Facilities">
        <Label>Facilities</Label>
      </Dropdown.Item>
      <Dropdown.Item id="Faculties" textValue="Faculties">
        <Label>Faculties</Label>
      </Dropdown.Item>
      <Dropdown.Item id="Conference" textValue="Conference">
        <Label>Conference</Label>
      </Dropdown.Item>
      <Dropdown.Item id="Career" textValue="Career">
        <Label>Career</Label>
      </Dropdown.Item>
      <Separator className="my-2" />
      <Dropdown.Item
        id="StudentPortal"
        textValue="Student Portal"
        className="rounded-lg font-semibold text-[#38516e]"
      >
        <Label>Student Portal</Label>
      </Dropdown.Item>
      <Dropdown.Item
        id="Login"
        textValue="Login"
        className="rounded-lg font-semibold text-[#08264a]"
      >
        <Label>Login</Label>
      </Dropdown.Item>
      <Dropdown.Item id="OnlineAdmission" textValue="Online Admission">
        <Label>
          <Button className="bg-[#e78a32] text-white hover:bg-[#d77b2b] w-full rounded-lg text-sm font-semibold">
            Online Admission
          </Button>
        </Label>
      </Dropdown.Item>
    </>
  );
  return (
    <header className="bg-white text-[#08264a] shadow-[0_2px_16px_rgba(8,38,74,0.08)]">
      <div className="mx-auto flex w-full flex-col items-stretch">
        <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] min-w-0 items-center justify-between gap-4 py-3 sm:py-4">
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="flex flex-row items-center gap-2">
              <Dropdown>
                <Button
                  aria-label="Menu"
                  variant="ghost"
                  size="small"
                  className="rounded-lg text-[#08264a]"
                >
                  <HiMenuAlt1 />
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu onAction={toggleDrawer}>
                    {dropdown}
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
              <Image
                src="/logo9.png"
                alt="Port City International University"
                width={240}
                height={80}
                className="h-auto w-[170px] sm:w-[220px]"
                priority
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-4 lg:justify-between">
            <nav
              className="hidden items-center gap-7 lg:flex"
              aria-label="Primary navigation"
            >
              <Link
                href="#"
                className="text-sm font-semibold hover:text-[#d77b2b]"
              >
                About
              </Link>
              {Object.keys(drawerRoutes).map((drawer) => (
                <button
                  key={drawer}
                  type="button"
                  aria-expanded={openDrawer === drawer}
                  onClick={() => toggleDrawer(drawer)}
                  className="flex items-center gap-1 text-sm font-semibold hover:text-[#d77b2b]"
                >
                  {drawer}
                  <FiChevronDown
                    className={openDrawer === drawer ? "rotate-180" : ""}
                  />
                </button>
              ))}
              <Link
                href="#"
                className="text-sm font-semibold hover:text-[#d77b2b]"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold hover:text-[#d77b2b]"
              >
                Campus Life
              </Link>
            </nav>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="#"
                className="hidden text-sm font-semibold text-[#38516e] xl:block"
              >
                Student Portal
              </Link>
              <Separator orientation="vertical" className="hidden xl:block" />
              <Button
                variant="secondary"
                size="small"
                className="hidden rounded-lg lg:flex"
              >
                Login
              </Button>
              <Button
                variant="primary"
                size="small"
                className="hidden rounded-lg bg-[#e78a32] text-white lg:flex"
                endContent={<FiArrowUpRight />}
              >
                Online Admission
              </Button>
            </div>
          </div>
        </div>
        {openDrawer && (
          <div className="border-y border-slate-100 bg-slate-50">
            <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-wrap items-center gap-x-8 gap-y-2 py-4">
              <span className="text-sm font-bold text-[#08264a]">
                {openDrawer}
              </span>
              {drawerRoutes[openDrawer].map((route) => (
                <Link
                  key={route}
                  href="#"
                  className="text-sm font-medium text-[#38516e] hover:text-[#d77b2b]"
                >
                  {route}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="flex w-full items-center gap-3 bg-[#08264a] py-2.5 text-white">
          <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] min-w-0 items-center gap-3">
            <span className="shrink-0 rounded bg-[#e78a32] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#08264a] sm:text-xs">
              Latest
            </span>
            <Marquee speed={35} gradient={false} className="min-w-0">
              <span className="mr-16 text-xs font-medium sm:text-sm">
                Welcome to Port City International University
              </span>
              <span className="mr-16 text-xs font-medium sm:text-sm">
                Admissions are now open for the next semester
              </span>
            </Marquee>
            <span className="hidden shrink-0 border-l border-white/20 pl-4 text-xs font-medium md:block">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavabrSection;
