"use client";
import { Button, Dropdown, Label, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { HiMenuAlt1 } from "react-icons/hi";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

const NavabrSection = () => {
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
    </>
  );
  return (
    <header className="bg-white text-[#08264a] shadow-[0_2px_16px_rgba(8,38,74,0.08)]">
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] items-center justify-between gap-4 py-3 sm:py-4">
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <div className="hidden lg:block">
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
                <Dropdown.Menu
                  onAction={(key) => console.log(`Selected: ${key}`)}
                >
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
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-semibold hover:text-[#d77b2b]"
            >
              Academics <FiChevronDown />
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold hover:text-[#d77b2b]"
            >
              Admission
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
            <Separator orientation="vertical" className="hidden h-5 xl:block" />
            <Button
              variant="secondary"
              size="small"
              className="hidden rounded-lg sm:flex"
            >
              Login
            </Button>
            <Button
              variant="primary"
              size="small"
              className="rounded-lg bg-[#e78a32] text-[#08264a]"
              endContent={<FiArrowUpRight />}
            >
              <span className="hidden sm:inline">Online Admission</span>
              <span className="sm:hidden">Apply</span>
            </Button>
            <div className="lg:hidden">
              <Dropdown>
                <Button
                  aria-label="Open navigation menu"
                  variant="ghost"
                  size="small"
                  className="rounded-lg text-[#08264a]"
                >
                  <HiMenuAlt1 />
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu
                    onAction={(key) => console.log(`Selected: ${key}`)}
                  >
                    {dropdown}
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-[#08264a] py-2.5 text-white">
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
