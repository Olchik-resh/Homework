//Game1

function guessTheNumber(question) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    alert("Я загадал число от 1 до 100. Угадайте его!");
  
    do {
      let guess = prompt("Введите ваше предположение");
      guess = Number(guess);
  
      if (guess == randomNumber) {
        alert(`Вы угадали! Число было ${randomNumber}`);
        break;
      } else if (guess < randomNumber) {
        alert(`${guess} меньше загаданного числа`);
      } else {
        alert(`${guess} больше загаданного числа`);
      }
    } while (true);
  }


//Game2

function arithmetic() {
  const operations = ['+', '-', '*', '/'];
  let operation = operations[Math.floor(Math.random() * operations.length)];

  let a = Math.floor(Math.random() * 100) + 1;
  let b = Math.floor(Math.random() * 100) + 1;

  if (operation === '+') {
      task = `Сложите ${a} и ${b}`;
  } else if (operation === '-') {
      task = `Вычтите ${b} из ${a}`;
  } else if (operation === '*') {
      task = `${a} умножить на ${b}`;
  } else {
      task = `${a} разделить на ${b}`;
  }

  userAnswer = Number(prompt(task));

  correctAnswer = calculateCorrectAnswer(operation, a, b);
  if (userAnswer === correctAnswer) {
      alert(`Верный ответ!`);
  } else {
      alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
  }

function calculateCorrectAnswer(operation, a, b) {
  switch (operation) {
      case '+':
          return a + b;
      case '-':
          return a - b;
      case '*':
          return a * b;
      case '/':
          return Math.floor(a / b); 
  }
}
}

//Game3

function reverseAndPrintText() {
  // Запрос текста от пользователя
  const userInput = prompt("Введите текст:");

  // Переворачивание текста
  const reversedText = userInput.split("").reverse().join("");

  // Вывод перевернутого текста
  alert("Перевернутый текст: " + reversedText);
}


//Game4
const quiz = [
  {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2 // номер правильного ответа
  },
  {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
  },
  {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
  }
];

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer === correctAnswer;
}

let correctAnswers = 0;

function runQuiz() {
  for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i];
    alert(question.question);

    const userAnswer = parseInt(prompt(question.options.join(", ")));

    if (userAnswer === quiz[i].correctAnswer) {
      alert("Правильно!");
    } else {
      alert("Неправильно.");
    }
  }

  alert(`Вы ответили правильно на ${quiz.reduce((acc, curr) => acc + (curr.correctAnswer == userAnswer ? 1 : 0), 0)} вопросов.`);
}




//Task1

let myString = 'js';
console.log(myString.toUpperCase());


//Task2

function filterArray(array, string) {
  return array.filter(item => item.toLowerCase().startsWith(string.toLowerCase()));
}

// Пример использования функции
let fruits = ['яблоко', 'банан', 'вишня', 'груша'];
let searchString = 'яб';

console.log(filterArray(fruits, searchString));


//Task3

let roundedDown = Math.floor(32.58884);
console.log (roundedDown);

let roundedUp = Math.ceil(32.58884);
console.log(roundedUp);

let roundedNearest = Math.round(32.58884);
console.log(roundedNearest);


//Task4

let numbers = [52, 53, 49, 77, 21, 32];

let minValue = Math.min(...numbers);

let maxValue = Math.max(...numbers);

console.log("Минимальное значение: " + minValue);
console.log("Максимальное значение: " + maxValue);


//Task5

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}

getRandomNumber();


//Task6

function getRandomArray(n) {
  const randomArray = [];

  for (let i = 0; i < n / 2; i++) {
    randomArray.push(Math.floor(Math.random() * n));
  }

  return randomArray;
}

console.log(getRandomArray(5));


//Task7

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumberInRange(50, 100));


//Task8

console.log(new Date());


//task9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


//Task10

function formatDate(date) {
  let day = date.getDate();
  let monthIndex = date.getMonth();
  const months = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
  ];
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return `Дата: ${day} ${months[monthIndex]} ${year} — это ${["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"][date.getDay()]}.\n` +
    `Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));