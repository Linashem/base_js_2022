//1
// const stringArr = (arr) => {
//     let arrLen = [];
//     for (let elem of arr) {
//         arrLen.push(elem.length)
//     }
//     return arrLen
// }
// console.log(stringArr(['hi', 'hello', 'hola']));


//1
const stringArr = (arr) => arr.map((e) => e.length);
console.log(stringArr(['hi', 'hello', 'hola']));


//2
const currentSum =(numbers)=>{
  let result = [];
  numbers.reduce((sum, current, i)=> {
    return  result[i] = sum + current;
  }, 0);
  return result
}
console.log(currentSum([2, 3, 5, 7, 11, 13, 17, 19]));


//3
const currentSums = (numbers) => {
  const seven = 7;
  let newArr = [];
  for (let i of numbers) {
    let digit = seven - numbers[i]
    if (numbers.includes(digit, i + 1)) {
      newArr.push(`(${digit} : ${numbers[i]})`);
    }
  }
  return newArr
}
console.log(currentSums([1, 2, 7, 6, 0, 5, 4, 10, 18, 3]));


//4
const firstLetterArr = (str) => {
  let newArr = str.split(' ');
  let result = newArr.map((el) => el[0])
  return result
}
console.log(firstLetterArr('Привет Риччи, как дела?'));


//5
const threeTokenArr = (str) => {
  let newArr = str.split('');
  let result = newArr.map((el, ind, arr) => {
    if (ind === 0) {
      return `${el}${arr[ind + 1]}`
    }
    else if (ind !== arr.length - 1) {
      return `${arr[ind - 1]}${el}${arr[ind + 1]}`
    }
    else {
      return `${arr[ind - 1]}${el}`
    }
  }
  );
  return result
}
console.log(threeTokenArr('Стеша хорошая'));


//6 
const orderArr = (arr) => arr.sort((a, b) => b - a);
console.log(orderArr([55, 2, 5, 12, 3, 1, 77]));


//7
const compareArrs = (arr1, arr2, arr3) => {
  let getConcat = arr1.concat(arr2, arr3).sort((a, b) => b - a);
  let newArr = " ";
  for (let elem of getConcat) {
    newArr = newArr + ' ' + elem;
  };
  result = [(newArr.trim())];
  return result
}
console.log(compareArrs([4, 2], [5, 1], [3, 6]));


//8
const getSum = (arr) =>
  arr.flat().reduce((prev, cur) => prev + cur)
console.log(getSum([[1, 2, 3], [4, 5], [6]]));


//9
const getReverse = (arr) => {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result
}
console.log(getReverse([5, 7, 9, 11]));


//10
const tenArr = (arr) =>
  {
    for(let i=0; i<arr.length; i++){
      if((arr[i]+arr[i-1])>=10){
        return i+1
      }
    }
  }
console.log(tenArr([6, 4, 4, 1, 22]));


// 11
const arrayFill = (a, num) => {
  let newArr = [];
  for (let i = num; i > 0; i--) {
    newArr.push(1)
  }
  newArr.fill(a)
  return newArr
}
console.log(arrayFill('cat', 10));




