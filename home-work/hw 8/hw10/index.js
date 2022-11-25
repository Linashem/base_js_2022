// hw
// 1
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  getSalary() {
    return `${this.getFullName()} get ${this.rate * this.days}$ in November`;
  }
}

const firstWorker = new Worker("Kate", "Ivanova", 100, 20);
const secondWorker = new Worker("Elene", "Petrova", 150, 15);

console.log(firstWorker.getFullName());
console.log(firstWorker.getSalary());

console.log(secondWorker.getFullName());
console.log(secondWorker.getSalary());

//2
class Boss extends Worker {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }
  getSalaryBoss() {
    return `${this.getFullName()} get ${
      this.rate * this.days * this.workers
    } in November`;
  }
}
const bossAccountant = new Boss("Ivan", "Ivanov", 200, 20, 3);
console.log(bossAccountant.getSalaryBoss());





class MyString {}

var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  },
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25



class User {
  get name() {
    return this._name + "пользователь";
  }
  set name(value) {
    this._name = value;
  }
}
let user = new User();

user.name = "gujyc";

console.log(user.name);

//3
class Worker {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    //   this.rate = rate;
    //this.days = days;
  }

  get rate(){
    return this._rate
  }
  set rate(value){
    this._rate=value
  }

  get day(){
    return this._day
  }
  set day(value){
    this._day=value
  }
  
  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  getSalary() {
    return `${this.getFullName()} get ${this.rate * this.day} in November`;
  }
}
const firstWorker = new Worker("Kate", "Ivanova");
firstWorker.rate =100;
firstWorker.day=2;
console.log(firstWorker.getSalary());


//5
class Validator {
  constructor(){

  }
}
