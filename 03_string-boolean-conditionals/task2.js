function checkNameAndSurname(name, surname) {
  const newName = name.substr(0,1).toUpperCase() + name.substr(1,name.length).toLowerCase();
  const newSurname = surname.substr(0,1).toUpperCase() + surname.substr(1,surname.length).toLowerCase();
  console.log(`${newName} ${newSurname}`);
  console.log(newName === name ? 'Имя осталось без изменений': 'Имя было преобразовано');
  console.log(newSurname === surname ? 'Фамилия осталась без изменений': 'Фамилия была преобразована');
  console.log('');
}

checkNameAndSurname("Aaaaa", "Bbbbb");
checkNameAndSurname("aaaaa", "bbbbb");
checkNameAndSurname("aA", "bB");
checkNameAndSurname("AA", "BB");
checkNameAndSurname("AA", "Bb");
checkNameAndSurname("AA", "bb");
checkNameAndSurname("Aa", "bB");
