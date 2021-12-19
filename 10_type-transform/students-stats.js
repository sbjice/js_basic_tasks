(() => {
  // Конфигурирование и возврат контейнера
  function createContainer(selector) {
    const container = selector;
    container.classList.add('mt-5', 'mb-5', 'p-1', 'bg-light', 'border', 'border-primary', 'rounded', 'align-items-center', 'justify-content-center', 'd-flex', 'flex-column');
    return container;
  }
  // Создание и возврат заголовка страницы
  function createTitle(title) {
    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    titleElement.classList.add('align-items-center', 'justify-content-center', 'd-flex', 'mb-3');
    return titleElement;
  }
  // Создание вормы для ввода данных о студентах
  function createForm() {
    const studentForm = document.createElement('form');
    studentForm.classList.add('mb-5', 'row');
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-group', 'p-5', 'border', 'border-primary', 'rounded', 'mb-0');

    //Верхняя часть формы (фамилия, имя, отчество)
    const formTopDiv = document.createElement('div');
    formTopDiv.classList.add('align-items-center', 'justify-content-center', 'd-flex', 'row', 'mb-3');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('d-flex', 'flex-column', 'col-4');
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.classList.add('form-control');
    nameInput.placeholder = 'Введите имя';
    const nameSmall = document.createElement('small');
    nameSmall.classList.add('form-text');
    nameSmall.textContent = 'Поле для ввода имени';
    nameDiv.append(nameInput, nameSmall);

    const surnameDiv = document.createElement('div');
    surnameDiv.classList.add('d-flex', 'flex-column', 'col-4');
    const surnameInput = document.createElement('input');
    surnameInput.type = 'text';
    surnameInput.classList.add('form-control');
    surnameInput.placeholder = 'Введите фамилию';
    const surnameSmall = document.createElement('small');
    surnameSmall.classList.add('form-text');
    surnameSmall.textContent = 'Поле для ввода фамилии';
    surnameDiv.append(surnameInput, surnameSmall);

    const fathernameDiv = document.createElement('div');
    fathernameDiv.classList.add('d-flex', 'flex-column', 'col-4');
    const fathernameInput = document.createElement('input');
    fathernameInput.type = 'text';
    fathernameInput.classList.add('form-control');
    fathernameInput.placeholder = 'Введите отчество';
    const fathernameSmall = document.createElement('small');
    fathernameSmall.classList.add('form-text');
    fathernameSmall.textContent = 'Поле для ввода отчества';
    fathernameDiv.append(fathernameInput, fathernameSmall);

    formTopDiv.append(nameDiv, surnameDiv, fathernameDiv);

    //Средняя часть формы (факультет)
    const formMiddleDiv = document.createElement('div');
    formMiddleDiv.classList.add('align-items-top', 'justify-content-left', 'd-flex', 'flex-wrap', 'mb-3');

    const facultyInput = document.createElement('input');
    facultyInput.type = 'text';
    facultyInput.classList.add('form-control');
    const facultySmall = document.createElement('small');
    facultySmall.classList.add('form-text');
    facultySmall.textContent = 'Поле для ввода названия факультета';

    formMiddleDiv.append(facultyInput, facultySmall);

    //Нижняя часть формы (дата рождения, год начала обучения, кнопка добавления студента)
    const formBottomDiv = document.createElement('div');
    formBottomDiv.classList.add('align-items-top', 'justify-content-center', 'd-flex', 'row');

    const birthDateDiv = document.createElement('div');
    birthDateDiv.classList.add('d-flex', 'flex-column', 'col-4');
    const birthDateInput = document.createElement('input');
    birthDateInput.type = 'date';
    birthDateInput.classList.add('form-control');
    const birthDateSmall = document.createElement('small');
    birthDateSmall.classList.add('form-text');
    birthDateSmall.textContent = 'Поле для ввода даты рождения';
    birthDateDiv.append(birthDateInput, birthDateSmall);

    const learnStartDiv = document.createElement('div');
    learnStartDiv.classList.add('d-flex', 'flex-column', 'col-4');
    const learnStartInput = document.createElement('input');
    learnStartInput.type = 'number';
    learnStartInput.max = 2099;
    learnStartInput.min = 1900;
    learnStartInput.step = 1;
    learnStartInput.classList.add('form-control');
    const learnStartSmall = document.createElement('small');
    learnStartSmall.classList.add('form-text');
    learnStartSmall.textContent = 'Поле для ввода года начала обучения';
    learnStartDiv.append(learnStartInput, learnStartSmall);

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('d-flex', 'flex-column', 'col-4');
    const btnInput = document.createElement('input');
    btnInput.type = 'submit';
    btnInput.value = 'Добавить студента';
    btnInput.classList.add('form-control', 'btn', 'btn-primary');
    btnDiv.append(btnInput);

    formBottomDiv.append(birthDateDiv, learnStartDiv, btnDiv);

    formDiv.append(formTopDiv, formMiddleDiv, formBottomDiv);
    studentForm.append(formDiv);
    // return form;
    return {
      nameInput,
      surnameInput,
      fathernameInput,
      facultyInput,
      birthDateInput,
      learnStartInput,
      btnInput,

      nameSmall,
      surnameSmall,
      fathernameSmall,
      facultySmall,
      birthDateSmall,
      learnStartSmall,

      studentForm
    };
  }
  // Создание таблицы, в которую будут добавляться данные о студентах
  function createDataTable() {
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('border', 'border-primary', 'rounded', 'mb-0', 'pb-5', 'd-flex', 'align-items-center', 'justify-content-center', 'flex-column');

    // Фильтры таблицы
    const filtersDiv = document.createElement('div');
    filtersDiv.classList.add('d-flex', 'align-items-top', 'justify-content-center', 'px-5', 'pt-5', 'pb-1', 'mb-0');

    const nameFilterDiv = document.createElement('div');
    nameFilterDiv.classList.add('d-flex', 'flex-column', 'col-3', 'p-0');
    const nameFilterInput = document.createElement('input');
    nameFilterInput.type = 'text';
    nameFilterInput.classList.add('form-control');
    nameFilterInput.placeholder = 'ФИО';
    const nameFilterSmall = document.createElement('small');
    nameFilterSmall.classList.add('form-text', 'flex-wrap');
    nameFilterSmall.textContent = 'Поле фильтрации по ФИО';
    nameFilterDiv.append(nameFilterInput, nameFilterSmall);

    const facultyFilterDiv = document.createElement('div');
    facultyFilterDiv.classList.add('d-flex', 'flex-column', 'col-3', 'p-0');
    const facultyFilterInput = document.createElement('input');
    facultyFilterInput.type = 'text';
    facultyFilterInput.classList.add('form-control');
    facultyFilterInput.placeholder = 'Факультет';
    const facultyFilterSmall = document.createElement('small');
    facultyFilterSmall.classList.add('form-text', 'flex-wrap');
    facultyFilterSmall.textContent = 'Поле фильтрации по факультету';
    facultyFilterDiv.append(facultyFilterInput, facultyFilterSmall);

    const birthDateFilterDiv = document.createElement('div');
    birthDateFilterDiv.classList.add('d-flex', 'flex-column', 'col-3', 'p-0');
    const birthDateFilterInput = document.createElement('input');
    birthDateFilterInput.type = 'date';
    birthDateFilterInput.classList.add('form-control');
    birthDateFilterInput.placeholder = 'Дата рождения';
    const birthDateFilterSmall = document.createElement('small');
    birthDateFilterSmall.classList.add('form-text', 'flex-wrap');
    birthDateFilterSmall.textContent = 'Поле фильтрации по дате рождения';
    birthDateFilterDiv.append(birthDateFilterInput, birthDateFilterSmall);

    const learnStartFilterDiv = document.createElement('div');
    learnStartFilterDiv.classList.add('d-flex', 'flex-column', 'col-3', 'p-0');
    const learnStartFilterInput = document.createElement('input');
    learnStartFilterInput.type = 'number';
    learnStartFilterInput.classList.add('form-control');
    learnStartFilterInput.placeholder = 'Год поступления';
    const learnStartFilterSmall = document.createElement('small');
    learnStartFilterSmall.classList.add('form-text', 'flex-wrap');
    learnStartFilterSmall.textContent = 'Поле фильтрации по году поступления';
    learnStartFilterDiv.append(learnStartFilterInput, learnStartFilterSmall);

    filtersDiv.append(nameFilterDiv, facultyFilterDiv, birthDateFilterDiv, learnStartFilterDiv);

    // Шапка таблицы c возможность сортировки
    const dataCellsDiv = document.createElement('div');
    dataCellsDiv.classList.add('d-flex', 'align-items-top', 'justify-content-center', 'px-5', 'pt-0', 'pb-3', 'flex-column', 'w-100');

    const sortsDiv = document.createElement('div');
    sortsDiv.classList.add('d-flex', 'p-0', 'mb-2');

    const nameSortDiv = document.createElement('div');
    nameSortDiv.classList.add('form-control', 'table-primary', 'col-3', 'bg-info');
    nameSortDiv.textContent = 'ФИО';
    sortsDiv.append(nameSortDiv);

    const facultySortDiv = document.createElement('div');
    facultySortDiv.classList.add('form-control', 'table-primary', 'col-3', 'bg-info');
    facultySortDiv.textContent = 'Факультет';
    sortsDiv.append(facultySortDiv);

    const learnStartSortDiv = document.createElement('div');
    learnStartSortDiv.classList.add('form-control', 'table-primary', 'col-3', 'bg-info');
    learnStartSortDiv.textContent = 'Год поступления';
    sortsDiv.append(learnStartSortDiv);

    const learnFinishSortDiv = document.createElement('div');
    learnFinishSortDiv.classList.add('form-control', 'table-primary', 'col-3', 'bg-info');
    learnFinishSortDiv.textContent = 'Год окончания';
    sortsDiv.append(learnFinishSortDiv);

    dataCellsDiv.append(sortsDiv);

    tableDiv.append(filtersDiv, dataCellsDiv);

    return {
      tableDiv,
      filters: {
        nameFilterInput,
        facultyFilterInput,
        birthDateFilterInput,
        learnStartFilterInput,
      },
      sorts: {
        nameSortDiv,
        facultySortDiv,
        learnStartSortDiv,
        learnFinishSortDiv,
      },
      dataCellsDiv,
      filtersDiv,
      sortsDiv,
    };
  }
  // Добавление записей в таблицу
  function appendDataRows(dataTable, sortsRow, data) {
    dataTable.innerHTML = '';
    dataTable.append(sortsRow);
    if (data) {
      data.forEach((item) => {
        const dataRowDiv = document.createElement('div');
        dataRowDiv.classList.add('d-flex', 'p-0');

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('form-control', 'table-primary', 'col-3');
        nameDiv.textContent = item.fullName;
        dataRowDiv.append(nameDiv);

        const facultyDiv = document.createElement('div');
        facultyDiv.classList.add('form-control', 'table-primary', 'col-3');
        facultyDiv.textContent = item.faculty;
        dataRowDiv.append(facultyDiv);

        const birthDateDiv = document.createElement('div');
        birthDateDiv.classList.add('form-control', 'table-primary', 'col-3');
        birthDateDiv.textContent = item.learnStart;
        dataRowDiv.append(birthDateDiv);

        const learnStartDiv = document.createElement('div');
        learnStartDiv.classList.add('form-control', 'table-primary', 'col-3');
        learnStartDiv.textContent = item.learnFinish;
        dataRowDiv.append(learnStartDiv);

        dataTable.append(dataRowDiv);
      });
    }
  }

  function configSort(element, propName) {
    return {
      element,
      'sortState': '',
      propName,
    }
  }

  function configAllSorts(
    dataCellsDiv, sortsDiv,
    appendFunction
    ) {
    let sortableFields = [];
    sorts.forEach((currentValue, index, arr) => {
      currentValue.element.addEventListener('click',(e)=>{
        let studentsData = JSON.parse(window.localStorage.getItem('studentsData'));

        if (currentValue.sortState === '') {
          currentValue.sortState = '+'; // ascending
          e.target.classList.remove('bg-info');
          e.target.classList.add('bg-success');
        } else if (currentValue.sortState === '+') {
          currentValue.sortState = '-'; // descending
          e.target.classList.remove('bg-success');
          e.target.classList.add('bg-warning');
        } else if (currentValue.sortState === '-') {
          currentValue.sortState = ''; //no sort
          e.target.classList.remove('bg-warning');
          e.target.classList.add('bg-info');
        }
        sortableFields = [];
        arr.forEach((obj) => {
          if(obj.sortState) {
            sortableFields.push(obj.sortState+obj.propName);
          }
        });
        console.log(sortableFields);
        let arrayToSort = studentsData.splice(0);
        let sortedArray = arrayToSort.sort(fieldSorter(sortableFields))
        if(sortableFields){
          appendFunction(dataCellsDiv, sortsDiv, sortedArray);
        } else {
          appendFunction(dataCellsDiv, sortsDiv, studentsData);
        }
      });
    });
  }

  function configForm(form, studentsData) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // let studentsData = JSON.parse(window.localStorage.getItem('studentsData'));
      studentsData.push({
        name: form.nameInput.value,
        surname: form.surnameInput.value,
        fathername: form.fathernameInput.value,
        faculty: form.facultyInput.value,
        birthDate: form.birthDateInput.value,
        learnStart: parseInt(form.learnStartInput.value),
        learnFinish: parseInt(form.learnStartInput.value) + 4,

        fullName: form.nameInput.value + ' ' + form.surnameInput.value + ' ' + form.fathernameInput.value,
        age: '20 лет',
        studyYears: '2019-2023',
        grade: '2 курс',
      });

      window.localStorage.setItem('studentsData', JSON.stringify(studentsData));
      appendDataRows(table.dataCellsDiv, table.sortsDiv, studentsData);
    });
  }

  //Доработать
  const fieldSorter = (fields) => (a, b) => fields.map(o => {
    // Зеленый - по возрастанию
    // Желтый - по убыванию
    // Лазурный - без сортировки
    let dir = 0;
    if (o[0] === '+') {
      dir = 1;
      o = o.substring(1);
    }
    if (o[0] === '-') {
      dir = -1;
      o = o.substring(1);
    }
    return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
  }).reduce((p, n) => p ? p : n, 0);

  const studentsData = [{
    'fullName': 'a b c',
    'faculty': 'a',
    'birthDate': '31.12.2000',
    'age': '20 лет',
    'studyYears': '2019-2023',
    'learnStart': 2016,
    'learnFinish': 2020,
    'grade': '2 курс',
  }, {
    'fullName': 'ab b c',
    'faculty': 'a',
    'birthDate': '31.12.2000',
    'age': '20 лет',
    'studyYears': '2019-2023',
    'learnStart': 2017,
    'learnFinish': 2021,
    'grade': '2 курс',
  }, {
    'fullName': 'a bb c',
    'faculty': 'b',
    'birthDate': '31.12.2000',
    'age': '20 лет',
    'studyYears': '2019-2023',
    'learnStart': 2015,
    'learnFinish': 2019,
    'grade': '2 курс',
  }, {
    'fullName': 'a b c',
    'faculty': 'z',
    'birthDate': '31.12.2000',
    'age': '20 лет',
    'studyYears': '2019-2023',
    'learnStart': 2018,
    'learnFinish': 2022,
    'grade': '2 курс',
  }];
  const sorts = [];

  function getData (data){
    let sData = data;
    return () => {
      return sData;
    }
  }

  // Основная функция для работы приложения
  function startApp(selector, title) {
    const container = createContainer(selector);
    const form = createForm();
    const table = createDataTable();
    container.append(createTitle(title));
    container.append(form.studentForm);
    container.append(table.tableDiv);
    // getStudentsData = getData(studentsData);

    window.localStorage.setItem('studentsData', JSON.stringify(studentsData));

    appendDataRows(table.dataCellsDiv, table.sortsDiv, studentsData);

    configForm(form.studentForm, studentsData);

    let nameSort = configSort(table.sorts.nameSortDiv, 'fullName');
    let facultySort = configSort(table.sorts.facultySortDiv, 'faculty');
    let learnStartSort = configSort(table.sorts.learnStartSortDiv, 'learnStart',);
    let learnFinishSort = configSort(table.sorts.learnFinishSortDiv, 'learnFinish');
    sorts.push(nameSort,facultySort,learnStartSort,learnFinishSort);

    configAllSorts(table.dataCellsDiv, table.sortsDiv, appendDataRows);
  }

  //Реализовать сортировку - сделано
  // Написать функцию конфигурирования фильтров и сортировщиков - сделано
  //Разобраться как работать с датами
  //Написать функцию валидации данных формы
  //Написать обработку данных о студенте после ввода данных и между вставкой их в таблицу
  //Написать функцию сортировки данных по данным с фильтров и сортировщиков, написать универсальный сортировщик для комбинации условий

  window.startApp = startApp;
  window.getData = getData;
})();
