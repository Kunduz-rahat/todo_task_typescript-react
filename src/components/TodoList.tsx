import { TodoItem } from "./TodoItem"
import {ItemTodoTypes} from '../types/data'
interface TodoListProps {
	todos: ItemTodoTypes[];
	toggleTodo:(id:number)=>void;
	// removeCompleteTodo:(id:number)=>void;
	// activeTodo:(id:number)=>void;
	// completeTodo:(complete:true)=>void
}
const TodoList:React.FC<TodoListProps>=(props)=>{
	const {todos, toggleTodo}=props
	return <div>
		{
			todos.map(item=> (<TodoItem key={item.id} 
				toggleTodo={toggleTodo}
			
			
				{...item}/>))
		}
	</div>
}

export {TodoList}