//1 домашняя задача на сравнение массивов
const compareArr =(arr1, arr2)=> arr1.length ===arr2.length && arr1.every((e, ind) => 
    e===arr2[ind]
);
console.log(compareArr([1, 1, 5], [1, 1, 5]));


//2 копирование обьекта
const user = {name:'alex'};
const user2 = Object.assign({}, user, {favoriteColor: 'red', city:'London'});

user.age = '18';
user2.name = 'ivan';
console.log(user);
console.log(user2);


//3 оператор расширения (тоже копирование) spread
const array1 = [1, 2, 3];
const array2 = [...array1];
array1.push(4);

console.log(array1);
console.log(array2);


//4 копирование объектов с вложенными объектами

//  const user = {name:'alex', age: '18'};
const user3 = JSON.parse(JSON.stringify(user));
console.log(user, 'vloz');
console.log(user3);


//5.1 rest
const infinitySum = (...arg)=>{
    return arg.reduce((prev, cur)=> prev+ cur,0)
}
console.log(infinitySum(1, 5, 14));


//5.2 деструктуризация 

// const user = {name:'alex', age: '18'};
const {name, ...restParams} = user;
console.log(restParams);
//т.е от name(не вкл) до конца(оставшиеся параметры)

//6  for ( … of … )
let arr = [1, 2];
	for (let variable of arr) {
		console.log(variable * 10 );
	}


//7  for ( … in … )
let obj = { a : 1, b : 2};
	for (let variable in obj) {
		console.log(obj[variable] * 10 );
	}



//Практика
//1
const obj1 ={
    a:'hello',
    b:'cat'
}

const obj2= Object.assign({version: '2'}, obj1);
console.log(obj2);
const obj3 = {version: '3', ...obj1};
console.log(obj3);
console.log(obj1);

//2
const evenSum =(...args)=> {
	let sum=0;
	for(let arg of args){
		if(arg % 2 ===0){
			 sum+=arg
			}
	}return sum
}
console.log(evenSum(8, 6, 5, 4));

//3
const arr1 = [44, 100, 2, 3, 5, 1, 55, 85];
const arr2 = [1, 2, 3, 5, 8];

const equalElems = (a, b)=> a.filter((e)=>
{for(let elem of arr2){
	if(e===elem){
		return e
	}
}}
)




// a.filter((e, ind)=> e===b.e)

// const equalElems = (a, b)=>  a.filter((e)=> e===b.includes(2))
console.log(equalElems(arr1, arr2));


