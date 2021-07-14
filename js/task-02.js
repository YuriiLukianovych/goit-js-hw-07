const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function createListItem(list) {
  const markupItem = list.map(el => {
    const itemEl = document.createElement('li');
    itemEl.textContent = el;
    return itemEl;
  });

  return markupItem;
}
const markup = createListItem(ingredients);
const ul = document.querySelector("#ingredients");
ul.append(...markup);

