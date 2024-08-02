import React from "react";
import Card from "../card/card";

export const AllDataShow = () => {
  return (
    <div className="bg-[#18171D] h-[200px]">
      <div className="container">
        <div className="flex justify-center">
          <div className="">
            <h2 className="text-[60px] font-semibold text-white">Read Code </h2>
            <p className="text-center text-white">Get Yor backup code </p>
          </div>
          <div className="Card">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
