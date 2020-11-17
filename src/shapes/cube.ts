import { BoxGeometry, Mesh, MeshLambertMaterial } from "three";

const geometry = new BoxGeometry();
const material = new MeshLambertMaterial({ color: 0xffffff });
// const material = new MeshLambertMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);

export default cube;
