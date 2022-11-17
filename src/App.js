import  "./App.css";
import React, { Component } from 'react';
import Login from "./tabs/Login";
import Etat from "./tabs/Etat";



class App extends Component {
  render() {
    return (
      <div>
       <Etat/>
      </div>
    )
  }
}

export default App;
