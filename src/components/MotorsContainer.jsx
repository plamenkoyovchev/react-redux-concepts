import React from "react";
import { buyMotor } from "../store";
import { connect } from "react-redux";

const MotorsContainer = (props) => {
  const { availableMotors, buyMotor } = props;
  return (
    <>
      <h2>Available Motors - {availableMotors}</h2>
      <button onClick={buyMotor}>Buy Motor</button>
    </>
  );
};

const mapStateToProps = ({ motors }) => {
  return {
    availableMotors: motors.availableMotors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyMotor: () => dispatch(buyMotor()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MotorsContainer);
