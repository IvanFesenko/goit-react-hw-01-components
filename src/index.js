import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import profile from './components/profile/user.json';

const props = { profile };



ReactDOM.render(<App props={props}/>, document.getElementById("root"));
