import React, {useState} from "react";

function ToDoList(){

    const [tasks, setTask] = useState(["Take shower", "Take breakfast","Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(tasks => [...tasks, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){

        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTask(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return( <div className="to-do-list">
                <h2>To Do List</h2>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}></input>
                <button className="add-button" onClick={addTask}>Add</button>
                <ol>
                    {tasks.map((task,index) => 
                        <li key="index">
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                            <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                        </li>
                    )}
                    
                </ol>
            </div>);
}
export default ToDoList