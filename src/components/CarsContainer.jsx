import React from "react";
import { buyCar } from "../store";
import { connect } from "react-redux";

const CarsContainer = () => {
  return (
    <>
      <h2>Available Cars</h2>
      <button>Buy Car</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    availableCars: state.availableCars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCar: () => dispatch(buyCar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer);
