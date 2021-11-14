(function () {
  let doc = document;
  let body = doc.body;
  let input = doc.createElement('input');
  let h2 = doc.createElement('h2');
  let timeout = null;
  body.append(input);
  body.append(h2);

  // основная функция изменяющая значение в заголовке
  function updateValue() {
    h2.textContent = input.value;
  }

  // функция перезагрузки таймера для начала работы и реакции на изменение введенного текста
  function restart() {
    clearTimeout(timeout);
    timeout = setTimeout(updateValue, 300);
  }

  input.addEventListener('input', restart);
  restart();
})();
