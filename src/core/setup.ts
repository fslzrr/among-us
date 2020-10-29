import renderer from "./renderer";
import scene from "./scene";
import { cube } from "../shapes";

function setup() {
  document.body.appendChild(renderer.domElement);
  scene.add(cube);
}

export default setup;
