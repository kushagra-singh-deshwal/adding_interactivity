import Item from "./ToDoItem";
import { useState } from "react";
import "./style.css";

function List() {
    
    const [newTask, setNewTask] = useState("");
    

    const [tasks, setTasks] = useState([
        { text: "Learn HTML", isDone: false },
        { text: "Learn CSS", isDone: false },
        { text: "Learn JavaScript", isDone: false },
        { text: "Learn React", isDone: false }
    ]);
    
  
    function addTask() {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { text: newTask, isDone: false }]);
            setNewTask(""); 
        }
    }

   
    function deleteTask(index) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

  
    function toggleDone(index) {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, isDone: !task.isDone } : task
        );
        setTasks(updatedTasks);
    }

    return (
        <div className="todo-app">
            
            
            {/* Add new task section */}
            <div className="add-task">
                <input 
                    type="text" 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                 
                    placeholder="What needs to be done?"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            
            {/* List of tasks */}
            <div className="task-list">
                {tasks.map((task, index) => (
                    <Item 
                        key={index}
                        text={task.text}
                        isDone={task.isDone}
                        onDelete={() => deleteTask(index)}
                        onToggleDone={() => toggleDone(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default List;