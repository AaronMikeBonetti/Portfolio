import React from 'react';
import ReactDOM from 'react-dom';
import "./app.scss"
import Navbar from "./components/Navbar/Navbar"
import Three from "./components/Three Animation/Three"
import Title from "./components/Title Section/Title"

function App(){
  
    return (
      
      <div>
      <Navbar/>
      <Three/>
      <Title/>
      </div>
      
    )
  }


export default App;
ReactDOM.render(<App/>,document.getElementById("root"))






