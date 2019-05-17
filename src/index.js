import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Renderer} from "./three"







Renderer.setSize(window.innerWidth, window.innerHeight);






document.getElementById("title__three-animation").appendChild(Renderer.domElement);


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
