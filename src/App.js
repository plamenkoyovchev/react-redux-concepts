import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store/store";

import CarsContainer from "./containers/CarsContainer";
import HooksCarContainer from "./containers/HooksCarContainer";
import MotorsContainer from "./containers/MotorsContainer";
import HooksMotorContainer from "./containers/HooksMotorContainer";
import UsersContainer from "./containers/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CarsContainer />
        <HooksCarContainer />
        <MotorsContainer />
        <HooksMotorContainer />
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
