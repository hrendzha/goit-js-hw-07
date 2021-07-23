const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const outputDefaultText = nameOutputRef.textContent;

nameInputRef.addEventListener('input', onInputChange);

function onInputChange({ currentTarget: { value } }) {
    nameOutputRef.textContent = value.length === 0 ? `${outputDefaultText}` : value;
}
