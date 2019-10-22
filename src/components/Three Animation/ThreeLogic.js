import * as THREE from "three"
import {TimelineMax} from "gsap"




function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export const Renderer = new THREE.WebGLRenderer({antialias: true, alpha:true})


export const scene = new THREE.Scene()

export const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerHeight / window.innerHeight , 
    0.1, 
    1000
    )


//Set light (color,intensity,distance)
const light = new THREE.PointLight( "white", 100, 500 );
//light position (x,y,z)
light.position.set( 100, 0, 0 );

//:::::::::::::Create The Objects:::::::

//Shape (x,y,z)
function geometry(num){
  return new THREE.SphereGeometry(num,1,1);}
//Material its covered in
const material = new THREE.MeshBasicMaterial({ color: "#D4D4D4", transparent: true, opacity: 1, wireframe: true } )
//Combined together to make the object
function createMesh(geoNum){
  return new THREE.Mesh(geometry(geoNum),material)
}
const meshParametersArray = [3]

let objectsArray = meshParametersArray.map(object=>{
  return createMesh(object)
})

//Set where the start position is set(x,y,z)
objectsArray.forEach(object=>{
  object.position.set(getRandomArbitrary(-100,100),getRandomArbitrary(-100,100),0)
})
//Add to Scene
objectsArray.forEach(triangle=>{
scene.add(triangle)
})
//Add Light source
scene.add(light);
//Set camera position
camera.position.z = 100
//Set up animation function
// const positionArray = [0.53,-0.010,-0.30,-0.02,-0.19,0.3,-0.08,0.09,-0.13,0.4,0.3,-0.5,0.6,-0.09,0.3,-0.5,-0.6,0.4,-0.4,0.7]
function animate(){

  //This re-renders the image 60fps
  requestAnimationFrame(animate)
  function objectPositions(){
  return objectsArray.forEach((object, index)=>{
    object.position.x = -62
    object.position.y = 68
    object.rotation.x += 0.003
    object.rotation.y += 0.003
  })
  }
  objectPositions()
  objectsArray.forEach(object=>{
  if(object.position.x > 90){
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

    let tl = new TimelineMax() 
    
    tl.to(object.position, 0, {x:-100 ,
      y:getRandomArbitrary(-50,50)})
  }
  if(object.position.x < -100){
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

    let tl = new TimelineMax() 
    
    tl.to(object.position, 0, {x:90 ,
      y:getRandomArbitrary(-50,50)})
  }
}) 
  Renderer.render(scene,camera)
}
animate()

