import React from "react";
import { buyCar } from "../store";
import { connect } from "react-redux";

const CarsContainer = (props) => {
  const { availableCars, buyCar } = props;
  return (
    <>
      <h2>Available Cars - {availableCars}</h2>
      <button onClick={buyCar}>Buy Car</button>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    availableCars: state.cars.availableCars,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyCar: () => dispatch(buyCar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer);
