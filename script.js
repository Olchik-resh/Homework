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
      task = `Вычтите ${a} из ${b}`;
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




//task1 

// let array = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 10) {
//     console.log(array[i]);
//     break;
//   } else {
//     console.log(array[i]);
//   }
// }


//task2

// let array = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 4) {
//     console.log(i);
//     break;
//   }
// }


//task3

// let array = [1, 3, 5, 10, 20];

// console.log(array.join(' '));


//task4

// let array = [];

// for (let i = 0; i < 3; i++) {
//   array[i] = [];
//   for (let j = 0; j < 3; j++) {
//     array[i][j] = 1;
//   }
// }

// console.log(array);


//task5

// let array = [1, 1, 1];

// array.push(2, 2, 2);

// console.log(array);


//task6

// let array = [9, 8, 7, 'a', 6, 5];

// array.sort((a, b) => a - b); // Сортировка чисел по возрастанию

// // Удаление буквы 'a' из массива
// array = array.filter(item => item !== 'a');

// console.log(array);


//task7

// let array = [9, 8, 7, 6, 5];

// var userInput = prompt("Введите число:");

// if (userInput === null) {
//   alert("Пользователь не ввёл число.");
// } else {
//   var number = parseInt(userInput);

//   if (array.includes(number)) {
//     alert("Угадал");
//   } else {
//     alert("Не угадал");
//   }
// }


//task8

// let str = 'abcdef';
// let res = str.split('').reverse().join('');

// console.log(res);


//task9

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6]
//   ];
  
//   console.log([...arr[0], ...arr[1]]);


//task10

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i] + arr[i + 1]);
// }


//task11

// function squareArr(arr) {
//     return arr.map(num => num ** 2);
//   }
  
//   const squaredArray = squareArr([1, 2, 3, 4, 5]);
//   console.log(squaredArray); 


//task12

// function getWord(arr) {
//     return arr.map(word => word.length);
//   }
  
//   const words = ['apple', 'banana', 'orange'];
//   console.log(getWord(words)); 


//task13

// function NegativeNumbers(arr) {
//     return arr.filter(num => num < 0);
//   }
  
//   const numbers = [1, -2, 3, -4, 5];
//   console.log(NegativeNumbers(numbers));


//task14

// const generateArray = () => {
//     const array = [];
  
//     for (let i = 0; i < 10; i++) {
//       array.push(Math.floor(Math.random() * 11));
//     }
  
//     return array;
//   };
  
//   const evenNumbersArray = array => array.filter(num => num % 2 === 0);
  
//   const main = () => {
//     const originalArray = generateArray();
//     console.log('Исходный массив:', originalArray);
//     const evenArray = evenNumbersArray(originalArray);
//     console.log('Массив с чётными значениями:', evenArray);
//   };
  
//   main();


//task15

// const generateArray = () => {
//     const array = [];
  
//     for (let i = 0; i < 6; i++) {
//       array.push(Math.floor(Math.random() * 10) + 1);
//     }
  
//     return array;
//   };
  
//   const main = () => {
//     const originalArray = generateArray();
//     console.log('Исходный массив:', originalArray);
  
//     const sum = originalArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     const average = sum / originalArray.length;
//     console.log(`Среднее арифметическое: ${average}`);
//   };
  
//   main();