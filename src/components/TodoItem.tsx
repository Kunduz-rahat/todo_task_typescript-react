import { ItemTodoTypes } from "../types/data"

interface ITodoItem extends ItemTodoTypes{
	// removeCompleteTodo:(id:number)=>void;

	toggleTodo:(id:number)=>void;
// }	activeTodo:(id:number)=>void;
// 	completeTodo:(complete:true)=>void;
}
const TodoItem:React.FC<ITodoItem>=(props)=>{
	const {id, title, complete,  toggleTodo}=props
	return <div>
		<input type="checkbox" checked={complete} onChange={()=>toggleTodo(id)}/>
		{title}
		{/* <button onClick={()=>removeCompleteTodo(id)} >x</button> */}
	</div>
	

}
export {TodoItem}
