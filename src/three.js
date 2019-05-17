import * as THREE from "three"

 export const Renderer = new THREE.WebGLRenderer({antialias: true})
Renderer.setClearColor("00000")
export const scene = new THREE.Scene()
export const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerHeight / window.innerHeight , 
    0.1, 
    1000
    )
    const geometry = new THREE.BoxGeometry( 10, 10, 10 );
    const geometry1 = new THREE.SphereGeometry( 15, 15, 15 );
    const geometry2 = new THREE.BoxGeometry( 50, 50, 50 );
const material = new THREE. MeshBasicMaterial({ color: 0xfcfcfc, wireframe: true, transparent: true, opacity: 1 } )
const material1 = new THREE. MeshBasicMaterial({ color: 0x5f5f5f, wireframe: true, transparent: true, opacity: 1 } )

const material2 = new THREE. MeshBasicMaterial({ color: 0x5e5, transparent: true, opacity: 1,  wireframe: true} )

const cube = new THREE.Mesh( geometry, material );
const cube1 = new THREE.Mesh( geometry1, material1 );
const cube2 = new THREE.Mesh( geometry2, material2 );


const light = new THREE.PointLight( 0xfffff, 1, 100 );
light.position.set( 3, 50, 0 );
scene.add(cube, cube1, cube2);

camera.position.z = 20

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



