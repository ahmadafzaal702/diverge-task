import React from "react";
import Image from "next/image";
import picture from "@/assests/video.png";
import { AiOutlineEllipsis } from "react-icons/ai";

const sidebarData = [
  {
    _id: 1,
    image: "url",
    title: "title",
    time: "4.30",
  },
  {
    _id: 2,
    image: "url",
    title: "title",
    time: "4.30",
  },
  {
    _id: 3,
    image: "url",
    title: "title",
    time: "4.30",
  },
  {
    _id: 4,
    image: "url",
    title: "title",
    time: "4.30",
  },
];

// LeftSidebar FC
const LeftSidebar = () => {
  // LeftSidebar FC return
  return (
    <>
      <section className="bg-gray-light px-3 min-h-screen">
        {/* search div */}
        <div className="py-2">
          <input
            type="text"
            placeholder="Search..."
            name="username"
            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray-medium placeholder:text-gray focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none"
          />
        </div>

        {/* sidebar options */}
        <div>
          {sidebarData?.map((data, i) => {
            return (
              <div
                className="flex items-center bg-white rounded-md mb-3 px-2 py-3"
                key={data._id}
              >
                <div className="basis-3/12">
                  <Image
                    src={picture}
                    alt="picture"
                    width={150}
                    height={150}
                    className="hover:scale-105 duration-300 rounded-lg shadow-2xl"
                  />
                </div>
                <div className="basis-8/12 text-[13px] px-1">
                  <p>US and China agree to re..</p>
                  <p>04.12</p>
                </div>
                <div className="basis-1/12 cursor-pointer">
                  <AiOutlineEllipsis className="text-primary text-xl" />
                </div>
                <div></div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LeftSidebar;
