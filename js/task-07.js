const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputRange.addEventListener('input', e => {
    text.style.fontSize =`${Number(e.currentTarget.value)}px`;
});
