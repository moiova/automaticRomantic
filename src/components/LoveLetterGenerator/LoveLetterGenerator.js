import React from "react";
import './LoveLetterGenerator.css';
import '../../App.css';

const LoveLetterGenerator = ({ props } ) => {

  return (
    <div className="App-header">
      <section className="letter-section-container">
        <p className='titel'>{props[0]}</p>

          <span className="withPadding">{props[1]}</span>
          <span>{props[2]}</span>

        <p className="signature">  
          <span>{props[3]}<br></br></span>
          <span>{props[4]}</span>
        </p>

      </section>

    </div>
  )
}

export default LoveLetterGenerator;