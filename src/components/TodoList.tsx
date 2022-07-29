import { TodoItem } from "./TodoItem"
import {ItemTodoTypes} from '../types/data'
interface TodoListProps {
	todos: ItemTodoTypes[];
	toggleTodo:(id:number)=>void;
	}
const TodoList:React.FC<TodoListProps>=(props)=>{
	const {todos, toggleTodo}=props
	return <div >
		<ul className="list-group">
		{
			todos.map(item=> (
			<li className="list-group-item"><TodoItem key={item.id} 
			toggleTodo={toggleTodo}
		
		
			{...item}/></li>))
		}
		</ul>
		
	</div>
}

export {TodoList}