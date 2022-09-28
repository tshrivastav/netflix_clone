import React from "react";
import logo from "../assests/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const goTo = useNavigate();
  return (
    <div className="absolute w-full">
      <div className="flex flex-row px-4 items-center bg-transparent justify-between">
        <img
          onClick={() => goTo("/")}
          className="w-40 h-auto cursor-pointer"
          src={logo}
          alt="netflix logo for taruna juice"
        />
        <button
          onClick={() => goTo("/login")}
          className="text-white bg-myRed py-[5px] px-5 rounded-md"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
