import { useState } from "react";
function ToDoList(){
    let [newTask,setNewTask]=useState("");
    let [tasks,setTasks]=useState<string[]>([]); 
    function input(task){
        setNewTask(task.target.value);
    }
    function addTask(){
        setTasks(tasks=>[...tasks,newTask]);
        setNewTask("");
    }
    function removeTask(index){
        let updatedTasks=tasks.filter((tasks,i)=>i!==index);
        setTasks(updatedTasks);
    }
    return (<>
    <div><h1 className="heading">TO DO LIST</h1></div>
    <div className="container">
    <input className="input" type="input-text" placeholder="Enter your new task...." value={newTask} onChange={input}></input>
    <button className="addButton" onClick={addTask}>Add Task</button>
    </div>
    <div className="list"><ol>
            {tasks.map((tasks,index)=>
                        <li key={index}>{tasks}
                        <button onClick={()=>removeTask(index)} className="deleteButton">Delete task</button>
                        </li>
            )}
    </ol></div>
    </>)
}
export default ToDoList;
