import React from "react";
import "../../../data.js";

const SpecialButton = (props) => {

  const {special} = props;
  return (
    <>
    <button>{special}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;
