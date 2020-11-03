import { loadMtl, loadObj, radians } from "../utils";

type CharacterColor =
  | "black"
  | "blue"
  | "brown"
  | "orange"
  | "purple"
  | "red"
  | "teal";

function getPaths(characterColor: CharacterColor) {
  const mtlPath = `character_${characterColor}.mtl`;
  const objPath = `character_${characterColor}.obj`;
  return [mtlPath, objPath];
}

async function loadCharacter(characterColor: CharacterColor) {
  const [mtl, obj] = getPaths(characterColor);
  const materials = await loadMtl(mtl);
  const object = await loadObj(obj, materials);
  object.position.x = 0;
  object.position.y = 0;
  object.position.z = 0;
  object.rotateX(radians(-90));
  return object;
}

async function getCharacters() {
  const [black, blue, brown, orange, purple, red, teal] = await Promise.all([
    loadCharacter("black"),
    loadCharacter("blue"),
    loadCharacter("brown"),
    loadCharacter("orange"),
    loadCharacter("purple"),
    loadCharacter("red"),
    loadCharacter("teal"),
  ]);
  return { black, blue, brown, orange, purple, red, teal };
}

const characters = getCharacters();

export default characters;
