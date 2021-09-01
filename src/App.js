//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useContext, useEffect } from "react";


function App() {
  
  const [date, setDate] = useState(new Date());
  const [seconds, setSeconds] = useState(0);

  
  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    
    return () => clearInterval(interval);
  });



  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
  
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
     function tick() {
      setDate(new Date());
     }
  
     

  return (
    <div>
      {seconds}
      <h2>It is {date.toLocaleTimeString()}.</h2>
      
    </div>
  );
}

export default App;
