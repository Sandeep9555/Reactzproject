import React from 'react'
import { useState } from 'react'
function Todo() {
    const [task,setTasks]=useState([]);
    const [newTask,setNewTasks]=useState("");
    const addTask=()=>{ 
        if(newTask.trim()!==''){
            setTasks([...task,{id:Date.now(),name:newTask,completed:false}])
             setNewTasks("")
        }
    }
    const changeTask=((id)=>{  
        setTasks(task.map((task)=>{
            if(task.id===id){
                task.completed=!task.completed
            }
            return task
        }))
    })

    const deleteTask=((id)=>{
        setTasks(task.filter((task)=>task.id!==id))
    })
  return (
    <>
    <h1>Todo App</h1>
    <div>
    <input type="text" value={newTask} onChange={(e)=>setNewTasks(e.target.value)}/>
    <button onClick={addTask}>Add</button>
    </div>
    <ul>
    {task.map((task) => (
    <li key={task.id}>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => changeTask(task.id)}
        />
        {task.name}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
))}
    </ul>
        
    </>
  )
}

export default Todo