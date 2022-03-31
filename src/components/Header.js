import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="p-2 m-0 shadow-md shadow-slate-600 flex justify-center">
      <div className="flex flex-1 flex-row items-center justify-between max-w-5xl">
        <h1 className="text-3xl font-semibold text-white inline-block font-sans">
          Hi, I'm Ibrohim!
        </h1>
        <nav className="w-96 flex flex-row justify-around">
          <Button accent={true}>Works</Button>
          <Button>Skills</Button>
          <button type="button" className="text-blue-primary uppercase">
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
