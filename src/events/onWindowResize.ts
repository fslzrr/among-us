import { camera, renderer } from "../core";

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

function initWindowResize() {
  window.addEventListener("resize", onWindowResize);
}

export default initWindowResize;
