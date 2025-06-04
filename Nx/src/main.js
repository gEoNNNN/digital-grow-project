import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// Scene , camera and renderer

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight); 
camera.position.setZ(30);

const controls = new OrbitControls(camera, renderer.domElement);

const cubesInRow = 20;
const rectWidth = 1.3 ;
const rectHeight = 4;
const rectDepth = 3;
const arcRadius = 14;
const arcAngle = Math.PI / 0.1;

const rectGeometry = new THREE.BoxGeometry(rectWidth, rectHeight, rectDepth);
const rectMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

for (let i = 0; i < cubesInRow; i++) {
  const t = i / (cubesInRow - 1);
  const angle = -arcAngle / 2 + t * arcAngle;

  const x = Math.cos(angle) * arcRadius;
  const y = 0;
  const z = Math.sin(angle) * arcRadius;

  const rect = new THREE.Mesh(rectGeometry, rectMaterial);
  rect.position.set(x, y, z);

  rect.lookAt(20, 0, 0);

  scene.add(rect);
}

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper);
scene.add(gridHelper);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200));
  star.position.set(x, y, z);
  scene.add(star);
}
Array(200).fill().forEach(addStar);
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();