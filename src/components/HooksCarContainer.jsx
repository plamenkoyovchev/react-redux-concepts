import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCar } from "../store";

const HooksCarContainer = () => {
  const availableCars = useSelector((state) => state.availableCars);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Hooks Available Cars - {availableCars}</h2>
      <button onClick={() => dispatch(buyCar())}>Buy Car</button>
    </>
  );
};

export default HooksCarContainer;
