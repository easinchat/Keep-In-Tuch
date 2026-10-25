"use client";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Image from "next/image";

const Timeline = () => {
  const { calls } = useContext(AuthContext);
  console.log(calls);
  // const { icon, friendName, action, createdAt } = calls;
  return (
    <div className="">
      <h2 className="font-bold text-4xl">TimeLine </h2>

      <div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      {/* Card Items  */}
      {calls.length > 0 &&
        calls.map((call) => (
          <div
            key={call.id}
            className="flex gap-5 items-center w-full border border-amber-200 bg-amber-50 text-black p-4 rounded-xl m-5"
          >
            <Image width={24} height={24} alt="Image" src={call.icon}></Image>
            <div className="flex flex-col gap-3">
              <h4>
                <span className="text-xl font-bold">
                  {call.action.charAt(0).toUpperCase() + call.action.slice(1)}
                </span>{" "}
                <span>{call.friendName}</span>
              </h4>
              <p>{call.createdAt}</p>
            </div>
          </div>
        ))}

      {/* //// */}
    </div>
  );
};

export default Timeline;

{
  /* <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white px-5 py-4 shadow-sm">
        <span className="text-3xl">{icons[item.type]}</span>

        <div>
          <p className="text-base">
            <span className="font-semibold text-[#244D3F]">{item.type}</span>
            <span className="text-sm text-gray-500">
              {" "}
              with {item.friendName}
            </span>
          </p>
          <p className="text-sm text-gray-400">{item.date}</p>
        </div>
      </div> */
}
