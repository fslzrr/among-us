import { ConeGeometry, Mesh, MeshBasicMaterial, TextureLoader } from "three";

const geometry = new ConeGeometry(5, 20, 32);
const texture = new TextureLoader().load(
  "https://images.template.net/wp-content/uploads/2017/01/30052903/Abstract-Colorful-Pattern.jpg"
);
const material = new MeshBasicMaterial({ map: texture });
const party_hat = new Mesh(geometry, material);

export default party_hat;
