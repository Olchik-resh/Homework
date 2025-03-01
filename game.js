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
  const userInput = prompt("Введите текст:");

  const reversedText = userInput.split("").reverse().join("");

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
  let computerChoice = ["камень", "ножницы", "бумага"][Math.floor(Math.random() * 3)];

  alert('Выберите "камень", "ножницы" или "бумага":');
  let userChoice = prompt().toLowerCase();

  let result = (userChoice === computerChoice) ? 'Ничья' :
    ((userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')) ? userChoice + ' победил!' : computerChoice + ' победил...';

  alert(`${userChoice} против ${computerChoice}`);
  alert(result);
}


//Game 6

const cardContentButtonEl = document.getElementById('randoms');
const miniGame = document.querySelector ('.mini-game')

cardContentButtonEl.addEventListener('click', () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  miniGame.style.backgroundColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  alert('Нажмите OK, чтобы поменять цвет');
});