import { PointLight } from "three";

const commonLight = new PointLight(0xffffff, 1, 500);
commonLight.position.set(-100, 100, 100);

export default commonLight;
