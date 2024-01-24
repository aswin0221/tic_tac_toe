import React from "react";
import Squre from "./Squre";

const Board = () => {
  return (
    <>
      <h1 className="mb-2 text-lg">Next Player : X</h1>
      <div className="flex">
        <Squre />
        <Squre />
        <Squre />
      </div>
      <div className="flex">
        <Squre />
        <Squre />
        <Squre />
      </div>
      <div className="flex">
        <Squre />
        <Squre />
        <Squre />
      </div>
    </>
  );
};

export default Board;
