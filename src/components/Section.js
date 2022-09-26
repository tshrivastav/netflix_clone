import React from "react";

const Section = ({ title, body, img, reverse }) => {
  return (
    <div className="bg-black py-10 px-5 md:px-40 grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-14">
      {reverse ? (
        <>
          <div>
            <img src={img} alt={title} />
          </div>
          <div className="p-10 text-center md:text-left text-white">
            <p className="font-bold mb-5 text-2xl md:text-5xl">{title}</p>
            <p className="md:text-3xl">{body}</p>
          </div>
        </>
      ) : (
        <>
          <div className="p-10 text-center md:text-left text-white">
            <p className="font-bold mb-5 text-2xl md:text-5xl">{title}</p>
            <p className="md:text-3xl">{body}</p>
          </div>
          <div>
            <img src={img} alt={title} />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
