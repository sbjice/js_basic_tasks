// С помощью цикла создать перевёрнутый вариант произвольной строки.
// Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».

function reverseString(stringValue) {
  let reversed = "";
  for (i = stringValue.length - 1; i >= 0; i--) {
    reversed += stringValue[i];
  }
  console.log(reversed);
}

reverseString("Привет, мир!");
reverseString("1");
reverseString("");
