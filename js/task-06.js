// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//
// <input
//     type="text"
//     id="validation-input"
//     data-length="6"
//     placeholder="Please enter 6 symbols"
// />
//
//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//     Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//     Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
//
//     #validation-input {
//     border: 3px solid #bdbdbd;
// }
//
// #validation-input.valid {
//     border-color: #4caf50;
// }
//
// #validation-input.invalid {
//     border-color: #f44336;
// }

const inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', onBlurBorderColor);

// const inputLen = inputEl.dataset.value.length;
//
// const onBlur = ({ target: { value }}) => {
//     if (!value.length) return inputEl.classList = '';
//     inputEl.classList = value.length === inputLen ? 'valid' : 'invalid';
// };

function onBlurBorderColor(event) {

    let inputValue = event.currentTarget.value.trim();

    if (inputValue.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputEl.value.length === 0) {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    }
    if (
        inputEl.value.length !== Number(inputEl.dataset.length) &&
        inputEl.value.length !== 0
    ) {
        inputEl.classList.add('invalid');
    }
}


