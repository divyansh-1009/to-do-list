function ToDoList(){
    function addTask(){

    }
    function removeTask(){

    }
    return (<>
    <div><h1 className="heading">TO DO LIST</h1></div>
    <div className="container">
    <input className="input" type="text" placeholder="Enter your new task...."></input>
    <button className="addButton" onClick={addTask}>Add Task</button>
    </div>
    </>)
}
export default ToDoList;