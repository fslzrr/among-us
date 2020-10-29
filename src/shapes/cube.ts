import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);

export default cube;
