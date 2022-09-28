import React from "react";

const Footer = () => {
  return (
    <div className="bg-black md:px-40 px-5 py-20 text-gray-500 text-[15px]">
      <div className="container max-w-3xl text-left mx-auto space-y-10 flex flex-col md:flex-row md:justify-between gap-4 justify-center">
        <div className="flex flex-col space-y-5">
          <p>
            Questions? Call
            <a href="http://localhost:3000/">0000-800-040-1843</a>
          </p>
          <div className="flex flex-col space-y-2">
            <p className="cursor-pointer hover:underline ">FAQ</p>
            <p className="cursor-pointer hover:underline ">
              Investor Relations
            </p>
            <p className="cursor-pointer hover:underline ">Privacy</p>
            <p className="cursor-pointer hover:underline ">Speed Test</p>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="bg-gray-800 text-lg text-white px-3 py-2">
              Language
            </button>
            <p>Netflix India</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="cursor-pointer hover:underline ">Help Centre</p>
          <p className="cursor-pointer hover:underline ">Jobs</p>
          <p className="cursor-pointer hover:underline ">Cookies Preferences</p>
          <p className="cursor-pointer hover:underline ">Legal Notices</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="cursor-pointer hover:underline ">Account</p>
          <p className="cursor-pointer hover:underline ">Ways to Watch</p>
          <p className="cursor-pointer hover:underline ">
            Corporate Information
          </p>
          <p className="cursor-pointer hover:underline ">Only on Netflix</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="cursor-pointer hover:underline ">Media Centre</p>
          <p className="cursor-pointer hover:underline ">Terms of Use</p>
          <p className="cursor-pointer hover:underline ">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
