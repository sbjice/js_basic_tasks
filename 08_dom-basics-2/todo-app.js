(function(){
    //создаем и возвращаем заголовок приложения
    function createAppTitle(title){
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        //возвращаем чтобы знать какой элемент засовывать в div, который был помещен на страницу
        return appTitle;
    }
    //создаем и возвращаем форму для создания дела
    function createTodoItemForm(){

        //создание элементов для формы ввода
        let form = document.createElement('form');
        let input = document.createElement('input');
        //нужен для правильной стилизации кнопки bootstrap'ом
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        //input-group нужен для стилизации формы,  mb-3 нужен для того чтобы форма не слипалась с тем что будет расположено ниже нее
        form.classList.add('input-group', 'mb-3');
        //стиль bootstrap'а, нужный для выделения элемента формы
        input.classList.add('form-control');
        //текст, который будет отображаться когда название не введено
        input.placeholder = 'Введите название нового дела';
        //спозиционирует содержащиеся в нем элементы справа от элементов для ввода
        buttonWrapper.classList.add('input-group-append');
        //стили bootstrap'а, нужные для корректного отображения кнопки
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        //кладем кнопку в обертку
        buttonWrapper.append(button);
        //кладем в форму элемент ввода и кнопку с оберткой
        form.append(input);
        form.append(buttonWrapper);
        
        //возвращаем чтобы знать какие конкретно элементы мы добавили в форму ввода
        return {
            form,
            input,
            button,
        };
    }
    //создаем и возвращаем список дел
    function createTodoList(){
        //создаем список на странице
        let list = document.createElement('ul');
        //стилизуем его bootstrap'ом
        list.classList.add('list-group');
        //возвращаем его, чтобы знать как к нему обратиться
        return list;
    }
    //код для добавления новых дел в список
    function createTodoItem(name){
        let item = document.createElement('li');
        //кнопки поместить в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        //устанавиваем стили для элемента списка, а также для размещения кнопок
        //в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,
        };

    }
    //проверка поля ввода на налаичиек в нем какого-либо значения и изменение доступности кнопки
    function checkInput(input, button){
        if(!input.value){
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
    //функция создания приложения и объединения в него всего функционала
    function createTodoApp(container, title = 'Список дел', initialList=[]){
        //создаем нужные для добавления на страницу элементы
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        //добавляем созданные элементы на страницу
        container.append(todoAppTitle);
        //из функции мы получаем объект, содержащий форму и элементы ввода внутри этой формы, 
        //но добавить на страницу нам нужно только форму
        container.append(todoItemForm.form);
        container.append(todoList);
        //проверка наличия переданных изначально заданий
        if(initialList){
            for(let item of initialList){
                let todoItem = createTodoItem(item.name);
                //проверка выполнена ли задача
                if(item.done){
                    todoItem.item.classList.add('list-group-item-success');
                }
                //добавление обработчика кнопки "Готово" на переданные задания
                todoItem.doneButton.addEventListener('click',function(e){
                    todoItem.item.classList.toggle('list-group-item-success');
                });
                //добавление обработчика кнопки "Удалить" на переданные задания
                todoItem.deleteButton.addEventListener('click',function(e){
                    if(confirm('Вы уверены?')){
                        todoItem.item.remove();
                    }
                });
                todoList.append(todoItem.item);
            }
        }
        //событие submit есть только у формы
        todoItemForm.form.addEventListener('submit', function(e){
            //отключаем поведение формы по умолчанию
            e.preventDefault();
            //если input в форме пустой - ничего не делаем
            if(!todoItemForm.input.value){
                return;
            }
            //вынесем в переменую, чтобы было удобнее обращаться
            let todoItem = createTodoItem(todoItemForm.input.value);
            //добавление обработчика на кнопку 'Готово'
            todoItem.doneButton.addEventListener('click',function(e){
                todoItem.item.classList.toggle('list-group-item-success');
            });
            //добавление обработчика на кнопку 'Удалить', удаление будет происходить после потверждения
            todoItem.deleteButton.addEventListener('click',function(e){
                if(confirm('Вы уверены?')){
                    todoItem.item.remove();
                }
            });
            //добавляем item в список дел, так как иначе добавим Object
            todoList.append(todoItem.item);
            //очищаем input формы
            todoItemForm.input.value = '';
            checkInput(todoItemForm.input, todoItemForm.button);
        });
        //добавка функции проверки ввода формы
        todoItemForm.input.addEventListener('input', function(e){
            checkInput(todoItemForm.input, todoItemForm.button);
        });
        checkInput(todoItemForm.input, todoItemForm.button);
    };

    window.createTodoApp = createTodoApp;
})();