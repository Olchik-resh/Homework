let password = 'пароль';
let userPassword = prompt("Введите пароль");
if (userPassword === password) {
    alert("Пароль введен верно");
  } else {
    alert("Пароль введен неправильно");
  }


//task2

let c = 2;

if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//task3 

let d = 150;
let e = 25;

if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//task4 

let a = '2';
let b = '3';

alert( Namber(a) + Namber(b) );

//task5

let monthNumber = 12;

switch (monthNumber) {
  case 1:
    console.log("Зима");
    break;
  case 2:
    console.log("Зима");
    break;
  case 3:
    console.log("Весна");
    break;
  case 4:
    console.log("Весна");
    break;
  case 5:
    console.log("Весна");
    break;
  case 6:
    console.log("Лето");
    break;
  case 7:
    console.log("Лето");
    break;
  case 8:
    console.log("Осень");
    break;
  case 9:
    console.log("Осень");
    break;
  case 10:
    console.log("Осень");
    break;
  case 11:
    console.log("Зима");
    break;
  default:
    if (monthNumber > 13) {
      console.log("Некорректный ввод данных");
    }
}

