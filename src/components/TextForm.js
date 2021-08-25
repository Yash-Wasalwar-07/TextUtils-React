import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked!")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked!")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClear = () => {
        console.log("Clear button was clicked!")
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <p>Word Count: {text.split(" ").length} and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read!</p>
                <h3>Preview</h3>
                <p>{text.length > 0?text:"Enter something in textbox above to preview it here"}</p>
            </div>
        </>
    )
}


    // text = "new text"; //! wrong way to change the state

    // setText("new text"); //correct way!