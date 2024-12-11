//task 1

// function max (a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//         }
// }

// console.log(max(8, 4));
// console.log(max(6, 6));


//task2

// function isEven(number) {
//     if (number % 2 == 0) {
//         return 'Число четное';
//       } else {
//         return 'Число нечетное';
//       }
//     }


//task3

// function squareOfTheNumber(num) {
//     console.log(num * num);
// }
// squareOfTheNumber(5);


// function squareOfTheNumber(num) {
//     return (num * num);
// }

// const result = squareOfTheNumber(5);
// console.log(result);


//task4

// function enterTheAge(question) {
//     let age = prompt (question);
//     if (age < 0) {
//       alert('Вы ввели неправильное значение');
//     } else if (age >= 0 && age <= 12) {
//       alert('Привет, друг!');
//     } else {
//       alert('Добро пожаловать!');
//     }
// }

// enterTheAge('Сколько вам лет?');


//task5

// function Numbers(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//       return 'Одно или оба значения не являются числом';
//     } else {
//       let result = a * b;
//       return result;
//     }
//   }

//   console.log(Numbers(8, 4));
  

//Task6

// function cubeNumber(num) {
//     if (isNaN(num)) {
//       return 'Переданный параметр не является числом';
//     } else {
//       let result = num * num * num;
//       return `Число ${num} в кубе равно ${result}`;
//     }
//   }

//   for (let i = 0; i <= 10; i++) {
//     console.log(cubeNumber(i));
//   }


//Task7

// function Circle(radius) {
//     this.radius = radius;
//   }
  
//   Circle.prototype.getArea = function() {
//     return Math.PI * this.radius * this.radius;
//   };
  
//   Circle.prototype.getPerimeter = function() {
//     return 2 * Math.PI * this.radius;
//   };
  
//   let circle1 = new Circle(5);
//   console.log(`Площадь круга circle1: ${circle1.getArea()}`); 
//   console.log(`Периметр окружности circle1: ${circle1.getPerimeter()}`); 
  
//   let circle2 = new Circle(10);
//   console.log(`Площадь круга circle2: ${circle2.getArea()}`);
//   console.log(`Периметр окружности circle2: ${circle2.getPerimeter()}`); 