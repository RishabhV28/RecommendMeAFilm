import "./Form.css"
import React from "react";
import axios from 'axios';
import {useState} from 'react'

const Form = ()=>{


  
      const [formData,setFormData]=useState({
        name:"",
        director:"",
        year:"",
        reason:""  
      })

      const[buttontext,setButtontext]=useState("submit")
      const[message,setMessage]=useState("");

      const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value})
      }

      const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
          const res=await axios.post('http://recommend-me-a-film-ix4l.vercel.app/submit',formData)
          setButtontext("submitted succesfully")
        }
        catch(error){
          setButtontext("error")
        }
      }
      const [isLit, setIsLit] = useState(false);

  const handleClick = () => {
    setIsLit(true);
    setTimeout(() => setIsLit(false), 4000); 
  };

      return(
        <div className={`Formdiv ${isLit ? 'lit-background' : ''}`}>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of the film</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />
        <label htmlFor="director">Name of the director</label>
        <input type="text" name="director" value={formData.director} onChange={handleChange} required /><br />
        <label htmlFor="year">Year of release</label>
        <input type="text" name="year" value={formData.year} onChange={handleChange} required /><br />
        <label htmlFor="reason">Why should i watch it??</label>
        <input type="text" name="reason" value={formData.reason} onChange={handleChange} required /><br />
        <button className={`submitbutton ${isLit ? 'lit-background' : ''}`}type='submit'>{buttontext}</button>
      </form>
      <button className="Lightbutton" onClick={handleClick}>Light</button>
     
      </div>

      
         
    )
}

export default Form