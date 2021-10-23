// Танк едет по дороге, на которой могут быть противотанковые мины.Дорога должна быть представлена в виде массива roadMines из 10 boolean - элементов.Если элемент равен true, то это мина.Движение танка должно быть представлено как цикл, в котором одна итерация— продвижение танка на следующий участок дороги(следующий элемент массива).При передвижении выводить в консоль сообщение« танк переместился на $ {
//   position
// }», где position— номер ячейки + 1. Если танк попал на мину, то нужно вывести сообщение« танк повреждён», если это 1 - й взрыв, и« танк уничтожен», если это 2 - й взрыв.После 2 - го взрыва танк считается уничтоженным и прекращает движение.


function checkRoad(roadMines) {
  let minesPassed = 0;
  for (mine in roadMines) {
    console.log(`танк переместился на ${parseInt(mine)+1}`);
    if (roadMines[mine]) {
      minesPassed++;
      if (minesPassed === 1) console.log("танк повреждён");
      if (minesPassed === 2) {
        console.log("танк уничтожен");
        break;
      }
    }
  }
}

checkRoad([true, true, true, true, true, true, true, true, true, true])
// checkRoad([true, false, false, false, false, false, false, false, false, true])
// checkRoad([false, false, false, true, false, false, false, false, false, false])
// checkRoad([false, false, false, false, false, false, false, false, false, false])
