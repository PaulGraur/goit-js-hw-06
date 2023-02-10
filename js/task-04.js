// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementValue = document.querySelector(`#counter`).firstElementChild;
const incrementValue = document.querySelector(`#counter`).lastElementChild;

let valueEl = Number(document.querySelector('#value').textContent);
let counterEl = document.querySelector('#value');

incrementValue.addEventListener('click', () => {
    valueEl += 1;
    counterEl.innerText = valueEl;
});

decrementValue.addEventListener('click', () => {
    valueEl -= 1;
    counterEl.innerText = valueEl;
});