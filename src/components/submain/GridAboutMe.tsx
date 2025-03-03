import React from "react";
import DoulingoStreak from "./DoulingoStreak";

const GridAboutMe = () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4">
      <div className="row-span-3 col ">
        <DoulingoStreak />
      </div>
      <div className="col-span-2 ...">
        {" "}
        <DoulingoStreak />
      </div>
      <div className="col-span-2 row-span-2 ...">
        {" "}
        <DoulingoStreak />
      </div>
    </div>
  );
};

export default GridAboutMe;
