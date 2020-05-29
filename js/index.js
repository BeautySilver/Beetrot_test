const newToDo = document.querySelector('#new-todo');
const addToDoBtn = document.querySelector('#add-todo');
const todoList = document.querySelector('#todo-list');

addToDoBtn.addEventListener('click', addNewToDo);

todoList.addEventListener('click', (event) =>{
     const target = event.target;
     if(target.classList.contains('todo-item-remove-btn')){
         target.parentElement.remove()
     }

});

newToDo.addEventListener('keydown', (event)=>{
    if(event.key ==='Enter'){
        addNewToDo()
    }
});

function addNewToDo() {
    if(newToDo.value){
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML= `
       <input type="checkbox" id="todo-item-checkbox-${Date.now()}" class="todo-item-checkbox">
       <label for="todo-item-checkbox-${Date.now()}" class="todo-item-label"><span></span>${newToDo.value}</label>
       <button class="todo-item-remove-btn"></button>
        `;
        todoList.appendChild(todoItem);
        newToDo.value = ''
    }
}
