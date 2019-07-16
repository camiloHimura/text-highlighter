import React from 'react';
import {Provider} from "react-redux";
import store from "./state/store";
import './App.css';

import Container from "./components/Container";

export function App() {
  return (
    <Provider store={store}>
        <div className="App container">
            <Container/>
        </div>
    </Provider>
  );
}

export default App;
