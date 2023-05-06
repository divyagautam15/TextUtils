import React, {useState} from 'react';
// useState are just hooks, hooks are helpfull to use class functions without creating classes
import './About.css';
export default function About() {
    // Toggle Accordian
    const[show, setshow] = useState(false);
    const[showText, setshowText] = useState(false);
    const[showLine, setshowLine] = useState(false);
    const accorDisplay1=()=> {
        console.log("Click on accordian");
        setshow(!show);
    }
    const accorDisplay2=()=> {
        console.log("Click on accordian");
        setshowText(!showText);
    }
    const accorDisplay3=()=> {
        console.log("Click on accordian");
        setshowLine(!showLine);
    }
    // Adding style - 1st method(easy)
    // let myStyle={
    //   color: "white",
    //   backgroundColor: "black"
    // }

    // Adding style - 2nd method
    const [myStyle, setmyStyle] = useState({
        backgroundColor: "black",
        color: "white"
    })
    const [btnText, setBtnText] = useState("Light Mode")
    const enableBtn=() => {
        if(myStyle.color ==="white") {
        setmyStyle({
            backgroundColor: "white",
            color: "black"
        })
        setBtnText("Dark Mode")
        }
        else{
        setmyStyle({
            backgroundColor: "black",
            color: "white"
        })
        setBtnText("Light Mode")
        }
    }
  return (
    <>
        <div className='wrapper'>
            <div className='container3' style={myStyle}>
                <div className='container3Wrapper'>
                    <h2>About Us</h2>
                <div className='accordian1' style={myStyle}>
                    <h4 onClick={accorDisplay1} className='accorTitle'>Accordian 1</h4>
                    {show ? <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, id dolorum ea corporis accusamus officia fugit. Iure sequi possimus labore?</p> : null}
                </div>
                <div className='accordian1' style={myStyle}>
                    <h4 onClick={accorDisplay2} className='accorTitle'>Accordian 2</h4>
                    {showText ? <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, id dolorum ea corporis accusamus officia fugit. Iure sequi possimus labore?</p> : null}
                </div>
                <div className='accordian1' style={myStyle}>
                    <h4 onClick={accorDisplay3} className='accorTitle'>Accordian 3</h4>
                    {showLine ? <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, id dolorum ea corporis accusamus officia fugit. Iure sequi possimus labore?</p> : null}   
                </div>
                <div className='butnDiv'><button className='enableBtn' onClick={enableBtn}>{btnText}</button></div>
                </div>
            </div>
        </div> 
    </>
  )
}
