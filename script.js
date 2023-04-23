const input = document.getElementById('myInput');
const button = document.querySelector('.btn');
const listingArea = document.querySelector('.todo-list');


button.addEventListener('click', addTodo);
function addTodo(event){
event.preventDefault()
const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(input.value === ""){
        return null
    }
    listingArea.appendChild(todoDiv)
};
