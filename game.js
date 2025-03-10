//Game1

function guessTheNumber(question) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  alert("Я загадал число от 1 до 100. Угадайте его!");

  document.addEventListener('keydown', handleKeyDown);

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      cancelGame();
    }
  }

  function cancelGame() {
    alert('Игра отменена');
    document.removeEventListener('keydown', handleKeyDown); 
    document.body.removeChild(input); 
  }

  const input = document.createElement('input');
  input.classList.add('guess-input');
  document.body.appendChild(input);
  input.style.position = 'fixed'; 
  input.style.top = '50%';
  input.style.left = '50%';
  input.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(input);
  input.focus();

  input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      let guess = Number(input.value);
      if (guess == randomNumber) {
        alert(`Вы угадали! Число было ${randomNumber}`);
        document.body.removeChild(input);
        document.removeEventListener('keydown', handleKeyDown);
      } else if (guess < randomNumber) {
        alert(`${guess} меньше загаданного числа`);
      } else {
        alert(`${guess} больше загаданного числа`);
      }
      input.value = '';
    }
  });  
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
    if (b > a) {
      let temp = a;
      a = b;
      b = temp;
    }
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

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      cancelGame();
    }
  }

  function cancelGame() {
    alert('Операция отменена');
    document.removeEventListener('keydown', handleKeyDown); 
  }

}

//Game3

function reverseAndPrintText() {
  document.addEventListener('keydown', handleKeyDown);

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      cancelGame();
    }
  }

  function cancelGame() {
    alert('Операция отменена');
    document.removeEventListener('keydown', handleKeyDown); 
  }

  const userInput = prompt("Введите текст:");

  if (!userInput) {
    cancelGame();
  } else {
    const reversedText = userInput.split("").reverse().join("");
    alert("Перевернутый текст: " + reversedText);
  }
}


//Game4

const quiz = [
  {
    question: "Какого цвета небо?",
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
  const cancelQuiz = () => {
    alert("Игра отменена.");
    correctAnswers = 0; 
    document.removeEventListener('keyup', handleKeyUp); 
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Escape') {
      cancelQuiz();
    }
  };

  document.addEventListener('keyup', handleKeyUp);

  for (let i = 0; i < quiz.length; i++) {
    const question = quiz[i];
    alert(question.question);

    const userAnswer = parseInt(prompt(question.options.join(", ")));

    if (checkAnswer(userAnswer, question.correctAnswer)) {
      alert("Правильно!");
      correctAnswers++;
    } else {
      alert("Неправильно.");
    }
  }

  alert(`Вы ответили правильно на ${correctAnswers} вопросов.`);
  document.removeEventListener('keyup', handleKeyUp); 
}

//Game 5

const choices = ['камень', 'ножницы', 'бумага'];

function playGame() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  alert('Выберите "камень", "ножницы" или "бумага":');
  let userChoice = prompt();

  // Проверка на случай, если пользователь не ввёл данные
  if (userChoice === null) {
    alert('Игра отменена.');
    return;
  }

  userChoice = userChoice.toLowerCase(); // Перемещение toLowerCase() после проверки на null

  // Проверка корректности ввода
  if (!choices.includes(userChoice)) {
    alert('Ошибка: выберите "камень", "ножницы" или "бумага".');
    return;
  }

  let result = (userChoice === computerChoice) ? 'Ничья' :
    ((userChoice === 'камень' && computerChoice === 'ножницы') ||
      (userChoice === 'ножницы' && computerChoice === 'бумага') ||
      (userChoice === 'бумага' && computerChoice === 'камень')) ? userChoice + ' победил!' : computerChoice + ' победил...';

  alert(`${userChoice} против ${computerChoice}`);
  alert(result);
}

document.addEventListener('keydown', function handleKeyDown(event) {
  if (event.key === 'Escape') {
    console.log('Игра отменена.');
  }
});


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