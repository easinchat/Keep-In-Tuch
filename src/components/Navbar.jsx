import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Keep-In-Tuch</a>
      </div>

      <div className="navbar-end gap-3">
        <a className="btn">Button</a>
        <a className="btn">Button</a>
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
