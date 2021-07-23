const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', onInputChange);

function onInputChange({ currentTarget, currentTarget: { value, dataset } }) {
    if (value.length < dataset.length && !currentTarget.classList.contains('valid')) {
        currentTarget.classList.add('invalid');
        return;
    }

    if (value.length < dataset.length && currentTarget.classList.contains('valid')) {
        currentTarget.classList.replace('valid', 'invalid');
        return;
    }

    if (value.length >= dataset.length && !currentTarget.classList.contains('invalid')) {
        currentTarget.classList.add('valid');
        return;
    }

    currentTarget.classList.replace('invalid', 'valid');
}
