import { camera, renderer, scene, torus } from './three-setup.js';

let targetZ = 1;

export function setupThreeAnimation() {
  window.addEventListener('scroll', () => {
    targetZ = 1 - window.scrollY / 10;
  });

  function animate() {
    requestAnimationFrame(animate);
    camera.position.z += (targetZ - camera.position.z) * 0.08;
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}