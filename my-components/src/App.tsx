import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from "./Confirm";

class App extends Component {

  private handleCancelClickConfirm = () => {
    console.log("Cancel clicked!");
  }

  private handleOkClickConfirm = () => {
    console.log("Ok clicked!");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Confirm 
          open = { false }
          title = "React and Typescript"
          content= "Are you sure you want to learn React and Typescript?"
          cancelCaption = "No Way!"
          okCaption = "Yes Please!"
          onOkClick = {this.handleOkClickConfirm}
          onCancelClick = {this.handleCancelClickConfirm}

        />
      </div>
    );
  }
}

export default App;
