// 1) Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка.
// Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками.
// Выведите результат с помощью console.log.

function square(x1, y1, x2, y2) {
  let height = Math.abs(y2 - y1);
  let width = Math.abs(x2 - x1);
  console.log(`square equals to ${height*width}`);
}
square(x1 = 2, y1 = 3, x2 = 10, y2 = 5);
square(x1 = 10, y1 = 5, x2 = 2, y2 = 3);
square(x1 = -5, y1 = 8, x2 = 10, y2 = 5);
square(x1 = 5, y1 = 8, x2 = 5, y2 = 5);
square(x1 = 8, y1 = 1, x2 = 5, y2 = 1);

// 2) Вычислите дробные части чисел a и b с точностью n.
// Выведите получившиеся числа с помощью console.log.
// Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.


function printFractions(a, b, n) {
  let aFraction = Math.floor((a % 1) * Math.pow(10, n));
  let bFraction = Math.floor((b % 1) * Math.pow(10, n));
  console.log(`${aFraction}, ${bFraction}`);
  console.log(`${aFraction>bFraction}`);
  console.log(`${aFraction<bFraction}`);
  console.log(`${aFraction>=bFraction}`);
  console.log(`${aFraction<=bFraction}`);
  console.log(`${aFraction===bFraction}`);
  console.log(`${aFraction!==bFraction}`);
}
printFractions(a = 13.123456789, b = 2.123, n = 5);
printFractions(a = 13.890123, b = 2.891564, n = 2);
printFractions(a = 13.890123, b = 2.891564, n = 3);



// 3) Написать генератор нечётных случайных чисел в диапазоне между n и m включительно.
// Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Вывести результат с помощью console.log.



function randomOdd(n, m) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  let diff = Math.abs(n - m);
  let number = (min + Math.floor(Math.random() * diff));
  if (!(number%2)) {
    if(Math.random()>=.5){
      if (number-1>=min){
        number--;
      }
      else {
        number++;
      }
    }
    else {
      if (number+1<=max){
        number++;
      }
      else {
        number--;
      }
    }
  }
  console.log(number);
}
randomOdd(-1, 1);
randomOdd(0, 100);
randomOdd(2, 5);
randomOdd(100, -5);
randomOdd(-3, -10);
