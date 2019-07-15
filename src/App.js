import React from 'react';
import {Provider} from "react-redux";
import store from "./state/store";
import './App.css';

import Board from "./components/Board";

function App() {
  return (
    <Provider store={store}>
        <div className="App container">
            <Board/>
        </div>
    </Provider>
  );
}

export default App;
