import React, {useState} from 'react';
import './Navbar.css' ;
import PropTypes from 'prop-types'; // impt- this will writes automatically
// import { Link } from 'react-router-dom';


export default function Navbar(props) {  // by writting rfc this whole syntax will appear
  const [Mode, setMode] = useState({
    backgroundColor : "black"
  });

  const [textMode, settextMode] = useState({
    color: "white"
  })

  const [modeButton, setmodeButton] = useState({
    float: "right"
  })

  const [Light_DarkMode, setLight_DarkMode] = useState("Light Mode")

  const [switchModediv, setswitchModediv] = useState({
    backgroundColor: "blue"
  })

  const modeChange = () => {
    if(Mode.backgroundColor === "black") {
      setMode({
        backgroundColor: "white",
        // document.body.style.backgroundColor: "white"
      })
      settextMode({
        color: "black"
      })
      setmodeButton({
        float: "left"
      })
      setLight_DarkMode("Dark Mode")
      setswitchModediv({
        backgroundColor: "lightblue"
      })
      document.tittle = "TextUtil - Light Mode";
    }
    else {
      setMode({
        backgroundColor: "black",
        // document.body.style.backgroundColor : "black"
      })
      settextMode({
        color: "white"
      })
      setmodeButton({
        float: "right"
      })
      setLight_DarkMode("Light Mode")
      setswitchModediv({
        backgroundColor: "blue"
      })
      document.tittle = "TextUtil - Dark Mode";
    }
  }
  return (
    <nav className='navbar' style={Mode}>
      <h2 className='logo'>{props.name}</h2>
      <ul>
          <li className='list' style={textMode}>
            {/* <Link to="/">Home</Link> */}
            <a href='#'>Home</a>
          </li>
          <li className='list' style={textMode}>
            {/* <Link to="/about">About</Link> */}
            <a href='#'>About</a>
          </li>
          <li className='list' style={textMode}>{props.list}</li>
          <li className='list' style={textMode}>Contact us</li>
          <li className='list modeList'>
            <div className='modeDiv'>
              <div className='switchDiv' style={switchModediv}>
                <div className='switchMode' style={modeButton} onClick={modeChange}></div>
              </div>
              <p className='switchLine' style={textMode}>{Light_DarkMode}</p>
            </div>
          </li>
      </ul>
    </nav>
  );
}

// For protypes we have to impact the Protypes 
Navbar.prototype = {      // If we set the types of props, so if by mistaken we give the props value other than string then it will give an error
    name:PropTypes.string.isRequired, // now if we forget to give this value and not set the default value it will give error.
    list:PropTypes.string
}
Navbar.defaultProps = {    // If we forget to give the value of the props it will show the below text.
    name: 'Set logo here',
    list: 'Set list here'
  };
