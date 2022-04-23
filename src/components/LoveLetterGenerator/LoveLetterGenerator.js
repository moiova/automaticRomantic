import React from "react";
import './LoveLetterGenerator.css';
import '../../App.css';

const LoveLetterGenerator = ({ props } ) => {

  return (
    <div className="App-header">
      <section>
        <p>{props[0]}</p>

          <span className="withPadding">{props[1]}</span>
          <span>{props[2]}</span>
          <span>{props[3]}</span>  

        <p>  
          <span>{props[4]}<br></br></span>
          <span>{props[5]}</span>
        </p>


      </section>

    </div>
  )
}

export default LoveLetterGenerator;