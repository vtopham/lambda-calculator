import React from "react";


const NumberButton = (props) => {
  const {num} = props;

  return (
    <>
      <button>{num}</button>
    </>
  );
};

export default NumberButton;