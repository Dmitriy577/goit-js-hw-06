const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients");
const ingredientElem = ingredients.map((element) => {
  const listElem = document.createElement("li");
  listElem.textContent = element;
  listElem.classList.add('item');
return listElem
});
ingredientList.append(...ingredientElem);
console.log(ingredientList);