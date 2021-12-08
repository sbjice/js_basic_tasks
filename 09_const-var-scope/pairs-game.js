(() => {

  function createTitle(title = 'Pairs Game') {
    const appTtile = document.createElement('h1');
    appTtile.classList.add('d-flex', 'align-items-center', 'justify-content-center')
    appTtile.textContent = title;
    return appTtile;
  }

  function getGridLength() {
    let gridLength;
    // do {
    //   gridLength = parseInt(prompt('Enter even number between 2 and 10: '));
    // } while (!gridLength || ((gridLength % 2) != 0));
    gridLength = parseInt(prompt('Enter even number between 2 and 10: '));
    if(!gridLength || ((gridLength % 2) != 0)) gridLength = 4;
    return gridLength;
  }

  function setUpContainer(container) {
    container.classList.add('d-flex', 'flex-column', 'align-items-center', 'justify-content-center');
    return container;
  }

  //Возвращает массив с парами чисел, каждое из которых больше 0
  function generatePairs(fieldLength = 4) {
    if (fieldLength < 1 || fieldLength % 2 > 0) return [];
    let pairsArray = [];
    for (let i = 0; i < (fieldLength * fieldLength) / 2; i++) {
      pairsArray.push(i + 1, i + 1);
    }
    return pairsArray;
  }

  //Перемешивает переданный массив
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createGrid(container, gridLength = 4, styles) {
    let cells = [];
    for (let currentRow = 0; currentRow < gridLength; currentRow++) {
      let row = document.createElement('div');
      row.classList.add('row', 'mw-100');
      row.style.minHeight = '100px';
      for (let currentColumn = 0; currentColumn < gridLength; currentColumn++) {
        let column = document.createElement('div');
        column.classList.add(...styles);
        if (currentColumn === gridLength - 1) {
          if (column.classList.contains('mr-1')) column.classList.remove('mr-1');
        }
        column.style.minWidth = '100px';
        cells.push(column);
        row.append(column);
      }
      container.append(row);
    }
    return cells;
  }

  function combineCellsWithValues(cells, values) {
    if (!cells || values && cells.length !== values.length) return;
    let filledCellsArray = [];
    cells.forEach((element, index) => {
      filledCellsArray.push({
        element,
        'value': values[index],
        'disabled': false,
        'opened': false,
      })
    });
    return filledCellsArray;
  }

  function changeCellState(cell) {
    cell.element.classList.toggle('bg-primary');
    cell.element.classList.toggle('bg-warning');
    cell.opened = !cell.opened;
    cell.opened ? cell.element.textContent = cell.value : cell.element.textContent = "";
  };

  function startGame(containerSelector, titleString = 'Pairs Game'){
    const container = setUpContainer(containerSelector);
    const gridLength = getGridLength();
    const title = createTitle(titleString);
    container.append(title);
    const shuffledPairs = shuffle(generatePairs(gridLength));
    let cells = createGrid(container, gridLength, ['col-auto', 'bg-primary', 'mr-1', 'mb-1', 'border', 'border-primary', 'rounded-circle', 'align-items-center', 'justify-content-center', 'd-flex']);
    let combinedCells = combineCellsWithValues(cells, shuffledPairs);
    let timerID = null;
    combinedCells.forEach(cell => {
      cell.element.addEventListener('click', (e) => {
        if(!cell.disabled) changeCellState(cell);
        for (item of combinedCells) {
          if (item!==cell && item.value === cell.value && item.opened && cell.opened && !cell.disabled && !item.disabled) {
            item.disabled = true;
            cell.disabled = true;
            item.element.classList.remove('bg-primary', 'bg-warning');
            cell.element.classList.remove('bg-primary', 'bg-warning');
            item.element.classList.add('bg-success');
            cell.element.classList.add('bg-success');
          }
          else if (item!==cell && item.value !== cell.value && item.opened && cell.opened && !cell.disabled && !item.disabled){
            setTimeout(()=>{
              changeCellState(cell);
              changeCellState(item);
            },300);
            break;
          }
        }
        if(combinedCells.every(cell => cell.disabled)) {
          clearTimeout(timerID);
          alert('You Won!');
        }
      })

    });

    timerID = setTimeout(()=>{
      combinedCells.forEach(cell=>{
        cell.element.textContent = cell.value;
        cell.element.classList.remove('bg-primary', 'bg-warning', 'bg-success');
        cell.element.classList.add('bg-danger');
        cell.disabled = true;
      });
      alert("You Lose!");
    }, 60000);
  }

  /*
    дописать функцию проверок ячеек
    если ячейка нажата, показать цифру и сменить bg-primary на bg-yellow
    если нажата еще одна ячейка и у 2 нажатых ячеек не совпадают цифры, показать цифры на 3 секунды таймером, скрыть цифры, вернуть обеим ячейкам bg-primary
    если цифры совпадают, оставляем цифры, делаем обе ячейки bg-success
    когда открыты все ячейки выводим сообщение внизу страницы
  */
  window.startGame = startGame;
})();
