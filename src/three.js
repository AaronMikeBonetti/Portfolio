import * as THREE from "three"
import {TimelineMax, Expo} from "gsap"

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export const Renderer = new THREE.WebGLRenderer({antialias: true})
Renderer.setClearColor("black")

export const scene = new THREE.Scene()

export const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerHeight / window.innerHeight , 
    0.1, 
    1000
    )
  
const raycaster = new THREE.Raycaster()

const mouse = new THREE.Vector2()
//Shape (x,y,z)
function geometry(num){
  return new THREE.SphereGeometry(num,1,1);}


const material = new THREE. MeshLambertMaterial({ color: 0xe55cc, transparent: true, opacity: 1, wireframe: true } )


const trianglesArray = []

const triangle = new THREE.Mesh( geometry(10), material );
const triangle1 = new THREE.Mesh( geometry(39), material );
const triangle2 = new THREE.Mesh( geometry(13), material );
const triangle3 = new THREE.Mesh( geometry(20), material );
const triangle4 = new THREE.Mesh( geometry(40), material );
const triangle5 = new THREE.Mesh( geometry(9), material );
const triangle6 = new THREE.Mesh( geometry(4), material );
const triangle7 = new THREE.Mesh( geometry(6), material );
const triangle8 = new THREE.Mesh( geometry(20), material );
const triangle9 = new THREE.Mesh( geometry(34), material );

trianglesArray.push(triangle,triangle1,triangle2,triangle3,triangle4,triangle5,triangle6,triangle7,triangle8,triangle9)

//Set where the start position is
triangle.position.set(-80,0,0)
triangle1.position.set(-80,-100,0)
triangle2.position.set(80,40,0)
triangle3.position.set(-80,80,0)
triangle4.position.set(40,-80,0)
triangle5.position.set(-30,70,0)
triangle6.position.set(-60,-90,0)
triangle7.position.set(100,30,0)
triangle8.position.set(-20,80,0)
triangle9.position.set(0,60,0)
//Set light (color,intensity,distance)
const light = new THREE.PointLight( 0xfcfcfc, 200, 100 );
//light position (x,y,z)
light.position.set( 0, 0, 45 );

trianglesArray.forEach(triangle=>{
scene.add(triangle)
})



scene.add(light);

camera.position.z = 100

function animate(){
  
  
  //This re-renders the image after every
  requestAnimationFrame(animate)
  
    
  triangle.position.x += 0.18;
  triangle.position.y += 0.037;
  triangle1.position.x += 0.27;
  triangle1.position.y += 0.45;
  triangle2.position.x += -0.32;
  triangle2.position.y += -0.31;
  triangle3.position.x += 0.029;
  triangle3.position.y += -0.48;
  triangle4.position.x += 0.23;
  triangle4.position.y += -0.35;
  triangle.rotation.x += 0.02;
  triangle.rotation.y += 0.02;
  triangle1.rotation.x += 0.01;
  triangle1.rotation.y += 0.01;
  triangle2.rotation.x += 0.01;
  triangle2.rotation.y += 0.01;
  triangle3.rotation.x += 0.01;
  triangle3.rotation.y += 0.01;
  triangle4.rotation.x += 0.01;
  triangle4.rotation.y += 0.01;
  triangle5.position.x += 0.18;
  triangle5.position.y += 0.37;
  triangle6.position.x += 0.027;
  triangle6.position.y += 0.45;
  triangle7.position.x += -0.32;
  triangle7.position.y += -0.31;
  triangle8.position.x += 0.29;
  triangle8.position.y += -0.048;
  triangle9.position.x += 0.23;
  triangle9.position.y += -0.35;
  triangle5.rotation.x += 0.02;
  triangle5.rotation.y += 0.02;
  triangle6.rotation.x += 0.01;
  triangle6.rotation.y += 0.01;
  triangle7.rotation.x += 0.01;
  triangle7.rotation.y += 0.01;
  triangle8.rotation.x += 0.01;
  triangle8.rotation.y += 0.01;
  triangle9.rotation.x += 0.01;
  triangle9.rotation.y += 0.01;
  trianglesArray.forEach(triangles=>{
  if(triangles.position.x > 90){
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

    let tl = new TimelineMax() 
    
    tl.to(triangles.position, 0, {x:-100 ,
      y:getRandomArbitrary(-50,50)})
  }
  if(triangles.position.x < -100){
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

    let tl = new TimelineMax() 
    
    tl.to(triangles.position, 0, {x:90 ,
      y:getRandomArbitrary(-50,50)})
  }
})

  

  
  Renderer.render(scene,camera)
}

function onMouseMove(event){
  mouse.x = ( event.clientX / window.innerWidth) * 2 - 1
  mouse.y = ( event.clientY / window.innerHeight) * 2 - 1
  raycaster.setFromCamera(mouse, camera)
  
  let intersects = raycaster.intersectObjects(scene.children, true)
  
  for(let i = 0; i < intersects.length;i++){
  let tl = new TimelineMax() 
  
  tl.to(intersects[i].object.position, 0, {x:100 ,
    y:100 , ease: Expo.easeInOut})
}
}



window.addEventListener("mouseover", onMouseMove)


animate()

