import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import userProfile from './components/profile/user.json';
import statisticalData from './components/statistics/statistical-data.json';


const props = { userProfile, statisticalData };



ReactDOM.render(<App props={props}/>, document.getElementById("root"));
