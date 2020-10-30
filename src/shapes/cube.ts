import { BoxGeometry, Mesh, MeshLambertMaterial } from "three";

const geometry = new BoxGeometry(100, 100, 100);
const material = new MeshLambertMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);

export default cube;
