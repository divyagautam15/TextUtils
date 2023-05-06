import React, {useState} from 'react';
// useState are just hooks, hooks are helpfull to use class functions without creating classes
import './TextForm.css';

export default function TextForm(props) {
    // Declare a new state variable, which we'll call "count".  setText is update function
  const [Text, setText] = useState("Enter text");
  //   text = "enter text here"; //Wrong way to change state
  // setText("enter text below"); //Correct way to change state

  const uppercaseClick = () => {
    console.log(Text);
    let newText = Text.toUpperCase();
    setText(newText);
  }
  const lowercaseClick = () => {
    console.log(Text);
    let newText = Text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event)=> {
    console.log("Text Edit..");
    setText(event.target.value);    // Its help us to get the current value + added value
  }
  const clearClick =()=> {
    setText("");
  }
  const sentenceClick =()=>{
    let newText = Text[0].toUpperCase() + Text.slice(1);
    setText(newText);
  }
  const titleClick=()=> {
    console.log("Title Click function used")
    // let newText = Text.toTitleCase();
    // setText(newText);
  }
  const copyText=()=> {
    console.log("copy text click");
    let text1 = document.getElementById("text");
    text1.select();
    navigator.clipboard.writeText(text1.value);
  }
  const spaceRemove = () => {
    console.log("Remove Extra space");
    let text2 = Text.split(/[ ]+/);
    setText(text2.join(" "));
  }
  

  
  return (
      <>
        <div className='wrapper'>
          <div className='container1'>
            <h2 className='heading'>{props.heading}</h2>
            <div className="textArea">
                <label htmlFor="text" className="frmLabel">Example textarea</label>
                <textarea className="formTextarea" id="text" rows="6" value={Text} onChange={handleOnChange}></textarea>
                <button className='abc' onClick={uppercaseClick}>Convert to Uppercase</button>
                <button className='abc2' onClick={lowercaseClick}>Convert to Lowercase</button>
                <button className='abc2' onClick={clearClick}>Clear</button>
                <button className='abc2' onClick={sentenceClick}>Sentence Case</button>
                <button className='abc2' onClick={titleClick}>Title Case</button>
                <button className='abc2' onClick={copyText}>Copy Text</button>
                <button className='abc2' onClick={spaceRemove}>Remove Space</button>
            </div>
          </div>
          <div className='container2'>
            <h4>Text Summary</h4>
            <p>{Text.split(" ").length} Words and {Text.length} Characters</p>
            <p>You can read this in {0.008 * Text.split(" ").length} mintues</p>
            <h4>Preview</h4>
            <p>{Text}</p>
          </div>        
        </div>
      </>
  );
}
