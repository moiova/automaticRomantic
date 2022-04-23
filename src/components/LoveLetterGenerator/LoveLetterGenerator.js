import React from "react";
import './LoveLetterGenerator.css';
import '../../App.css';
// import { generateLoveLetter } from '../../LoveLettersPool';


// let props = generateLoveLetter();

// function onButtonSubmit() {
//   props = generateLoveLetter();
//   console.log('props.default[0]: ', props[0])
//   return props;
// }


const LoveLetterGenerator = ({ props } ) => {
  console.log(props[0]);
  return (
    <div className="App-header">
      <section>
        <p>{console.log('props.default[0]: ', props[0])}</p>
        <p>{props[0]}</p>

          <span className="withPadding">{props[1]}</span>
          <span>{props[2]}</span>
          <span>{props[3]}</span>  

        <p>  
          <span>{props[4]}<br></br></span>
          <span>{props[5]}</span>
        </p>


      </section>
      {/* <GenerateLetterButton onButtonSubmit={onButtonSubmit} /> */}
      {/* <footer>
        <button onClick={props.onButtonSubmit}>
          generate another letter
        </button>
      </footer> */}

    </div>
  )
}

export default LoveLetterGenerator;