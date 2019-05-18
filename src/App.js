import React from 'react';
import ReactDOM from 'react-dom';
import "./app.scss"
import Navbar from "./components/Navbar/Navbar"
import Title from "./components/Title Section/Title"

function App(){
  
    return (
      
      <div>
      <Navbar/>
      <Title/>
      </div>
      
    )
  }


export default App;
ReactDOM.render(<App/>,document.getElementById("root"))






