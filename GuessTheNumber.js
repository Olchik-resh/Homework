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

guessTheNumber("Я загадал число от 1 до 100. Угадайте его!");