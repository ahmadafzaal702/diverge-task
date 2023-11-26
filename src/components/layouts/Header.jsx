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
      <header className="w-full bg-white px-10 py-3 border-b border-gray-medium">
        <div className="flex justify-between items-center">
          {/* column 1 - logo */}
          <div className="cursor-pointer ml-16 md:ml-0">
            <Image src={logo} alt="logo" className="w-28 md:w-48" />
          </div>
          {/* column 2 - action buttons */}
          <div className="flex items-center gap-4">
            <button className="headerButton bg-accent-green hover:bg-accent-green-hover">
              <div className="flex items-center gap-x-2">
                <AiFillCheckCircle className="text-lg" /> <span>Activated</span>
              </div>
            </button>
            <button className="headerButton bg-primary hover:bg-primary-hover">
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
