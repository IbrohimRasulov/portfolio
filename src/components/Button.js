import React from "react";

const Button = ({ children, accent }) => {
  const colorBtn = accent ? "bg-accent-color" : "bg-blue-primary";
  return (
    <button
      type="button"
      className={`${colorBtn} tracking-wider text-white font-semibold px-4 rounded py-1 hover:shadow-md hover:shadow-slate-700 active:opacity-80 uppercase`}
    >
      {children}
    </button>
  );
};

export default Button;
