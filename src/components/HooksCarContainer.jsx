import React from "react";
import { useSelector } from "react-redux";

const HooksCarContainer = () => {
  const availableCars = useSelector((state) => state.availableCars);
  return (
    <>
      <h2>Hooks Available Cars - {availableCars}</h2>
      <button>Buy Car</button>
    </>
  );
};

export default HooksCarContainer;
