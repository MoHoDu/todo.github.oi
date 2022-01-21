const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];
// Json.stringify(array or js code): string으로 바꿔줌

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // stringify: array --> string
    // parse: string --> array
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // li.id: string/toDos.id: number
    saveToDo();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    // html요소의 id를 newToDo의 id로 대체
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    // value를 저장한 뒤에 원래 변수를 바꿔도 newToDo는 그대로
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
        // Date.now(): 초마다 랜덤 값처럼 나옴 --> id
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // toDos에 전에 저장했던 값들 복구
    // parsedToDos.forEach(sayHello);
    // .foreach(func): 각 요소에 대해 function
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    // 이런 방식도 가능 (arrow function)
    parsedToDos.forEach(paintToDo);
}

// [].filter(filterFunc)
// filterFunc: item => item < 2도 가능 
// --> filterFunc(item1)... (item2)...
// if true --> keep that item
// else --> eleminate that item
// and give new array