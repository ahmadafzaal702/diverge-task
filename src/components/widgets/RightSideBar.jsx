import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

const sidebarData = [
  {
    _id: 1,
    speaker: "Speake 1",
    time: "00.02",
    title: "Good Morning, Albert Flores, isn't it?",
    active: true,
  },
  {
    _id: 2,
    speaker: "Speake 2",
    time: "00.02",
    title: "Good Morning, Albert Flores, isn't it?",
    active: false,
  },
  {
    _id: 3,
    speaker: "Speake 1",
    time: "00.02",
    title: "Good Morning, Albert Flores, isn't it?",
    active: true,
  },
  {
    _id: 4,
    speaker: "Speake 2",
    time: "00.02",
    title: "Good Morning, Albert Flores, isn't it?",
    active: false,
  },
  {
    _id: 5,
    speaker: "Speake 1",
    time: "00.02",
    title: "Good Morning, Albert Flores, isnt it?",
    active: true,
  },
  {
    _id: 6,
    speaker: "Speake 2",
    time: "00.02",
    title: "Good Morning, Albert Flores, isnt it?",
    active: false,
  },
];

// RightSideBar FC
const RightSideBar = () => {
  // RightSideBar FC return
  return (
    <>
      <section className="bg-gray-light px-3 py-3 min-h-screen">
        {/* search div */}
        <div className="flex gap-x-4 pb-2">
          <button className="rounded-md bg-white border border-white hover:border-primary px-5 py-1 text-sm leading-6 text-gray-dark shadow-sm ">
            Origional
          </button>
          <button className="rounded-md bg-white border border-white hover:border-primary px-5 py-1 text-sm leading-6 text-gray-dark shadow-sm ">
            English
          </button>
          <button className="rounded-md bg-white border border-white hover:border-primary px-5 py-1 text-sm leading-6 text-gray-dark shadow-sm ">
            Arabic
          </button>
        </div>

        {/* sidebar options */}
        <div>
          {sidebarData?.map((data, i) => {
            return (
              <div
                className={`${
                  data.active ? "bg-speaker1-bg" : "bg-speaker2-bg"
                } rounded-md mb-3 px-2 py-3`}
                key={data._id}
              >
                <h3
                  className={`${
                    data.active ? "text-speaker1-text" : "text-speaker2-text"
                  } `}
                >
                  {data.speaker}
                </h3>
                <hr
                  className={`w-20 h-[1px] ${
                    data.active ? "bg-speaker1-text" : "bg-speaker2-text"
                  } border-0 rounded`}
                />
                <p>{data.time}</p>
                <p>{data.title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default RightSideBar;
