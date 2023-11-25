"use client";
import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";
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
        <div
          className={`${
            videoSummary ? "bg-[#FFF6EC]" : "bg-gray-medium"
          } rounded-md px-4 py-4 mt-3`}
        >
          <div className=" flex justify-between items-center ">
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
        <div className="bg-white mt-3 px-4 py-4 border border-primary rounded-md">
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
                <div className="flex gap-x-3 text-sm" key={data.id}>
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
