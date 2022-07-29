import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemTodoTypes } from './types/data';
import { TodoList } from './components/TodoList';

const App:React.FC = () => {
  const [value, setValue]   = useState('');
  const [todos, setTodos]   = useState<ItemTodoTypes[]>([]);
  const [filtredTodos, setFiltredTodos] = useState<ItemTodoTypes[]>([]);
  const [filter, setFilter] = useState('');

  const filterList = [
    {id: 'all', title: "All"},
    {id: 'active', title: "Active"},
    {id: 'completed', title: "Completed"},
  ];

  useEffect(() => {
    switch (filter) {
      case 'active': {
        const filtred = todos.filter(todo => !todo.complete);
        setFiltredTodos(filtred);
        break;
      }
      case 'completed': {
        const filtred = todos.filter(todo => todo.complete);
        setFiltredTodos(filtred);
        break;
      }
      default:
        setFiltredTodos(todos);
    }

  }, [filter, todos]);

  /**
   * Add new todo
   */
  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false
      }]);
      setValue('');
    }
  }

 
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setValue(e.target.value)
  }

  /**
   *  Keydown Enter
   */
  const handleDown: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.key ==="Enter") {
      addTodo()
    }
  }

  /**
   * Remove completed todo
   */
  const removeCompleteTodo = (id: number, complete:false): void => {
    setTodos(todos.filter(todo => todo.complete!==complete))
  }

  /**
   * Toggle todo filter
   */
  const toggleTodo = (id: number): void => {
    const modifiedTodos = todos.map(todo => {
      if (todo.id !== id) 
        return todo;
      return {
        ...todo,
        complete: !todo.complete
      }
    });

    setTodos(modifiedTodos);
  }

  /**
   * On filter change
   */
  const onFilterChange = (filterId: string): void => {
    setFilter(filterId);
  }


  return (
    <section className="container">
      <div className='row'>
        <div className='col-xs-4'>
        <header className='mb-5'>
               <h1 className='text-center mt-5'>todos</h1>
               <div className='input-group mb-3'>
               <input className='form-control' value={value} onKeyDown={handleDown} onChange={handleChange}/>
               <div className='input-group-append'>
               <button className='btn btn-outline-secondary' type="button"onClick={addTodo}>Add</button>
               </div>
    
               </div>
       
      </header>
      <div >
      <TodoList 
        todos={filtredTodos}  
        toggleTodo={toggleTodo} 
      />
      </div>
     

      <footer className='d-flex justify-content-between mt-3'>
       
        <div>
        <span>
          {filtredTodos.length} items left
        </span>
        </div>
        <div>
        {filterList.map(item => {
          return <>
            <button  type='button' className='btn btn-light ms-2'
              onClick={() => onFilterChange(item.id)}
            >
              {item.title}
            </button>
          </>
        })}
        </div>
        <div>
        <button  type='button' className='btn btn-light' onClick={()=>removeCompleteTodo}>Clear completed</button>
        </div>
      
        
       
      </footer>
        </div>
     
      </div>
      
    </section>
  );
}

export default App;