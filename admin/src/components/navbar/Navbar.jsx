import navLogo from "../../assets/nav-logo.svg";
import React from "react";
import navProfile from "../../assets/nav-profile.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white shadow-xl px-4 py-3 mb-px
                    sm:px-6 sm:py-4
                    md:px-10 md:py-5
                    lg:px-[60px] lg:py-[15px]">
      <img
        className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
        src={navLogo}
        alt="Logo"
      />
      <img
        className="w-[45px] sm:w-[55px] md:w-[65px] lg:w-[75px]"
        src={navProfile}
        alt="Profile"
      />
    </div>
  );
}

export default Navbar;
