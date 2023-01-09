import React from "react";
import { GiSittingDog } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex items-center justify-center bg-gray-800 text-white p-6 mb-5 shadow-xl">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="flex items-center justify-center font-semibold text-xl tracking-tight">
          <GiSittingDog />
          <span className="ml-3">Animals Images</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
