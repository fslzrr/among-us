import renderer from "./renderer";
import scene from "./scene";
import { ambientLight, commonLight } from "../lights";
import { characters, space, party_hat, sun } from "../shapes";

import { PointLight } from "three";

async function setup() {
  document.body.appendChild(renderer.domElement);
  scene.add(space);
  scene.add(ambientLight);
  scene.add(commonLight);

  const { black, blue, brown, orange, purple, red, teal } = await characters;

  black.position.x = 50;
  black.position.y = 140;
  black.position.z = -80;
  scene.add(black);

  blue.position.x = 60;
  blue.position.y = 20;
  blue.position.z = 150;
  scene.add(blue);

  brown.position.x = -65;
  brown.position.y = -160;
  brown.position.z = -100;
  scene.add(brown);

  orange.position.x = -50;
  orange.position.y = -40;
  orange.position.z = 180;
  scene.add(orange);

  purple.position.x = -200;
  purple.position.y = 120;
  purple.position.z = 120;
  scene.add(purple);

  red.position.x = -30;
  red.position.y = -20;
  red.position.z = -10;
  scene.add(red);

  teal.position.x = 170;
  teal.position.y = 80;
  teal.position.z = -90;
  scene.add(teal);

  party_hat.position.x = -90;
  party_hat.position.y = -20;
  party_hat.position.z = -10;
  scene.add(party_hat);

  sun.position.x = 300;
  sun.position.y = 80;
  sun.position.z = 90;
  scene.add(sun);

  // Sunlight
  const light = new PointLight(0xff4500, 2.5, 2000);
  light.color.setHSL(0.08, 0.8, 0.5);
  light.position.set(300, 80, 90);
  scene.add(light);
}

export default setup;
