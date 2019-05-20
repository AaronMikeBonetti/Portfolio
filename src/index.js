import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Renderer} from "./components/Three Animation/ThreeLogic"
//initial set size, i've set margin in the title.js component to keep it centered

Renderer.setSize(window.innerWidth - 15, window.innerHeight);

//set size on resize

window.addEventListener("resize", ()=>{
    Renderer.setSize(window.innerWidth - 15, window.innerHeight - 10);
  })


  
  

document.getElementById("three-animation__canvas").appendChild(Renderer.domElement);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
