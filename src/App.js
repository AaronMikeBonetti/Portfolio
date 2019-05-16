import React from 'react';
import ReactDOM from 'react-dom';
import "./app.scss"
import Navbar from "./components/Navbar/Navbar"

function App(){
  
    return (
      
      <div>
      <Navbar/>
      </div>
      
    )
  }


export default App;
ReactDOM.render(<App/>,document.getElementById("root"))






