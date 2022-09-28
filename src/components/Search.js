import React from "react";
import { AiOutlineRight } from "react-icons/ai";
const Search = () => {
  return (
    <div>
      <p className="text-white text-center mt-10">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-center w-full mt-5">
        <input
          className="w-full p-4 flex-1 outline-none text-gray-600"
          type="email"
          placeholder="Enter your Email"
        />
        <button className="text-white bg-myRed border-none px-6 py-4 flex flex-row items-center gap-2">
          Get Started
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Search;
