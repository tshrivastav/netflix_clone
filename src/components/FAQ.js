import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FAQ = ({ title, body }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center m-2">
      <div
        onClick={() => setVisible(!visible)}
        className="flex flex-row items-center justify-between bg-myGray p-5 w-full text-white  "
      >
        <p className="md:text-3xl">{title}</p>
        <AiOutlinePlus
          className={`text-2xl ${
            visible ? "rotate-45" : "rotate-0"
          } duration-150`}
        />
      </div>
      {visible && (
        <div className="bg-myGray mt-[1px] p-5 w-full text-white">{body}</div>
      )}
    </div>
  );
};

export default FAQ;
