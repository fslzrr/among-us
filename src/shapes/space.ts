import { BackSide, BoxGeometry, Mesh, MeshBasicMaterial, Texture } from "three";

function getRandomStarField(
  numberOfStars: number,
  width: number,
  height: number
) {
  const canvas = document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < numberOfStars; i += 1) {
    const radius = Math.random() * 2;
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
  }

  const texture = new Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const starsMap = getRandomStarField(1000, 3000, 3000);
const spaceGeometry = new BoxGeometry(3000, 3000, 3000);
const spaceMaterial = new MeshBasicMaterial({ map: starsMap, side: BackSide });
const space = new Mesh(spaceGeometry, spaceMaterial);

export default space;
