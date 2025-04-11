// TODO:======= Завдання 1 =======

// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.body;
console.log(bodyEl);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector("#title");
console.log(titleEl);

// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector(".list");
console.log(listEl);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataEl = document.querySelectorAll("[data-topic]");
console.log(dataEl);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstElement = document.querySelector("[data-topic]");
console.log(firstElement);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastElement = dataEl[dataEl.length - 1];
console.log(lastElement);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1El = document.querySelector("h1").nextElementSibling;
console.log(h1El);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3El = document.querySelectorAll("h3");
console.log(h3El);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3El.forEach(element => {
    element.classList.add("active");
    element.style.color = "red";
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
firstElement.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const parent = document.querySelector(".list");
const child = parent.querySelector("p");
child.textContent = "Я змінив тут текст!";
console.log(child);


// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const element = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(element);


// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
element.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleElement = document.querySelector(".completed");
console.log(titleElement);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const listElement = titleElement.closest("li");
listElement.remove();



// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newEl = document.createElement('p');
newEl.textContent = "Об'єктна модель документа (Document Object Model)"
h1El.prepend(newEl);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const liElement = document.createElement('li');
const title = document.createElement('h3');
const text = document.createElement('p');

title.textContent = "Властивість innerHTML";
text.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"

liElement.appendChild(title);
liElement.appendChild(text);
listEl.append(liElement);


// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const markup = `
<li>
            <h3>Властивість innerHTML</h3>
            <p>
              Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
              використовувати рядки з тегами і дозволити браузеру зробити всю
              важку роботу
            </p>
          </li>
`;
liElement.insertAdjacentHTML("beforeend", markup);

// 20 - очисти список
liElement.remove();


// TODO:======= Завдання 2 =======

// Створіть контейнер div (з класом numberContainer )в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const container = document.createElement('div');
container.classList.add('numberContainer');
document.body.append(container);

for (let i = 0; i < 100; i++){
    const divEl = document.createElement('div');
    divEl.classList.add('number');
    const num = randomNumber();
    divEl.textContent = num;
    if (num % 2 === 0) {
        divEl.classList.add('even');
    } else {
        divEl.classList.add('odd');
    }
    container.append(divEl);

}

console.log("Створено 100 блоків у контейнері 'numberContainer'");

// TODO:======= Завдання 3 =======

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const input = document.querySelector('input[name="userName"]');
input.addEventListener('input', () => {
    if (input.value.length > 6) {
        input.classList.add('success')
        input.classList.remove('error');
    } else {
        input.classList.add(`error`)
        input.classList.remove('success');
    }
});



// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
if (input) {
    input.addEventListener('focus', () => {
    if (input.value.length === 0) {
        input.style.outline = '3px solid red';
    } else {
        input.style.outline = '3px solid green';
    }
});
};
    





// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
if (input) {
    input.addEventListener('blur', () => {
    if (input.value.length === 0) {
        input.style.outline = '3px solid red';
    } else {
        input.style.outline = '3px solid lime';
    }
});
};



// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

const formEl = document.querySelector(".js-contact-form");
formEl.addEventListener("submit", (event) => {
   event.preventDefault(); 
});

const inputEl = document.querySelector(".js-username-input");
const checkboxEl = document.querySelector(".js-policy-checkbox");
if (inputEl.value.trim() !== "") {
    console.log("Інпут не порожній!");
}
  if (checkboxEl.checked) {
    console.log("Чекбокс активний (true)!");
}










