import { PerspectiveCamera } from "three";

const camera = new PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight
);
camera.position.z = 500;

export default camera;
