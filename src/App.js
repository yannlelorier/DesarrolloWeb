//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useContext } from "react";
import NewInput from "./components/NewInput";

function App() {
  
  const [count, setCount] = useState(10);
  const [dato, setDato] = useState("Sergio");
  const [users, setUsers] = useState([{ id: 0, name: "Ruben" }]);

  const onClick = () => {
    setUsers([...users, { id: users.length, name: "Sergio" }]);
  };


  var datos = {
    type: "button",
    value: "Insertar",
  };
  

  return (
    <div>
      <NewInput  onClick={onClick} {...datos} />
      <div>
        {users.map((e) => (
          <div>
            {e.id} - {e.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
