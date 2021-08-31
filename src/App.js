//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useContext, useEffect } from "react";


function App() {
  
  const [date, setDate] = useState(new Date());



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
      
      <h2>It is {date.toLocaleTimeString()}.</h2>
      
    </div>
  );
}

export default App;
