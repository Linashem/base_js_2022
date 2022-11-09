// const sumEven=(arr)=>
// arr.reduce((accum, current)=>{
//     if(current % 2 ===0 && current>0){
//     return accum+current;
//     }
//     return accum
//     } ,0)

// console.log (sumEven([2, 3, 4, -5, 7, 10, -2, 22]))

const sumEven = (arr) => arr.filter((e) => e>0 && e%2===0).reduce((prev, cur)=>prev+cur);
console.log (sumEven([-2, 3, 4, -5, 7, 10, -2, 22]))

// const arr = [-5, 2, 5, -4, 8];
// const result = arr.reduce((prev, cur)=>
// {
//     if (cur% 2 ===0 && cur>0){
//         return prev+cur
//     }
//    return prev;
//    } 
// )
// console.log(result);


// const arr = [1, 1, 2, 3, 6, 8, 3, 4, 5];
// const result = arr.filter((e)=>{
//     let res2 = [];
// for(let i =0; i<arr.length; i++){
//     res2[i]+=arr[i]
// }
// return res2
// }
// )
// console.log(result);

// function uniqeArrItem(itemArr){
//     const result = [];
//     for(let i=0; i<itemArr.length; i++){
//         if(!result.includes(itemArr[i])){
//             result.push(itemArr[i])
//         }
//     }
// return result
// }
// console.log(uniqeArrItem([1, 1, 2, 3, 6, 8, 3, 4, 5]));

 const uniqeArrItem=(arr)=> arr.filter((el, i, array)=>!array.includes(el, i+1))


console.log(uniqeArrItem([1, 1, 2, 3, 4, 5, 3, 4, 5]))