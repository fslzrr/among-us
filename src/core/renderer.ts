import { WebGLRenderer } from "three";

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

export default renderer;
