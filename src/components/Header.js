import React from "react";
import logo from "../assests/logo.png";

const Header = () => {
  return (
    <div className="absolute w-full">
      <div className="flex flex-row px-4 items-center bg-transparent justify-between">
        <img
          className="w-40 h-auto cursor-pointer"
          src={logo}
          alt="netflix logo for taruna juice"
        />
        <button className="text-white bg-myRed py-[5px] px-5 rounded-md">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
