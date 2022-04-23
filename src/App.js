import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import LoveLetterGenerator from './components/LoveLetterGenerator/LoveLetterGenerator';
import GenerateLetterButton from './components/GenerateLetterButton/GenerateLetterButton';
import { generateLoveLetter } from './LoveLettersPool';


// const textArray = generateLoveLetter();

class App extends Component {

  onButtonClick = () => {
    this.setState( {textArray: generateLoveLetter()} )
  }

  constructor() {
    super();
    this.state = {
      textArray : generateLoveLetter()
    }  
  }

  render() {
    return(
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> 
        <LoveLetterGenerator props={this.state.textArray} />
        <GenerateLetterButton onButtonSubmit={this.onButtonClick} />

      </div>
    )
  }
  
}

export default App;