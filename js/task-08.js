const inputNumber = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-action="render"]');
const removeBtn = document.querySelector('[data-action="destroy"]');
const box = document.querySelector('#boxes');

removeBtn.addEventListener('click', () => {
   inputNumber.value = '';
   box.innerHTML = '';
});

createBtn.addEventListener('click', () => {
   if (inputNumber.value.length === 0 || inputNumber.value === '0') {
      alert('Ведите значение в поле ввода');
   } else if (
      Number(inputNumber.value) < Number(inputNumber.getAttribute('min'))
   ) {
      inputNumber.value = '';
      alert('Введите число больше нуля!');
   } else if (
      Number(inputNumber.value) > Number(inputNumber.getAttribute('max'))
   ) {
      inputNumber.value = '';
      alert('Введите число не больше 100');
   }
   const userValue = Number(inputNumber.value);
   const markup = createBoxes(userValue);
   box.append(...markup);
});

function createBoxes(amount) {
   const arr = [];
   let divWidth = 30;
   let divHeight = 30;
   for (let i = 0; i < amount; i++) {
      console.log('hello');
      const markupItem = document.createElement('div');
      const bgColor =
         '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
      markupItem.style.backgroundColor = bgColor;
      markupItem.style.width = `${divWidth}px`;
      markupItem.style.height = `${divHeight}px`;
      arr.push(markupItem);
      divHeight += 10;
      divWidth += 10;
   }
   return arr;
}
