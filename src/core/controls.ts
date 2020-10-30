import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import camera from "./camera";
import renderer from "./renderer";

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.maxDistance = 1000;
controls.minDistance = 5;

export default controls;
