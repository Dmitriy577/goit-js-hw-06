const allCategories = document.querySelector("#categories");
const howCategories = categories.querySelectorAll(".item");
const numberOfCategories = `Number of categories: ${howCategories.length}`;
console.log(numberOfCategories);
const nodeListItem = categories.querySelectorAll(".item");

nodeListItem.forEach((items) => {
  const categoryItem = items.querySelector("h2");
  const categoryName = `Category: ${categoryItem.textContent}`;
  console.log(categoryName);

  const tlemtnts = items.querySelectorAll("li");
  const categoriesElements = `Elements: ${tlemtnts.length}`;
  console.log(categoriesElements);
  console.log(str);
});