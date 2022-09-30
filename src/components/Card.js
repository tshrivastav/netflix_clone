import React from "react";
import api from "../config/api_config";

const Card = ({ movie }) => {
  const { id, title, original_title, backdrop_path } = movie;
  return (
    <div className="hover:scale-150 duration-100 flex flex-col justify-center items-center cursor-pointer">
      <img
        className="w-[400px] md:w-[180px]"
        src={api.base_url + backdrop_path}
        alt={title}
      />
      <p className="p-1 bg-black text-[10px] text-white text-center">
        {title || original_title}
      </p>
    </div>
  );
};

export default Card;
