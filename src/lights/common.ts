import { PointLight } from "three";

const commonLight = new PointLight(0xffffff, 1, 2000);
commonLight.position.set(-400, 400, 400);

export default commonLight;
