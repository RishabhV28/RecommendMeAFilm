import "./Date.css"
import React, { useState, useEffect } from 'react';

const DateDisplay = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    // Optional: Update the date at midnight
    const timer = setInterval(() => {
      setDate(new Date().toLocaleDateString());
    }, 60 * 1000); // check every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="datediv">
      {date}
    </div>
  );
};



export default DateDisplay;