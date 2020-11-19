import {
  SphereGeometry,
  Mesh,
  MeshBasicMaterial,
  TextureLoader,
  PointLight,
} from "three";

const geometry = new SphereGeometry(55, 32, 32);
const texture = new TextureLoader().load(
  "https://vignette.wikia.nocookie.net/planet-texture-maps/images/9/94/Sun_texture.jpg/revision/latest/scale-to-width-down/340?cb=20200718000248"
);
const material = new MeshBasicMaterial({ map: texture });
const sun = new Mesh(geometry, material);

const light = new PointLight(0xff4500, 2.5, 2000);
light.color.setHSL(0.08, 0.8, 0.5);

const sunlight = { sun, light };

export default sunlight;
