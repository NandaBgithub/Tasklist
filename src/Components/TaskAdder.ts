import TaskManager from "../States/TaskManager";
import TaskState from "../States/TaskState";
import Task from "./Task";

class TaskAdder{
    parent:HTMLElement;
    taskManager:TaskManager;
    taskState:TaskState;

    constructor(parent:HTMLElement, taskManager: TaskManager, taskState:TaskState){
        this.parent = parent;
        this.taskManager = taskManager;
        this.taskState = taskState;
    }

    /*
        <form>
            <label></label>
            <input></input>
            <button></button>
        </form>
    */
    render(){
        let container = document.createElement('form');
        container.className = "task-adder_form"
        
        let label = document.createElement('label');
        label.className = "task-adder_label"

        let input = document.createElement('input');
        input.className = "task-adder_input";

        let button = document.createElement('button');
        button.type = "submit";
        button.className = "task-adder_button";
        button.textContent = "Add task";

        button.addEventListener('click', (event:Event)=>{
            event.preventDefault();
            let value:string = input.value;
            let newtask = new Task(value, this.taskManager, this.taskState);
            this.taskState.addTask(newtask);
            console.log("In TaskAdder.ts " + this.taskState);
            this.taskManager.emit('taskadded', this.taskState);
        })

        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(button);
        this.parent.appendChild(container);
    };
}

export default TaskAdder;