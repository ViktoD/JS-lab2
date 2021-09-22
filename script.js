const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let count = 0;
let uncheck = 0;
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


function newTodo() {
  let task = prompt("Enter task: ")
  if(task === '') return
  createAndDeleteElements(task)
}

function createAndDeleteElements(value){

  const li = document.createElement('li')
  const button = document.createElement('button')
  const input = document.createElement('input')

  input.type = 'checkbox'
  input.className="todo-checkbox"

  li.className = 'todo-container'
  li.textContent = value

  button.className = 'todo-delete'
  button.textContent = 'delete'

  li.appendChild(input)
  
  list.appendChild(li)
  li.appendChild(button)
  count++
  uncheck++

  itemCountSpan.innerHTML = count
  uncheckedCountSpan.innerHTML = uncheck
  
  button.addEventListener('click', function(){
    list.removeChild(li)
    count--
    if(input.checked === false)
    {
      uncheck--
    }
    itemCountSpan.innerHTML = count
    uncheckedCountSpan.innerHTML = uncheck
  })

  input.addEventListener('click',function(){
    if(input.checked === false){
      li.style = 'color: black '
      uncheck++
      uncheckedCountSpan.innerHTML = uncheck
    }
    else{
      li.style = 'color: green; font-size:16px; font-weight:bold'
      uncheck--
      uncheckedCountSpan.innerHTML = uncheck
    }
  })

}