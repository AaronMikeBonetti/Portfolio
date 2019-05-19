import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Renderer} from "./components/Three Animation/ThreeLogic"
//initial set size, i've set margin in the title.js component to keep it centered

Renderer.setSize(window.innerWidth - 20, window.innerHeight - 20);

//set size on resize

window.addEventListener("resize", ()=>{
    Renderer.setSize(window.innerWidth - 20, window.innerHeight - 20);
  })


  
  

document.getElementById("three-animation__canvas").appendChild(Renderer.domElement);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
