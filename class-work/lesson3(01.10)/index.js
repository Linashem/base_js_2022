// hw 
// 10
// const getDigitsSum = (num)=>{
//     const str = `${num}`;
//     let result = 0;
//     for(let i=0; i<str.length; i+=1){
//         result+= +str[i];
//     }
//     return result;
// };
// console.log(getDigitsSum(123));

// 11
// const filterYear = ()=>{
//     const result = [];
//     for(let i = 1; i<2020; i++){
//         if(getDigitsSum(i)===13){
//             result.push(i)
//         }
//     }
//     return result;
// }
// console.log(filterYear());

// const key = "firstname"

// const person = {
//     [key]: "alex",
//     sayHello: function(){
//         console.log('hi');
//     }
// }
// console.log(person);
// person.age =18;
// person['city-name'] = 'NN';
// console.log(person);

// console.log(person.firstname);
// console.log(person['city-name']);

// console.log(person.age);
// person.age= '25';
// console.log(person.age);

// delete person.age;
// console.log(person.age);

// person.sayHello()



// const myFavoriteFilm ={
//     filmName: 'название фильма',
//     date: 2000, 
//     nameOfReziser: 'имя режиссера',
//     country :'страна выпуска',
    
// }

// console.log(myFavoriteFilm);

// myFavoriteFilm.maney= 1000000;
// console.log(myFavoriteFilm);

// myFavoriteFilm.sayFilmName= function(){
//     console.log('вывожу название фильма');
// }
// myFavoriteFilm.sayFilmName();

// delete myFavoriteFilm.date;
// console.log(myFavoriteFilm);


// const num = '100';
// console.log(num.toString());

function isUppercase(str, n){
    if (n>str.length){
        return 'error'
    }
    
    if (str[n]===str[n].toUpperCase()){
        return true
    }
    else{
        return false
    }
}

console.log(isUppercase('gjHJhh', 3));

console.log(isUppercase('gjHJhh', 20));