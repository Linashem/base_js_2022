//3
let calcNumber = (a, b, c) => {
  return (a - b) / c;
};
console.log(calcNumber(10, 2, 2));

//4
let weekDay = (num) => {
  let week = ["mon", "tu", "wen", "th", "fr", "sb", "sun"];
  let result = week[num - 1];
  return result;
};
console.log(weekDay(6));

//5
let numsCompare = (num1, num2) => {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
};
console.log(numsCompare(5, 6));

//6
let numsSum = (num1, num2) => {
  if (num1 + num2 > 10) {
    return true;
  } else {
    return false;
  }
};
console.log(numsSum(5, 11));

//7
let negativCheck = (num) => {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
};
console.log(negativCheck(5));

//8
let isNumberInRange = (num) => {
  if (num > 0 && num < 10) {
    return true;
  } else {
    return false;
  }
};
console.log(isNumberInRange(-26));

//9
let rangeInArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(rangeInArray([1, 2, -5, 20, 8, 100]));

// //10
let getDigitsSum = (digit) => {
  digit = String(digit);
  let sum = 0;
  for (let i = 0; i < digit.length; i++) {
    let num = Number(digit[i]);
    sum = sum + num;
  }
  return sum;
};
console.log(getDigitsSum(556));

// //11
// let findNumber = (num) => {
//   let start = 0;
//   let finish = 2023;
//   for (let i = start; i <= finish; i++) {
//     if (getDigitsSum(i) === num) {
//       console.log(`this ${i} year = 13`);
//     }
//   }
// };
// findNumber(13);

//12
let isEven = (even) => {
  if (even % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(8));

//13
let evenArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(evenArr([2, 5, 8, 22, 11, 374, 55]));

//14
let getDivisors = (num) => {
  let newArr = [];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      newArr.push(i);
    }
  }
  return newArr;
};
console.log(getDivisors(333));

//15
let getDigitsSum2 = (digit) => {
  digit = String(digit);
  let sum = 0;
  for (let i = 0; i < digit.length; i++) {
    let num = Number(digit[i]);
    sum = sum + num;
  }
  if (sum > 9) {
    sum = getDigitsSum(sum);
  }
  return sum;
};
console.log(getDigitsSum2(556));

//16
let checkWorld = (str) => {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    // if (str[i] == str[str.length - (i + 1)]) {
    if (str.at(i) === str.at(-(i + 1))) {
    // if (str.at(i) === str.at(~i)) {

      arr.push(1);
    } else {
      arr.push(0);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  let everege = sum / arr.length;
  if (everege < 1) {
    return false;
  } else {
    return true;
  }
};
console.log(checkWorld("k54jj5jj45hk"));
