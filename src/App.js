import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import grocerystore from './grocerystore.jpg'
import Header from "./Components/Header"
import AddGrocery from "./Components/AddGrocery"
class App extends Component {
  render() {
    return (
      <div id="wrapper" className="wrapperShadow">
        <Header/>
        <AddGrocery/>
        <div id="getStarted">
        <h1 id="groceryText">Get Started!</h1>
        <br/>
        <br/>
        <button id="getStartedButton">Lets Go!</button>
        </div>
      </div>
    );
  }
}
export default App;
