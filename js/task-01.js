const listEl = document.querySelector('#categories');
console.log(`В списке ${listEl.childElementCount} категории.`);

listEl.children.forEach(li => {
   console.log('Категория: ', li.firstElementChild.textContent);
   console.log('Количество элементов: ', li.lastElementChild.childElementCount);
   console.log('--------------');
});
