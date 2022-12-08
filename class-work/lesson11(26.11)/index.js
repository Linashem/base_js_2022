// // console.log("script init");

// const addButton = document.getElementById('add_button');
// console.log(addButton);

// addButton.textContent='Создать новый элемент'

// const buttonCol = document.getElementsByTagName("button");
// console.log(buttonCol);

// const listItem = document.querySelector('li + .active');

// const listItems = document.querySelectorAll('.list_item');
// console.log(listItem, listItems );

// const header = document.querySelector('header');
// header.innerHTML= '<h3>New title</h3>'
// console.log(header.innerHTML);

// const footer = document.querySelector('footer');
// footer.outerHTML= '<div class="footer"> <p> HELLO FOOTER</p></div>'
// console.log(footer.outerHTML);

//Стили
// const addButton = document.getElementById('add_button');
// addButton.style.color= 'red';
// addButton.style.width ='400px';

//Добавление класса
// const list = document.querySelector('ul');
// list.classList.add('active');
// console.log(list.className);

//Добавление элемента
// const newListItem = document.createElement('li');
// newListItem.className= 'list_item';
// newListItem.textContent='New element';
// console.log(newListItem);

// const list = document.querySelector('ul');
// list.append(newListItem)

//Функция создания элемента
function createElem(name, classElem, text) {
    let tegName =document.createElement(name);
    tegName.className=classElem;
    tegName.textContent =text;
    return tegName
}
// let content= document.querySelector('.content')
// const hhh= createElem('p', 'p_class', 'work please');
// content.append(hhh);
let  appElem =(parent, elem)=>{
let parentName = document.querySelector(parent);
parentName.append(elem)
}
appElem('.content', createElem('p', 'p_class', 'work please'))


const themeButtom = document.getElementById("theme_button");
// const first = function () {
//     console.log('Hello');
// }
// const second = function () {
//     console.log('bye');
// }

// themeButtom.addEventListener('click', first);
// themeButtom.addEventListener('click', second);

// const themeToggle = function () {
//   const body = document.body;
//   body.classList.toggle("light_theme");
//   if (body.classList.contains("light_theme")) {
//     this.textContent = "Темная тема";
//   }
//   else{ this.textContent='Светлая тема'}

 
// };
// themeButtom.addEventListener("click", themeToggle);

// let content= document.querySelector('.content');
// content.addEventListener('click',()=>console.log(content));

// const list = document.querySelector('.list');
// list.addEventListener('click',()=>console.log(list));

// const listItems = document.querySelectorAll('.list_item');
// for (let item of listItems){
//     item.addEventListener('click',()=>console.log(item));

// }