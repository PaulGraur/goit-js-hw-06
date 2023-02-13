// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані
// повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// let inputEl = document.querySelector(`#name-input`);
// let outputEl = document.querySelector(`#name-output`);
//
// // inputEl.addEventListener(`input`, onInputChange);
// function onInputChange(event) {
//     outputEl.textContent = event.currentTarget.value;
//
//     if (event.currentTarget.value === ``) {
//         outputEl.textContent = "Anonymous";
//     }
//
//     // inputEl !== '' ? (outputEl.innerHTML = inputEl) : "Anonymous";
// }

const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');
const placeholder = (event) => {
    outputEl.textContent = event.currentTarget.value || 'Anonymous';
};

inputEl.addEventListener('input', placeholder);