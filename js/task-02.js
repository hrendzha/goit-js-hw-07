const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientRefs = ingredients.map(ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;

    return ingredientRef;
});

const listIngredientsRef = document.querySelector('#ingredients');

listIngredientsRef.append(...ingredientRefs);
