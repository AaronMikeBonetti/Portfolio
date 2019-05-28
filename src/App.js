import React from 'react';
import ReactDOM from 'react-dom';
import "./app.scss"
import Navbar from "./components/Navbar/Navbar"
import Three from "./components/Three Animation/Three"
import Title from "./components/Title Section/Title"
import About from "./components/About Section/About"
import ProjectsContainer from './components/Projects Section/ProjectContainer';

function App(){
  
    return (
      
      <div>
      <Navbar/>
      <Three/>
      <Title/>
      <About/>
      <ProjectsContainer/>
      </div>
      
    )
  }


export default App;
ReactDOM.render(<App/>,document.getElementById("root"))






