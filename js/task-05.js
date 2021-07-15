const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const cleanBtn = document.createElement('button');
cleanBtn.textContent = 'Очистить';
cleanBtn.disabled = true;
textInput.after(cleanBtn);

textInput.addEventListener('input', (e) => {
    if (e.currentTarget.value.trim().length === 0) {
        output.textContent = 'незнакомец';
        cleanBtn.disabled = true;
    } else {
        output.textContent = e.currentTarget.value;
        cleanBtn.disabled = false;
    }
});

cleanBtn.addEventListener('click', () => {
    textInput.value = '';
    output.textContent = 'незнакомец';
    cleanBtn.disabled = true;
});