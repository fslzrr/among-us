import renderer from "./renderer";
import scene from "./scene";
import { ambientLight, commonLight } from "../lights";
import { cube, space } from "../shapes";

function setup() {
  document.body.appendChild(renderer.domElement);
  scene.add(cube);
  scene.add(space);
  scene.add(ambientLight);
  scene.add(commonLight);
}

export default setup;
