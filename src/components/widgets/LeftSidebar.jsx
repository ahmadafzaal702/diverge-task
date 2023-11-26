"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  AiOutlineEllipsis,
  AiOutlineDownload,
  AiOutlineDelete,
  AiOutlineAliyun,
  AiOutlineArrowRight,
} from "react-icons/ai";

// Images
import pic1 from "@/assests/1.webp";
import pic2 from "@/assests/2.webp";
import pic3 from "@/assests/3.webp";
import pic4 from "@/assests/4.webp";

// dummy data
const sidebarData = [
  {
    _id: 1,
    image: pic1,
    title: "US and China agree to re..",
    time: "4.12",
    active: true,
  },
  {
    _id: 2,
    image: pic2,
    title: "US and China agree to re..",
    time: "4.12",
  },
  {
    _id: 3,
    image: pic3,
    title: "US and China agree to re..",
    time: "4.12",
  },
  {
    _id: 4,
    image: pic4,
    title: "US and China agree to re..",
    time: "4.30",
  },
];

// LeftSidebar FC
const LeftSidebar = () => {
  const [optionMenu, setOptionMenu] = useState(false);
  // LeftSidebar FC return
  return (
    <>
      <section className="bg-gray-light p-3 min-h-screen">
        {/* search div */}
        <div className="py-2">
          <input type="text" placeholder="Search..." className="searchInput" />
        </div>

        {/* sidebar options */}
        <div>
          {sidebarData?.map((data, i) => {
            return (
              <div
                className={`flex items-center bg-white rounded-md mb-3 px-2 py-3 ${
                  data.active && "border border-primary"
                }`}
                key={data._id}
              >
                <div className="basis-3/12">
                  <Image
                    src={data.image}
                    alt="picture"
                    width={120}
                    height={120}
                    className="hover:scale-105 duration-300 rounded-md shadow-2xl"
                  />
                </div>
                <div className="basis-8/12 text-xs px-2">
                  <p>{data.title}</p>
                  <p className="mt-1">{data.time}</p>
                </div>
                <div
                  className="relative basis-1/12 cursor-pointer pr-2"
                  onClick={() => {
                    setOptionMenu(!optionMenu);
                  }}
                >
                  <AiOutlineEllipsis className="text-primary text-2xl" />

                  {/* menu work */}
                  {/* <div
                    className={`bg-white shadow-lg text-primary rounded-md w-52 px-3 py-3 absolute top-5 right-8 ${
                      optionMenu ? "block" : "hidden"
                    }`}
                  >
                    <ul>
                      <li className="text-sm py-1">
                        <div className="flex justify-between items-center">
                          <AiOutlineDownload className="text-xl" />
                          <span className="text-sm">Download</span>
                          <AiOutlineArrowRight className="text-xl" />
                        </div>
                      </li>
                      <li className="text-sm py-1">Menu 2</li>
                      <li className="text-sm py-1">Menu 3</li>
                    </ul>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LeftSidebar;
