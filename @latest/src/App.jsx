import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import About from "../components/About";
import { useState } from 'react'
import Form from '../components/Form'
import './App.css'
import TimeDisplay from '../components/Time'
import DateDisplay from '../components/Date'
import Navbar from "../components/Navbar";



function App() {
  
  const navigate = useNavigate();
  const [infobutton, setInfoButton] = useState(true);
const [buttontext, setButtonText] = useState("About");

const handleAbout = () => {
  if (infobutton === true) {
    setInfoButton(false);
    setButtonText("Home");
  } else {
    setInfoButton(true);
    setButtonText("About");
  }
};
  return (
    <div className='DaddyDiv'>
      <h1>Submit a film</h1>
      <h2>Submit a film here and I'll watch it, I promise(maybe)<br/>Just a fun little thing i made in a few hours</h2>
      
     
    
      <TimeDisplay></TimeDisplay>
      <DateDisplay></DateDisplay>
      <button
  className="aboutbutton"
  onClick={() => {
    if (infobutton) {
      navigate('/about');
      setInfoButton(false);
      setButtonText("Home");
    } else {
      navigate('/');
      setInfoButton(true);
      setButtonText("About");
    }
  }}
>
  {buttontext}
</button>
        <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/about" element={<About />} />
        
        </Routes>
      

      

      </div>
     
      
  )
}

export default App
