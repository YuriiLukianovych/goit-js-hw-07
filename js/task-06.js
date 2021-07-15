const textInput = document.querySelector('#validation-input');
const AMOUNT = Number(textInput.dataset.length);

textInput.addEventListener('blur', e => {
    if (e.currentTarget.value.length === AMOUNT) {
        e.currentTarget.classList.remove('invalid')
        e.currentTarget.classList.add('valid');
    } else {
        e.currentTarget.classList.remove('valid');
        e.currentTarget.classList.add('invalid');
    }
});