import React from "react";

const GenerateLetterButton = (props) => {

    return (
        <div className='button-container'>
            <button onClick={props.onButtonSubmit}>generate another letter</button>
        </div>
    )
}

export default GenerateLetterButton;