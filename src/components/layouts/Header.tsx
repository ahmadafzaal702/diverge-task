"use client";
import React from "react";

import logo from "@/assests/logo.png";
import Image from "next/image";

import { AiOutlineToTop, AiFillCheckCircle } from "react-icons/ai";
// Header FC
const Header = () => {
  // Header FC return
  return (
    <>
      <header className="w-full bg-white px-10 py-4 border-b border-gray-medium">
        <div className="flex justify-between items-center">
          {/* column 1 - logo */}
          <div className="cursor-pointer ml-16 md:ml-0">
            <Image src={logo} alt="logo" />
          </div>
          {/* column 2 - action buttons */}
          <div className="flex items-center gap-4">
            <button className="rounded-md bg-accent-green hover:accent-accent-green-hover px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover">
              <div className="flex items-center gap-x-2">
                <AiFillCheckCircle className="text-lg" /> <span>Activated</span>
              </div>
            </button>
            <button className="rounded-md bg-primary hover:bg-primary-hover px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover">
              <div className="flex items-center gap-x-2">
                <AiOutlineToTop className="text-lg" /> <span>Upload</span>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
