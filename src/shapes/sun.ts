import { SphereGeometry, Mesh, MeshBasicMaterial, TextureLoader } from "three";

const geometry = new SphereGeometry(55, 32, 32);
const texture = new TextureLoader().load(
  "https://vignette.wikia.nocookie.net/planet-texture-maps/images/9/94/Sun_texture.jpg/revision/latest/scale-to-width-down/340?cb=20200718000248"
);
// const texture = new TextureLoader().load( '../textures/sun.jpg' );
const material = new MeshBasicMaterial({ map: texture });
const sun = new Mesh(geometry, material);

export default sun;
