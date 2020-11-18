import React from "react";
import Profile from './components/profile/Profile'

import "./App.css";


function App(props){
  const { profile } = props;
  return (
    <div className="container">
      <h1 className="main-title">Homework 1</h1>
      <Profile profile={{profile}}/>
    </div>
  );
}

export default App;
