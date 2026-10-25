import Link from "next/link";
import React from "react";
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlineQueryStats } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Keep-In-Tuch</a>
      </div>

      <div className="navbar-end gap-3">
        <Link
          href={"/"}
          className="btn inline-flex flex-row items-center justify-center gap-2 border-none shadow-none"
        >
          <IoHomeOutline />
          <span>Home</span>
        </Link>

        <Link
          href={"/timeline"}
          className="btn inline-flex flex-row items-center justify-center gap-2 border-none shadow-none"
        >
          <IoTimeOutline />
          Timeline
        </Link>
        <Link
          href={""}
          className="btn inline-flex flex-row items-center justify-center gap-2 border-none shadow-none"
        >
          <MdOutlineQueryStats />
          Stats
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
