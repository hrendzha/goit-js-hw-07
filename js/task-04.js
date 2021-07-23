const counterValueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

decrementBtnRef.addEventListener('click', onDecrementClick);
incrementBtnRef.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counterValueRef.textContent -= 1;
}

function onIncrementClick() {
    counterValueRef.textContent = Number(counterValueRef.textContent) + 1;
}
