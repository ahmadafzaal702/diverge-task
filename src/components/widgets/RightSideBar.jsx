import React from "react";

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
      <section className="bg-gray-light p-3 min-h-screen">
        {/* search div */}
        <div className="flex gap-x-4 pb-2">
          <button className="rightSidebarButton">Origional</button>
          <button className="rightSidebarButton">English</button>
          <button className="rightSidebarButton">Arabic</button>
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
                  } text-sm`}
                >
                  {data.speaker}
                </h3>
                <hr
                  className={`w-16 mt-[2px] h-[1px] ${
                    data.active ? "bg-speaker1-text" : "bg-speaker2-text"
                  } border-0 rounded`}
                />
                <p className="text-xs mt-1">{data.time}</p>
                <p className="text-xs mt-1">{data.title}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default RightSideBar;
