const refs = {
   countBox: document.querySelector('#counter'),
   btnDecr: document.querySelector('[data-action="decrement"]'),
   btnIncr: document.querySelector('[data-action="increment"]'),
   numValue: document.querySelector('#value'),
};

const cleanBtn = document.createElement('button');
cleanBtn.style.display = 'block';
cleanBtn.style.marginTop = '15px';
cleanBtn.textContent = 'Сбросить';
refs.countBox.append(cleanBtn);

let counterValue = Number(refs.numValue.textContent);

refs.btnDecr.addEventListener('click', decrement);
refs.btnIncr.addEventListener('click', increment);
cleanBtn.addEventListener('click', cleanValue);

function decrement() {
   if (counterValue >= 1) {
      counterValue -= 1;
      refs.numValue.textContent = counterValue.toString();
      if (counterValue > 0) {
         refs.btnDecr.disabled = false;
      } else {
         refs.btnDecr.disabled = true;
      }
   }
}

function increment() {
   counterValue += 1;
   refs.numValue.textContent = counterValue.toString();
   if (counterValue > 0) {
      refs.btnDecr.disabled = false;
   } else {
      refs.btnDecr.disabled = true;
   }
}

function cleanValue() {
   counterValue = 0;
   refs.numValue.textContent = counterValue.toString();
   refs.btnDecr.disabled = true;
}
