"use client";
import { Button, Dropdown, Label, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { HiMenuAlt1 } from "react-icons/hi";

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
    <div>
      <div></div>
      <div>
        <div className="w-11/12 mx-auto py-2 flex justify-between items-center">
          <div className="flex items-center ">
            <Dropdown>
              <Button
                aria-label="Menu"
                variant="ghost"
                size="small"
                className="rounded-2xl"
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
            <Image src="/logo9.png" alt="Logo" width={300} height={100}></Image>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium ">
              Student Portal
            </Link>
            <Separator orientation="vertical" />
            <Link href="#" className="text-sm font-medium ">
              Alumni Portal
            </Link>
            <Separator orientation="vertical" />
            <Button variant="secondary" size="small" className="rounded-lg">
              Login
            </Button>

            <Button variant="primary" size="small" className="rounded-lg">
              Online Admission
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-sky-900 py-2 flex justify-between items-center">
        <div className="w-11/12 mx-auto flex items-center justify-between gap-4">
          <div className="flex-grow flex items-center gap-4 ">
            <p className="w-30 bg-orange-400 rounded-lg text-slate-950 font-semibold px-2 py-1 text-lg">
              Top News
            </p>
            <Marquee speed={50}>
              <p className="text-sm font-medium text-white ">
                Welcome to our university
              </p>
              <p className="text-sm font-medium text-white ">
                Welcome to our university
              </p>
              <p className="text-sm font-medium text-white ">
                Welcome to our university
              </p>
              <p className="text-sm font-medium text-white ">
                Welcome to our university
              </p>
              <p className="text-sm font-medium text-white ">
                Welcome to our university
              </p>
              <p className="text-sm font-medium text-white ">
                Welcome to our university
              </p>
            </Marquee>
          </div>
          <div className="bg-sky-950 text-white px-2 py-2 rounded-lg text-sm font-medium flex items-center gap-2 min-w-50 justify-center">
            Todays Date: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavabrSection;
