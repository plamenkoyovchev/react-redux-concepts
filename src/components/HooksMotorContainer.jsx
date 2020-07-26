import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyMotor } from "../store";

const HooksMotorContainer = () => {
  const availableMotors = useSelector(({ motors }) => motors.availableMotors);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Hooks Available Motors - {availableMotors}</h2>
      <button onClick={() => dispatch(buyMotor())}>Buy Motor</button>
    </>
  );
};

export default HooksMotorContainer;
