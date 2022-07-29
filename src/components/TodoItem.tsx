import { ItemTodoTypes } from "../types/data"

interface ITodoItem extends ItemTodoTypes{
   toggleTodo:(id:number)=>void;
}

const TodoItem:React.FC<ITodoItem>=(props)=>{
  const {id, title, complete,  toggleTodo}=props
  return <>
    <div>
      <label htmlFor={`todo-${id}`}>
        <input 
          type="radio" 
          id={`todo-${id}`} 
          checked={complete} 
          onChange={()=>toggleTodo(id)} 
        />
        {title}
      </label>
    
    </div>
  </>
}
export {TodoItem}
