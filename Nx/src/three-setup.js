import * as THREE from 'three';
import circleImg from './circle.png';

export let camera, scene, renderer, torus;

export function initThree() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1;
  camera.rotation.x = Math.PI / 2;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Stars
  const starCount = 10000;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = Math.random() * 600 - 300;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const sprite = new THREE.TextureLoader().load(circleImg);
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1.2,
    map: sprite,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const stars = new THREE.Points(starGeo, starMaterial);
  scene.add(stars);

  // Torus
  const torusGeometry = new THREE.TorusGeometry(30, 2, 16, 100);
  const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  torus = new THREE.Mesh(torusGeometry, torusMaterial);
  torus.position.set(60, 130, 0);
  scene.add(torus);
}