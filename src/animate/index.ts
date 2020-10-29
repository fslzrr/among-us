import { camera, renderer, scene } from "../core";
import { cube } from "../shapes";

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

export default animate;
