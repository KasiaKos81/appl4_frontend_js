//import logo from './logo.svg';
//import './App.module.css';

import classes from './App.module.css';
import React from 'react';
import Naglowek from "./komponenty/Naglowek";
import CialoStrony from "./komponenty/CialoStrony";

function App() {
    return (
        <div>
            <Naglowek></Naglowek>
            <CialoStrony></CialoStrony>
        </div>
    );

}

export default App;
