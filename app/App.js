import React from 'react';
import {Provider} from "react-redux";
import store from "./state/store";
import {GeneralStyle} from "./styles.js";
import './App.css';

import Container from "./components/Container";

export function App() {
  return (
    <Provider store={store}>
        <GeneralStyle className="container">
            <Container/>
        </GeneralStyle>
    </Provider>
  );
}

export default App;
