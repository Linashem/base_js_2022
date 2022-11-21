// console.log(this);

// function test() {
//     console.log(this);
// }
// test()

// function example() {console.log(this);}
// const testObject = {
// testMethod: example,
// }
// testObject.testMethod();

const persona = {
  name: "Alex",
  age: "18",
  getName: function () {
    console.log(this.name);
  },
};
persona.getName();

//call apply bind
const user1 = {
  name: "Vasya",
  surName: "Ivanov",
};
const user2 = {
  name: "Petya",
  surName: "Semenov",
};
function greeting(phrase) {
  console.log(`${this.name} ${this.surName} : ${phrase}`);
}
greeting.call(user1, "hello");

const greetUser2 = greeting.bind(user2);
greetUser2("hola");

//Практика 1
const city = {
  nameCity: "Moscow",
  population: "20",
  getNameCity: function () {
    console.log(this.nameCity);
    return this.nameCity;
  },
  getPopulation: function () {
    console.log(this.population);
    return this.getPopulation;
  },
  setAnyValue: function (key, value) {
    this[key] = value;
  },
};

city.getNameCity();
city.getPopulation();
city.setAnyValue("nameCity", "London");
city.getNameCity();
console.log(city);

//Парактика 2
const city2 = {
  nameCity: "NN",
  population: "2",
};
city.getNameCity.call(city2);
city.getPopulation.call(city2);
const bound = city.setAnyValue.bind(city2);
bound("nameCity", "Anapa");
bound("nameCountry", "Russia");
console.log(city2);
