import { DirectionalLight } from "three";

const dirLight = new DirectionalLight(0xffffff, 0.05);
dirLight.position.set(0, -1, 0).normalize();
dirLight.color.setHSL(0.1, 0.7, 0.5);

export default dirLight;
