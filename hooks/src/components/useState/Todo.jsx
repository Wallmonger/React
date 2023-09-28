import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from './AddTodoForm';

const Todo = () => {


    const [todos, setTodos] = useState([
        {id: 1, todo: 'nothing'},
        {id: 2, todo: 'something'},
        {id: 3, todo: 'have some idea'}
    ])

    const [warning, setWarning] = useState(false)

    const myTodos = todos.map(todo => {
        return (
            <li key={todo.id} className='list-group-item'>{todo.todo}</li>
        )
    })

    const tasksString = todos.length > 1 ? "Tasks" : "Task";
    
    const addNewTodo = (newTodo) => {

        if(newTodo !== '') {
            warning && setWarning(false);

            setTodos([...todos, {
            id: uuidv4(),
            todo: newTodo
            }]);
        } else {
            setWarning(true);
        }

        
    }

    const warningMsg = warning && <div class="alert alert-primary mt-3" role="alert">It is not a real task come on</div>


    return (
        <div>
            {warningMsg}
            <h1 className='text-center'>{todos.length} {tasksString} To do</h1>

            <ul className='list-group'>
                {myTodos}
            </ul>

            <AddTodoForm addNewTodo={addNewTodo}/>
        </div>
    )
}

export default Todo;