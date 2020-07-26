import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import store from "./store/store";

import CarsContainer from "./components/CarsContainer";
import HooksCarContainer from './components/HooksCarContainer';
import MotorsContainer from './components/MotorsContainer';
import HooksMotorContainer from './components/HooksMotorContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CarsContainer />
        <HooksCarContainer />
        <MotorsContainer />
        <HooksMotorContainer />
      </div>
    </Provider>
  );
}

export default App;
