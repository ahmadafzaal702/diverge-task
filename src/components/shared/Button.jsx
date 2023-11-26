import React from "react";

// Button FC
const Button = ({ title, bg, bgHover }) => {
  return (
    <button className={`headerButton ${bg} hover:${bgHover}`}>{title}</button>
  );
};

export default Button;
