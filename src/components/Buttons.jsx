"use client";

import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Image from "next/image";

const Buttons = ({ friend }) => {
  const { addActivity } = useContext(AuthContext);

  return (
    <div className="flex gap-5">
      {" "}
      <div
        className="flex flex-col px-12 py-5 bg-amber-50 rounded-xl gap-3 "
        onClick={() => {
          addActivity(friend, "call");
        }}
      >
        <Image
          className="mx-auto"
          src={"/call.png"}
          alt=""
          width={24}
          height={24}
        ></Image>
        <p className="text-center text-gray-500">Call</p>
      </div>
      <div
        className="flex flex-col px-12 py-5 bg-amber-50 rounded-xl gap-3 "
        onClick={() => {
          addActivity(friend, "message");
        }}
      >
        <Image
          className="mx-auto"
          src={"/text.png"}
          alt=""
          width={24}
          height={24}
        ></Image>
        <p className="text-center text-gray-500">Massege</p>
      </div>
      <div
        className="flex flex-col px-12 py-5 bg-amber-50 rounded-xl gap-3 "
        onClick={() => {
          addActivity(friend, "video");
        }}
      >
        <Image
          className="mx-auto"
          src={"/video.png"}
          alt=""
          width={24}
          height={24}
        ></Image>
        <p className="text-center text-gray-500">Vedio</p>
      </div>
    </div>
  );
};

export default Buttons;
