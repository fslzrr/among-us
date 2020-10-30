import { PerspectiveCamera } from "three";

const camera = new PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  4000
);
camera.position.z = 500;

export default camera;
