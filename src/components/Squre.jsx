import React from "react";

const Squre = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <button
      className="p-5 h-14 w-14 border-2 font-semibold flex items-center justify-center hover:bg-blue-300"
      onClick={handleClick}
    >
      x
    </button>
  );
};

export default Squre;
