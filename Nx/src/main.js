import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import circleImg from './circle.png';

// Scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 1;
camera.rotation.x = Math.PI / 2;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create star positions
const starCount = 10000;
const positions = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
  positions[i] = Math.random() * 600 - 300;
}

const starGeo = new THREE.BufferGeometry();
starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Use imported image for the sprite
const sprite = new THREE.TextureLoader().load(circleImg);
const starMaterial = new THREE.PointsMaterial({
  color: 0xaaaaaa,
  size: 0.7,
  map: sprite,
  transparent: true,
});
const stars = new THREE.Points(starGeo, starMaterial);
scene.add(stars);

// Add camera movement on scroll
window.addEventListener('scroll', () => {
  camera.position.z = 1 + window.scrollY / 10;
});

animate();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}