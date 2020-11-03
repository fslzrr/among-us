import { camera, controls, renderer, scene } from "../core";
import { characters } from "../shapes";

async function animate() {
  requestAnimationFrame(animate);

  const { black, blue, brown, orange, purple, red, teal } = await characters;
  black.rotation.x -= 0.005;
  black.rotation.z += 0.01;

  blue.rotation.y += 0.002;
  blue.rotation.z -= 0.004;

  brown.rotation.x -= 0.003;
  brown.rotation.y -= 0.002;

  orange.rotation.x += 0.002;
  orange.rotation.z += 0.005;

  purple.rotation.y -= 0.005;
  purple.rotation.y += 0.001;

  red.rotation.x += 0.002;
  red.rotation.y += 0.005;

  teal.rotation.x += 0.001;
  teal.rotation.y -= 0.002;

  controls.update();
  renderer.render(scene, camera);
}

export default animate;
