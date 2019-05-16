import * as THREE from "three"

 export const Renderer = new THREE.WebGLRenderer({antialias: true})

export const scene = new THREE.Scene()
export const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerHeight / window.innerHeight , 
    0.1, 
    1000
    )
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5

function animate(){
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  Renderer.render(scene,camera)
}



animate()



