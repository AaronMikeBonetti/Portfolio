import * as THREE from "three"

 export const Renderer = new THREE.WebGLRenderer({antialias: true})
Renderer.setClearColor("0000")
export const scene = new THREE.Scene()
export const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerHeight / window.innerHeight , 
    0.1, 
    1000
    )
    var geometry = new THREE.BoxGeometry( 50, 50, 50 );
    var geometry1 = new THREE.BoxGeometry( 100, 100, 100 );
    var geometry2 = new THREE.BoxGeometry( 35, 45, 15 );
var material = new THREE. MeshBasicMaterial({ color: 0x0FFFF9, wireframe: true, transparent: true, opacity: 1 } )
var cube = new THREE.Mesh( geometry, material );
var cube1 = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh( geometry, material );


var light = new THREE.PointLight( 0xfffff, 1, 100 );
light.position.set( 3, 50, 0 );
scene.add(cube, cube1, cube2);













camera.position.z = 50

function animate(){
  requestAnimationFrame(animate)
  cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;
  cube1.rotation.x += 0.002;
  cube1.rotation.y += 0.002;
  cube2.rotation.x += 0.003;
  cube2.rotation.y += 0.003;
  Renderer.render(scene,camera)
}



animate()



