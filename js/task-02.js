// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const listEl = document.querySelector('#ingredients');

  const saveEl = ingredients.reduce((acc, index) => acc + `<li class="item">${index}</li>`, '');

  listEl.innerHTML = saveEl;

  console.log(saveEl);