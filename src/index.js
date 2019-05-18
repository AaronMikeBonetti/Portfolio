import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Renderer} from "./three"
//initial set size, i've set margin in the title.js component to keep it centered

Renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);

//set size on resize

window.addEventListener("resize", ()=>{
    Renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
  })


  
  

document.getElementById("title__three-animation").appendChild(Renderer.domElement);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
