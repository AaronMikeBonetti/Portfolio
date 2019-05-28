import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Renderer} from "./components/Three Animation/ThreeLogic"
//initial set size, i've set margin in the title.js component to keep it centered
function renderThreejs(){
  if(window.innerWidth<800){
    return Renderer.setSize( window.innerWidth - 80, window.innerHeight -4 );
  }
  else{
    return Renderer.setSize(window.innerWidth - 15, window.innerHeight -4 );}
}
renderThreejs()

//set size on resize

window.addEventListener("resize", ()=>{
  renderThreejs()
  })


  
  

document.getElementById("three-animation__canvas").appendChild(Renderer.domElement);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
