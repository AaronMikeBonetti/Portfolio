import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
// import Three from './components/Three Animation/Three'
// import Title from './components/Title Section/Title'
// import About from './components/About Section/About'
import TitleSecondary from './components/TitleSecondary Section/TitleSecondary'
import ProjectsContainer from './components/Projects Section/ProjectContainer';
import Footer from './components/Footer/Footer'


function App(){
  
    return (
      
      <div>
      {/* <Three/> */}
      {/* <Title/> */}
      <TitleSecondary/>
      <ProjectsContainer/>
      {/* <About/> */}
      <Footer/>
      </div>
      
    )
  }


export default App;
ReactDOM.render(<App/>,document.getElementById('root'))






