import { Group } from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

async function loadMtl(path: string) {
  return new Promise<MTLLoader.MaterialCreator>((resolve, reject) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      path,
      (materialCreator) => {
        materialCreator.preload();
        resolve(materialCreator);
      },
      undefined,
      (error) => reject(error)
    );
  });
}

async function loadObj(path: string, materials: MTLLoader.MaterialCreator) {
  return new Promise<Group>((resolve, reject) => {
    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(
      path,
      (object) => resolve(object),
      undefined,
      (error) => reject(error)
    );
  });
}

export { loadMtl, loadObj };
