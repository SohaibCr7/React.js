import React from "react";
import User from "./User"
import './App.css';
import States from "./States";
import UseReduce from "./UseReduce"
function App() {
  return (
    
    <div className="App">
      <User name="Sohaib" age="23" />
      <UseReduce />
      <States/>
      
    </div>
    
    
    
  );
}

export default App;
