import React, { useState } from "react";
import "./basket.css";
import checkBox from "../../../Assets/img-mainpage/checkBox.svg";
import checkMark from "../../../Assets/img-mainpage/checkMark.svg";

const ToggleCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      {isChecked ? (
        <img src={checkMark} alt="img" className="checkMark" onClick={handleCheckboxChange}/>
      ) : (
        <img
          src={checkBox}
          alt="img"
          className="checkBox"
          onClick={handleCheckboxChange}
        />
      )}
    </>
  );
};
export default ToggleCheckBox;