import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import store from "./store/store";

import CarsContainer from "./components/CarsContainer";
import HooksCarContainer from './components/HooksCarContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CarsContainer />
        <HooksCarContainer />
      </div>
    </Provider>
  );
}

export default App;
