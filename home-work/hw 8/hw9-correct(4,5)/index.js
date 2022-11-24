//1 Что выведет функция?
function f() {
  alert(this);
}

let user44 = {
  g: f.bind(null),
};

user44.g();
//window



//2 Можем ли мы изменить this дополнительным связыванием?
function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();
//нет



//3 В свойство функции записано значение. Изменится ли оно после применения bind?
function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test);
//undefined



//4 Вызов askPassword() в приведённом ниже коде должен проверить пароль и
//затем вызвать user.loginOk/loginFail в зависимости от ответа.
//Однако, его вызов приводит к ошибке. Почему?

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user1 = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

// askPassword(user1.loginOk, user1.loginFail);


askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1))

// ответ из учебника
//askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1));



//5 Объект user был изменён.
// Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
//Что нужно передать в вызов функции askPassword в коде ниже,
// чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

// askPassword(?, ?);
askPassword(user.login.bind(user, true), user.login.bind(user, false))





//6 Напишите в указанном месте конструкцию с методом bind() так, 
//чтобы this внутри функции func всегда указывал на value.
//Eсть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem.
var elem = { value: "Привет" };

function func(surname, name) {
  alert(this.value + ", " + surname + " " + name);
}

 func.bind(elem, "Иванов", "Иван")();
 func.bind(elem, "Петров", "Петр")()
//Тут напишите конструкцию с bind()

//func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
//func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'
