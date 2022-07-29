import React, { useState } from 'react';
import { ItemTodoTypes } from './types/data';
import { TodoList } from './components/TodoList';
const App:React.FC=() =>{
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState<ItemTodoTypes[]>([])
const addTodo=()=>{
  if(value){
    setTodos([...todos, {
      id:Date.now(),
    title: value,
    complete:false
    }])
    setValue('')
  }
}
const handleChange:React.ChangeEventHandler<HTMLInputElement> =(e)=>{
  setValue(e.target.value)
}
const handleDown:React.KeyboardEventHandler<HTMLInputElement>=(e)=>{
  if(e.key ==="Enter"){
    addTodo()
  }
}
const removeCompleteTodo =(id:number, complete:false):void=>{
  setTodos(todos.filter(todo=>todo.complete!==complete))
}
const toggleTodo =(id:number):void=>{
  setTodos(todos.map(todo=>{
    if(todo.id!==id) return todo;
    return {
      ...todo,
      complete:!todo.complete
    }
  }))
}
// const activeTodo=(id:number, complete:boolean):void=>{
// setTodos(todos.filter(todo=> ))
// }
// const activeTodo=(id:number):void{}
// const completeTodo=(complete:true):void{}
  return (
    <div>
<div>
    <input value={value} onKeyDown={handleDown} onChange={handleChange}/>
    <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos}  toggleTodo={toggleTodo} />
      <span>{todos.length} items left</span>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
      <button>Clear completed</button>
    </div>
    
  );
}

export default App;
