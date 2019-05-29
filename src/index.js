import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Renderer} from "./components/Three Animation/ThreeLogic"



function renderSize(){   Renderer.setSize(window.innerWidth, window.innerHeight - 10 );}

renderSize()


window.addEventListener("resize", ()=>{
    renderSize()
    })




  

document.getElementById("three-animation__canvas").appendChild(Renderer.domElement);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
