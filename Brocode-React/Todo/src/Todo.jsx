import React, { useState } from 'react'


const Todo = () => {
    const [tasks, setTasks] = useState(["Take a shower", "Eat dinner", "wash bike"]);
    const [newTask, setNewTasks] = useState("");

    function handleInputchange(){

    }
    function  addTasks(){

    }
    function deleteTasks(){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }

  return (
    <div className="to-do-list">
        <h1>Todo List</h1>
    
        <div className='inputNadd-container'>
            <input 
            type="text" 
            placeholder='Enter Your Todo'
            value={newTask}
            onChange={handleInputchange}
            />

            <button className='add-button'>
                Add
            </button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button 
                        className='delete-button'
                        onClick={()=>deleteTasks(index)}
                    >
                        Delete
                    </button>

                    <button 
                        className='move-button'
                        onClick={()=>moveTaskUp(index)}
                    >
                        ⬆
                    </button>
                    <button 
                        className='move-button'
                        onClick={()=>moveTaskDown(index)}
                    >
                        ⬇
                    </button>
                </li>
            )}
        </ol>
    </div>
  )
}

export default Todo;



