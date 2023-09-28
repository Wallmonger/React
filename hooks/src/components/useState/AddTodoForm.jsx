import { useState } from 'react';

const AddTodoForm = ({addNewTodo}) => {

    const [ addTodo, setAddTodo] = useState('');

    const handleTodo = (e) => {
        e.preventDefault();
        addNewTodo(addTodo);

        setAddTodo('');
    }


    return(
        <form className='mt-3' onSubmit={handleTodo}>
            <div className='card card-body'>
                <div className='form-group'>
                    <label>Add new task</label>
                    <input onChange={(e) => setAddTodo(e.target.value)} type="text" className='form-control form-control-lg' placeholder="new task" value={addTodo}/>
                    <input type="submit" className='btn btn-success mt-4 w-100' value="Send"/>
                </div>
            </div>
        </form>
    )
}

export default AddTodoForm;