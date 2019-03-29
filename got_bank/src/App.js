import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BankAccount from "./BankAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
      <BankAccount customerName={'Melaati'} balance={'$127.00'}/>
      </div>
    );
  }
}

export default App;
