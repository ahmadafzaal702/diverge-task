"use client";
import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";
import { Button } from "@/components";

import Image from "next/image";
import picture from "@/assests/video.png";

const videoInformationData = [
  {
    id: 1,
    title: "Detected Language:",
    value: "Persian",
  },
  {
    id: 2,
    title: "Title:",
    value: "US and China agree to resign.mp4",
  },
  {
    id: 3,
    title: "Number of speakers:",
    value: "2",
  },
  {
    id: 4,
    title: "Duration:",
    value: "1.40",
  },
  {
    id: 5,
    title: "Sentiment Analysis:",
    value: "Confusion",
  },
  {
    id: 6,
    title: "Date:",
    value: "13/11/2023",
  },
];

// MainSection FC
const MainSection = () => {
  const [videoSummary, setVideoSummary] = useState(false);
  const [videoInformation, setVideoInformation] = useState(false);
  // MainSection FC return
  return (
    <>
      <section className="bg-white">
        {/* Advance settings */}
        <div className="flex justify-between items-center rounded-md border border-primary px-4 py-3 mt-3">
          <h2>Advance Setting</h2>
          <div className="flex gap-x-5 items-center">
            <Button
              title="Process"
              bg="bg-primary"
              bgHover="bg-primary-hover"
            />
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
        <div
          className={`${
            videoSummary ? "bg-[#FFF6EC]" : "bg-gray-medium"
          } rounded-md p-4 mt-3`}
        >
          <div className="flex justify-between items-center">
            <h2
              className={`${
                videoSummary ? "text-[#F2870D]" : "text-gray-dark"
              }`}
            >
              Video Summary
            </h2>
            <div
              className={`${
                videoSummary ? "text-[#F2870D]" : "text-gray-dark"
              } text-xl cursor-pointer`}
              onClick={() => {
                setVideoSummary(!videoSummary);
              }}
            >
              {videoSummary ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}
            </div>
          </div>

          {/* summary text */}
          <div
            className={`mt-3 text-sm duration-300 ${
              videoSummary ? "block" : "hidden"
            }`}
          >
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
        <div className="mt-3 p-4 border border-primary rounded-md">
          <div className="flex justify-between items-center">
            <h2>Video Information</h2>
            <div
              className={`${
                videoInformation ? "text-[#F2870D]" : "text-gray-dark"
              } text-xl cursor-pointer`}
              onClick={() => {
                setVideoInformation(!videoInformation);
              }}
            >
              {videoInformation ? (
                <AiOutlineArrowDown />
              ) : (
                <AiOutlineArrowRight />
              )}
            </div>
          </div>

          {/* information detail */}
          <div
            className={`mt-3 text-sm duration-300 ${
              videoInformation ? "block" : "hidden"
            } grid grid-cols-1 md:grid-cols-2 gap-4 p-4`}
          >
            {videoInformationData?.map((data, i) => {
              return (
                <div className="flex gap-x-3 text-xs" key={data.id}>
                  <p>{data.title}</p>
                  <p className="text-[#F2870D]">{data.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
