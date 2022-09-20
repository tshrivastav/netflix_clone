import React from "react";

const Search = () => {
  return (
    <div>
      <p className="text-white text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-row items-center justify-center w-full mt-5">
        <input
          className="p-4 flex-1 outline-none text-gray-600"
          type="email"
          placeholder="Enter your Email"
        />
        <button className="text-white bg-myRed border-none px-6 py-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Search;
