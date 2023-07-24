// function greeting(userName = "guest") {
//   console.log(`hello ${userName}`);
// }
// greeting('lina');

function getDegree(a, b) {
  return a ** b;
}
console.log(getDegree(2, 3));

function getAverageValue(array) {
  let sum = 0;
  let average;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;
  return average;
}
console.log(getAverageValue([1, 5, 5, 9]));

let showString = (str, n) => {
  for (let i = 0; i < n; i++) {
    console.log(str);
  }
};
showString("hi", 5);

// let consonant = [Б, В, Г, Д, Ж, З, Й, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ];
let checkLetter = (letter) => {
  let vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === letter) {
      return "This letter is consonant";
    } else {
      return "This letter is consonant";
    }
  }
};
console.log(checkLetter("щ"));

let checkPalidrom = (str) => {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - (i + 1)]) {
      newArr.push(1);
    } else {
      newArr.push(2);
    }
  }
  if (getAverageValue(newArr)===1){
    return true
  }
  else {
    return false
  }
};
console.log(checkPalidrom("шалаш"));
