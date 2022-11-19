
//Замыкание Практика 1
let  cubeValue=(a) =>{
    return(b,c)=>{
        return a*b*c
    }
}
const first = cubeValue(10);
console.log(first(10, 10));
console.log(first(2, 5));
console.log(first(5, 7));


const second = cubeValue(4);
console.log(second(10, 10));
console.log(second(2, 5));
console.log(second(10, 10));



//Каррирование Практика 2
const cubeVal=(a,b,c)=>a*b*c;
console.log(cubeVal(1,3,3));

const cubeCarryValue=(a)=>{
    return (b)=>{
        return (c)=>{
            return a*b*c;
        }
    }
}

//Краткая версия cubeCarryValue
const cubeCarryValue2 =(a)=>(b)=>(c)=>a*b*c;


console.log(cubeCarryValue(1)(3)(3));

const twoArg =cubeCarryValue(1)(3);
console.log(twoArg(3));




//Протатипы [[Prototype]]
const russian ={
    country:'Russia',
    city:"NN",
}
const people = {
    name:'Alex',
    age:26,
    __proto__:russian
    }
console.log(people.city, people);


// Функции конструкторы
function CreateUser(userName, userAge){
    this.name =userName;
    this.age = userAge;
    this.sayHi=function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

CreateUser.prototype.sayAge = function(){
    console.log(`my age is ${this.age}`);
}

const firstUser = new CreateUser('Alex', 26);
const secondUser = new CreateUser('Tony', 24);
const firdUser = new CreateUser('Ivan', 15);

console.log(firstUser, secondUser, firdUser);
console.log(firstUser);
console.log(secondUser);
console.log(firdUser);

firdUser.sayHi()
secondUser.sayAge()


//Практика 
function CreatPostcard(nameFrom, NameTo) {
    this.from=nameFrom; 
    this.to = NameTo;
    this.show= function(){
        console.log(`This postcard from ${this.from} to ${this.to}`);
    }
}

const firstPerson = new CreatPostcard('Kate', 'Anna');
firstPerson.show();

CreatPostcard.prototype.change = function(from){
this.from =from
}

firstPerson.change('Ivan')
firstPerson.show();



class People {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

const firstPeople = new People('Alex', 'Ivanov');

console.log(firstPeople.getFullName());