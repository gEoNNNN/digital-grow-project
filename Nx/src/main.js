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
  color: 0xffffff, // Make stars white
  size: 1.2,       // Slightly bigger for more glow
  map: sprite,
  transparent: true,
  blending: THREE.AdditiveBlending, // Additive blending for glow effect
  depthWrite: false,
});
const stars = new THREE.Points(starGeo, starMaterial);
scene.add(stars);

// Smooth camera movement on scroll
let targetZ = camera.position.z;
window.addEventListener('scroll', () => {
  targetZ = 1 - window.scrollY / 10;
});

animate();

function animate() {
  requestAnimationFrame(animate);
  // Smoothly interpolate camera position
  camera.position.z += (targetZ - camera.position.z) * 0.08;
  renderer.render(scene, camera);
}