// TODO: write your code here
export default function destructor(character) {
  const { special } = character;
  const arrOfObjects = [];
  for (const obj of special) {
    if (obj.description) {
      const {
        id, name, icon, description,
      } = obj;
      const objDesc = {
        id, name, icon, description,
      };
      arrOfObjects.push(objDesc);
    } else {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = obj;
      const objNotDesc = {
        id, name, icon, description,
      };
      arrOfObjects.push(objNotDesc);
    }
  }
  return arrOfObjects;
}
