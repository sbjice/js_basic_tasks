// Напишите генератор массивов длиной count со случайными числами от n до m.
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите результат с помощью console.log.

function generator(n, m, count) {
  let min = Math.min(n, m);
  let diff = Math.abs(n - m);
  let numbers = [];
  for (let i=0; i<count; i++) {
    numbers.push(min + (Math.floor(Math.random() * diff)));
  }
  console.log(numbers);
  console.log("\n\n\n");
}

generator(0,100,100);
generator(2,5,50);
generator(100,-5,70);
generator(-3,-10,42);
