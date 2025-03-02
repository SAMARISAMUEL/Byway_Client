import React from "react";

const Button = ({ btnText, btnStyle }) => {
  return <div className={`${btnStyle} `}>{btnText}</div>;
};

export default Button;
