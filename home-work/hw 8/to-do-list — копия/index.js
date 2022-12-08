const createElem = (name, classElem, text) => {
  let tegName = document.createElement(name);
  tegName.className = classElem;
  tegName.textContent = text;
  return tegName;
};

const body = document.querySelector("body");

const wrap = createElem("div", "wrap");
body.append(wrap)

//header
let header = createElem("header", "header");
wrap.append(header);

let title = createElem("h1", "title", "My to-do list for today:");
header.append(title);

//список 
let section = createElem("section", "container");
wrap.append(section);

let list = createElem("ul", "list");
section.append(list);

const creareItem = (text) => {
  const listItem = createElem("li", "list_item");
  listItem.textContent = text;
  return listItem;
};

list.append(creareItem("first case"));
list.append(creareItem("second case"));
list.append(creareItem("third case"));

const items = document.querySelectorAll(".list_item");

for (let item of items) {
  const checkbox = createElem("button", "checkbox");
  item.prepend(checkbox);

  item.onclick = function () {
    checkbox.classList.toggle("checked");
    item.classList.toggle("done");
  };
}

//поле ввода
const addBox = createElem("div", "add_box");
section.append(addBox);

let input = createElem("input", "input");
addBox.append(input);

let button = createElem("button", "add_btn", "add");
addBox.append(button);

input.onchange = function () {
  let moreItem = creareItem(input.value);
  list.append(moreItem);
  const checkbox = createElem("button", "checkbox");
  moreItem.prepend(checkbox);
  input.value = "";

  moreItem.onclick = function () {
    checkbox.classList.toggle("checked");
    moreItem.classList.toggle("done");
  };
};
