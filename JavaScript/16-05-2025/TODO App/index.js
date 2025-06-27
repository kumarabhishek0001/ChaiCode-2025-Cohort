const check = document.getElementById('check')

const addBtn = document.getElementById('add-button')
const todoInput = document.getElementById('todo-input')
const todoItemsContainer = document.getElementById('todo-items-container')


addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    console.log('user entered', value)

    const li = document.createElement('li')
    li.innerText = value
    console.log(li)

    
    
    const delButton = document.createElement('button')
    delButton.innerText = 'X'
    li.appendChild(delButton)

    delButton.addEventListener('click', ()=>{
        li.remove()
    })

    todoItemsContainer.appendChild(li)
    todoInput.value = ''
})