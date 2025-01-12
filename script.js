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
      correctAnswer: 2 
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



//Game 5


const choices = ['камень', 'ножницы', 'бумага'];

function playGame() {
  // Генерация случайного выбора компьютера
  let computerChoice = ["камень", "ножницы", "бумага"][Math.floor(Math.random() * 3)];

  alert('Выберите "камень", "ножницы" или "бумага":');
  let userChoice = prompt().toLowerCase();

  // Определение победителя
  let result = (userChoice === computerChoice) ? 'Ничья' :
    ((userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')) ? userChoice + ' победил!' : computerChoice + ' победил...';

  alert(`${userChoice} против ${computerChoice}`);
  alert(result);
}


//Task1

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

people.sort((a, b) => {
 if (a.age < b.age) {
   return -1;
 } else if (a.age > b.age) {
   return 1;
 }
 return 0;
});

console.log(people);


//task2

function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(array, ruleFunction) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive)); // [3, 1, 9]

const peopleGender = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleGender, isMale));


//task3

let intervalId;

function printDate() {
  console.log(new Date());
}

function startTimer() {
  intervalId = setInterval(printDate, 3000); // Запускаем таймер на 3 секунды
  setTimeout(() => {
    clearInterval(intervalId); // Очищаем интервал после 30 секунд
    console.log('30 секунд прошло');
  }, 30000);
}

startTimer();


//task4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
 console.log('Привет, Глеб!');
})


//task5

function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) {  cb(); }
  }, 1000)
}

function sayHi (name) {
  console.log('Привет, ${name}!');
}

delayForSecond(() => sayHi('Глеб'));

