// Научиться работать одновременно с несколькими массивами.
// Познакомиться с реальным практическим примером применения массивов и циклов в приложениях (слайдер дней календаря, планировщик и т.п.).
// Соединить знания о массивах, циклах, строках и математических операциях.


function calendar() {
  let firstDay = "вторник";
  let startDay;
  let weekDays = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
  for (day in weekDays) {
    if (firstDay === weekDays[day]) {
      startDay = parseInt(day);
      break;
    } else {
      startDay = 0;
    }
  }
  let dates = [];
  for (let i = 0; i < 31; i++) {
    dates.push(i + 1);
  }
  for (date of dates) {
    console.log(`${date} января, ${weekDays[(date+startDay-1)%7]}`);
  }
}

calendar()
