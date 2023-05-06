// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Router> */}
      <div className="container">  
        <Navbar list="Career"/>
        <TextForm heading="Enter the information"/>
        {/* <Routes> */}
          {/* we use exact keyword , so that browser do the exact matching
          /user --- component 1
          /user/home --- component 2  */}
          {/* <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the information"/>}/> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
