import React from "react";

const Banner = () => {
  return (
    <div className="text-center my-10  px-20">
      <h2 className="font-bold text-4xl">Friends to keep close in your life</h2>
      <p className="mx-15 mt-4 mb-7">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn border-[#244D3F] bg-[#244D3F] text-white hover:bg-[#1D382F]">
        Add a Friend
      </button>
      <div className="flex gap-7 m-10 justify-center">
        <div className=" px-12 py-5 bg-amber-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-700">10</h3>
          <p className=" text-gray-500">Total Friends</p>
        </div>
        <div className=" px-12 py-5 bg-amber-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-700">3</h3>
          <p className=" text-gray-500">On Track</p>
        </div>
        <div className=" px-12 py-5 bg-amber-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-700">6</h3>
          <p className=" text-gray-500">Need Attention</p>
        </div>
        <div className=" px-12 py-5 bg-amber-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-700">12</h3>
          <p className=" text-gray-500">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
