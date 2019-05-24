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



//Shape (x,y,z)
function geometry(num,shape){
  return new THREE.SphereGeometry(num,1,1);}
//Material its covered in
const material = new THREE.MeshBasicMaterial({ color: "#9F9FAD", transparent: true, opacity: 1, wireframe: true } )
//Combined together to make the object
function createMesh(geoNum){
  return new THREE.Mesh(geometry(geoNum),material)
}
const objectsArray = []

const triangle = createMesh(10)
const triangle1 = createMesh(14)
const triangle2 = createMesh(13)
const triangle3 = createMesh(8)
const triangle4 = createMesh(34)
const triangle5 = createMesh(43)
const triangle6 = createMesh(15)
const triangle7 = createMesh(12)
const triangle8 = createMesh(16)
const triangle9 = createMesh(2)
const triangle10 = createMesh(2)
const triangle11 = createMesh(3)
const triangle12 = createMesh(2)
const triangle13 = createMesh(3)
const triangle14 = createMesh(3)
const triangle15 = createMesh(2)
const triangle16 = createMesh(5)
const triangle17 = createMesh(3)
const triangle18 = createMesh(2)
const triangle19 = createMesh(4)


objectsArray.push(triangle,triangle1,triangle2,triangle3,triangle4,triangle5,triangle6,triangle7,triangle8,triangle9,triangle10,triangle11,triangle12,triangle13,triangle14,triangle15,triangle16,triangle17,triangle18,triangle19)

//Set where the start position is set(x,y,z)
objectsArray.forEach(object=>{
  object.position.set(getRandomArbitrary(-100,100),getRandomArbitrary(-100,100),0)
})
//Add to Scene
objectsArray.forEach(triangle=>{
scene.add(triangle)
})
//add Light source
scene.add(light);
//set camera position
camera.position.z = 100
//Set up animation function
const positionArray = [0.23,-0.010,-0.30,-0.02,-0.19,0.3,-0.08,0.09,-0.13,0.4,0.3,-0.5,0.6,-0.09,0.3,-0.5,-0.6,0.4,-0.4,0.7]
function animate(){

  //This re-renders the image 60fps
  requestAnimationFrame(animate)
  function objectPositions(){
  return objectsArray.forEach((object, index)=>{
    object.position.x += positionArray[index]
    object.position.y += positionArray[index]
    object.rotation.x += 0.01
    object.rotation.y += 0.01
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

