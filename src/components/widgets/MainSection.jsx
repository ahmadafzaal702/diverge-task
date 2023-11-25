"use client";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import picture from "@/assests/video.png";

// MainSection FC
const MainSection = () => {
  const [videoSummary, setVideoSummary] = useState(false);

  console.log(videoSummary);
  // MainSection FC return
  return (
    <>
      <section className="bg-white">
        {/* Advance settings */}
        <div className="bg-white flex justify-between items-center rounded-md border border-primary px-4 py-4 mt-3">
          <h2>Advance Setting</h2>
          <div className="flex gap-x-5 items-center">
            <button className="rounded-md bg-primary hover:bg-primary-hover px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-hover">
              Process
            </button>
            <span>
              <AiOutlineArrowRight className="text-xl text-primary cursor-pointer" />
            </span>
          </div>
        </div>

        {/* main player */}
        <div className="mt-3">
          <Image src={picture} alt={picture} width="100%" height="100%" />
        </div>

        {/* Summary section */}
        <div className="bg-gray-medium rounded-md px-4 py-4 mt-3">
          <div className=" flex justify-between items-center ">
            <h2>Video Summary</h2>
            <div>
              <span>
                <AiOutlineArrowRight
                  className="text-xl cursor-pointer"
                  onClick={() => {
                    setVideoSummary(!videoSummary);
                  }}
                />
              </span>
            </div>
          </div>

          {/* summary text */}
          <div className="mt-3 text-sm">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
        </div>

        {/* Information section */}
        <div className="mt-3">
          <div className="bg-white flex justify-between items-center rounded-md px-4 py-4 mt-2 border border-primary">
            <h2>Video Information</h2>
            <div>
              <span>
                <AiOutlineArrowRight className="text-xl cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
