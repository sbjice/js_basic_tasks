(function () {
  let input = document.querySelector('.textInput');
  let button = document.querySelector('.button');
  let textField = document.querySelector('.showText');
  let interval = null,
    seconds = null;

  // получение времени, заданного пользователем и отображение его в div'е
  function setSeconds() {
    seconds = Math.abs(parseInt(input.value));
    textField.textContent = seconds ? seconds : 0;
  }

  // уменьшение значения секунд и запись новго значения в текствовое поле
  function decrementSeconds() {
    if (seconds > 0) {
      seconds--;
      textField.textContent = seconds;
    } else {
      clearInterval(interval);
    }
  }

  // запуск таймера для уменьшения значения секунд каждую секунду
  function startTimer() {
    interval = setInterval(decrementSeconds, 1000);
  }

  button.addEventListener('click', function () {
    clearInterval(interval);
    setSeconds();
    startTimer();
  });

  input.addEventListener('input', function () {
    spanActiveTimer.style.display = 'none';
    clearInterval(interval);
    setSeconds();
  });
})();
