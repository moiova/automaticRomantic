import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoveLetterGenerator from './components/LoveLetterGenerator/LoveLetterGenerator';

class App extends React.Component {

  onButtonSubmit = () => {
    window.location.reload();
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>  
        <LoveLetterGenerator onButtonSubmit={this.onButtonSubmit}/>
      </div>
    )
  }
}

export default App;