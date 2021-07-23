const listCategoriesRef = document.querySelector('#categories');
const categoryRefs = listCategoriesRef.querySelectorAll('li.item');

console.log(`В списке ${categoryRefs.length} категории.`);

categoryRefs.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const quantityOfCategoryElements = category.querySelectorAll('li').length;
    console.log(`Категория: ${categoryTitle}`);
    console.log(`Количество элементов: ${quantityOfCategoryElements}`);
});
